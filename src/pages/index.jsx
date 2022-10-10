import { useEffect } from 'react'
import { navigate } from 'gatsby'

const Redirect = () => {
  // useEffect(() => navigate(`/${pageContext?.langKey || 'en'}/`), [])
  useEffect(() => navigate('/en/'), [])

  return null
}

export default Redirect
