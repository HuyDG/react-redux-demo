import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
  id: number;
  title: string;
}

interface Comment {
  id: number;
  body: string;
  postId: number;
}

export const fakeApiSlice = createApi({
  reducerPath: "fakeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-json-server.typicode.com/typicode/demo"
  }),
  endpoints: (builder) => {
    return {
      fetchPosts: builder.query<Post[], number | void>({
        query: () => "/posts"
      }),
      fetchComments: builder.query<Comment[], number | void>({
        query: () => "/comments"
      })
    };
  }
});

export const { useFetchPostsQuery, useFetchCommentsQuery } = fakeApiSlice;
