<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostsRequest extends FormRequest
{
    /**
     * Determine if the post is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'bail|required|unique:posts|max:255',
            'content' => 'bail|required|unique:posts',
            'user_id' => 'bail|required|exists:users,id',
        ];
    }

    public function messages()
{
    return [
        'title.required' => 'The title is required.',
        'title.unique' => 'The title has already exist.',
        'title.max' => 'The title cannot contain more than 255 characters.',
        'content.required' => 'The content is required.',
        'content.unique' => 'The content has already exist.',
        'user_id.required' => 'The user is required.',
        'user_id.exists' => 'The user non exist.',


    ];
}
}
