import React from "react"
import Square from "./Square"

export default function FrontPage() {
  return (
    <div className='row-container a'>
      <div className='column-left a1'>
        <div className='textRow'>
          <Square color='#e2cd0f' />
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div className='textRow'>
          <Square color='#e2cd0f' />
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation
          </p>
        </div>
      </div>
      <div className='column-right a2'></div>
    </div>
  )
}
