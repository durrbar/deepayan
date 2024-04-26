<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    public function arraggya()
    {
        return Inertia::render('Project/Arraggya');
    }

    public function kurbani()
    {
        return Inertia::render('Project/Kurbani');
    }
}
