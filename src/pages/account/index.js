import React, { useState, useEffect } from "react";
import { SettingsContainer, LogButton, LogForm, LogInput, AccountForm } from "../../styledComponents";
import { deleteUser, editEmail, editPassword, editUsername, fetchUsers } from "../../utils";


export const Account = () => {
  const [newUsername, setNewUsername] = useState();
  const [oldUsername, setOldUsername] = useState();
  const [newPassword, setNewPassword] = useState();
  const [oldPassword, setOldPassword] = useState();
  const [newEmail, setNewEmail] = useState();
  const [setting, setSetting] = useState(0);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPass, setConfirmPass] = useState(false)
  const [pass, setPass] = useState("");
  const [error, setError] = useState({ error: false, message: "" });
  
  useEffect(() => {
      
    }, [confirmPass]);

    

  return (
    <SettingsContainer>
      <div>
        <h1>Your Account</h1>
        {confirmPass ? <AccountForm>

<label>
     Current username: 
     <input type= "text" placeholder="username" value={username} />
 </label>
<label>
    Current email:
    <input type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
 </label>

 <label>
     Current password:
     <input type= "text" placeholder= "password" value= {pass} />
  </label>

  {/* <button type='button' onClick={e=>{updateUsers(e, pass, email, username)}}> 
     Add to Profile 
 </button> */}

</AccountForm> :
<AccountForm>
<input type='text' placeholder='Please confirm password to proceed' value={pass} onChange={e=>setPass(e.target.value)} />
<button type='button' onClick={()=>{setConfirmPass(true)}}>Submit</button>
</AccountForm>}

        <LogButton
          onClick={(e) => {
            setSetting(1);
          }}
        >
          Change Username
        </LogButton>
      </div>
      <div>
        {" "}
        <LogButton
          onClick={(e) => {
            setSetting(2);
          }}
        >
          Change Password
        </LogButton>
      </div>

      <div>
        {" "}
        <LogButton
          onClick={(e) => {
            setSetting(3);
          }}
        >
          Change email
        </LogButton>
      </div>

      <div>
        {" "}
        <LogButton
          onClick={(e) => {
            setSetting(4);
          }}
        >
          Delete Account
        </LogButton>
      </div>

      {setting === 1 ? (
        <div>
          <h1>Change Username</h1>
          <LogForm onSubmit={(e) => editUsername(e, oldUsername, newUsername)}>
            <LogInput
              onChange={(e) => setOldUsername(e.target.value)}
              placeholder="Old Username"
            />

            <LogInput
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="New Username"
            />

            <LogButton type="submit">Submit</LogButton>
          </LogForm>
        </div>
      ) : (
        <div></div>
      )}
      {setting === 2 ? (
        <div>
          <h1>Change Password</h1>
          <LogForm
            onSubmit={(e) =>
              editPassword(e, oldUsername, oldPassword, newPassword)
            }
          >
            <LogInput
              onChange={(e) => setOldUsername(e.target.value)}
              placeholder="Username"
            />
            <LogInput
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old Password"
            />
            <LogInput
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New password"
            />
            <LogButton type="submit">Submit</LogButton>
          </LogForm>
        </div>
      ) : (
        <div></div>
      )}

      {setting === 3 ? (
        <div>
          <h1>Change Email</h1>
          <LogForm
            onSubmit={(e) => editEmail(e, oldUsername, oldPassword, newEmail)}
          >
            <LogInput
              onChange={(e) => setOldUsername(e.target.value)}
              placeholder="Username"
            />
            <LogInput
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Password"
            />
            <LogInput
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="New email"
            />
            <LogButton type="submit">Submit</LogButton>
          </LogForm>
        </div>
      ) : (
        <div></div>
      )}
      {setting === 4 ? (
        <div>
          <h1>Delete Account</h1>
          <LogForm onSubmit={(e) => deleteUser(e, oldUsername, oldPassword)}>
            <LogInput
              onChange={(e) => setOldUsername(e.target.value)}
              placeholder="Username"
            />
            <LogInput
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Password"
            />
            <LogButton type="submit">Submit</LogButton>
          </LogForm>
        </div>
      ) : (
        <div></div>
      )}
    </SettingsContainer>
  );
};