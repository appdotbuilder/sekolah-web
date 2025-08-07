<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Announcement;
use Inertia\Inertia;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of announcements.
     */
    public function index()
    {
        $announcements = Announcement::published()
            ->latest('published_at')
            ->paginate(12);

        $featuredAnnouncements = Announcement::published()
            ->featured()
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('announcements/index', [
            'announcements' => $announcements,
            'featuredAnnouncements' => $featuredAnnouncements,
        ]);
    }

    /**
     * Display the specified announcement.
     */
    public function show(Announcement $announcement)
    {
        // Only show published announcements to public
        if ($announcement->status !== 'published') {
            abort(404);
        }

        $relatedAnnouncements = Announcement::published()
            ->where('id', '!=', $announcement->id)
            ->latest('published_at')
            ->take(3)
            ->get();

        return Inertia::render('announcements/show', [
            'announcement' => $announcement,
            'relatedAnnouncements' => $relatedAnnouncements,
        ]);
    }
}