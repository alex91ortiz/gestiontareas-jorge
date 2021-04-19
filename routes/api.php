<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PermisoController;
use App\Http\Controllers\TareaController;
use App\Http\Controllers\UserController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::post('login', [LoginController::class, 'login']);
Route::post('salir', [LoginController::class, 'salir']);
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('tareas')->group(function () {
        Route::get('', [TareaController::class, 'index']);
        Route::get('mostrar/{id}', [TareaController::class, 'show']);
        Route::post('crear', [TareaController::class, 'store']);
        Route::put('actualizar/{id}', [TareaController::class, 'update']);
        Route::delete('borrar/{id}', [TareaController::class, 'destroy']);
        Route::get('consultar', [TareaController::class, 'filterQuery']);
    });
    Route::prefix('usuarios')->group(function () {
        Route::get('', [UserController::class, 'index']);
        Route::post('crear', [UserController::class, 'store']);
        Route::put('actualizar/{id}', [UserController::class, 'update']);
        Route::delete('borrar/{id}', [UserController::class, 'destroy']);
    });

    Route::prefix('permisos')->group(function () {
        Route::get('', [PermisoController::class, 'index']);
        Route::get('mostrar/{id}', [PermisoController::class, 'show']);
        Route::post('crear', [PermisoController::class, 'store']);
    });

    
});
