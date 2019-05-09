import React, { useContext } from "react"
import { AppContext } from "./../base/contextFactory"

const InputField = ({ label, type, placeholder }) => {
  return (
    <>
      <label htmlFor={label.toLowerCase()}>{label}</label>
      <br />
      <input id={label.toLowerCase()} type={type} placeholder={placeholder} />
      <br />
    </>
  )
}

export const Login = () => {
  const submitLoginForm = event => {
    event.preventDefault()
    const {
      username: { value: username },
      password: { value: password }
    } = event.target
    const { _globalState, dispatch } = useContext(AppContext)
    dispatch({ name: "User", action: "POST", params: { username, password } })
  }
  return (
    <form onSubmit={event => submitLoginForm(event)}>
      <InputField label="Username" type="text" placeholder="username" />
      <InputField label="Password" type="password" placeholder="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  )
}
