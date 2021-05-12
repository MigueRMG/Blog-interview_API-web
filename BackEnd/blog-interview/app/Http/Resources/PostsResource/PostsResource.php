<?php

namespace App\Http\Resources\PostsResource;

use Illuminate\Http\Resources\Json\JsonResource;

class PostsResource extends JsonResource
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
                'type' => 'Posts',
                'atributes' => [
                    'title' => $this->title,
                    'content' => $this->content,
                    'created_at' => $this->created_at,
                    'user' => $this->user,
                ]
            ];
    }
}
