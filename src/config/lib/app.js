module.exports.start = () => {
    const app = require("./express")();
    const chalk=require("chalk");
    app.listen(app.get('port'), () => {
        console.log(chalk.bgGray('Server running on port %s in %s mode...'),app.get('port'),app.settings.env);
    });
};