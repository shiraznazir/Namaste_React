import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
    const err  = useRouteError();
  return (
    <>
      <h1>Opps!!!</h1>
      <h3>Something went wrong</h3>
      <h4>{err.status} : {err.statusText}</h4>
    </>
  )
}

export default Error