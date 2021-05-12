<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
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
            'name' => 'bail|required|unique:users|max:255',
            'password' => 'bail|required|max:255',
        ];
    }

    public function messages()
{
    return [
        'name.required' => 'The name is required.',
        'name.unique' => 'The name has already exist.',
        'name.max' => 'The name cannot contain more than 255 characters.',
        'password.required' => 'The password is required.',
        'password.max' => 'The password cannot contain more than 255 characters.',


    ];
}
}
