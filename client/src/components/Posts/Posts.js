import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Form from '../Form/Form'

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  //useSelector grants access to the redux global store.
  //it takes a callback func, (state) represents the global store, from which 
  //we return state.posts to get all the posts
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing = {3}>
        {posts.slice(0).reverse().map((post) => (
          <Grid key={post._id} item xs={12} sm={4} md={4}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
