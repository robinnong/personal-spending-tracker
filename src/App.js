import React from 'react';  
import { connect } from 'react-redux';
import { setDarkMode } from './redux/actions';  
import AddItem from './components/AddItem';
import Filter from './containers/Filter';
import List from './containers/List';  
import Balance from './components/Balance'; 
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { Body, Header, Toggle, Button } from './components/styles';
import './App.css'; 

const mapStateToProps = (state) => ({ darkMode: state.darkMode });

const App = ({ darkMode, dispatch }) => (
  <Body darkMode={darkMode}>
    <Header darkMode={darkMode}>  
      <div className="headerBar">
        <Button>Log In</Button>
        <Toggle
          className={darkMode ? "move" : null}
          aria-label="Toggle light and dark mode"
          onClick={() => dispatch(setDarkMode())}
        >
          <WbSunnyIcon />  
          <Brightness2Icon />
        </Toggle> 
      </div>
      <h1>Personal Spending Tracker</h1> 
      <Balance />
      <AddItem />
    </Header>
    <main className="wrapper">     
      <Filter />  
      <List /> 
    </main>
  </Body>
)

export default connect(mapStateToProps)(App);
