// `pages/_app.js`
import { AppProvider } from "../context/AppContext.js";
import { config } from '@fortawesome/fontawesome-svg-core'
import { Quicksand } from '@next/font/google'

import '../styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const quicksand = Quicksand({ subsets: ['latin'] })


export default function App({ Component, pageProps }) {
  return (
    <AppProvider >
      <div className={quicksand.className}>
        <Component {...pageProps} />
      </div>
    </AppProvider>
  )
}