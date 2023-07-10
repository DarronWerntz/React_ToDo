import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <Navbar expand='md' bg='dark' variant='dark' sticky='top' className='p-3'>
        <Navbar.Brand href='/'>Login</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Nav>
            <Link to='/ToDos' className='nav-link'>
              ToDos
            </Link>
            <Link to='/Categories' className='nav-link'>
              Categories
            </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
