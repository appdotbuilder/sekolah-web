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
        Schema::create('gallery_photos', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('photo_url')->comment('URL foto');
            $table->string('category')->default('general')->comment('Kategori: academic, sports, events, facilities');
            $table->date('taken_at')->nullable()->comment('Tanggal foto diambil');
            $table->boolean('is_featured')->default(false)->comment('Foto unggulan');
            $table->integer('order')->default(0)->comment('Urutan tampilan');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('category');
            $table->index('is_featured');
            $table->index(['category', 'order']);
            $table->index('taken_at');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('gallery_photos');
    }
};