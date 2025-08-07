<?php

namespace Database\Seeders;

use App\Models\GalleryPhoto;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GalleryPhotoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $photos = [
            [
                'title' => 'Upacara Bendera Senin Pagi',
                'description' => 'Kegiatan upacara bendera rutin setiap hari Senin yang diikuti oleh seluruh siswa dan guru.',
                'photo_url' => 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
                'category' => 'academic',
                'taken_at' => now()->subDays(7),
                'is_featured' => true,
                'order' => 1,
            ],
            [
                'title' => 'Laboratorium IPA Modern',
                'description' => 'Fasilitas laboratorium IPA yang lengkap dengan peralatan modern untuk mendukung pembelajaran praktikum.',
                'photo_url' => 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
                'category' => 'facilities',
                'taken_at' => now()->subDays(14),
                'is_featured' => true,
                'order' => 2,
            ],
            [
                'title' => 'Kompetisi Olahraga Antar Kelas',
                'description' => 'Turnamen sepak bola antar kelas yang berlangsung meriah dan sportif.',
                'photo_url' => 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop',
                'category' => 'sports',
                'taken_at' => now()->subDays(21),
                'is_featured' => true,
                'order' => 3,
            ],
            [
                'title' => 'Festival Seni dan Budaya',
                'description' => 'Penampilan tari tradisional dalam acara festival seni dan budaya sekolah.',
                'photo_url' => 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
                'category' => 'events',
                'taken_at' => now()->subDays(30),
                'is_featured' => true,
                'order' => 4,
            ],
            [
                'title' => 'Perpustakaan Digital',
                'description' => 'Ruang perpustakaan yang nyaman dengan fasilitas digital dan koleksi buku yang lengkap.',
                'photo_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
                'category' => 'facilities',
                'taken_at' => now()->subDays(35),
                'is_featured' => true,
                'order' => 5,
            ],
            [
                'title' => 'Kelas Multimedia',
                'description' => 'Suasana pembelajaran di kelas multimedia dengan teknologi terkini.',
                'photo_url' => 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
                'category' => 'academic',
                'taken_at' => now()->subDays(42),
                'is_featured' => true,
                'order' => 6,
            ],
            [
                'title' => 'Kegiatan Ekstrakurikuler Robotika',
                'description' => 'Siswa-siswi sedang mengerjakan proyek robotika dalam kegiatan ekstrakurikuler.',
                'photo_url' => 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop',
                'category' => 'academic',
                'taken_at' => now()->subDays(49),
                'is_featured' => false,
                'order' => 7,
            ],
            [
                'title' => 'Lomba Debat Bahasa Inggris',
                'description' => 'Kompetisi debat bahasa Inggris tingkat sekolah menengah.',
                'photo_url' => 'https://images.unsplash.com/photo-1559223607-b4d0555ae227?w=800&h=600&fit=crop',
                'category' => 'events',
                'taken_at' => now()->subDays(56),
                'is_featured' => false,
                'order' => 8,
            ],
        ];

        foreach ($photos as $photo) {
            GalleryPhoto::create($photo);
        }
    }
}