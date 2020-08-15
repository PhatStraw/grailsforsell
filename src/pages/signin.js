import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import '../css/bare.css'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [ready, setReady] = useState(false)

  const onClick = async (e) => {
    e.preventDefault()
    const newUser = await fetch('https://grailsforsell.herokuapp.com/user/signin', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });
    const user = await newUser.json()
    console.log(user)
    if(user.user._id){
      localStorage.setItem('cart', user.user._id)
      setReady(true)
    }
  }
  if(ready){
    return <Redirect to="/" />
  }
  return (
    <div className="wrap">
      <div className="signUp">
        <form className="signUp">
          <h3>Login</h3>
          <input placeholder="EMAIL" className="input" onChange={e => setEmail(e.target.value)} value={email}/>
          <input placeholder="PASSWORD" className="input" onChange={e => setPassword(e.target.value)} value={password}/>
          <button onClick={onClick}>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default SignIn
