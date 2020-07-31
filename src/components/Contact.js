import React from "react"

export default function Contact() {
  return (
    <div className='row-container c' id='contact'>
      <div className='column-left c1'>
        <form>
          <h2>Ota yhteyttä</h2>
          <label>Nimi</label>
          <input type='text' name='name' required />
          <label>Sähköposti</label>
          <input type='email' name='email' required />
          <label>Aihe</label>
          <input type='text' name='heading' required />
          <label>Viesti</label>
          <textarea name='message' required cols='30' rows='8' />
          <button type='submit'>Lähetä viesti</button>
        </form>
      </div>
      <div className='column-right c2'></div>
    </div>
  )
}
