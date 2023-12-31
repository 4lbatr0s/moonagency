import { NextResponse } from "next/server";
import connect from "@/utilities/db";
import Post from "@/models/Post";

//INFO: HOW TO CREATE NEXT API!
export const GET = async (request) => {
  const url = new URL(request.url); //how to reach url.
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(username && { username }); //if there is a username, fetch with the username, if not fetch all.
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse(`Database Error:${error}`, { status: 500 });
  }
};

//INFO: HOW TO CREATE POST ENDPOINT.
export const POST = async (request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
