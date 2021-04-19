<?php

namespace App\Http\Controllers;

use App\Models\Tarea;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class TareaController extends PrincipalController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         *  Filtramos las tareas por tipo de usuario $administrador 
         *  si el tipo de usuario es administrador podra ver todas las tareas
         *  registradas en el sistema de lo contrario solo podra ver lo que le
         *  corresponde.
         * */
        if (Auth::user()->administrador) {
            $tareas = Tarea::all();
        } else {
            $tareas = Tarea::where('user_id', Auth::user()->id)->get();
        }
        return $this->enviarRespuesta($tareas, 'Tareas recuperadas con exito');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Se crea una nueva tarea
        $entrada = $request->all();

        $validator = Validator::make($entrada, [
            "nombre" => "required",
            "descripcion" => "required",
            "fechavencimiento" => "required",
        ]);

        if ($validator->fails()) {
            return $this->enviarError('Error de validacion', $validator->errors());
        }
        // asignamos los datos de auditoria de la tarea
        $entrada['user_id'] = Auth::user()->id;
        $entrada['fechacreacion'] = date('Y-m-d');
        // creamos el objecto tarea para almacenarlo en la base de datos
        $tarea = new Tarea();
        $tarea->nombre = $entrada['nombre'];
        $tarea->descripcion = $entrada['descripcion'];
        $tarea->fechacreacion = $entrada['fechacreacion'];
        $tarea->fechavencimiento = $entrada['fechavencimiento'];
        $tarea->user_id = $entrada['user_id'];
        $tarea->save();

        return $this->enviarRespuesta($tarea, "Tarea creada con exito");
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
        $tareas = Tarea::find($id);
        if (is_null($tareas)) {
            return $this->enviarError('No se encontro la tarea');
        }
        return $this->enviarRespuesta($tareas, "Tarea recuperada con exito");
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // se actualiza la tarea

        $entrada = $request->all();
        
        $validator = Validator::make($entrada, [
            "nombre" => "required",
            "descripcion" => "required",
            "fechavencimiento" => "required",
            "estado" => "required",
        ]);

        if ($validator->fails()) {
            return $this->enviarError('Error de validacion', $validator->errors());
        }
        $tareas = Tarea::find($id);
        if (!is_null($tareas)) {
            if (Auth::user()->id == $tareas->user_id) {
                $tareas->nombre = $entrada['nombre'];
                $tareas->descripcion = $entrada['descripcion'];
                $tareas->fechavencimiento = $entrada['fechavencimiento'];
                $tareas->estado = $entrada['estado'];
                $tareas->save();

                return $this->enviarRespuesta($tareas, "Tarea actualizada con exito");
            } else {
                return $this->enviarError('No tiene permitido actualizar este registro');
            }
        } else {
            return $this->enviarError('No se encontro la tarea');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // se elimina el registro de la tarea
        $tareas = Tarea::find($id);
        if (!is_null($tareas)) {
            if (Auth::user()->id == $tareas->user_id) {
                $tareas->delete();
            } else {
                return $this->enviarError('No tiene permitido eliminar este registro');
            }
        }else{
            return $this->enviarError('No se encontro la tarea');
        }
    }

    /**
     * Display a listing of the resource.
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function filterQuery(Request $request)
    {
        
        $query=[];
        // realizamos la extraccion de las llaves que seran los nombres de las columnas
        foreach ($request->all() as $key => $value) {
            if($key== "user_id"){
                $query[] = [$key, "=", Auth::user()->id];
            }else{
                $query[] = [$key, "=", $value];
            }
        }
        
        
        $tareas = Tarea::where($query)->orderBy('fechavencimiento', 'desc')->get();
        
        return $this->enviarRespuesta($tareas, 'Tareas recuperadas con exito');
    }


}
