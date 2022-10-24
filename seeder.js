const path = require("path");
const chalk = require('chalk');

const init = async () => {
    const config = require(path.join(process.cwd(), "src/config"));
    await config.initEnvVariables();

    const sequelize = require(path.join(process.cwd(), "src/config/lib/sequelize"));
    await sequelize.query("CREATE DATABASE IF NOT EXISTS short_muvi", (err, res) => {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    });

    const User = require(path.join(process.cwd(),'src/modules/platform/user/user.model.js'));

    await sequelize.sync();
    console.log(chalk.bgGreen('Seeding Success !'));


};

init();