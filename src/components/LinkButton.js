import React from "react"

export default ({ children, click }) => {
  return (
    <a href={click}>
      <div className='button'>{children}</div>
    </a>
  )
}
