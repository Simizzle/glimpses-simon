import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../../components/Posts/Posts';
import { getPosts } from '../../utils';
import useStyles from '../../styles';
import  logo  from "../../logo/glimpses_logo-01.svg"





const Profile = () => {
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
        <Typography className={classes.heading} variant="h2" align="center"><img src={logo} width="350px" alt="logo" />  -  MY FEED</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container flex='wrap' justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={4} sm={8} lg={12}>
              <Posts setCurrentId={setCurrentId} bool={bool} setBool={setBool}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default Profile;