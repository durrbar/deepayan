<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

class RootController extends Controller

{
    public function home()
    {
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function whatwedo()
    {
        return Inertia::render('WhatWeDo');
    }

    public function whoweare()
    {
        return Inertia::render('WhoWeAre');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}
