# Bryntum Siesta Demo

Basic demonstration of [Bryntum Siesta](https://www.bryntum.com/products/siesta/) as a
web app testing tool. Shows how to wire up Siesta inside an app and start testing its UI.

Pretty much drop in the `siesta` folder in your app, tweak `pageUrl` and `npm install`
in the `siesta` folder to use in any web app.

## Demo

Turn this:

```javascript
StartTest(t => {
    const Page = {
        name : 'input[name="name"]',
        pswd : 'input[type="password"]',
        login : 'input[type="button"]'
    };

    t.describe('Happy path', t => {
        t.it('should login with name and password', async t => {
            await t.click(Page.name);
            await t.type(Page.name, 'dongryphon');

            await t.click(Page.pswd);
            await t.type(Page.pswd, 'foobar');

            await t.click(Page.login);

            t.expect(1).toBe(1);
        });
    });
});
```

...into this:

![Siesta debugging](docs/siesta-debugging.gif)
