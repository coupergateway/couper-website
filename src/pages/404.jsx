import React, { useEffect, useContext } from 'react'

import { mainContext } from '../layout/Frame/MainProvider'
import Structure from '../layout/Structure'
import Typography from '../layout/Typography'

const NotFoundPage = () => {
  const { setTitle } = useContext(mainContext)

  useEffect(() => {
    setTitle('Not found')
  }, [setTitle])

  return (
    <Structure.Wrapper>
      <Structure.ContainerHalf>
        <Typography.H1>
          This Page was not found
        </Typography.H1>
      </Structure.ContainerHalf>
    </Structure.Wrapper>
  )
}

export default NotFoundPage
