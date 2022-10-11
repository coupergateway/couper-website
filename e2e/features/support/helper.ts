import {DRIVER} from './world'
import {By, logging, until, WebElement} from 'selenium-webdriver'
import {timeout} from './defaults'


/**
 * Small helper which gets several methods that are commonly used.
 *
 * @export
 * @class Helper
 */
export class Helper {

  /**
   * Returns the logs currently in the browser.
   *
   * @static
   * @returns {Promise<logging.Entry[]>} The logging entries from browser console log.
   * @memberof Helper
   */
  public static async getBrowserLogs(): Promise<logging.Entry[]> {
    return await DRIVER.manage().logs().get('browser')
  }

  /**
   * Get the errors from javascript console.
   *
   * @static
   * @returns {Promise<logging.Entry[]>} The errors which are in the javascript console.
   * @memberof Helper
   */
  public static async getBrowserLogErrors(): Promise<logging.Entry[]> {
    return (await this.getBrowserLogs()).filter((e) => e.level.name === 'SEVERE')
  }

  /**
   * Gets one element with the given selector. Is there more than one of these elements, or no element, an error is thrown.
   *
   * @static
   * @param {string} selector The element selector
   * @memberof Helper
   */
  public static async getOneElement(selector: string): Promise<WebElement> {
    return DRIVER.wait(until.elementLocated(By.css(selector)), timeout, 'Element not found');
  }

  /**
   * Gets one element with the given xpath. Is there more than one of these elements, or no element, an error is thrown.
   *
   * @static
   * @param {string} selector The element xpath
   * @memberof Helper
   */
  public static async getXpathElement(selector: string): Promise<WebElement> {
    return DRIVER.wait(until.elementLocated(By.xpath(selector)), timeout, 'Element not found');
  }
}
