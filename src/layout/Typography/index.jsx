import React from 'react'
import PropTypes from 'prop-types'

import P, {
  H1,
  H2,
  H3,
  H4,
} from './Styling'

const headline = 'Headline'
const lorem = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor 
sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
ut labore et dolore magna aliquyam erat.`

const Typography = ({ children }) => children
Typography.H1 = ({ children }) => (
  <H1>{children || `${headline} 1`}</H1>
)
Typography.H1.propTypes = {
  children: PropTypes.any.isRequired,
}

Typography.H2 = ({ children, minHeight }) => (
  <H2 minHeight={minHeight}>{children || `${headline} 2`}</H2>
)
Typography.H2.propTypes = {
  children: PropTypes.any.isRequired,
  minHeight: PropTypes.number,
}

Typography.H2line = ({
  color,
  center,
  minHeight,
  children,
}) => (
  <H2 line color={color} center={center} minHeight={minHeight}>{children || `${headline} 2`}</H2>
)
Typography.H2line.propTypes = {
  children: PropTypes.any.isRequired,
  minHeight: PropTypes.number,
  center: PropTypes.string,
  color: PropTypes.string,

}

Typography.H3 = ({ children, minHeight }) => (
  <H3 minHeight={minHeight}>{children || `${headline} 3`}</H3>
)
Typography.H3.propTypes = {
  children: PropTypes.any.isRequired,
  minHeight: PropTypes.number,
}

Typography.H3line = ({
  color,
  center,
  minHeight,
  children,
}) => (
  <H3 line color={color} center={center} minHeight={minHeight}>{children || `${headline} 2`}</H3>
)
Typography.H3line.propTypes = {
  children: PropTypes.any.isRequired,
  minHeight: PropTypes.number,
  center: PropTypes.string,
  color: PropTypes.string,
}

Typography.H4 = ({ children }) => (
  <H4>{children || `${headline} 4`}</H4>
)
Typography.H4.propTypes = {
  children: PropTypes.any.isRequired,
}

Typography.Paragraph = ({ children, minHeight, color }) => (
  <P minHeight={minHeight} color={color}>{children || lorem}</P>
)
Typography.Paragraph.propTypes = {
  children: PropTypes.any.isRequired,
  minHeight: PropTypes.number,
  color: PropTypes.string,
}

export default Typography
