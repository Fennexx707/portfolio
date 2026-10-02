# Nuha | React Portfolio (COMP229 Assignment 1)

A six-page personal portfolio built with React, Vite and React Router, written in Visual Studio Code and hosted on Vercel.

**Live site:** https://portfolio-coral-five-34.vercel.app
**GitHub:** https://github.com/Fennexx707/portfolio

Pages: Home, About Me, Projects, Education, Services, Contact Me.

## Run it locally

npm install
npm run dev

Then open the `localhost` link that appears in the terminal.

## Build the site

npm run build

The finished site is created in the `dist` folder.

## How it is hosted
The code is stored on GitHub and deployed with Vercel. Vercel runs `npm run build` and publishes the site automatically every time changes are pushed to the `main` branch.

To update the live site:

git add .
git commit -m "Describe the change"
git push


## Edit the content
All text lives in `src/data/portfolioData.js`. Photos and project images are in `public/images`, and the resume is `public/resume.pdf`.