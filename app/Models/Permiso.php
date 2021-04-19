<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permiso extends Model
{
    use HasFactory;
    // removemos las tablas de created_at y update_at que vienen por defecto
    public $timestamps = false;
}
