![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (October 11, 2016): SPA Basics @ Women Who Code Tampa
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)


# Goals

1. Scaffold a `create-react-app` application
1. Understand how `create-react-app` treats JavaScript, dependencies, CSS, and assets

# ReHacked

## Goal 1: Scaffold a `create-react-app` application

### Explanation

* Thanks to the `create-react-app` scaffolder, someone learning React can get up and going quickly without having to worry about Babel, Webpack, and other build tools
* Using the `create-react-app` scaffolder is as simple as one command
* We will create a baseline app on your forked copy of this repo to begin

### Instructions

In the root of this repo, run a shell and execute the following commands

1. `create-react-app ./`
1. `mv README.md README.facebook.md`
1. `mv README.old.md README.md`

## Goal 2: Understand how `create-react-app` treats JavaScript, dependencies, CSS, and assets

### Explanation

* Because it encapsulates Webpack, Babel, and PostCSS, we have to understnd how `create-react-app` builds your application
* By default, you get served an autoreloading webserver which will reload itself on JavaScript, CSS, or asset changes


### Instructions

1. In a shell, execute `npm start`
1. Browse to `http://localhost:9000`
1. In the source code, modify `/src/App.js` and change the text from "Welcome to React" to "Welcome to Women Who Code Tampa"
1. Verify that the browser automatically reloaded
1. [Save this image](http://TODO/logo/of/WWDC) to `/src`
1. At the top of `/src/App.js`, add `import wwdcLogo from './wwdc_logo.png`
1. In line 10 of `/src/App.js`, replace `{logo}` with `{wwdcLogo}`
1. Verify that the browser automatically reloaded with the new image
1. Open `/src/App.css`.  Change the `color` of the `App-header` class to `red` and save
1. Verify that the browser automatically reloaded with the new style
1. Open `/src/App.js`. One line 16, add this line of code: `<ThisDoesNotExist />`. Verify that ESLint warns about something not being defined.
1. Remove `<ThisDoesNotExist />` from the previous step.  Replace it with `{emptyArray[1].replace(',', '') === 'broke' && <div>It's broke!</div>}` and save the file
1. Verify the error from ESLint and the page
1. Remove the code from the prior step and save.  Ensure the app reloads is now okay.

# Summary

In this section, we have accomplished the following:

* Scaffolded a basic app using CRA
* Verified the build system's functionality


[Back to Initial](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/initial) || [Continue to Step 2](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-2)
