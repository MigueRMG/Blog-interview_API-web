<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;
use App\Http\Resources\CommentsResource\CommentsResource;
use App\Http\Requests\CommentsRequest;

class CommentsController extends Controller
{
    /**
     * Display a listing of the comment.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return CommentsResource::collection(Comment::all());
    }

    /**
     * Show the form for creating a new comment.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in comment.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CommentsRequest $request)
    {
        $comment = Comment::create([
            'content' => $request->input('content'),
            'user_id' => $request->input('user_id'),
            'post_id' => $request->input('post_id')
        ]);

        return new CommentsResource($comment);
    }

    /**
     * Display the specified comment.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function show(Comment $comment)
    {
        return new CommentsResource($comment);
    }

    /**
     * Show the form for editing the specified comment.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function edit(Comment $comment)
    {
        //
    }

    /**
     * Update the specified comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Comment $comment)
    {
         $comment ->update([
            'content' => $request->input('content'),
            'user_id' => $request->input('user_id'),
            'post_id' => $request->input('post_id'),
        ]);

        return new CommentsResource($comment);
    }

    /**
     * Remove the specified comment from storage.
     *
     * @param  \App\Models\Comment  $comment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();

        return response(null,204);
    }
}
