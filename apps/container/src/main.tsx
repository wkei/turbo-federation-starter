import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

import { createI18n, I18nextProvider } from 'i18n'

const i18n = createI18n({
  en: {
    translation: {
      hello: 'hello from container i18n'
    }
  },
  ja: {
    translation: {
      hello: 'こんにちは from container i18n'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)
