import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const {userid}=useParams()
  return (
    <div className='bg-slate-400 text-slate-950 p-4 text-3xl'>User:{userid}</div>
  )
}

