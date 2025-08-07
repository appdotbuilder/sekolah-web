<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use App\Models\Teacher;
use App\Models\GalleryPhoto;
use App\Models\Admission;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display the home page.
     */
    public function index()
    {
        $featuredAnnouncements = Announcement::published()
            ->featured()
            ->latest('published_at')
            ->take(3)
            ->get();

        $latestAnnouncements = Announcement::published()
            ->latest('published_at')
            ->take(6)
            ->get();

        $featuredPhotos = GalleryPhoto::featured()
            ->orderBy('order')
            ->take(6)
            ->get();

        $currentAdmission = Admission::active()
            ->current()
            ->first();

        $featuredTeachers = Teacher::active()
            ->inRandomOrder()
            ->take(4)
            ->get();

        return Inertia::render('welcome', [
            'featuredAnnouncements' => $featuredAnnouncements,
            'latestAnnouncements' => $latestAnnouncements,
            'featuredPhotos' => $featuredPhotos,
            'currentAdmission' => $currentAdmission,
            'featuredTeachers' => $featuredTeachers,
        ]);
    }
}