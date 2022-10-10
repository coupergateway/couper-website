import React, { useContext, useEffect } from 'react'

import { mainContext } from '../../layout/Frame/MainProvider'
import Header from './Component'

export default () => {
  const {
    menuOpen,
    setMenuOpen,
    lang,
    path,
  } = useContext(mainContext)

  useEffect(() => {
    function resizeListener() {
      if (menuOpen) {
        setMenuOpen(false)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', resizeListener)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', resizeListener)
      }
    }
  }, [menuOpen, setMenuOpen])

  return (
    <Header
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
      lang={lang}
      path={path}
    />
  )
}
