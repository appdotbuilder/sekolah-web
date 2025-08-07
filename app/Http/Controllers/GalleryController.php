<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\GalleryPhoto;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GalleryController extends Controller
{
    /**
     * Display a listing of gallery photos.
     */
    public function index(Request $request)
    {
        $category = $request->get('category', 'all');
        
        $query = GalleryPhoto::orderBy('order')->orderBy('created_at', 'desc');
        
        if ($category !== 'all') {
            $query->byCategory($category);
        }
        
        $photos = $query->paginate(16);

        $categories = [
            'all' => 'Semua Foto',
            'academic' => 'Akademik',
            'sports' => 'Olahraga',
            'events' => 'Acara',
            'facilities' => 'Fasilitas',
        ];

        $featuredPhotos = GalleryPhoto::featured()
            ->orderBy('order')
            ->take(6)
            ->get();

        return Inertia::render('gallery/index', [
            'photos' => $photos,
            'categories' => $categories,
            'currentCategory' => $category,
            'featuredPhotos' => $featuredPhotos,
        ]);
    }

    /**
     * Display the specified photo.
     */
    public function show(GalleryPhoto $photo)
    {
        $relatedPhotos = GalleryPhoto::where('id', '!=', $photo->id)
            ->byCategory($photo->category)
            ->orderBy('order')
            ->take(6)
            ->get();

        if ($relatedPhotos->count() < 6) {
            $additionalPhotos = GalleryPhoto::where('id', '!=', $photo->id)
                ->whereNotIn('id', $relatedPhotos->pluck('id'))
                ->orderBy('created_at', 'desc')
                ->take(6 - $relatedPhotos->count())
                ->get();

            $relatedPhotos = $relatedPhotos->merge($additionalPhotos);
        }

        return Inertia::render('gallery/show', [
            'photo' => $photo,
            'relatedPhotos' => $relatedPhotos,
        ]);
    }
}