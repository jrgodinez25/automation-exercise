🛠 Prerequisites

1. Download this project as zip file from Github https://github.com/jrgodinez25/automation-exercise.git
2. Extract the zip file in your local
3. Run the 01_install_prerequisites.bat as Administrator (This is an automated batch script to download and install NVM Node Version Manager and Node.js
4. After installing the Prerequisites (NVM & Node.js) Run the 02_install_cypress.bat to install Cypress
5. After Cypress is installed run the 03_open_cypress.bat to open Cypress for the first time.

✅ Note
- If 01_install_prerequisites.bat failed to install NVM and Node.js you to install it manually.
- NMV and Node.js installers already included in Github repository

Step:

1. Open Cypress
2. Select E2E Testing
3. Choose a browser, select Edge and click Start E2E Testing in Edge
4. In Specs under cypress\e2e directory, execute or click the "user_auth.cy.js" test case
5. After executing the test case Check the results for "New User Registration and Login Verification", results should be PASS without any issues.
6. In Specs under cypress\e2e directory, execute or click the "product_flow.cy.js" test case
7. After executing the test case Check the results for "Product Search and Add to Cart" results should be PASS without any issues.
