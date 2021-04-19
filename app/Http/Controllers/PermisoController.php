<?php

namespace App\Http\Controllers;

use App\Models\Permiso;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PermisoController extends PrincipalController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $permisos = Permiso::where("user_id", Auth::user()->id)->get();

        return $this->enviarRespuesta($permisos, 'Permisos recuperadas con exito');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Se crea una nuevo registro
        $entrada = $request->all();
        // obtenemos el id usuario para actualizar 
        $user_id = $entrada['user_id'];
        // primero limpiamos todos los permiso para porteriormente actualizarlos
        Permiso::where("user_id",$user_id)->delete();
        $listapermisos = $entrada['permisos'];
        
        for ($i = 0; $i < count($listapermisos); $i++) {
            // creamos el objecto permisos para almacenarlo en la base de datos
            $permisos = new Permiso();
            $permisos->modulo = $listapermisos[$i]['modulo'];
            $permisos->crear = $listapermisos[$i]['crear'];
            $permisos->modificar = $listapermisos[$i]['modificar'];
            $permisos->consultar = $listapermisos[$i]['consultar'];
            $permisos->borrar = $listapermisos[$i]['borrar'];
            $permisos->user_id = $user_id;
            $permisos->save();
        }

        return $this->enviarRespuesta($listapermisos, "Permiso creado con exito");
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //consultar el detalle de una sola tarea
        $permisos = Permiso::where("user_id", $id)->get();
        if (is_null($permisos)) {
            return $this->enviarError('No se encontro la tarea');
        }
        return $this->enviarRespuesta($permisos, "Permiso recuperada con exito");
    }
}
