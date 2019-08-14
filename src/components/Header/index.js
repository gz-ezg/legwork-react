import React, { useState, useEffect } from 'react'

export default function Header() {
  const [data, setdata] = useState('initialState')
  useEffect(e => {
    console.log(data)
  })
  return (
    <div
      onClick={() => {
        setdata('caizexin')
      }}
    >
      {data}
    </div>
  )
}
