const Jasmine = require('jasmine');
const JasmineConsoleResporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();

let reporter = new JasmineConsoleResporter({
    colors: 1,
    /* Para las palabras */
    cleanStack: 3,
    verbosity: 4,
    listStyle: 'indent',
    activity: false
});

jasmine.addReporter(reporter);
jasmine.showColors(true);
jasmine.loadConfigFile("./spec/jasmine.json");
jasmine.execute();
