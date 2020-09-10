import styled from "styled-components"; 

export const Body = styled.div`  
  font-size: 1.6rem; 
  color: ${props => (props.darkMode
    ? "#d6d6d6"
    : "#202020")}; 
  min-width: 320px;
  font-family: 'Open Sans', sans-serif; 
  background-color: ${props => (props.darkMode
    ? "#1c1c1c" 
    : "#f1f1f1")}; 
  min-height: 100vh;
  transition: background-color 0.3s;
`

export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px 20px 20px; 
  transition: all 0.3s;
  background-color: ${props => (props.darkMode
    ? "#363636" 
    : "white")};   
  box-shadow: ${props => (props.darkMode 
    ? "none"
    : "5px 5px 3px 2px rgba(173, 173, 173, 0.1)")};  
`

export const TableStyle = styled.table`
  width: 100%;
  margin-top: 20px;  
  border-collapse: collapse;  
  border-radius: 5px;
  overflow: hidden; 
  box-shadow: ${props => (props.darkMode
    ? "none"
    : "0px 0px 5px 2px rgba(129, 129, 129, 0.116)")}; 
  background-color:  ${props => (props.darkMode
    ? "#363636"
    : "white")};   
  transition: all 0.3s;

  th { 
    text-align: left;
    font-size: 1.5rem; 
  }

  th:not(:last-of-type) { 
    overflow: auto; 
    width: calc((100% - 50px)/ 3);
  }  

  th:last-of-type { max-width: 70px; } 

  tr:not(:first-of-type) { border-top: 1px solid rgba(105, 105, 105, 0.158); }

  th, td {padding: 15px;} 

  button { color: white;}

  thead { 
    background-color: #252525; 
    color: #8c8eff;
  } 
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;  
  margin-top: 10px;
  max-height: ${props => (props.visible
    ? "500px" 
    : "0")};
  overflow: ${props => (props.visible
      ? "none"
      : "hidden")};
  transition: max-height 0.4s linear;
  
  input, select {
    padding: 10px;
    height: 45px; 
    margin-bottom: 10px;
    width: 100%;
    background-color:  ${props => (props.darkMode
      ? "#4d4d4d"
      : "#f1f2fa")};  
    color:  ${props => (props.darkMode
      ? "#cfcfcf"
      : "#6e6d86")};  
    transition: all 0.3s;
  }

  div {
    margin-right: 20px; 
    position: relative;  
    overflow-y: auto;
  } 
`

export const VisibilityFilters = styled.form` 
  label {margin-right: 10px;} 

  select {
    background-color: transparent;
    color: ${props => (props.darkMode
    ? "#cfcfcf"
    : "#6e6d86")}; 
    border-bottom: ${props => (props.darkMode
    ? "1px solid white"
    : "1px solid black")}; 
    width: 180px;  
    padding: 5px; 
    transition: all 0.3s;
  } 
  
  & > div {
    position: relative;
    display: inline-block;
    margin-left: 30px;
  }
`

export const Toggle = styled.button` 
  position: relative;
  height: 30px;
  width: 62px;
  background-color: #252525;
  border: 1px solid white; 
  border-radius: 25px;  
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9px;
  
  svg {
    transform: scale(1.2);
  }
  
  &::after {
    content: '';
    height: 20px;
    width: 20px; 
    background-color: grey;
    border-radius: 50%; 
    position: absolute; 
    right: 5px;
    transition: all 0.2s;
  }
  ` 

export const Button = styled.button`
  text-transform: uppercase;
  background-color: #676aff; 
  border-radius: 5px;
  color: white;
  padding: 5px 15px;
  font-weight: 300;
  margin-right: 20px;
  font-size: 1.4rem;
  transition: all 0.3s;

  &:hover,
  &:focus { background-color: #8c8fff; }
`