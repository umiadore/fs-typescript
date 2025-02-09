import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPage() {
  return (
    <div>
      <h3>Error 404:</h3>
      <p>no such page found 😮</p>
      <Link to="/">go back home</Link>
    </div>
  )
}
