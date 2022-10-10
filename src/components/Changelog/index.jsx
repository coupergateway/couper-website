import React, { useContext } from 'react'

import { mainContext } from '../../layout/Frame/MainProvider'
import Changelog from './Component'

export default () => {
  const { changelogData, changelogLoading, changelogError } = useContext(mainContext)

  return (
    <Changelog
      changelogData={changelogData}
      changelogLoading={changelogLoading}
      changelogError={changelogError}
    />
  )
}
