// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { on } from 'events';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  timeout : 30 * 1000,
  expect : 
  {
    timeout : 5000
  },
  //reporter : 'html',
  reporter: [['allure-playwright', 'html']],

  // for assersitions there is a seperate timeout and we can use it through expect  
  // there are two timeouts  1 for every step and another for asswrtions.

  
  use: {

    browserName : 'chromium',
    headless: false,
    screenshot : 'on',
    trace : 'retain-on-failure',

  
  
    
  },

  

    
});
module.exports =  config

