
<h3><ins>Description:</h3>

An example project is one about UI Automation using Playwright javascript.

<h3><ins>Requirements</h3>
  
- NodeJS
- a code editor (like VS Code)
- Playwright CLI
- You can then initialize a project using the command npm init playwright@latest.

<h3><ins>Project Initialization</h3>

- Create a new directory for your project.
- Open the directory in your code editor.
- Open a terminal within the editor.
- Run the command npm init playwright@latest to initialize a Playwright project. 

<h3><ins>Browser Configuration</h3>
  
- The npm init command will guide you through selecting the desired browsers (Chromium, Firefox, WebKit, etc.). 

<h3><ins>Spec File run command </h3>
  
This is for Search Functionality work

- npx playwright test ./tests/search.spec.js --headed
  
 This is for Add to Cart and Remove from Cart work 
- npx playwright test ./tests/cart.spec.js --headed
