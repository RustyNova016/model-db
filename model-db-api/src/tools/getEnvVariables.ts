export function getEnvVariables() {
    require('dotenv').config({path: './src/config/dev.env'});
}