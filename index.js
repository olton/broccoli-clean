const fs = require("fs-extra");
const Plugin = require("broccoli-plugin");

class Clean extends Plugin {
    constructor(inputNodes, options = {}) {
        let nodes = Array.isArray(inputNodes) ? inputNodes : [inputNodes];
        super(nodes, {
            annotation: options.annotation
        });
    }

    build(){
        this.inputPaths.forEach( d => {
            fs.emptyDirSync(d);
        } )
    }
}

module.exports = function clean(...params) {
    return new Clean(...params);
};

module.exports.Clean = Clean;