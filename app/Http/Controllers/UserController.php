<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class UserController extends PrincipalController
{
    //
    /**
     * metodo de recuperar usuarios.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        if (Auth::user()->administrador) {
            $usuarios = User::all();
        }
        return $this->enviarRespuesta($usuarios, 'usuarios recuperados con exito');
    }

    //

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'administrador' => 'required',
            'password' => 'required|max:8|min:6',
            'confirmation_password' => 'required|same:password'
        ]);

        if ($validator->fails()) {
            return $this->enviarError("Validacion fallida", $validator->errors());
        }

        $user = new User();
        $user->name = $request->input("name");
        $user->email = $request->input("email");
        $user->administrador = $request->input("administrador");
        $user->password = bcrypt($request->input("password"));
        $user->save();
        // retornamos los datos del usuario creado y el token para cada peticion
        return $this->respuestaToken($user);
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
            "name" => "required",
            "email" => "required",
            "administrador" => "required"
        ]);

        if ($validator->fails()) {
            return $this->enviarError('Error de validacion', $validator->errors());
        }
        $usuario = User::find($id);
        if (!is_null($usuario)) {

            $usuario->name = $entrada['name'];
            $usuario->email = $entrada['email'];
            $usuario->administrador = $entrada['administrador'];
            $usuario->save();
        } else {
            return $this->enviarError('No se encontro la usuario');
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
        $usuario = User::find($id);
        if (!is_null($usuario)) {
            if (Auth::user()->id == $usuario->user_id) {
                $usuario->delete();
            } else {
                return $this->enviarError('No tiene permitido eliminar este registro');
            }
        } else {
            return $this->enviarError('No se encontro el usuario');
        }
    }
}
