import {setWorldConstructor, setDefaultTimeout, After, Before} from 'cucumber'
import {Builder, ThenableWebDriver, Capabilities} from 'selenium-webdriver'
import * as defaults from './defaults'

// The browser to use with the selenium webdriver
export const platform = process.env.PLATFORM || defaults.platform || 'unknown'
export const testhost = process.env.TESTHOST || "http://localhost:4080"
const seleniumRemoteUrl = process.env.SELENIUM_REMOTE_URL

/**
 * Current initialized driver for using with e2e tests.
 */
export var DRIVER: ThenableWebDriver
export let scenarioName = "Initial Test " + new Date().getTime()

/**
 * This class helps configuring the cucumber framework and selenium webdriver.
 */
class World {
  public driver
  constructor() {
  }
}

// init the cucumber framework
setWorldConstructor(World)
setDefaultTimeout(defaults.timeout)

// build webdriver for local test devices
function buildLocalDriver() {
  const chromeCapabilities = Capabilities.chrome();
  chromeCapabilities.set('chromeOptions', {
    'args': ['--headless', '--disable-gpu']
  });
  if (platform === 'CHROME') {
    return new Builder()
      .withCapabilities(chromeCapabilities)
      .forBrowser('chrome').build()
  }
  if (platform === 'CI') {
    return new Builder()
      .usingServer(seleniumRemoteUrl)
      .withCapabilities(chromeCapabilities)
      .forBrowser('chrome').build()
  }
}

function replaceUmlauts(word) {
  const umlautMap = {
    '\u00dc': 'UE',
    '\u00c4': 'AE',
    '\u00d6': 'OE',
    '\u00fc': 'ue',
    '\u00e4': 'ae',
    '\u00f6': 'oe',
    '\u00df': 'ss',
  }
  return word
    .replace(/[\u00dc|\u00c4|\u00d6][a-z]/g, (a) => {
      const big = umlautMap[a.slice(0, 1)]
      return big.charAt(0) + big.charAt(1).toLowerCase() + a.slice(1)
    })
    .replace(new RegExp('[' + Object.keys(umlautMap).join('|') + ']', "g"),
      (a) => umlautMap[a]
    )
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function(str, index) {
        return index == 0 ? str.toLowerCase() : str.toUpperCase();
    }).replace(/\s+/g, '')
}

Before(function(scenario) {
  scenarioName = scenario.pickle.name
  console.log("\n\n" + scenarioName)
  scenarioName = replaceUmlauts(scenarioName)

  DRIVER = buildLocalDriver()
  return Promise.resolve()
})



After(function () {
  return DRIVER.quit()
    .then(() => new Promise((resolve, reject) => {
      resolve('')
      return
    }))
})
