const theme = {
  color: {
    white: '#FFFFFF',
    grayLight: '#E8E8E8',
    gray: '#cbcbcb',
    grayDark: '#848585',
    black: '#1A1B1C',
    greenLight: '#A9D393',
    green: '#65B32E',
    greenDark: '#4f8f26',
    purple: '#AA64AA',
    blue: '#3EA1C1',
    orange: '#F6AB1F',
    red: '#EB3D3E',
  },
  breakpoints: {
    mobile: { min: 320, max: 639 },
    tablet: { min: 640, menu: 720, max: 991 },
    desktop: { min: 992, menu: 1080, max: 1440 },
  },
  dist: {
    border: 3,
    mobile: 16,
    radius: 10,
    tablet: 24,
    desktop: 40,
    menu: 80,
    scrollTop: 130,
  },
  settings: {
    fontSize: 20,
    fontWeight: 300,
  },
}

export const mq = (callback) => (
  `@media (min-width: ${callback(theme.breakpoints)}px)`
)

export default theme
