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
    public function test_mostrar_todos_permisos()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->getJson('/api/permisos');

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
    public function test_mostrar_permisos()
    {
        $user = User::factory()->create();
        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->getJson('/api/permisos/mostrar/63');

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
    public function test_insert_permisos()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
                         ->withSession(['banned' => false])
                        ->postJson('/api/permisos/crear', [
                        'permisos' =>[
                                ['modulo' => 'USUARIO', 'crear' => false, 'modificar' => false, 'borrar' => false, 'consultar' => false],
                                ['modulo' => 'TAREA', 'crear' => false, 'modificar' => false, 'borrar' => false, 'consultar' => false]
                        ],
                        'user_id' => 63
                        ]);

        $response
            ->assertStatus(200)
            ->assertJson([
                'success' => true,
            ]);

        
    }
}
