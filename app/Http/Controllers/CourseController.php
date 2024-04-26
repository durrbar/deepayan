<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CourseController extends Controller
{
    public function preMarriage()
    {
        return Inertia::render('Course/PreMarriage');
    }

    public function smartParenting()
    {
        return Inertia::render('Course/SmartParenting');
    }

    public function internship()
    {
        return Inertia::render('Course/Internship');
    }
}
