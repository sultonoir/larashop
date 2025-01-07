<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CheckoutController extends Controller
{
  public function index()
  {
    return Inertia::render("Checkout/Page");
  }

  public function store(Request $request)
  {
    $request->validate([
      "email" => "required|string|max:255",
    ]);

    return redirect()->route("welcome");
  }
}
