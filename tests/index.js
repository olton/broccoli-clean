const fs = require("fs-extra");
const {createBuilder} = require("broccoli-test-helper");
const clean = require("..");
const assert = require('assert');

describe('broccoli-clean', () => {
    let input, output, FIXTURE_INPUT;

    beforeEach(() => {
        fs.ensureDirSync(__dirname + '/output/js');
        fs.ensureFileSync(__dirname + '/output/js/index.js');
        fs.ensureDirSync(__dirname + '/output/css');
        fs.ensureFileSync(__dirname + '/output/css/style.css');
    });

    afterEach(() => {
        fs.remove(__dirname + '/output');
        output && output.dispose();
    });

    describe('Empty folder(s)', () => {

        it('Empty one folder', async ()=>{
            const dir = __dirname + '/output';
            let node = clean(dir);

            output = createBuilder(node);
            await output.build();

            assert.equal(fs.existsSync(dir+"/js/index.js"), false);
        });
    });
})