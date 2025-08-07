<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\AdmissionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Home page with school information
Route::get('/', [HomeController::class, 'index'])->name('home');

// School sections
Route::controller(AnnouncementController::class)->group(function () {
    Route::get('/announcements', 'index')->name('announcements.index');
    Route::get('/announcements/{announcement}', 'show')->name('announcements.show');
});

Route::controller(TeacherController::class)->group(function () {
    Route::get('/teachers', 'index')->name('teachers.index');
    Route::get('/teachers/{teacher}', 'show')->name('teachers.show');
});

Route::controller(GalleryController::class)->group(function () {
    Route::get('/gallery', 'index')->name('gallery.index');
    Route::get('/gallery/{photo}', 'show')->name('gallery.show');
});

Route::controller(AdmissionController::class)->group(function () {
    Route::get('/admissions', 'index')->name('admissions.index');
    Route::get('/admissions/{admission}', 'show')->name('admissions.show');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
