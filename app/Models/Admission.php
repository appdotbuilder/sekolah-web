<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Admission
 *
 * @property int $id
 * @property string $academic_year
 * @property string $title
 * @property string $description
 * @property \Illuminate\Support\Carbon $registration_start
 * @property \Illuminate\Support\Carbon $registration_end
 * @property \Illuminate\Support\Carbon|null $test_date
 * @property \Illuminate\Support\Carbon|null $announcement_date
 * @property array $requirements
 * @property array $procedures
 * @property float $registration_fee
 * @property string|null $contact_info
 * @property string $status
 * @property bool $is_current
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Admission newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission query()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAcademicYear($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereAnnouncementDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereContactInfo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereIsCurrent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereProcedures($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereRegistrationEnd($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereRegistrationFee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereRegistrationStart($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereRequirements($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereTestDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereTitle($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Admission active()
 * @method static \Illuminate\Database\Eloquent\Builder|Admission current()

 * 
 * @mixin \Eloquent
 */
class Admission extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'academic_year',
        'title',
        'description',
        'registration_start',
        'registration_end',
        'test_date',
        'announcement_date',
        'requirements',
        'procedures',
        'registration_fee',
        'contact_info',
        'status',
        'is_current',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'registration_start' => 'date',
        'registration_end' => 'date',
        'test_date' => 'date',
        'announcement_date' => 'date',
        'requirements' => 'array',
        'procedures' => 'array',
        'registration_fee' => 'decimal:2',
        'is_current' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active admissions.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive($query)
    {
        return $query->where('status', 'active');
    }

    /**
     * Scope a query to only include current admissions.
     *
     * @param  \Illuminate\Database\Eloquent\Builder  $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeCurrent($query)
    {
        return $query->where('is_current', true);
    }
}