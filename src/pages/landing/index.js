import { PageContainer } from "../../styledComponents";
import React, { useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";
import "./landing.css";

export const Landing = ({ user, setUser }) => {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  return (
    <div className="overlay">
      <div className="wrapper">
        <div className="banner">
          <h1> GLIMPSES </h1>
        </div>
        <div className="login-holder">
          <PageContainer className="login">
            <LogForm
              onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}
            >
              {newUser && (
                <LogInput
                  className="login-input"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              )}

              <label>
                username:
                <LogInput
                  className="login-input"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </label>
              <label>
                Password:
                <LogInput
                  className="login-input"
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Password"
                />
              </label>
              <LogButton className="btn-login" type="submit">
                {newUser ? "Sign Up" : "Log In"}
              </LogButton>
            </LogForm>
            <LogButton
              className="btn"
              type="button"
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? "Log In" : "Sign Up"}
            </LogButton>
            {user && <Redirect to="/profile" />}
          </PageContainer>
        </div>
      </div>
    </div>
  );
};

const LogInput = styled.input`
  width: 20vw;
`;
const LogForm = styled.form`
  width: 35vw;
  color: white;
`;
const LogButton = styled.button`
  width: 20vw;
`;
