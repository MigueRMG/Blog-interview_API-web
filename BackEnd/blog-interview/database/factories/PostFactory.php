<?php

namespace Database\Factories;

use App\Models\Post;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Post::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->sentence($nbWords = 5, $variableNbWords = true),
            'content' => $this->faker->sentence($nbWords = 200, $variableNbWords = true),
            'user_id' => $this->faker->numberBetween($min = 2, $max = 15)

        ];
    }
}
