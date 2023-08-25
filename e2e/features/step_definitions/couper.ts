import { Then, When, Given } from 'cucumber'
import { Key, By } from 'selenium-webdriver'
import * as chai from 'chai'
import { DRIVER, platform as env, testHost } from '../support/world'

export const timestamp = new Date().getTime().toString()
export const controlKey = (process.platform === 'darwin' && env.indexOf('BROWSERSTACK') < 0) ? Key.COMMAND : Key.CONTROL

export async function getElement(selector: string, type: string = 'xpath', timeout: number = 5000) {
  type = type.toLowerCase()
  switch (type) {
    case 'xpath':
      await DRIVER.wait(async function (DRIVER) {
        let found = await DRIVER.findElements(By.xpath(selector))
        return found.length > 0;
      }, timeout, `${selector} could not be found`)
      return DRIVER.findElement(By.xpath(selector));
    case 'css':
      await DRIVER.wait(async function (DRIVER) {
        let found = await DRIVER.findElements(By.css(selector));
        return found.length > 0;
      }, timeout, `${selector} could not be found`)
      return DRIVER.findElement(By.css(selector));
    default:
      break;
  }
}

export async function elementNotPresent(selector: string, type: string = 'xpath', timeout: number = 5000) {
  type = type.toLowerCase()
  switch (type) {
    case 'xpath':
      return await DRIVER.wait(async function (DRIVER) {
        let found = await DRIVER.findElements(By.xpath(selector))
        return found.length === 0
      }, timeout)
    case 'css':
      return await DRIVER.wait(async function (DRIVER) {
        let found = await DRIVER.findElements(By.css(selector));
        return found.length === 0;
      }, timeout)
    default:
      break;
  }
}

export async function getAmountOfElements(xpath: string) {
  return (await DRIVER.findElements(By.xpath(xpath))).length;
}

export async function compareElementText(xpath: string, expectedText: string, expected: boolean = true, message?: string) {
  const element = await getElement(xpath)

  const elementText = await element?.getAttribute('innerText')

  if (expected === false) {
    return chai.expect(elementText, message).to.not.equal(expectedText)
  } else {
    return chai.expect(elementText, message).to.equal(expectedText)
  }
}

export async function compareElementHref(xpath: string, href: string, expected: boolean = true, message?: string) {
  const element = await getElement(xpath)
  return chai.expect(await element?.getAttribute('href'), message).to.include(href)
}

export async function elementIsChecked(xpath: string, expected: boolean, message?: string) {
  const element = await getElement(xpath)
  const checked = await element?.isSelected()
  chai.expect(checked, message).to.equal(expected)
  return checked
}

export async function setTextToElement(xpath: string, value: string) {
  const input = await getElement(xpath)
  await input?.sendKeys(controlKey, "A")
  await input?.sendKeys(value)
  await DRIVER.sleep(50)
}

export async function clickButton(xpath: string) {
  const element = await getElement(xpath)
  await DRIVER.executeScript('arguments[0].scrollIntoView({block: "center"})', (element))
  await DRIVER.sleep(100)
  await element?.click()
  await DRIVER.sleep(50)
}

const inspect = async(element: string[]) => {
  const [xpath, text, href] = element
  await DRIVER.sleep(150)

  getElement(xpath)
  if (text) {
    await compareElementText(xpath, text)
  }
  if (href) {
    await compareElementHref(xpath, href)
  }
}

const year = new Date().getFullYear()

