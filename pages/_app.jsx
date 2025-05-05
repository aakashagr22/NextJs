import React from 'react'
import "../src/app/globals.css";

function MyApp({ Component, pageProps }) {
  return (<React.StrictMode>
   <Component {...pageProps} />
  </React.StrictMode>)
}

export default MyApp


