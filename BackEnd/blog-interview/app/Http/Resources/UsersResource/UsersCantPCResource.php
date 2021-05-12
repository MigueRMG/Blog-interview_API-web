<?php

namespace App\Http\Resources\UsersResource;

use Illuminate\Http\Resources\Json\JsonResource;

class UsersCantPCResource extends JsonResource
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
                    'cantPosts' => (string)sizeof($this->posts),
                    'cantComments' => (string)sizeof($this->comments)
                ]
            ];
    }
}
