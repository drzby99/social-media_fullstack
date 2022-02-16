import React from 'react';
import { Card,CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from 'react-redux';
import {DateTime} from 'luxon'

import Twemoji from 'react-twemoji';

import { likePost, deletePost } from '../../actions/posts';
import useStyles from './styles';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let postSentiment = null;
  const user = JSON.parse(localStorage.getItem('profile'));

  if (post.sentiment >= 0 && post.sentiment < 1) postSentiment = '🙂'
  else if (post.sentiment >=1 && post.sentiment < 2) postSentiment = '😃'
  else if (post.sentiment >=2 ) postSentiment = '😆'
  else if (post.sentiment <0 && post.sentiment > -0.5) postSentiment = '😐'
  else if (post.sentiment <=-0.5 && post.sentiment > -1) postSentiment = '🙁'
  else if (post.sentiment <=-1 && post.sentiment > -2) postSentiment = '😫'
  else if (post.sentiment <=-2 ) postSentiment = '🤯'
  else postSentiment = '🙂'

  if (post.createdAt === undefined) post.createdAt = DateTime.now()

  const Likes = () => {
    if (post.likes.length > 0) {
      return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltIcon fontSize="small" />&nbsp;Like</>;
  };

  /* 
      The Edit Button, in beta form

  */
  
  return (
    <Card className={classes.card} elevation = {24} square>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h4">{post.name}</Typography>
        <Typography variant="body2">Created on {DateTime.fromISO(post.createdAt).toLocaleString(DateTime.DATETIME_SHORT)}</Typography>
      </div>

    {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
      <div className={classes.overlay2}>
        <Button style={{ color: 'primary' }} size="small" onClick={() => setCurrentId(post._id)}>EDIT</Button>
      </div>
      )}
      <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center',}} >
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
        {post.title}</Typography> 
      </div>
      <CardContent>
        <Typography variant="subtitle1" component="p">{post.message}
        </Typography>
        <Twemoji options={{ className: 'twemoji' }} ><p>{postSentiment}</p></Twemoji>      
      </CardContent>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(setCurrentId, post._id))}>
          <DeleteOutlinedIcon fontSize="small" /> Delete
        </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;