const project = new Siesta.Project.Browser();

project.configure({
    title : 'Basic browser test suite',
    pageUrl: '../index.html',

    preload : [
    ]
});

project.plan(
    {
        group : 'Login',
        items : [
            'login/login.t.js'
        ]
    }
);

project.start();
