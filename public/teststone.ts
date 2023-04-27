import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')


const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

// test('Title shows up when page loads', async () => {
//     const title = await driver.findElement(By.id('title'))
//     const displayed = await title.isDisplayed()
//     expect(displayed).toBe(true)
//     await driver.sleep(5000)
// })

test('add to due button displays player-duo', async ()=> {
    await driver.findElement(By.id('duel')).click()

    await driver.sleep(5000)
})

test('clicking draw btn displays choices', async ()=> {
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(5000)
})