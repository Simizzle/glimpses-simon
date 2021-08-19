import { FETCH_ALL, UPDATE, DELETE, LIKE } from '../constants/actionTypes';
import * as api from '../api/index.js';
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
// export const createPost = (post) => async (dispatch) => {
//   try {
//     const { data } = await fetch(`${process.env.REACT_APP_REST_API}posts`);
//     dispatch({ type: CREATE, payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
//   console.log(dispatch)
// };
export const createPost = async (bodyObj) => {
  const response = await fetch(`${process.env.REACT_APP_REST_API}posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      bodyObj
    ),
  });
  const data = await response.json();
  console.log(data)
};
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
export const fetchUsers = async (e, email, username, pass, setUser, setUsername, setEmail) => {
    e.preventDefault();
    try {
      let response;
      if (email) {
        response = await fetch(`http://localhost:5000/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: username,
            password: pass,
            email: email,
          }),
        });
      } else {
        response = await fetch(`http://localhost:5000/users/${username}`,
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
            password: pass
        })
        })
      }
      const data = await response.json();
      localStorage.setItem("MyToken", data.token)
      setUser(data.user.username);
      setEmail(data.user.email);
      setUsername(data.user.username)
    } catch (err) {
      console.log(err);
    }
  };
  export const editUsername = async (e, oldUsername, newUsername) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_REST_API}users/${oldUsername}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: oldUsername,
          newUsername: newUsername,
        }),
      });
    } catch (error) {
      console.log("username changed successfully");
    }
  };
  export const editPassword = async (e, oldUsername, oldPassword, newPassword) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_REST_API}users/${oldUsername}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: oldUsername,
          oldPassword: oldPassword,
          newPassword: newPassword,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    console.log("Password is changed successfully")
  };
  export const editEmail = async (e, username, oldUsername, oldPassword, email) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_REST_API}users/${username}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldUsername: oldUsername,
          oldPassword: oldPassword,
          email: email,
        }),
      });
    } catch (error) {
      console.log(error);
    }
    console.log("email is changed successfully")
  };
  export const deleteUser = async (e, oldUsername, oldPassword) => {
    e.preventDefault();
    await fetch(`${process.env.REACT_APP_REST_API}users/${oldUsername}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: oldUsername,
        password: oldPassword,
      }),
    });
    console.log("User deleted successfully");
  };
  // export const updateUsers = async (e, email, pass, username, setEmail, setPass) => {
  //   e.preventDefault();
  //   try {
  //     let response;
  //     if (email) {
  //       response = await fetch(`http://localhost:5000/users`, {
  //         method: "PUT",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({
  //           password: pass,
  //           email: email,
  //           username: username,
  //         }),
  //       });
  //     } else {
  //       response = await fetch(`http://localhost:5000/users/${email}`);
  //     }
  //     const data = await response.json();
  //     setEmail(data.updateUserEmail);
  //     setPass(data.updateUserEmail);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  export const authUser = async (setUser) =>{
    if (localStorage.MyToken) {
        try {
            const response = await fetch(`http://localhost:5000/users`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("MyToken")}`
                }
            })
            const data = await response.json();
            console.log(data)
            setUser(data.username)
        } catch (err) {
            console.log(err)
        }
    }
}