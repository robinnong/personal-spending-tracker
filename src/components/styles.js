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
  margin-top: 30px;  
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
  display: flex;
  margin-top: 50px;
  margin-bottom: 10px;

  label {margin-right: 10px;} 

  select {
    background-color: ${props => (props.darkMode
    ? "#363636"
    : "white")};   
    color: ${props => (props.darkMode
    ? "#cfcfcf"
    : "#6e6d86")}; 
    width: 180px; 
    padding: 5px; 
    transition: all 0.3s;
  }
  
  & > div {
    position: relative;
    display: inline-block;
    margin-right: 30px;
  }
`

export const Toggle = styled.button` 
  position: relative;
  height: 30px;
  width: 62px;
  background-color: #252525;
  border: none; 
  border-radius: 25px;  
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 9px;
  
  svg {
    transform: scale(1.3);
  }

  &::after {
    content: '';
    height: 20px;
    width: 20px; 
    background-color: grey;
    border-radius: 50%; 
    position: absolute;
    top: 5px; 
    right: 6px;
    transition: all 0.2s;
  }
` 