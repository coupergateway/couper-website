import React from 'react'

import Structure from '.'
import Random from '../../assets/icons/Random'

export default {
  title: 'Layout/Structure',
  component: Structure,
}

const X = () => <div style={{ backgroundColor: 'red', width: '500px', height: '100px' }}>Text</div>
const Y = () => <div style={{ backgroundColor: 'green', width: '400px', height: '200px' }}>Text</div>
const Z = () => <div style={{ backgroundColor: 'blue', width: '300px', height: '300px' }}>Text</div>

const TemplateWrapper = (args) => <Structure.Wrapper {...args}><X /></Structure.Wrapper>
export const Wrapper = TemplateWrapper.bind({})
Wrapper.args = {}

const TemplateContainer = (args) => <Structure.Container {...args}><X /></Structure.Container>
export const Container = TemplateContainer.bind({})
Container.args = {}

const TemplateContainerCenter = (args) => <Structure.ContainerCenter {...args}><X /></Structure.ContainerCenter>
export const ContainerCenter = TemplateContainerCenter.bind({})
ContainerCenter.args = {}

const TemplateContainerRight = (args) => <Structure.ContainerRight {...args}><X /></Structure.ContainerRight>
export const ContainerRight = TemplateContainerRight.bind({})
ContainerRight.args = {}

const TemplateContainerHalf = (args) => <Structure.ContainerHalf {...args}><X /></Structure.ContainerHalf>
export const ContainerHalf = TemplateContainerHalf.bind({})
ContainerHalf.args = {}

const TemplateDistance = (args) => <Structure.Distance {...args} />
export const Distance = TemplateDistance.bind({})
Distance.args = {}

const TemplateDivider = (args) => <Structure.Divider {...args} />
export const Divider = TemplateDivider.bind({})
Divider.args = {}

const TemplateTwoColumns = (args) => (
  <Structure.TwoColumns {...args}>
    <X />
    <Y />
  </Structure.TwoColumns>
)
export const TwoColumns = TemplateTwoColumns.bind({})
TwoColumns.args = {}

const TemplateTwoColumnsCenter = (args) => (
  <Structure.TwoColumnsCenter {...args}>
    <X />
    <Y />
  </Structure.TwoColumnsCenter>
)
export const TwoColumnsCenter = TemplateTwoColumnsCenter.bind({})
TwoColumnsCenter.args = {}

const TemplateTwoColumnsBottom = (args) => (
  <Structure.TwoColumnsBottom {...args}>
    <X />
    <Y />
  </Structure.TwoColumnsBottom>
)
export const TwoColumnsBottom = TemplateTwoColumnsBottom.bind({})
TwoColumnsBottom.args = {}

const TemplateThreeColumns = (args) => (
  <Structure.ThreeColumns {...args}>
    <X />
    <Y />
    <Z />
  </Structure.ThreeColumns>
)
export const ThreeColumns = TemplateThreeColumns.bind({})
ThreeColumns.args = {}

const TemplateThreeColumnsCenter = (args) => (
  <Structure.ThreeColumnsCenter {...args}>
    <X />
    <Y />
    <Z />
  </Structure.ThreeColumnsCenter>
)
export const ThreeColumnsCenter = TemplateThreeColumnsCenter.bind({})
ThreeColumnsCenter.args = {}

const TemplateThreeColumnsBottom = (args) => (
  <Structure.ThreeColumnsBottom {...args}>
    <X />
    <Y />
    <Z />
  </Structure.ThreeColumnsBottom>
)
export const ThreeColumnsBottom = TemplateThreeColumnsBottom.bind({})
ThreeColumnsBottom.args = {}

const TemplateFourColumns = (args) => (
  <Structure.FourColumns {...args}>
    <Z />
    <X />
    <Y />
    <Z />
  </Structure.FourColumns>
)
export const FourColumns = TemplateFourColumns.bind({})
FourColumns.args = {}

const TemplateFourColumnsCenter = (args) => (
  <Structure.FourColumnsCenter {...args}>
    <Z />
    <X />
    <Y />
    <Z />
  </Structure.FourColumnsCenter>
)
export const FourColumnsCenter = TemplateFourColumnsCenter.bind({})
FourColumnsCenter.args = {}

const TemplateFourColumnsBottom = (args) => (
  <Structure.FourColumnsBottom {...args}>
    <Z />
    <X />
    <Y />
    <Z />
  </Structure.FourColumnsBottom>
)
export const FourColumnsBottom = TemplateFourColumnsBottom.bind({})
FourColumnsBottom.args = {}

const TemplateHero = (args) => (
  <Structure.Hero {...args}>
    <X />
    <Y />
  </Structure.Hero>
)
export const Hero = TemplateHero.bind({})
Hero.args = {}

const TemplateHeroSmall = (args) => (
  <Structure.HeroSmall {...args}>
    <Z />
    <h1>xxx</h1>
    <X />
  </Structure.HeroSmall>
)
export const HeroSmall = TemplateHeroSmall.bind({})
HeroSmall.args = {}

const TemplateIcon = (args) => <Structure.Icon {...args}><Random /></Structure.Icon>
export const Icon = TemplateIcon.bind({})
Icon.args = {}

const TemplateIconSmall = (args) => <Structure.IconSmall {...args}><Random /></Structure.IconSmall>
export const IconSmall = TemplateIconSmall.bind({})
IconSmall.args = {}

const TemplateIconMedium = (args) => <Structure.IconMedium {...args}><Random /></Structure.IconMedium>
export const IconMedium = TemplateIconMedium.bind({})
IconMedium.args = {}

const TemplateIconLarge = (args) => <Structure.IconLarge {...args}><Random /></Structure.IconLarge>
export const IconLarge = TemplateIconLarge.bind({})
IconLarge.args = {}

const TemplateIconExtreme = (args) => <Structure.IconExtreme {...args}><Random /></Structure.IconExtreme>
export const IconExtreme = TemplateIconExtreme.bind({})
IconExtreme.args = {}

const TemplateTile = (args) => <Structure.Tile {...args}><X /></Structure.Tile>
export const Tile = TemplateTile.bind({})
Tile.args = {}

const TemplateTileBorder = (args) => <Structure.TileBorder {...args}><X /></Structure.TileBorder>
export const TileBorder = TemplateTileBorder.bind({})
TileBorder.args = {}
