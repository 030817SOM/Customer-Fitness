import React from 'react'

const Register = () => {
  return (
    <div className='register-page'>
        <section className="register-container">
            <h2>Register</h2>
            <form className="register-form">
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="phone" placeholder="Phone Number" required />
                <input type="password" placeholder="Password" required />

                <button type="submit" className="cta-btn primary">Register</button>
            </form>
        </section>
    </div>
  )
}

export default Register