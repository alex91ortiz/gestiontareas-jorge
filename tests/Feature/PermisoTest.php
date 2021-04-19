<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class PermisoTest extends TestCase
{

        /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_mostrar_todos_tareas()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->getJson('/api/tareas');

        $response->assertStatus(200)
        ->assertJson([
            'success' => true,
        ]);
        $this->assertTrue($response['success']);
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_mostrar_tareas()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->getJson('/api/tareas/mostrar/1');

        $response->assertStatus(200)
        ->assertJson([
            'success' => true,
        ]);
        $this->assertTrue($response['success']);
    }
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_insert_tareas()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->postJson('/api/tareas/crear', [
                            'nombre' =>"Tarea 1",
                            'descripcion' => "Prueba Tarea 2",
                            'fechavencimiento' => "2020-04-10"
                        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        
    }

        /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_update_tareas()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->putJson('/api/tareas/actualizar', [
                            'nombre' =>"Tarea 1",
                            'descripcion' => "Prueba Tarea 2",
                            'fechavencimiento' => "2020-04-10",
                            'estado' => "S",
                        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        
    }

    /**
     * A basic feature test example.
     *
     * @return void
    */
    public function test_eliminar_tareas()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->deleteJson('/api/tareas/borrar/1');

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        
    }
}
