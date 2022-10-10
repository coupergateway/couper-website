import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

import Typography from '../../layout/Typography'
import Cta from '../Cta'

import IconGithub from '../Header/IconGithub'

import Wrapper, { LastUpdated } from './Styling'

export default function Changelog({ changelogData, changelogLoading, changelogError }) {
  if (changelogLoading) {
    return (
      <>
        <Typography.H2line color='purple'>Changelog</Typography.H2line>
        <Typography.Paragraph>Loading... Please wait.</Typography.Paragraph>
      </>
    )
  }

  if (changelogError && !changelogData) {
    return (
      <>
        <Typography.H2line color='red'>Changelog</Typography.H2line>
        <Typography.Paragraph>
          Could not be loaded because:
          {' '}
          {changelogError}
        </Typography.Paragraph>
      </>
    )
  }

  return (
    <>
      <Typography.H2line color='green'>
        Changelog
        {' '}
        {changelogData.published_at && (
          <LastUpdated>
            {`(last updated: ${changelogData.published_at.split('T')[0]})`}
          </LastUpdated>
        )}
      </Typography.H2line>
      <Wrapper>
        {changelogData.body
          ? (
            <>
              <ReactMarkdown>
                {changelogData.body
                  .replace(/(<([^>]+)>)/ig, '')
                  .replace(/\]\((?!https?:\/\/)([^\/]*)/gi, '](https://github.com/avenga/couper/tree/master/$1')
                }
              </ReactMarkdown>
              <br />
              <Cta
                e2e='button-github-header'
                name='button-github-header'
                href='https://github.com/avenga/couper/'
              >
                <div>
                  <div className='icon'>
                    View on GitHub
                    <IconGithub />
                  </div>
                </div>
              </Cta>
            </>
          )
          : <>No content</>}
      </Wrapper>
    </>
  )
}
Changelog.propTypes = {
  changelogData: PropTypes.object,
  changelogLoading: PropTypes.bool.isRequired,
  changelogError: PropTypes.string,
}
