<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CrearTablaTareas extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('tareas', function(Blueprint $table){
            $table->id();
            $table->string('nombre',80);
            $table->text('descripcion');
            $table->date('fechacreacion');
            $table->char('estado', 1)->default('N');
            $table->date('fechavencimiento');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('tareas');
    }
}
