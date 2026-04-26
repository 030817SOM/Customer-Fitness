import React from 'react'

const Login = () => {
  return (
    <div className='login-page'>
        <section className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="cta-btn primary">Login</button>
            </form>
        </section>
    </div>
  )
}

export default Login;