<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CrearTablaPermisos extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('permisos', function (Blueprint $table) {
            $table->id();
            $table->string('modulo', 20);
            $table->boolean('crear')->default(false);
            $table->boolean('borrar')->default(false);
            $table->boolean('consultar')->default(false);
            $table->boolean('modificar')->default(false);
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');
        });

        DB::table('permisos')->insert(
            array(
                'modulo' => 'USUARIOS',
                'crear' => true,
                'borrar' => true,
                'consultar' => true,
                'modificar'=>true,
                'user_id'=> 24
            )
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('permisos');
    }
}
