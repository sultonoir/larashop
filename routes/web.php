<?php

use App\Http\Controllers\CartContoller;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\TodoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get("/", function () {
  return Inertia::render("Welcome", [
    "canLogin" => Route::has("login"),
    "canRegister" => Route::has("register"),
    "laravelVersion" => Application::VERSION,
    "phpVersion" => PHP_VERSION,
  ]);
})->name("welcome");

Route::get("/todos", [TodoController::class, "index"])->name("todos");

Route::delete("/todos/{id}", [TodoController::class, "destroy"])->name(
  "todos.destroy"
);
Route::patch("/todos/{id}/toggle", [TodoController::class, "toggle"])->name(
  "todos.toggle"
);
Route::post("/todos", [TodoController::class, "store"])->name("todos.store");

Route::get("/dashboard", function () {
  return Inertia::render("Dashboard");
})
  ->middleware(["auth", "verified"])
  ->name("dashboard");

//product
Route::group([], function () {
  Route::get("/product", [SearchController::class, "index"])->name("product");
  Route::post("/product", [ProductController::class, "store"])->name(
    "product.store"
  );

  Route::get("men", [SearchController::class, "man"])->name("men");

  // Route untuk kategori "women"
  Route::get("women", [SearchController::class, "women"])->name("women");

  Route::get("search", [SearchController::class, "search"])->name("search");

  Route::get("accessories", [SearchController::class, "accessories"])->name(
    "accessories"
  );

  Route::get("/product/{name}", [ProductController::class, "show"])->name(
    "product.show"
  );

  Route::get("/cart", [CartContoller::class, "index"])->name("cart");

  Route::get("/checkout", [CheckoutController::class, "index"])->name(
    "checkout"
  );

  Route::post("/checkout", [CheckoutController::class, "store"])->name(
    "checkout.store"
  );
});

Route::middleware("auth")->group(function () {
  Route::get("/profile", [ProfileController::class, "edit"])->name(
    "profile.edit"
  );
  Route::patch("/profile", [ProfileController::class, "update"])->name(
    "profile.update"
  );
  Route::delete("/profile", [ProfileController::class, "destroy"])->name(
    "profile.destroy"
  );
});

require __DIR__ . "/auth.php";
