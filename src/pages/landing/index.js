import { PageContainer } from "../../styledComponents";
import React, { useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "../../utils";
import { Redirect } from "react-router-dom";
import "./landing.css";
import  logo  from "../../logo/glimpses_logo-01.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons"; 
const eye = <FontAwesomeIcon icon={faEye}/>;

export const Landing = ({ user, setUser }) => {
  const [newUser, setNewUser] = useState(false);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [pass, setPass] = useState();

  return (
    <div className="overlay">
      <div className="wrapper">
        <img src={logo} width="70%" alt="logo"/>
        <div className="login-holder">
          <PageContainer className="login">
            <LogForm
              onSubmit={(e) => fetchUsers(e, email, username, pass, setUser)}
            >
              {newUser && (
                <label>
                email:  
                <LogInput
                  className="login-input"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                </label>
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
                  className="login-inputPass"
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Password"

                /><i>{eye}</i>
              </label>
              <LogButton className="btn-login" type="submit">
                {newUser ? "Sign Up" : "Log In"}
              </LogButton>
            </LogForm>
            <LogButton
              className="btn-login"
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
