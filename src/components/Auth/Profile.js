import React from 'react'
import { useAuth } from '../../contexts/AuthContext'

export default function Profile() {

    const { currentUser } = useAuth()

  return (
    <span className='profile p-2'>
        Hello {!currentUser.displayName ? currentUser.email.split('@')[0] : currentUser.displayName.split(' ')[0]}!
        <img src={currentUser.photoURL} alt={currentUser.email} />
    </span>
  )
}
