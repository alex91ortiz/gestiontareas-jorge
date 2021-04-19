<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class LoginController extends PrincipalController
{
    /**
     * 
     * Api para Login de usuario
     * 
     * @return \Illuminate\Http\Response
     */

    public function login(Request $request)
    {
        if (Auth::attempt(["email" => $request->email, "password" => $request->password])) {
            $user = Auth::user();
            return $this->respuestaToken($user);
        } else {
            return $this->enviarError("Verifique que el usuario y password esten correctos", ["error" => "Usuario no autorizado"]);
        }
    }

      /**
     * 
     * Api para Logout de usuario
     * 
     * @return \Illuminate\Http\Response
     */

    public function salir()
    {
        //auth()->user()->tokens()->delete();
        return $this->enviarRespuesta(null,"tokens removidos");
    }


    
}
