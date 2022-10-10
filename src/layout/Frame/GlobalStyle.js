/* eslint-disable react-hooks/rules-of-hooks */
import { createGlobalStyle } from 'styled-components'
import 'normalize.css'
import useFont from '../../assets/fonts/index'

const createFontSrc = (font) => `
url("${font.eot}?#iefix") format("embedded-opentype"), 
url("${font.woff2}") format("woff2"), 
url("${font.woff}") format("woff"), 
url("${font.ttf}") format("truetype"), 
url("${font.otf}") format("opentype");`

export default createGlobalStyle`
  @supports(padding:max(0px)) {
    body, header, footer {
      padding-left: min(0vmin, env(safe-area-inset-left));
      padding-right: min(0vmin, env(safe-area-inset-right));
    }
  }

  @font-face {
    font-family: "Sevenval";
    font-style: normal;
    font-weight: 200;
    src: url("${useFont((f) => f.sevenvalLight.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalLight))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: italic;
    font-weight: 200;
    src: url("${useFont((f) => f.sevenvalLightitalic.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalLightitalic))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: normal;
    font-weight: 300;
    src: url("${useFont((fonts) => fonts.sevenvalRegular.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalRegular))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: italic;
    font-weight: 300;
    src: url("${useFont((fonts) => fonts.sevenvalRegularitalic.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalRegularitalic))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: normal;
    font-weight: 400;
    src: url("${useFont((fonts) => fonts.sevenvalMedium.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalMedium))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: italic;
    font-weight: 400;
    src: url("${useFont((fonts) => fonts.sevenvalMediumitalic.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalMediumitalic))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: normal;
    font-weight: 500;
    src: url("${useFont((fonts) => fonts.sevenvalSemibold.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalSemibold))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: italic;
    font-weight: 500;
    src: url("${useFont((fonts) => fonts.sevenvalSemibolditalic.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalSemibolditalic))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: normal;
    font-weight: 600;
    src: url("${useFont((fonts) => fonts.sevenvalBold.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalBold))}
    /* stylelint-enable */
  }

  @font-face {
    font-family: "Sevenval";
    font-style: italic;
    font-weight: 600;
    src: url("${useFont((fonts) => fonts.sevenvalBolditalic.eot)}");
    /* IE9 Compat Modes */
    /* stylelint-disable value-list-comma-newline-after */
    src: ${createFontSrc(useFont((fonts) => fonts.sevenvalBolditalic))}
    /* stylelint-enable */
  }

  html {
    font-family: "Sevenval", sans-serif;
    font-size: ${({ theme }) => theme.settings.fontSize}px;
    font-weight: ${({ theme }) => theme.settings.fontWeight};
    color: ${({ theme }) => theme.color.black};
  }

  * {
    box-sizing: border-box;
    font-display: fallback;
    outline: 0;
  }

  body {
    margin: 0;
    padding: 132px 0 0 0;
  }

  a {
    color: ${({ theme }) => theme.color.green};
    text-decoration: none;

    &:hover, :focus {
      text-decoration: underline;
    }
  }

  p {
    line-height: 1.5;
  }
`
