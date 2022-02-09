import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/memories.png';

import Post from './components/Post/Post';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  //useEffect triggers dispatch action. (dispatch is needed in the second para aka. dependency array)
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const posts = useSelector((state) => state.posts);


  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Sentimedia</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
        <Grid className={classes.container} container alignItems="stretch" spacing = {3}>
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
    </Container>
  );
};




export default App;
