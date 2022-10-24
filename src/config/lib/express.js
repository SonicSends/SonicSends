const express = require("express");
const path = require("path");
const config = require("../index");
const nodeCache = require(path.join(process.cwd(), 'src/config/lib/nodecache'));

module.exports = () => {
    const app = express();

    app.use(express.json());

    app.set("port",nodeCache.getValue('PORT'));
    
    const globalConfig = config.getGlobalConfig();

    globalConfig.routes.forEach(routePath => {
        require(path.resolve(routePath))(app);
    })

    return app;
};