import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../utils";
import ModalMap from "../Modal/Index";
import  logo  from "../../logo/glimpses_logo-01.svg"


const Form = ({ currentId, setCurrentId, setBool, bool }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    location: "",
    selectedFile: "",
    publicID: "",

  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      location: "",
      selectedFile: "",
      publicID: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("steve");
    if (currentId === 0) {

      console.log(postData);
      createPost(postData);
      // clear();
    } else {
      updatePost(currentId, postData);
      clear();
    }
  };

  const uploadImage = async (image) => {
    const data = new FormData();

    data.append("file", image);
    data.append("upload_preset", "jc6pihar");
    data.append("cloud_name", "dbonvkpgh");
    console.log(data);
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dbonvkpgh/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const dat = await response.json();
    console.log(dat);
    await setPostData({ ...postData, selectedFile: "" });
    await setPostData({
      ...postData,
      publicID: dat.public_id,
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        // onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editing "${post.title}"` : <img src={logo} width="200px" alt="logo"/> }
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <ModalMap setPostData={setPostData} postData={postData} />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => {
              uploadImage(base64);
            }}
          />
        </div>
        {bool && <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          onClick={(e) => {setBool(false); handleSubmit(e)}}
          fullWidth
          // onCLick={useEffect(() => Posts)}
        >
          Submit
        </Button>}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;