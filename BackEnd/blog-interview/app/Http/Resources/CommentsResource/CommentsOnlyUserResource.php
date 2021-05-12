<?php

namespace App\Http\Resources\CommentsResource;

use Illuminate\Http\Resources\Json\JsonResource;

class CommentsOnlyUserResource extends JsonResource
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
                    'user' => [
                        'id'=> (string)$this->user->id,
                        'name'=> $this->user->name,
                    ]
                ]
            ];
    }
}
