import React from 'react'
import PropTypes from 'prop-types'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const CodeBlock = ({ language, children }) => (
  <SyntaxHighlighter language={language} style={a11yDark}>
    {children}
  </SyntaxHighlighter>
)
CodeBlock.propTypes = {
  language: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
}
export default CodeBlock
