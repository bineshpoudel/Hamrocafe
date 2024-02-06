import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        border: '2px solid red',
      }}
    >
      <div style={{ height: '5rem', width: '100%' }}>Header</div>
      <div style={{ display: 'flex', gap: '10rem' }}>
        <Link to='/'>
          <div>Home</div>
        </Link>

        <div>About</div>
        <Link to='/foods'>
          <div>Foods</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
