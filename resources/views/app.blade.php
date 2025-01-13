<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <meta name="description"
        content="Larashop is an online fashion store offering the latest and trendy collections for men and women. Discover a variety of quality clothing, accessories, and shoes for a stylish look.">
    <meta name="keywords"
        content="fashion, online store, men's clothing, women's clothing, accessories, shoes, fashion shopping">
    <meta name="author" content="Larashop">
    <meta name="robots" content="index, follow">

    <!-- Open Graph for Social Media -->
    <meta property="og:title" content="Larashop - Online Fashion Store">
    <meta property="og:description"
        content="Larashop is an online fashion store offering the latest and trendy collections for men and women.">
    <meta property="og:url" content="{{ url()->current() }}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Larashop">

    <!-- Twitter Card for Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:creator" content="@twitterHandle">
    <meta name="twitter:title" content="Larashop - Online Fashion Store">
    <meta name="twitter:description"
        content="Larashop is an online fashion store offering the latest and trendy collections for men and women.">

    <!-- Apple Touch Icon -->
    <link rel="apple-touch-icon" href="{{ asset('favicon.ico') }}">
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}?v={{ time() }}">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
