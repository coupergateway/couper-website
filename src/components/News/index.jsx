import React, { useContext } from 'react'
import Link from './Styling'

import { mainContext } from '../../layout/Frame/MainProvider'

export default () => {
  const { changelogData, changelogError, changelogLoading } = useContext(mainContext)

  if (changelogLoading || changelogError || !changelogData || !changelogData.published_at || !changelogData.name) {
    return null
  }

  return (
    <Link to='/en/docs/#changelog'>
      {`Version ${changelogData.name} last updated: ${changelogData.published_at.split('T')[0]}`}
    </Link>
  )
}
