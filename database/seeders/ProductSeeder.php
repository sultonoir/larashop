<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class ProductSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    $faker = Faker::create();
    $products = [
      [
        "name" => "Cashmere Blend Sweater",
        "price" => 299.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=705&q=80",
        "category" => "women",
        "description" =>
          "Luxurious cashmere blend sweater for a stylish and warm look.",
      ],
      [
        "name" => "Leather Crossbody Bag",
        "price" => 189.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=709&q=80",
        "category" => "accessories",
        "description" =>
          "Sleek leather crossbody bag, perfect for any occasion.",
      ],
      [
        "name" => "Wool Blend Coat",
        "price" => 459.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "women",
        "description" =>
          "Elegant wool blend coat to keep you warm and stylish.",
      ],
      [
        "name" => "Classic White Sneakers",
        "price" => 129.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        "category" => "shoes",
        "description" =>
          "Versatile white sneakers for an everyday casual look.",
      ],
      [
        "name" => "Denim Jacket",
        "price" => 199.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "category" => "men",
        "description" =>
          "Timeless denim jacket for a rugged yet fashionable look.",
      ],
      [
        "name" => "Silk Blouse",
        "price" => 159.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "women",
        "description" => "Soft and luxurious silk blouse for an elegant look.",
      ],
      [
        "name" => "Leather Wallet",
        "price" => 89.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "accessories",
        "description" =>
          "Classic leather wallet with a sleek, minimalist design.",
      ],
      [
        "name" => "Summer Dress",
        "price" => 149.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=746&q=80",
        "category" => "women",
        "description" =>
          "Light and breezy summer dress perfect for sunny days.",
      ],
      [
        "name" => "Classic Watch",
        "price" => 299.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=689&q=80",
        "category" => "accessories",
        "description" =>
          "Sleek classic watch for the modern, elegant individual.",
      ],
      [
        "name" => "Leather Boots",
        "price" => 259.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "shoes",
        "description" => "Durable and stylish leather boots for cold weather.",
      ],
      [
        "name" => "Wool Scarf",
        "price" => 79.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        "category" => "accessories",
        "description" =>
          "Cozy wool scarf to keep you warm during the cold seasons.",
      ],
      [
        "name" => "Linen Shirt",
        "price" => 129.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80",
        "category" => "men",
        "description" =>
          "Breathable and comfortable linen shirt for warm weather.",
      ],
      [
        "name" => "Designer Sunglasses",
        "price" => 199.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        "category" => "accessories",
        "description" =>
          "Stylish designer sunglasses to add a touch of luxury to your look.",
      ],
      [
        "name" => "Pleated Skirt",
        "price" => 139.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        "category" => "women",
        "description" => "Fashionable pleated skirt for a chic, feminine look.",
      ],
      [
        "name" => "Leather Belt",
        "price" => 69.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "accessories",
        "description" => "Durable leather belt that complements any outfit.",
      ],
      [
        "name" => "Cashmere Beanie",
        "price" => 89.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "category" => "accessories",
        "description" => "Soft cashmere beanie to keep you warm and stylish.",
      ],
      [
        "name" => "Silk Scarf",
        "price" => 119.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        "category" => "accessories",
        "description" =>
          "Elegant silk scarf to add a sophisticated touch to any outfit.",
      ],
      [
        "name" => "Leather Gloves",
        "price" => 99.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=711&q=80",
        "category" => "accessories",
        "description" =>
          "Soft leather gloves to keep your hands warm in style.",
      ],
      [
        "name" => "Canvas Backpack",
        "price" => 149.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "category" => "accessories",
        "description" => "Durable canvas backpack perfect for everyday use.",
      ],
      [
        "name" => "Leather Loafers",
        "price" => 229.0,
        "image_url" =>
          "https://images.unsplash.com/photo-1519482816300-1490fdf2c2bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        "category" => "shoes",
        "description" =>
          "Stylish leather loafers that offer comfort and sophistication.",
      ],
    ];

    foreach ($products as $product) {
      Product::create([
        "name" => $product["name"], // Mengakses array menggunakan index
        "price" => $product["price"], // Sesuaikan dengan field lainnya
        "image_url" => $product["image_url"],
        "category" => $product["category"],
        "description" => $product["description"],
        "image_public_id" => $faker->word . ".jpg",
      ]);
    }
  }
}
