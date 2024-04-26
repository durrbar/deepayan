<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\Dashboard\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\RootController;
use Illuminate\Support\Facades\Route;

Route::name('root.')->group(function () {
    Route::controller(RootController::class)->group(function () {

        Route::get('/', 'home')->name('home');

        Route::get('/what-we-do', 'whatwedo')->name('whatWeDo');

        Route::get('/who-we-are', 'whoweare')->name('whoWeAre');

        Route::get('/contact-us', 'contact')->name('contact');
    });

    Route::prefix('project')->name('project.')->controller(ProjectController::class)->group(function () {
        Route::get('/arraggya', 'arraggya')->name('arraggya');

        Route::get('/kurbani', 'kurbani')->name('kurbani');

        Route::get('/maintenance', 'arraggya')->name('maintenance');
    });

    Route::prefix('course')->name('course.')->controller(CourseController::class)->group(function () {
        Route::get('/pre-marriage', 'preMarriage')->name('preMarriage');
        Route::get('/smart-parenting', 'smartParenting')->name('smartParenting');
        Route::get('/internship', 'internship')->name('internship');
    });
});

Route::middleware(['auth', 'verified'])->prefix('dashboard')->name('dashboard.')->group(function () {
    Route::controller(DashboardController::class)->group(function () {

        Route::get('/', 'dashboard')->name('home');
    });
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('auth')->group(function () {
    require __DIR__ . '/auth.php';
});
