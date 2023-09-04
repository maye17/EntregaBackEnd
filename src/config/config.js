const path = require('path');
const { program } = require('commander');
const dotenv = require('dotenv');

const envFilePath = program.opts().mode === 'DEVELOPMENT' ? './.env.development' : './.env.production';
console.log('Ruta completa del archivo .env:', path.resolve(__dirname, envFilePath));

dotenv.config({ path: envFilePath });

const config = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminName: process.env.ADMIN_NAME,
  adminPassword: process.env.ADMIN_PASSWORD,
};

console.log('Valor de PORT:', config.port);
console.log('Valor de MONGO_URL:', config.mongoUrl);
console.log('Valor de ADMIN_NAME:', config.adminName);
console.log('Valor de ADMIN_PASSWORD:', config.adminPassword);

module.exports = config;
/* 
console.log("Options: ", program.opts());
console.log("Valor de mode: ", program.opts().mode);
console.log("Datos no reconocibles: ", program.args); */

/*   port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  adminName: process.env.ADMIN_NAME,
  adminPassword: process.env.ADMIN_PASSWORD, */