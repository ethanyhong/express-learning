import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.resolve(__dirname, '../settings.env')
});
export const testEnvironmentVariable = process.env.TEST_ENV_VARIABLE;