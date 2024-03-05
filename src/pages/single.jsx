import React from 'react'
import Pencil from '../image/pencil.png'
import Delete from '../image/delete.png'
import User from '../image/user.png'
import Menu from '../components/Menu'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D' />
      <div className='user'>
        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D" alt=''/>
        <div className='info'>
          <span>User</span>
          <p>posted 2 days ago</p>
        </div>
        <div className='edit'> 
        <Link to={`/write?edit=2`}>
            <img src={Pencil} alt="" />
        </Link>
            <img src={Delete} alt="" />
        </div>
      </div>
      <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis porttitor dictum.</h1>
      <p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis porttitor dictum.
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque facilisis porttitor dictum.
        </p>
      </p>  
      </div>
      <Menu/>
    </div>
  )
}

export default Single