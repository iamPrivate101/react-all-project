import React from 'react'
import { useParams } from 'react-router-dom'


export default function User() {
    const {userid, age} = useParams()
    console.log(userid);
  return (
    <div>
      <h3>User: {userid} {age} </h3>
    </div>
  )
}
