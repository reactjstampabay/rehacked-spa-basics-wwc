![ReactJS Tampa Bay Logo](https://avatars2.githubusercontent.com/u/18738421?v=3&s=200)

# ReHacked (October 11, 2016): SPA Basics @ Women Who Code Tampa
### By [ReactJS Tampa Bay](http://www.meetup.com/ReactJS-Tampa-Bay/)

# Goals

1. Refactor Our Folder Structure
1. Deploy Our App to Firebase

# ReHacked

## Goal 1: Refactor Our Folder Structure

### Explanation

* Just from a few components, you can see that the folder structure can get out of hand very quickly
* Since React does not impose an opinion on a developer, it's up to us to decide what works best
* Consider that some components are only specific to one area (e.g. `HipsterIpsum.js)` and are not "cross cutting" across the entire application (e.g. `NoMatch.js`)
* In the end, folder structure is like Pirate's Code -- more like guidelines. Do what works best for your team and problem domain!

### Instructions

1. Open a shell in the root of the app and type in `cd src`
1. Execute `mkdir common`
1. Execute `mkdir components`
1. Execute `mkdir containers`
1. Execute `cd common`
1. Execute `mkdir assets`
1. Move `HipsterIpsum.js` and `NameForm.js` to the `containers` folder
1. Move `App.js`, `App.test.js`, and `NoMatch.js` to the `components` folder
1. Move `App.css`, `index.css`, `logo.svg`, and `wwcLogo.jpg` to the `common/assets` folder
1. Modify `src/index.js` and point the references to the new folder locations for `App.js`, `HipsterIpsum.js`, `NameForm.js`, `NoMatch.js`, and `index.css`
1. Modify `components/App.js` and point the references to `App.css` and `wwcLogo.jpg` to their new folder locations under `common/assets`

## Goal 2: Deploy Our App to Firebase

### Explanation

* We now have a fully working app! Now, let's get it out to the web
* `create-react-app` offers the capability of creating an optimized build to be deployed to the hosting provider of your choice
* Firebase is a PaaS (Platform-as-a-Service) that is owned by Google which offers, among other things, a free hosting service
* We will utilize the `firebase-tools` utility we installed during the [initial](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/initial) branch to deploy our app

### Instructions

1. Open a shell in the root of the app and type in `npm run build`
1. If you haven't done so, sign up for a [Firebase account](https://firebase.google.com)
1. Login to the Firebase Console and create a new project
1. Execute `firebase login` and enter your credentials
1. Once logged in, type in `firebase init`
1. Hit Spacebar on `Database` to uncheck the database option. We only want `Hosting`.  Press Enter.
1. When prompted `What do you want to use as your public directory` type in `build` and press Enter
1. When prompted `Configure as a single-page app (rewrite all urls to /index.html)?`, key in "y" and press Enter
1. When prompted `File build/index.html already exists. Overwrite?`, key in "N" and press Enter
1. When prompted `What Firebase project do you want to associate as default?`, select the project you established above and press Enter
1. When back in the terminal type in `firebase deploy`

# Summary

In Step 4, we have accomplished the following

* Refactored our folder structure to follow an understood pattern for our project
* Created a Firebase Hosting account and deployed our app

[Back to Step 3](https://github.com/reactjstampabay/rehacked-spa-basics-wwc/tree/step-3)
