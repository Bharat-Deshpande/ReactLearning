import React from 'react'

const Register = () => {

  function handleRegister(event){
    event.preventDefault(); //does not reload the page on calling this function
    console.log("Hello World");
    
  }

  let age = 17
  let email = "bharat@gmail.com"

  //REACT HOOKS

  
  return (
    // //If the user is above the age 18 then only show the form
    // <form action="">
    //   {/* {Conditional rendering} */}
    //   {age > 18 && email == "bharat@gmail.com"? (
    //     <div>
    //       <input type="email" placeholder='Enter your Email'/>
    //       <button onClick={handleRegister}>Submit</button>
    //     </div>
    //   ):(
    //      <h1>You are not Bharat </h1>
    //   )}
    // </form>


    //REACT HOOKS
    <>
    
    </>
  )
}

export default Register
