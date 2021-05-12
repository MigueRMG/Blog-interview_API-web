<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CommentsController;
use App\Http\Requests\UsersRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


    //  .../api/v1/...


    //*POST   .../login   login the user and return his id
    Route::post('/login', [UsersController::class,'login']);

    /**
     * ////////////////////////USER
     *GET    .../users       Display a listing of users, post's amount and amount of comments receive
     *GET    .../users/$id   Display the specified user, all his posts and comments
     *POST   .../users       Store a newly created user in storage.
     *PUT    .../users/$id   Update the specified user in storage.
     *DELETE .../users/$id   Remove the specified user from storage.
     */
    Route::apiResource('/users', UsersController::class);

    /**
     * ////////////////////////POST
     *GET    .../posts       Display a listing of the posts, and the author
     *GET    .../posts/$id   Display the specified post, the author and all his comments
     *POST   .../posts       Store a newly created post in storage.
     *PUT    .../posts/$id   Update the specified post in storage.
     *DELETE .../posts/$id   Remove the specified post from storage.
     */
    Route::apiResource('/posts', PostsController::class);

    /**
     * ////////////////////////COMMENTS
     *GET    .../comments       Display a listing of the comments, the author and the target post
     *GET    .../comments/$id   Display the specified comments, the author and the target post
     *POST   .../comments       Store a newly created post in storage.
     *PUT    .../comments/$id   Update the specified post in storage.
     *DELETE .../comments/$id   Remove the specified post from storage.
     */
    Route::apiResource('/comments', CommentsController::class);



//Route::middleware('auth:api')->group(function(){});