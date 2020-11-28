# Cypress -Sample Test Automation Framework

## Installation
- Node.js
- on the root 'cypress-sample-test-automation-framework' folder, where the package.json resides, run the command:
  ###### npm install
 _______________________________________________
 ## Quick steps for writing a new UI test:
 1. Make a copy of the file 'cypress/specs/test-template.js' and place it to the specs folder as well
     (e.g. cypress/specs/login-spec.js)
 2. Make a copy of the file 'cypress/specs/page-template.js' and place it to the 'pages' folder as well, or to a sub-folder when applicable
     (e.g. 'cypress/pages/portal/login-page.js')
 3. Make a new instance of the newly created page in the 'cypress/pages/ui-spec.js' and put it in module.exports like all other pages
 4. Open login-page.js - create a new element selector and corresponding methods, as shown in other examples
 5. Open login-spec.js - start typing "ui.", find the reference to your page and the method you want to use
 
 For more instructions, find video with the above steps here:
 https://www.loom.com/share/53c50684bef741e384b6d25798824e76
 or pull the branch that has this code already - 
 
  _______________________________________________
 ## Quick steps for adding API calls in tests:
 1. Make a copy of folder 'cypress/api-utils/endpoints/template-api-folder'
      (e.g. cypress/api-utils/endpoints/pricing)
 2. Adjust methods, data and properties in the sub-folders
      (e.g. cypress/api-utils/endpoints/pricing/collection.js &
            cypress/api-utils/endpoints/pricing/payload.js)
3. Make a new variable and object property for the newly created collection in the 'cypress/api-utils/api-spec.js'
4. Open any spec file - start typing "api.", find the reference to your endpoint and the method you want to use
(Make sure you call api.auth.get_token() before any other endpoint that requires authentication);
 _______________________________________________

- to open Cypress native runner, use the command:
  ###### npm run openRunner
 _______________________________________________

- to run all Tests with Chrome browser, use the command:
  ###### npm run allTests
 _______________________________________________

- to run all Tests and open Allure Report afterwards use the command
  ###### npm run allTestsAndReport
 _______________________________________________

- to run all Tests in parallel and open Allure Report afterwards use the command
  ###### npm run parallelTestsAndReport
 _______________________________________________

- to open an Allure Report, navigate to folder report and run the command
  ###### allure serve allure-results
 _______________________________________________

- to debug test failures or get more details about test execution
  ###### find screenshots, snapshots, logs and videos folder on this path 'cypress-sample-test-automation-framework/cypress'
 _______________________________________________

- to ask for additional instructions or support, send email to:
  ###### sumejja.s.i@gmail.com
 _______________________________________________


