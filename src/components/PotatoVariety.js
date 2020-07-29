import React from "react"
import Square from "./Square"

export default function PotatoVariety() {
  return (
    <div className='row-container b'>
      <div className='column-left b1'></div>
      <div className='column-right b2'>
        <h3 style={{ color: "white" }}>Maecenas sodales et lacus:</h3>
        <div className='textRow'>
          <Square color='#C2E595' />
          <p style={{ color: "white" }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque
          </p>
        </div>
        <div className='textRow'>
          <Square color='#C2E595' />
          <p style={{ color: "white" }}>
            Nam a nunc sit amet ligula commodo molestie sed vel justo.
          </p>
        </div>
      </div>
    </div>
  )
}
