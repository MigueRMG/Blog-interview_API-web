<?php

namespace Database\Factories;

use App\Models\Comment;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommentFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Comment::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'content' => $this->faker->sentence($nbWords = 30, $variableNbWords = true),
            'user_id' => $this->faker->numberBetween($min = 2, $max = 15),
            'post_id' => $this->faker->numberBetween($min = 1, $max = 50),
        ];
    }
}
