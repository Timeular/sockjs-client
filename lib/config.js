var config = {}

module.exports = {
    getConfig: function() {
        return config;
    },
    setConfig: function(cfg) {
        config = cfg;
    }
}