import React, {useEffect} from "react";
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'

import useStyles from './styles'

import logo from './images/Screen Shot 2019-11-20 at 11.46.46 PM.png'
const App = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=> {
        dispatch(getPosts())
    }, [dispatch])

    return (
        <Container maxidth="lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography className = {classes.heading} variant = "h2" align = "center"> 瓜田 </Typography>
                <img className = {classes.image} src={logo} alt = "icon" height="60" />
            </AppBar>
        <Grow in>
            <Container>
                <Grid container justify ="space-between" alignItems="stretch" spacing = {3}>
                    <Grid item xs = {12} sm={7}>
                        <Posts />

                    </Grid>
                    <Grid item xs = {12} sm={4}>
                        <Form />
                        
                    </Grid>
                </Grid>
            </Container>

        </Grow>
        </Container>
    )
}

export default App