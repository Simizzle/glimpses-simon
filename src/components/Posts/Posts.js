import React, { useEffect, useState } from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId, bool, setBool }) => {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    if (bool === false) {
    const fetchPost = async () => {const response = await fetch(`${process.env.REACT_APP_REST_API}posts`);
      const data = await response.json();
      setPosts(data);}
      setBool(true);
      fetchPost();
    } 
   
  }, [bool, setBool]);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {bool && posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} setBool={setBool} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Posts;