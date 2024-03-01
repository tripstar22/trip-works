# Trip Works

## How to Use

1. Download a zip of the repository, then unzip the downloaded folder.
2. Navigate to the root folder for the app in your terminal.
3. Run `npm install`.
4. Once all dependencies have been installed run `npm run dev` to spin up your local environment.
5. Navigate to `http://localhost:8080/` in your browser to view the app.

## Background

### Overview
- This is a [Next.js](https://nextjs.org/) app that leverages [MUI](https://mui.com/), and other third party dependencies.
  - Next.js is a framework for server-rendered React apps.
  - MUI includes its peer dependencies, including `emotion`, the default style engine in MUI v5.
- I used a Next.js/MUI example for project scaffolding, which I had found [here](https://github.com/mui/material-ui/tree/master/examples/nextjs).   
  - ***Note:** *Unfortuantely that example has been removed from the MUI repo.*
- I am following the [airbnb style guide](https://github.com/airbnb/javascript) for JavaScript code structure, and using the airbnb ESLint. See `.eslintrc.json`.
- I am using path imports to [minimize bundle size](https://mui.com/material-ui/guides/minimizing-bundle-size/) by avoiding pulling unused modules into the build.

### CMS
- I am using the headless CMS, [Contentful](https://www.contentful.com/), for the majority of content.

### External API
- I wanted to leverage a third-party API in my app, and decided to use a weather API to display the current weather of my local area.
- The weather API that I decided to use is [WeatherAPI.com](https://rapidapi.com/user/weatherapi), which I found on the Rapid API platform.
- I used [Node.js](https://nodejs.org/) and [Axios](https://github.com/axios/axios) to `GET` the weather data. The file can be found here: `pages/api/weatherForecast.js`.
- I added the [SWR](https://github.com/vercel/swr) library into my project, and used the technique outlined [here](https://vercel.com/guides/loading-static-file-nextjs-api-route) to add the weather data to `components/location/Location.jsx`.  

### Styles
- As the project scaffolding uses MUI, there is a theme JavaScript file for the vast majority of global styles, `src/styles/js/themes/themeDefault.js`.
- Next.js comes with built-in support for [CSS Modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules), and they are utilized for component level styles. 
- Writing css/scss is a strong point for me in my professional repertoire, so I wanted to include them in this app. I found a [blog](https://www.markmakesstuff.com/posts/mui-css-modules) which outlines a strategy of using both a MUI theme and SCSS Modules for React projects, and decided to implement it in my own project.
- I implemented Sass in this project, and used [this article](https://www.freecodecamp.org/news/how-to-use-sass-with-css-modules-in-next-js/#step-1-installing-sass-in-a-next-js-app) as a guide on how to do so.
- Traditional Block Element Modifier (BEM) naming conventions do not play well in this environment, so I modified them to the pattern below:
```
/* block */
.example

/* element */
.example_item
/* or */
.example_itemDescription

/* modifier */
.example___variation
```

### Fonts
- Next.js allows you to automatically self-host any Google Fonts. They are being imported into the project via the technique found under the Google Fonts heading in this [link](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts). You can find the file where they are being imported here: `src/styles/js/fonts/fonts.js`.
- I am also hosting one font locally in the project using `@font-face`, which can be found here: `src/styles/scss/fonts/_fonts.scss`. It is imported into the project in `pages/_app.jsx`.

### SVGs
- I am using the technique outlined [here](https://blog.logrocket.com/import-svgs-next-js-apps/#import-svgs-next-js-using-svgr) to leverage [SVGR](https://github.com/gregberge/svgr) for SVGs in the app.
- SVG assets are kept in `public/svg` unless they are dynamic content from Contentful.

### Other Third-Party Dependencies
***Note:** This is not an exhaustive list of third-party dependencies that are included in this app. It is meant to highlight dependencies that have not previously been mentioned in the README that are leveraged in custom components.*

#### GSAP ScrollTrigger
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger) is being used to trigger animations on certain elements as the user scrolls through a view. I created a reusable JavaScript function to handle this functionality which can be found in `src/js/ani-fade/aniFade.js`, and a component to handle these animations in `components/ui/reveal-on-scroll/RevealOnScroll.jsx`.
  - ***Note:** Using the `ScrollTrigger` plugin requires that I also include the standard [GSAP](https://github.com/greensock/GSAP) library.*

#### GSAP TextPlugin
- [GSAP TextPlugin](https://gsap.com/docs/v3/Plugins/TextPlugin/) is being used to animate certain text elements in the app.
- This functionality is used in conjunction with GSAP ScrollTrigger in `src/js/ani-fade/aniFade.js`.
- Like the ScrollTrigger functionality, the functionality is used in the `RevealOnScroll` component found in `components/ui/reveal-on-scroll/RevealOnScroll.jsx`.
   - ***Note:** Using the `TextPlugin` plugin requires that I also include the standard [GSAP](https://github.com/greensock/GSAP) library.*

#### prop-types
- I am using [prop-types](https://github.com/facebook/prop-types) in my custom components to document the intended type for each respective prop, as well as to define which props are required for their corresponding component.

#### react-jotform-embed
- I am leveraging [react-jotform-embed](https://github.com/xurei/react-jotform-embed) to embed the `iframe` for my contact form that is provided by [Jotform](https://www.jotform.com/). This can be found in `components/global/contact/Contact.jsx`. The majority of the styles for the form had to be created in the Jotform form builder, so they are not in this codebase.

#### react-responsive-masonry
- [react-responsive-masonry](https://github.com/cedricdelpoux/react-responsive-masonry) is being used for the layout of featured work, which can be found in `components/projects/Projects.jsx`. 

#### Slick carousel / react-slick
- The React version ([react-slick](https://github.com/akiran/react-slick)) of Slick Carouel is being used for featured media items in `components/carousel/Carousel.jsx`. 
- Since Slick generates some of it's `html` at build time, I had to target some carousel classes in a global `scss` file, rather than at the component level. You can find these styles in `src/styles/scss/global/_appCarousel.scss`. Those styles are then imported into `pages/_app.jsx`.
  - ***Note:** Using `react-slick` requires that I also add the standard version of [slick-carousel](https://github.com/kenwheeler/slick) to the project in order to access the base carousel styles. You can view the imports for the Slick Carousel styles in `components/carousel/Carousel.jsx`.*
  - ***Note:** This functionality is currently a work in progress.*

### Misc

#### aniScroll
- I created a JavaScript function called `aniScroll` that adds smooth scroll functionality on certain elements. It can be found in `src/js/ani-scroll/aniScroll.js`. `aniScroll` is currently imported in the `HeroHome` component (`components/heroes/hero-home/HeroHome.jsx`), and in the `BackToTop` component (`components/ui/back-to-top/BackToTop.jsx`).
