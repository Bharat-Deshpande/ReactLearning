import React, { useEffect, useState } from 'react'


const Register = () => {

  function handleRegister(event){
    event.preventDefault(); //does not reload the page on calling this function
    console.log();
    
  }
  function increaseAge(event){
    event.preventDefault();
    setAge(age+1);
  }

  // let age = 17
  // let email = "bharat@gmail.com"

  //REACT HOOKS
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState(13);

  useEffect(() => {
    console.log("Age: ", age);
    
  }, [age]) // dependency array - we provide this with state variable or any variable that are changing in nature, hit the re-render
  

  
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
    
    <form action="">
      <h1>{age}</h1>
      <button onClick={increaseAge}>Increase</button>
        <div>
          <input type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />  
          <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleRegister}>Submit</button>
        </div>
    </form>
    
  )
}

export default Register
