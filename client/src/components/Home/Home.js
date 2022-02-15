import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Form from '../Form/Form';
import { getPosts } from '../../actions/posts';

import Post from '../Post/Post';

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
  
    //useEffect triggers dispatch action. (dispatch is needed in the second para aka. dependency array)
    useEffect(() => {
      dispatch(getPosts());
    }, [currentId, dispatch]);
  
    const posts = useSelector((state) => state.posts);
    return (
        <Grow in>
          <Container>
          <Grid container alignItems="stretch" spacing = {3}>
              <Grid item xs={12} sm={6} md={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
                {posts.slice(0).reverse().map((post) => (
                  <Grid key = {post._id} item xs={12} sm={6} md={4}>
                    <Post post={post} setCurrentId={setCurrentId}/>
                  </Grid>
                ))}
            </Grid>
          </Container>
        </Grow>
    );
}

export default Home