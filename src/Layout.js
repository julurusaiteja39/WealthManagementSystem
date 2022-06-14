import React from 'react'

function Layout() {
  return (
    <div className="container">
        <div className = "app-wrapper">
        <h1> Welcome to application</h1>
        <div className="alignment">
            <h5><a href = "/login">Login</a></h5>
            <h5><a href = "/signin">Signin</a></h5>
        </div>
        </div>
    </div>
  )
}

export default Layout