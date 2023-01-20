import './App.css';
import React,{useState} from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {

  const [userList, setuserList] = useState([]);

  const getUserValue=(newUserDetails)=>{
    
    setuserList((prevState)=>[...prevState,newUserDetails])

  }

  return (
    <div >
     <AddUser onUserInput={getUserValue}/>   
     <UserList users={userList}/>  
    </div>
  );
}

export default App;