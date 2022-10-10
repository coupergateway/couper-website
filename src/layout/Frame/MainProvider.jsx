import React, { useEffect, useState, createContext } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export const mainContext = createContext()

export default function MainProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [lang, setLang] = useState('en')
  const [path, setPath] = useState('/en/')
  const [init, setInit] = useState(true)

  const [changelogLoading, setChangelogLoading] = useState(true)
  const [changelogError, setChangelogError] = useState('')
  const [changelogData, setChangelogData] = useState()

  useEffect(() => {
    setMenuOpen(false)
    if (init && path.length > 1) {
      setInit(false)
    }
  }, [init, path])

  useEffect(() => {
    axios.get(`${window.location.origin}/api/github/about`)
      .then((response) => setChangelogData(response.data))
      .catch((response) => setChangelogError(response.toJSON().message))
      .finally(() => setChangelogLoading(false))
  }, [])

  const value = {
    lang,
    menuOpen,
    path,
    title,
    description,
    changelogLoading,
    changelogError,
    changelogData,

    setLang,
    setMenuOpen,
    setPath,
    setTitle,
    setDescription,
  }

  return (
    <mainContext.Provider value={value}>
      {children}
    </mainContext.Provider>
  )
}

MainProvider.propTypes = {
  children: PropTypes.any.isRequired,
}
