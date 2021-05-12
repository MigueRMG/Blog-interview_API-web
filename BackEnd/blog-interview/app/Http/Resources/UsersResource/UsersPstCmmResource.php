<?php

namespace App\Http\Resources\UsersResource;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\CommentsResource\CommentsOnlyPostResource;
use App\Models\Comment;

class UsersPstCmmResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return ['id' => (string)$this->id,
                'type' => 'Users',
                'atributes' => [
                    'name' => $this->name,
                    'posts' => $this->posts,
                    'comments' =>  CommentsOnlyPostResource::collection($this->comments)

                ]
        ];
    }
}
