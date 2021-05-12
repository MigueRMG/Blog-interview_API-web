<?php

namespace App\Http\Resources\CommentsResource;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentsOnlyPostResource extends JsonResource
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
                'type' => 'Comments',
                'atributes' => [
                    'content' => $this->content,
                    'created_at' => $this->created_at,
                    'postTarget' => [
                        'id'=> (string)$this->post->id,
                        'title'=> $this->post->title,
                    ]
                ]
            ];
    }
}
