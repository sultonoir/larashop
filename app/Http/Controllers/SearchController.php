<?php

namespace App\Http\Controllers;

use App\Models\Product; // Pastikan Product model ada
use Illuminate\Http\Request;
use Cloudinary;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary as FacadesCloudinary;
use Inertia\Inertia;
use Illuminate\Pagination\LengthAwarePaginator;

class SearchController extends Controller
{
  // Method untuk menampilkan semua produk dengan pagination
  public function index()
  {
    return $this->getProducts();
  }

  // Method untuk kategori "man"
  public function man()
  {
    return $this->getProducts("men");
  }

  // Method untuk kategori "women"
  public function women()
  {
    return $this->getProducts("women");
  }

  // Method untuk pencarian produk
  public function search(Request $request)
  {
    $query = $request->input("query");
    return $this->getProducts(null, $query);
  }

  public function accessories()
  {
    return $this->getProducts("accessories");
  }

  protected function getProducts($category = null, $searchQuery = null)
  {
    $queryBuilder = Product::query();

    // Filter berdasarkan kategori jika ada
    if ($category) {
      $queryBuilder->where("category", $category);
    }

    // Filter berdasarkan pencarian nama produk atau deskripsi jika ada
    if ($searchQuery) {
      $queryBuilder->where(function ($q) use ($searchQuery) {
        $q->where("name", "like", "%" . $searchQuery . "%")->orWhere(
          "description",
          "like",
          "%" . $searchQuery . "%"
        );
      });
    }

    // Menambahkan pagination dengan 10 produk per halaman
    $products = $queryBuilder->paginate(12);

    // Jika tidak ada produk, tampilkan semua produk dengan pesan tambahan
    $message = null;
    $title = "Produk";

    if ($category) {
      $title = ucfirst($category) . " Produk";
    }

    if ($searchQuery) {
      $title = "Search results for \"" . $searchQuery . "\"";
      if ($products->isEmpty()) {
        $title = "No results found for \"" . $searchQuery . "\"";
        $products = Product::paginate(12); // Kembalikan semua produk
        $message = "You might like these products";
      }
    }

    // Kirim data ke Inertia
    return Inertia::render("Product/Page", [
      "products" => $products,
      "title" => $title,
      "message" => $message, // Kirim pesan tambahan
    ]);
  }
}
