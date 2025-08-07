<?php

namespace Database\Seeders;

use App\Models\Announcement;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AnnouncementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $announcements = [
            [
                'title' => 'Pembukaan Tahun Ajaran Baru 2024/2025',
                'excerpt' => 'Selamat datang di tahun ajaran baru! Mari kita mulai perjalanan pendidikan yang menginspirasi.',
                'content' => 'Dengan penuh kegembiraan, kami mengumumkan pembukaan tahun ajaran baru 2024/2025. Tahun ini akan dimulai dengan berbagai program pembelajaran inovatif dan fasilitas yang telah diperbarui untuk mendukung prestasi akademik siswa-siswi terbaik.',
                'status' => 'published',
                'is_featured' => true,
                'published_at' => now()->subDays(2),
            ],
            [
                'title' => 'Prestasi Gemilang Tim Olimpiade Matematika',
                'excerpt' => 'Tim olimpiade matematika sekolah meraih juara 1 tingkat provinsi.',
                'content' => 'Dengan bangga kami informasikan bahwa tim olimpiade matematika sekolah telah meraih juara 1 pada kompetisi tingkat provinsi. Prestasi ini merupakan hasil kerja keras dan dedikasi para siswa dan guru pembimbing.',
                'status' => 'published',
                'is_featured' => true,
                'published_at' => now()->subDays(5),
            ],
            [
                'title' => 'Penerimaan Siswa Baru Gelombang 2',
                'excerpt' => 'Masih tersedia kuota untuk calon siswa berprestasi. Daftar sekarang!',
                'content' => 'Pendaftaran siswa baru gelombang 2 telah dibuka dengan kuota terbatas. Kami mengundang calon siswa yang memiliki motivasi tinggi untuk bergabung dengan keluarga besar sekolah kami.',
                'status' => 'published',
                'is_featured' => true,
                'published_at' => now()->subDays(7),
            ],
            [
                'title' => 'Program Ekstrakurikuler Semester Genap',
                'excerpt' => 'Berbagai pilihan ekstrakurikuler menarik untuk mengembangkan bakat dan minat siswa.',
                'content' => 'Semester genap ini, kami menawarkan beragam program ekstrakurikuler yang dirancang untuk mengembangkan bakat dan minat siswa di berbagai bidang.',
                'status' => 'published',
                'is_featured' => false,
                'published_at' => now()->subDays(10),
            ],
            [
                'title' => 'Pelatihan Guru dan Tenaga Kependidikan',
                'excerpt' => 'Meningkatkan kualitas pendidikan melalui pengembangan profesional berkelanjutan.',
                'content' => 'Dalam upaya meningkatkan kualitas pendidikan, seluruh guru dan tenaga kependidikan akan mengikuti program pelatihan profesional berkelanjutan.',
                'status' => 'published',
                'is_featured' => false,
                'published_at' => now()->subDays(12),
            ],
            [
                'title' => 'Lomba Karya Ilmiah Remaja Tingkat Nasional',
                'excerpt' => 'Siswa-siswi terpilih akan mewakili sekolah dalam kompetisi bergengsi tingkat nasional.',
                'content' => 'Setelah melalui seleksi ketat, 5 siswa terpilih akan mewakili sekolah dalam Lomba Karya Ilmiah Remaja tingkat nasional yang akan diselenggarakan bulan depan.',
                'status' => 'published',
                'is_featured' => false,
                'published_at' => now()->subDays(15),
            ],
        ];

        foreach ($announcements as $announcement) {
            Announcement::create($announcement);
        }
    }
}