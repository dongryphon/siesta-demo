describe('Login to application', t => {
    const Page = {
        name : 'input[name="name"]',
        pswd : 'input[type="password"]',
        login : 'input[type="button"]'
    };

    t.it('should login with name and password', async t => {
        await t.click(Page.name);
        await t.type(Page.name, 'dongryphon');

        await t.click(Page.pswd);
        await t.type(Page.pswd, 'foobar');

        await t.click(Page.login);

        t.expect(1).toBe(1);
    });
});
