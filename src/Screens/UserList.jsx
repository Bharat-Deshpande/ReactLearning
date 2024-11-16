import React from 'react'
import UserCard from '../Components/UserCard'
import data from '../utils/data'

const UserList = () => {

  return (
    <div>
     {data.map(({name,email,rollNo}) => (
            <UserCard name={name} rollNo={rollNo} email={email}/>
      ))}
    </div>
  )
}

export default UserList
