import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { logout } from '../store/Authslice'

function Logoutbtn() {
    const dispatch = useDispatch()
    const logouthandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button>Logout</button>
  )
}

export default Logoutbtn
