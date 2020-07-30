import React, { useEffect, useState, createRef } from "react"

export default () => {
  const [background, setBackground] = useState(false)
  const divRef = createRef()
  useEffect(() => {
    console.log(background)
  }, [background])

  useEffect(() => {
    const cachedRef = divRef.current,
      observer = new IntersectionObserver(
        ([e]) => setBackground(e.intersectionRatio < 1),
        { threshold: [1] }
      )

    observer.observe(cachedRef)

    return function () {
      observer.unobserve(cachedRef)
    }
    //eslint-disable-next-line
  }, [])

  return (
    <nav className={background ? "stickyBg" : ""} ref={divRef}>
      <p>Logo</p>

      <ul className='navLinks'>
        <li>
          <a href='#frontpage'>Etusivu</a>
        </li>
        <li>
          <a href='#potatovariety'>Lajikkeet</a>
        </li>
        <li>
          <a href='#contact'>Ota yhteyttä</a>
        </li>
      </ul>

      <p>Button</p>
    </nav>
  )
}
