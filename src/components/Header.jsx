import React from 'react'
import Container from './container/Container'
import Logo from './Logo'
import Logoutbtn from './Logoutbtn'
import { useSelector } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'

function Header ()  {
    const authStatus = useSelector((state)=> state.auth.status)
    const navigate=useNavigate()
  return (
    <div>
      Header
    </div>
  )
}

export default Header
