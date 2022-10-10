/* import React, { useContext } from 'react'
import { navigate } from 'gatsby'
import { useLocation } from '@reach/router'

import { mainContext } from '../../layout/Frame/MainProvider'

import Wrapper from './Styling'

export default function LanguageSelector() {
  const { lang } = useContext(mainContext)
  const location = useLocation()

  return (
    <Wrapper>
      <select
        name='languageSelector'
        value={lang}
        onChange={(ev) => {
          ev.preventDefault()
          const to = ev.currentTarget.value
          const from = to === 'en' ? 'de' : 'en'
          navigate(location.pathname.replace(`/${from}/`, `/${to}/`))
        }}
      >
        <option value='en'>English</option>
        <option value='de'>Deutsch</option>
      </select>
    </Wrapper>
  )
}
 */
