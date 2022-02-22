require('chromedriver')

const {Builder, Capabilities, By} = require('selenium-webdriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()


beforeAll(async () => {
    await driver.get(`http://127.0.0.1:5500/movieList/index.html`)
})

test(`Movie List Interaction Test:`, async () => {

    let inputField = await driver.findElement(By.xpath("//input"))
    
    await driver.sleep(2000)
    await inputField.sendKeys('Here is my movie\n')
    let span = await driver.findElement(By.xpath("//span"))
    await driver.sleep(2000)
    await span.click()
    await driver.sleep(2000)
    await span.click()
    await driver.sleep(2000)
    let delBtn = await driver.findElement(By.xpath("//*[text()='x']"))
    await delBtn.click()
    await driver.sleep(2000)
})



afterAll(async () => {
    await driver.quit()
})