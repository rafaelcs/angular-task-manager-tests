## Setup Application:
* Deploy angular-task-manager locally: https://github.com/fresnel-software/angular-task-manager

## Setup Tests:
* Install [Node](http://nodejs.org) (v4.x.x or later)
* `git clone https://github.com/rafaelcs/angular-task-manager-tests`
* `sudo npm install` to install the project dependencies
* `node_modules/.bin/webdriver_manager update` to update drivers

## Run tests:
* run `node_modules/.bin/protractor conf.js`
or on Saucelabs (add your username/key)
* `node_modules/.bin/protractor sauceConf.js`