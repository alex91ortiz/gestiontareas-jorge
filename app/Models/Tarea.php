<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tarea extends Model
{
    use HasFactory;
    // removemos las tablas de created_at y update_at que vienen por defecto
    public $timestamps = false;
}
