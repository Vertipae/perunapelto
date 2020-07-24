import React, { useEffect, useRef, useState, createRef } from "react"

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
        <li>Etusivu</li>
        <li>Lajikkeet</li>
        <li>Ota yhteyttä</li>
      </ul>

      <p>Button</p>
    </nav>
  )
}

//https://blog.bitsrc.io/react-useref-and-react-createref-the-difference-afedb9877d0f
// https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY
