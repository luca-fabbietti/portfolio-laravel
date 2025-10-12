<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CareerItem extends Model
{
    protected $fillable = [
        'company',
        'role',
        'period',
        'description',
    ];
}
