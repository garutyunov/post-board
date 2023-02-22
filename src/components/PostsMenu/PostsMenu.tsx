import React, { useEffect, useState } from 'react';
import Post from './components/Post';
import NewPost from './components/NewPost';
import { v4 as uuidv4 } from 'uuid';
import Grid from '@mui/material/Grid';
import getPostsFromStorage from '../../utils/getPostsFromStorage';
import updatePostsInStorage from '../../utils/updatePostsInStorage';
import { Note } from '../../types/types';

const PostsMenu = () => {
  const [posts, setPosts] = useState<Note[]>(getPostsFromStorage());

  useEffect(() => {
    updatePostsInStorage(posts);
  }, [posts.length]);

  const onAddPost = (newPost: Note) => {
    setPosts((prev) => [...prev, newPost]);
  };

  const onUpdatePost = (newPost: Note, id: number) => {
    setPosts((prev) =>
      prev.map((post, index) => (index === id ? newPost : post))
    );
  };

  const onDeletePost = (id: number) => {
    setPosts((prev) => prev.filter((post, index) => index !== id));
  };

  return (
    <>
      <Grid
        container
        spacing={{ xs: 3, sm: 3, md: 6 }}
        columns={{ xs: 3, sm: 6, md: 12 }}
      >
        <Grid item xs={3} sm={3} md={3}>
          <NewPost onAddPost={onAddPost} />
        </Grid>
        {posts.map((post, id) => (
          <Grid item xs={3} sm={3} md={3} key={uuidv4()}>
            <Post
              post={post}
              onUpdatePost={onUpdatePost}
              onDeletePost={onDeletePost}
              id={id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PostsMenu;
