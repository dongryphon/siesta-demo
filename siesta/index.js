const project = new Siesta.Project.Browser();

project.configure({
    title : 'Basic browser test suite',

    preload : [
    ]
});

project.plan(
    '010_sanity.t.js',
    '020_basic.t.js'
);

project.start();
