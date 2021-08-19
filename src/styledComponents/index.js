import styled from 'styled-components';
export const PageContainer= styled.div `
    width: 100vw;
    height: 85vh;
`;
export const LogButton = styled.button`
width: 300px;
height: 5vh;
margin: 30px;
background: var(--secondary);
font-size: 20px;
color: var(--primary);
border: clear;
border-radius: 20px;
&:hover { background-color: rgb(116, 195, 240); color: var(--white) }
`;
export const LogForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
`;
export const LogInput = styled.input`
  width: 300px;
  padding: 10px;
  margin: 5px;
`;
export const SettingsContainer = styled.div`
  color: whitesmoke;
  width: 100vw;
  height: 85vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
// export const ProfileContainer= styled.div`
//     width:200vw;
//     height:100vh;
// `;
export const AccountTitle = styled.h1`
font-size: 3.5rem;
font-weight: 800;
color: black; 
line-height: 42px;
text-transform: uppercase;
text-shadow: 0 2px white;
font-family: 'Ultra', sans-serif;
`