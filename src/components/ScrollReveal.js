/**
 * Library is loaded in gatsby-ssr.js
 * Library cannot be loaded via NPM because of a window and SSR bug
 */

/* eslint-disable */

let SR

if (typeof window !== `undefined`) {
  window.sr = ScrollReveal()
  SR = window.sr
}

export default SR
