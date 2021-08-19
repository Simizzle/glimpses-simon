import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import  logo  from "../../logo/glimpses_logo-01.svg"
import Posts from '../../components/Posts/Posts';
import Form  from '../../components/Form/Form';
import { getPosts } from '../../utils';
import useStyles from '../../styles';





const MyPosts = () => {
  const [currentId, setCurrentId] = useState(0);
  const [bool, setBool] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
 

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"><img src={logo} width="350px" alt="logo"/> -  CREATE A POST</Typography>
        

      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} bool={bool} setBool={setBool} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} setBool={setBool} bool={bool}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default MyPosts;