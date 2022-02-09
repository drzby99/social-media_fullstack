import React from 'react';
import { CardActions, CardContent, CardMedia, Button, Typography, Paper } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import {DateTime} from 'luxon'

import Twemoji from 'react-twemoji';

import { likePost, deletePost } from '../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let postSentiment = null;
  if (post.sentiment >= 0 && post.sentiment < 0.5) postSentiment = '🙂'
  else if (post.sentiment >=0.5 && post.sentiment < 1) postSentiment = '😊'
  else if (post.sentiment >=1 && post.sentiment < 2) postSentiment = '😃'
  else if (post.sentiment >=2 ) postSentiment = '😆'
  else if (post.sentiment <0 && post.sentiment > -0.5) postSentiment = '😐'
  else if (post.sentiment <=-0.5 && post.sentiment > -1) postSentiment = '🙁'
  else if (post.sentiment <=-1 && post.sentiment > -2) postSentiment = '😫'
  else if (post.sentiment <=-2 ) postSentiment = '🤯'
  else postSentiment = '🙂'

  if (post.createdAt === undefined) post.createdAt = DateTime.now()

  return (
    <Paper className={classes.card} elevation = {24} square>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h4">{post.creator}</Typography>
        <Typography variant="h6">Created {DateTime.fromISO(post.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>Edit</Button>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
        <Twemoji options={{ className: 'twemoji' }} ><p>{postSentiment}</p></Twemoji>      
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon fontSize="small" /> Like {post.likeCount} </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon fontSize="small" /> Delete</Button>
      </CardActions>
    </Paper>
  );
};

export default Post;
