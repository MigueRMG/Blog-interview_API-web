<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Post;
use Illuminate\Http\Request;
use App\Http\Resources\UsersResource\UsersResource;
use App\Http\Resources\UsersResource\UsersPstCmmResource;
use App\Http\Resources\UsersResource\UsersCantPCResource;
use App\Http\Requests\UsersRequest;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class UsersController extends Controller
{

    public function login (Request $request){
        $credentials = $request->only('name','password');

        if(!Auth::attempt($credentials)){
            return response([
                "message" => "invalid"
            ], 401);
        }

        else{
            return response([
                "message" => "valid",
                "user" =>Auth::user()
            ]);
        }
    }

    /**
     * Display a listing of users,
     * post's amount and comments receive
     * GET .../users
     *
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return UsersCantPCResource::collection(User::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UsersRequest $request)
    {

        $user = User::create([
            'name' => $request->input('name'),
            'password' => Hash::make($request->input('password')),
        ]);

        return new UsersResource($user);
    }




    /**
     * Display the specified user
     * and all his posts and comments
     * GET .../users/$id
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UsersPstCmmResource($user);
    }

    /**
     *
     * Show the form for editing the specified user.
     *
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified user in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User  $User
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {

        $user ->update([
            'name' => $request->input('name'),
            'password' => Hash::make($request->input('password')),
        ]);

        return new UsersResource($user);
    }

    /**
     * Remove the specified user from storage.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        $user->delete();

        return response(null,204);
    }
}
