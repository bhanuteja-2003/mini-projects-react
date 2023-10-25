import React from 'react'
import ProfileChange from './ProfileChange'
import { useContext } from 'react'
import { AppContext } from '../App'

const ProfilePage = () => {
  const {counter} = useContext(AppContext);
  return (
    <>
    <h1>Profile Page</h1>
    <p>{counter}</p>
    <ProfileChange />
    </>
  )
}

export default ProfilePage;