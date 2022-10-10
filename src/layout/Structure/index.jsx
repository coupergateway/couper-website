import React from 'react'
import PropTypes from 'prop-types'

import Wrapper, {
  Container,
  Distance,
  FourColumns,
  Hero,
  HeroSmall,
  ImageContainer,
  Icon,
  ThreeColumns,
  Tile,
  TileClick,
  TwoColumns,
  TwoColumnsMulti,
} from './Styling'

const Structure = () => <span />

Structure.ImageContainer = ({ children }) => <ImageContainer>{children}</ImageContainer>
Structure.ImageContainer.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Container = ({ children }) => <Container>{children}</Container>
Structure.Container.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Distance = () => <Distance />

Structure.FourColumns = ({ children }) => <FourColumns>{children}</FourColumns>
Structure.FourColumns.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Hero = ({ children }) => <Hero>{children}</Hero>
Structure.Hero.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.HeroSmall = ({ children }) => <HeroSmall>{children}</HeroSmall>
Structure.HeroSmall.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Icon = ({ children }) => <Icon>{children}</Icon>
Structure.Icon.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ThreeColumns = ({ children }) => <ThreeColumns>{children}</ThreeColumns>
Structure.ThreeColumns.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Tile = ({ children }) => <Tile>{children}</Tile>
Structure.Tile.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.TwoColumns = ({ children }) => <TwoColumns>{children}</TwoColumns>
Structure.TwoColumns.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.TwoColumnsMulti = ({ children }) => <TwoColumnsMulti>{children}</TwoColumnsMulti>
Structure.TwoColumnsMulti.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.Wrapper = ({ children, id }) => <Wrapper id={id}>{children}</Wrapper>
Structure.Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  id: PropTypes.string,
}

/* Modified components */
Structure.ContainerCenter = ({ children }) => (
  <Container margin='auto' textAlign='center'>{children}</Container>
)
Structure.ContainerCenter.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ContainerRight = ({ children }) => (
  <Container textAlign='right'>{children}</Container>
)
Structure.ContainerRight.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ContainerHalf = ({ children }) => (
  <Container margin='auto' maxWidth='50%' textAlign='center'>{children}</Container>
)
Structure.ContainerHalf.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ContainerHalfLeft = ({ children }) => (
  <Container maxWidth='50%'>{children}</Container>
)
Structure.ContainerHalfLeft.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.IconSmall = ({ color, children }) => (
  <Icon width={20} height={20} color={color}>{children}</Icon>
)
Structure.IconSmall.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
}

Structure.IconMedium = ({ color, children }) => (
  <Icon width={40} height={40} color={color}>{children}</Icon>
)
Structure.IconMedium.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
}

Structure.IconLarge = ({ color, children }) => (
  <Icon width={80} height={80} color={color}>{children}</Icon>
)
Structure.IconLarge.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
}

Structure.IconExtreme = ({ color, children }) => (
  <Icon width={160} height={160} color={color}>{children}</Icon>
)
Structure.IconExtreme.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
}

Structure.TwoColumnsCenter = ({ children }) => (
  <TwoColumns alignItems='center'>{children}</TwoColumns>
)
Structure.TwoColumnsCenter.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.TwoColumnsBottom = ({ children }) => (
  <TwoColumns alignItems='end'>{children}</TwoColumns>
)
Structure.TwoColumnsBottom.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ThreeColumnsCenter = ({ children }) => (
  <ThreeColumns alignItems='center'>{children}</ThreeColumns>
)
Structure.ThreeColumnsCenter.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.ThreeColumnsBottom = ({ children }) => (
  <ThreeColumns alignItems='end'>{children}</ThreeColumns>
)
Structure.ThreeColumnsBottom.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.FourColumnsCenter = ({ children }) => (
  <FourColumns alignItems='center'>{children}</FourColumns>
)
Structure.FourColumnsCenter.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.FourColumnsBottom = ({ children }) => (
  <FourColumns alignItems='end'>{children}</FourColumns>
)
Structure.FourColumnsBottom.propTypes = {
  children: PropTypes.any.isRequired,
}

Structure.TileBorder = ({
  border,
  color,
  children,
  onClick,
}) => (onClick
  ? <TileClick border={border} color={color} onClick={onClick}>{children}</TileClick>
  : <Tile border={border} color={color}>{children}</Tile>
)

Structure.TileBorder.propTypes = {
  border: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
}

export default Structure
