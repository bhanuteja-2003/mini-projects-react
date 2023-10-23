import React from 'react'
import {useNavigate ,useParams} from 'react-router-dom'

const Profile = () => {
  const navigate = useNavigate();
  let {username} = useParams();
  return (
    <div>Profile page of {username}!!
      <button
      onClick={()=>{
        navigate("/about")
      }}
      >go back to about page</button>
    </div>
  )
}

export default Profile