<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/what-we-do', function () {
    return Inertia::render('WhatWeDo');
});

Route::get('/who-we-are', function () {
    return Inertia::render('WhoWeAre');
});

Route::get('/contact-us', function () {
    return Inertia::render('Contact');
});

Route::prefix('project')->group(function () {
    Route::get('/arraggya', function () {
        return Inertia::render('Project/Arraggya');
    });

    Route::get('/kurbani', function () {
        return Inertia::render('Project/Kurbani');
    });
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
