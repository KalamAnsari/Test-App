import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'
import classes from './AddUser.module.css'

const AddUser = (props) => {

    const [UserName, setUserName] = useState('');

    const [EnteredAge, setEnteredAge] = useState('')
   
    const [error, setError]=useState();

    const submitHandler = event => {
        event.preventDefault();
        
        if(UserName.trim().length===0 ){
            setError({
                title:"user name empty",
                message:"Some error occured"
            })
            return; 
        }else if(+EnteredAge<1){
            setError({
                title:"please enter the  age",
                message:"An error accured (age should be valid)"
            })
            return ;
        }
        setUserName('');
        setEnteredAge('');


        const getUserInput={
            name:UserName,
            age:EnteredAge,
            id:Math.random().toString(),
        }
        props.onUserInput(getUserInput);
    }

    const userChangeHandler = event => {
        setUserName(event.target.value);
    }
    const ageChangeHandler = event => setEnteredAge(event.target.value);

    const errorHandler=()=>{
        setError(null);
    }
    function funcionCall(){
    }
    
    const isValid=true;
    return (
        <>
       {error &&  <ErrorModal title={error.title} message={error.message} onErrorHnadler={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Enter Name</label>
                <input id="username" className={`${!isValid && classes.valid} `} type="text" value={UserName} onChange={userChangeHandler} />

                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="number" value={EnteredAge} onChange={ageChangeHandler} />
                <Button type='submit' onClick={funcionCall()}>Add User</Button >
            </form>
        </Card>
        </>
    )
}

export default AddUser