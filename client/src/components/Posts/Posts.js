import React from "react";
import Post from './Post/Post'
import useStyles from './styles'
import { useSelector } from "react-redux";

import {Grid, CircularProgress} from '@material-ui/core'

const Posts =() => {
    const posts = useSelector((state)=>state.posts)
 
    const classes = useStyles();

    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container alignItems = "stretch" spacing = {3}>
                {
                    posts.map((post) => (
                        <Grid  item xs = {12} sm={6}>
                            <Post key = {post.id} post = {post} />
                        </Grid>

                    ))
                }
            </Grid>
        )
    )
}
    

export default Posts 