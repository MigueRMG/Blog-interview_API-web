<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CommentsRequest extends FormRequest
{
    /**
     * Determine if the comment is authorized to make this request.
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
            'content' => 'bail|required',
            'user_id' => 'bail|required|exists:users,id',
            'post_id' => 'bail|required|exists:posts,id',

        ];
    }

    public function messages()
{
    return [
        'content.required' => 'The content is required.',
        'user_id.required' => 'The user is required.',
        'user_id.exists' => 'The user non exist.',
        'post_id.required' => 'The post is required.',
        'post_id.exists' => 'The post non exist.',


    ];
}
}
