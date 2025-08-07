<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teachers', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('nip')->unique()->comment('Nomor Induk Pegawai');
            $table->string('subject')->comment('Mata pelajaran yang diajar');
            $table->text('education')->comment('Riwayat pendidikan');
            $table->text('biography')->nullable()->comment('Biografi singkat');
            $table->string('photo_url')->nullable()->comment('URL foto profil');
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->integer('teaching_experience')->default(0)->comment('Pengalaman mengajar dalam tahun');
            $table->json('specializations')->nullable()->comment('Spesialisasi atau keahlian khusus');
            $table->string('status')->default('active')->comment('Status: active, inactive, retired');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('subject');
            $table->index('status');
            $table->index('nip');
            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teachers');
    }
};