const elementSelectors = {
  meta: [
    '//head/link[@rel="sitemap"]',
    '//head/base',
    // `//head/link[@hreflang="${lang}"]`,
    // '//head/link[@rel="alternate"][@hreflang="de"]',
    // '//head/link[@rel="alternate"][@hreflang="en"]',
    '//head/link[@rel="canonical"]',
    '//head/link[@rel="icon"]',
    '//head/meta[@name="description"]',
    '//head/meta[@name="viewport"]',
    '//head/meta[@name="robots"]',
    '//head/meta[@property="twitter:title"]',
    '//head/meta[@property="twitter:description"]',
    '//head/meta[@property="twitter:card"]',
    '//head/meta[@property="twitter:site"]',
    '//head/meta[@property="twitter:creator"]',
    '//head/meta[@property="og:url"]',
    '//head/meta[@property="og:title"]',
    '//head/meta[@property="og:description"]',
    '//head/meta[@property="og:site_name"]',
    '//head/meta[@property="og:type"]',
    '//head/meta[@property="og:image"]',
    '//head/meta[@property="og:image:alt"]',
    '//head/meta[@property="og:image:width"]',
    '//head/meta[@property="og:image:height"]',
    '//head/meta[@property="og:image:type"]',
  ],
  header: [
    ['//*[@data-e2e="header-logo"]', '', '/en/'],
    ['//*[@data-e2e="burger-menu-button"]'],

    ['//*[@data-e2e="use-cases"]', 'Use Cases', '/en/use-cases/'],
    ['//*[@data-e2e="docs"]', 'Docs', '/en/docs/'],
    ['//*[@data-e2e="features"]', 'Features', '/en/features/'],
    ['//*[@data-e2e="button-github-header"]'],
  ],
  footer: [
    ['//*[@data-e2e="head-description"]', 'Couper'],
    ['//*[@data-e2e="description"]'],
    ['//*[@data-e2e="social-twitter"]', '', 'https://twitter.com/couper_io'],
    ['//*[@data-e2e="social-github"]', '', 'https://github.com/coupergateway/couper'],
    ['//*[@data-e2e="social-mail"]', '', 'mailto:contact@couper.io'],

    ['//*[@data-e2e="headerLeft"]', 'Content'],
    ['//*[@data-e2e="footer-use-cases"]', 'Use Cases', '/en/use-cases/'],
    ['//*[@data-e2e="footer-docs"]', 'Docs', '/en/docs/'],
    ['//*[@data-e2e="footer-features"]', 'Features', '/en/features/'],

    ['//*[@data-e2e="headerRight"]', 'Support'],
    ['//*[@data-e2e="github-couper"]', 'Open Source', 'https://github.com/coupergateway/couper/'],
    ['//*[@data-e2e="github-issues"]', 'Report a Problem', 'https://github.com/coupergateway/couper/issues/'],
    ['//*[@data-e2e="github-discussions"]', 'Ask a Question', 'https://github.com/coupergateway/couper/discussions'],

    ['//*[@data-e2e="mobile-contact"]', 'Contact', 'mailto:contact@couper.io'],
    ['//*[@data-e2e="desktop-contact"]', 'Contact', 'mailto:contact@couper.io'],
    ['//*[@data-e2e="legal-notice"]', 'Legal Notice', '/en/legal-notice/'],

    ['//*[@data-e2e="copyright"]', `© ${year} Couper. All rights reserved`],
  ],
}


Given('couper.io is opened in {string} with complete metadata', async (lang: string) => {
  await DRIVER.get(`${testHost}/${lang}/`)

  elementSelectors.meta.forEach(async (xpath) => await getElement(xpath))

  await compareElementText('//head/title', 'couper.io - Welcome')
  await compareElementText('//*[@data-e2e="structured-data"]', `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "url": "https://couper.io",
          "name": "couper.io",
          "contactPoint": {
            "@type": "ContactPoint",
            "url": "https://github.com/coupergateway/couper/discussions",
            "contactType": "Technical Support"
          },
          "logo": "https://couper.io/icons/icon-512x512.png",
          "email": "contact@couper.io",
          "description": "Build digital products faster and deliver immediate value to your customers. Couper supports developers in building and running API-driven Web projects.",
          "sameAs": [
            "https://github.com/coupergateway/couper"
          ]
        }`
  )
})

When('{string} is chosen in the top menu in {string}', async (selector: string, lang: string) => {
  await clickButton(`//*[@href='/${lang}/${selector}/']`)
})

Then('the URL contains {string}', async (url: string) => {
  await DRIVER.sleep(150)
  chai.expect(await DRIVER.getCurrentUrl()).to.include(url)
})

Then('{string} is present {int} time(s)', async (tag: string, num: number) => {
  await DRIVER.sleep(2000)
  const xpath = tag === 'svg' ? "//*[local-name()='svg']" : `//${tag}`
  chai.expect(await getAmountOfElements(xpath)).to.equal(num)
})

Then('the header is complete', async () => {
  await DRIVER.sleep(2000)
  elementSelectors.header.forEach(async (element) => await inspect(element))
})

Then('the footer is complete', async () => {
  await DRIVER.sleep(2000)
  elementSelectors.footer.forEach(async (element) => await inspect(element))
})
