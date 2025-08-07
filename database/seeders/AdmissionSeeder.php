<?php

namespace Database\Seeders;

use App\Models\Admission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdmissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admissions = [
            [
                'academic_year' => '2024/2025',
                'title' => 'Penerimaan Peserta Didik Baru 2024/2025',
                'description' => 'Sekolah kami membuka kesempatan bagi calon siswa berprestasi untuk bergabung dalam keluarga besar sekolah. Dengan fasilitas modern dan tenaga pengajar yang berkualitas, kami siap membentuk generasi penerus yang unggul.',
                'registration_start' => now()->addDays(30),
                'registration_end' => now()->addDays(90),
                'test_date' => now()->addDays(100),
                'announcement_date' => now()->addDays(110),
                'requirements' => [
                    'Fotokopi ijazah SMP yang telah dilegalisir',
                    'Fotokopi SKHUN SMP yang telah dilegalisir', 
                    'Fotokopi rapor semester 1-5 SMP',
                    'Pas foto 3x4 sebanyak 4 lembar',
                    'Fotokopi akta kelahiran',
                    'Fotokopi kartu keluarga',
                    'Surat keterangan sehat dari dokter',
                    'Surat keterangan berkelakuan baik dari sekolah asal'
                ],
                'procedures' => [
                    'Mengisi formulir pendaftaran online di website sekolah',
                    'Melengkapi berkas persyaratan',
                    'Membayar biaya pendaftaran',
                    'Mengikuti tes seleksi tertulis dan wawancara',
                    'Menunggu pengumuman hasil seleksi',
                    'Melakukan daftar ulang bagi yang diterima'
                ],
                'registration_fee' => 500000,
                'contact_info' => 'Hubungi panitia PPDB di nomor (021) 1234567 atau email ppdb@sekolah.id',
                'status' => 'active',
                'is_current' => true,
            ],
            [
                'academic_year' => '2023/2024',
                'title' => 'Penerimaan Peserta Didik Baru 2023/2024',
                'description' => 'Program penerimaan siswa baru tahun ajaran 2023/2024 telah selesai dilaksanakan.',
                'registration_start' => now()->subDays(300),
                'registration_end' => now()->subDays(240),
                'test_date' => now()->subDays(230),
                'announcement_date' => now()->subDays(220),
                'requirements' => [
                    'Fotokopi ijazah SMP yang telah dilegalisir',
                    'Fotokopi SKHUN SMP yang telah dilegalisir',
                    'Fotokopi rapor semester 1-5 SMP',
                    'Pas foto 3x4 sebanyak 4 lembar'
                ],
                'procedures' => [
                    'Mengisi formulir pendaftaran',
                    'Melengkapi berkas persyaratan', 
                    'Mengikuti tes seleksi',
                    'Menunggu pengumuman hasil'
                ],
                'registration_fee' => 450000,
                'contact_info' => 'Hubungi panitia PPDB di nomor (021) 1234567',
                'status' => 'closed',
                'is_current' => false,
            ],
        ];

        foreach ($admissions as $admission) {
            Admission::create($admission);
        }
    }
}