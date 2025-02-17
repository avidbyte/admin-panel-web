import prodConfig from './config.prod';
import testConfig from './config.test';

const env = process.env.NODE_ENV || 'development';

const config = env === 'production' ? prodConfig : testConfig;

export default config;
