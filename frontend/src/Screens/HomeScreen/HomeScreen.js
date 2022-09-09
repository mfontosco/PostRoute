import React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div>
        <Link to='/contact'>contact</Link>
        <Link to='/posts'>post</Link>
        <Link to='/createposts'>Createpost</Link>
        <Link to='/login'>login</Link>
        <Link to='/register'>register</Link>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default HomeScreen