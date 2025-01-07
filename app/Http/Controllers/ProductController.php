<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;
use Inertia\Inertia;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   */

  public function index()
  {
    $paginator = Product::paginate(10);

    // Ambil data sebagai array
    $productsArray = $paginator->items();

    // Modifikasi data
    $modifiedProducts = array_map(function ($product) {
      $optimizedUrl = Cloudinary::getUrl($product["image_public_id"], [
        "transformation" => [
          ["width" => 500, "height" => 500, "crop" => "fill"],
          ["fetch_format" => "auto", "quality" => "auto"],
        ],
      ]);

      return [
        "id" => $product["id"],
        "name" => $product["name"],
        "description" => $product["description"],
        "price" => $product["price"],
        "image_url" => $optimizedUrl,
      ];
    }, $productsArray);

    // Bungkus kembali ke paginator
    $customPaginator = new LengthAwarePaginator(
      collect($modifiedProducts),
      $paginator->total(),
      $paginator->perPage(),
      $paginator->currentPage(),
      ["path" => $paginator->path()]
    );

    return Inertia::render("Product/Page", ["products" => $customPaginator]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(StoreProductRequest $request)
  {
    $request->validate([
      "name" => ["required", "max:255"],
      "image" => ["required", "image", "max:2048"],
      "price" => ["required", "numeric"],
      "description" => "required",
    ]);
    $cloudinaryImage = $request->file("image")->storeOnCloudinary("products");
    $url = $cloudinaryImage->getSecurePath();
    $public_id = $cloudinaryImage->getPublicId();

    $optimizedUrl = Cloudinary::getUrl($public_id, [
      "transformation" => [
        ["width" => 500, "height" => 500, "crop" => "fill"],
        ["fetch_format" => "auto", "quality" => "auto"],
      ],
    ]);

    Product::create([
      "name" => $request->name,
      "description" => $request->description,
      "price" => $request->price,
      "image_url" => $optimizedUrl,
      "image_public_id" => $public_id,
    ]);
  }

  /**
   * Display the specified resource.
   */
  public function show($name)
  {
    // Validasi input nama produk
    $validated = Validator::make(
      ["name" => $name],
      [
        "name" => "required|string|min:1",
      ]
    );

    if ($validated->fails()) {
      return redirect()->back()->withErrors("Nama produk tidak valid.");
    }

    // Mencari produk berdasarkan nama
    $product = Product::where("name", $name)->first();

    if (!$product) {
      return redirect()
        ->back()
        ->with("error", "Produk dengan nama '$name' tidak ditemukan.");
    }

    return Inertia::render("Product/Details", ["product" => $product]);
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(Product $product)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(UpdateProductRequest $request, Product $product)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy($id)
  {
    $product = Product::find($id);

    // Jika produk tidak ditemukan, kembalikan respon 404
    if (!$product) {
      return response()->json(["message" => "Product not found"], 404);
    }

    // Hapus gambar dari Cloudinary jika ada
    if ($product->image_public_id) {
      try {
        Cloudinary::destroy($product->image_public_id);
      } catch (\Exception $e) {
        return response()->json(
          [
            "message" => "Failed to delete image from Cloudinary",
            "error" => $e->getMessage(),
          ],
          500
        );
      }
    }

    // Hapus produk dari database
    $product->delete();
  }
}
