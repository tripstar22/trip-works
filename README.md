# Trip Works

## How to Use

1. Download a zip of the repository, then unzip the downloaded folder.
2. Navigate to the root folder for the app in your terminal.
3. Run `npm install`.
4. Once all dependencies have been installed run `npm run dev` to spin up your local environment.
5. Navigate to `http://localhost:8080/` in your browser to view the app.

## Background

### Overview
- This is a [Next.js](https://nextjs.org/) app that leverages [MUI](https://mui.com/), and other third party libraries.
  - Next.js is a framework for server-rendered React apps.
  - MUI includes its peer dependencies, including `emotion`, the default style engine in MUI v5.
- I used a now removed Next.js/MUI example for project scaffolding, which I had found [here](https://github.com/mui/material-ui/tree/master/examples/nextjs).
- I am following the [airbnb style guide](https://github.com/airbnb/javascript) for frontend coding structure, and using the airbnb ESLint. See `.eslintrc.json`.
- I am using path imports to [minimize bundle size](https://mui.com/material-ui/guides/minimizing-bundle-size/) by avoiding pulling unused modules into the build.

### External API
- I wanted to leverage an third-party API in my app, and decided to use a weather API to display the current weather of my local area.
- The weather API that I decided to use is [WeatherAPI.com](https://rapidapi.com/user/weatherapi), which I found on the Radid API platform.
- I used [Node.js](https://nodejs.org/) and [Axios](https://github.com/axios/axios) to `GET` the weather data. The file can be found here: `pages/api/weatherForecast.js`.
- I added the [SWR](https://github.com/vercel/swr) library into my project, and the technique outlined [here](https://vercel.com/guides/loading-static-file-nextjs-api-route) to add the weather data to `components/location/Location.jsx`.  

### Styles
- As the project scaffolding uses MUI, there is a theme JavaScript file for the vast majority of all global styles, `src/styles/js/themes/themeDefault.js`.
- Next.js comes with built-in support for [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules), and they are utilized for component level styles. 
- Writing css/scss is a strong point for me in my professional repertoire, so I wanted to include them in this app. I found a [blog](https://www.markmakesstuff.com/posts/mui-css-modules) which outlined a strategy of using both a MUI theme and SCSS Modules for React projects, and decided to implement it in my own project.
- I implemented Sass in my project, and used [this article](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/#step-1-installing-sass-in-a-next-js-app) as a guide on how to do so.
- Traditional Block Element Modifier (BEM) naming conventions do not play well in this environment, so I modified them to the pattern below:
```
// block
.element

// element
.element_example
// or 
.element_exampleSomething

// modifier
.element___variation
```

### Fonts
- Next.js allows you to automatically self-host any Google Fonts. They are being imported into the project via the technique found under the Google Fonts heading in this [link](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts). You can find the file where they are being imported here: `src/styles/js/fonts/fonts.js`.
- I am also hosting one font locally in the project using `@font-face`, which can be found here: `src/styles/scss/_fonts.scss`. They are being imported into the project in `pages/_app.jsx`.

### SVGs
- I am using the technique outlined [here](https://blog.logrocket.com/import-svgs-next-js-apps/#import-svgs-next-js-using-svgr) to leverage [SVGR](https://github.com/gregberge/svgr) for SVGs in the app.
- All SVG assets are kept in `src/svg`.
