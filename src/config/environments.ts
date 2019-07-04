const getEnv = (name, defaultVal = '') => process.env[name] || defaultVal;

export const ENVIRONMENTS = {
  PORT: parseInt(getEnv('PORT', '3000'), 10),
  JWT_SECRET: getEnv('JWT_SECRET', '15a2b56c78D3R'),
  DB: {
    HOST: getEnv('DB_HOST', 'localhost'),
    PORT: parseInt(getEnv('DB_PORT', '3306'), 10),
    USERNAME: getEnv('DB_USERNAME', 'root'),
    PASSWORD: getEnv('DB_PASSWORD', 'root'),
    DATABASE: getEnv('DB_DATABASE', 'autopecas'),
  },
};
