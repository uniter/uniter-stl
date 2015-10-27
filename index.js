var phpjs = require("phpjs");

// Generator
var phpjsFunctions = (function(){
    var funcs = {};
    for(var key in phpjs) {
        var val = phpjs[key];
        // Skip the array() statement. It should already be present.
        if(key == "array") continue;

        // Only export functions
        if(typeof val == "function") {
            funcs[key] = val;
        }
    }
    return funcs;
})();

module.exports = {
    constantGroups: [],
    classes: {},
    functionGroups: [
        function(internals) {
            return phpjsFunctions;
        }
    ],
    _phpjsFunctions: phpjsFunctions
}
