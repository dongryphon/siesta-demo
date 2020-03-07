const webdriver = require('selenium-webdriver');

describe('Happy path', function() {
    let driver;

    const Page = {
        name : 'name',
        pswd : 'pswd',
        login : 'login',

        getEl(locator) {
            return driver.findElement(webdriver.By.name(Page[locator]));
        }
    };

    before(function() {
        driver = new webdriver.Builder().
            withCapabilities({
                browserName : 'firefox'
            }).
            build();

        driver.get('http://localhost/myapp');
    });

    after(function() {
        if (driver) {
            driver.quit();
            driver = null;
        }
    });

    it('should login with name and password', async function() {
        let title = await driver.getTitle();

        console.log(title);

        const nameEl = Page.getEl('name');
        nameEl.click();
        nameEl.sendKeys('dongryphon');

        const pswdEl = Page.getEl('pswd');
        pswdEl.click();
        pswdEl.sendKeys('foobar');

        const loginEl = Page.getEl('login');
        loginEl.click();
    });
});
