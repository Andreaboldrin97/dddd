<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $post = Post::with('user', 'category.posts', 'tags')->get();
        return response()->json([
            'response' => true,
            'count' => count($post),
            'resoult' => $post
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $post = Post::with('user', 'category.posts', 'tags')->findOrFail($id);
        return response()->json([
            'response' => true,
            'resoult' => $post
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    /**
     * SEARCH POST by title
     *
     * @param  mixed $title
     * @return void
     */
    public function searchPost($title)
    {
        $title = strtolower($title);
        $post = Post::with('user', 'category.posts', 'tags')->where('title', 'LIKE', '%' . $title . '%')->get();
        if (count($post) > 0) {

            return response()->json([
                'response' => true,
                'count' => count($post),
                'resoult' => $post
            ]);
        } else return response('', 204);
    }
}
