<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class PrincipalController extends Controller
{
    //
    /**
     * metodo de resuesta exitosa.
     *
     * @return \Illuminate\Http\Response
     */
    public function enviarRespuesta($result, $message)
    {
        $respuesta = [
            "success" => true,
            "data" => $result,
            "message" => $message
        ];
        return response()->json($respuesta, 200);
    }
    /**
     * metodo de resuesta con error.
     *
     * @return \Illuminate\Http\Response
     */
    public function enviarError($error, $messageError = [], $codigo = 404)
    {
        $respuesta = [
            "success" => false,
            "message" => $error,
        ];
        if (!empty($messageError)) {
            $respuesta["data"] = $messageError;
        }

        return response()->json($respuesta, $codigo);
    }

    /**
     * Metodo respuestas con token 
     * 
     * @return \Illuminate\Http\Response
     */
    public function respuestaToken(User $user)
    {
        $respuesta['token'] = $user->createToken('gestiontareas')->plainTextToken;
        $respuesta['nombre'] = $user->name;
        $respuesta['email'] = $user->email;
        $respuesta['id'] = $user->id;

        return $this->enviarRespuesta($respuesta, "Se creo el usuario existosamente!");
    }
}
