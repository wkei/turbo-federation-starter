import { useState } from 'react'
import styles from './App.module.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { format } from 'date-fns'
import { Button } from 'ui'

import reactLogo from './assets/react.svg'

import { createI18n, I18nextProvider, useTranslation } from 'i18n'

const i18n = createI18n({
  en: {
    translation: {
      hello: 'hello from subapp i18n'
    }
  },
  ja: {
    translation: {
      hello: 'こんにちは from subapp i18n'
    }
  }
})

const WithAssets = () => (
  <div>
    <h3>foo</h3>
    <img src={reactLogo} />
  </div>
)

const WithButton = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={styles.App}>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </div>
  )
}
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <pre>
        now is {format(new Date(), 'yyyy-MM-dd EEEE HH:mm:ss')} (from date-fns
        lib)
      </pre>
    </div>
  )
}

const SubAppContainer = () => {
  return (
    <>
      <h2 className="font-bold mp-2">Test sub routing</h2>
      <nav>
        <Link className="text-sky-600" to="/subapp">
          home
        </Link>
        &nbsp;&nbsp;
        <Link className="text-sky-600" to="/subapp/assets">
          WithAssets
        </Link>
        &nbsp;&nbsp;
        <Link className="text-sky-600" to="/subapp/button">
          WithButton
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

function App({ basePath = '/subapp' }) {
  const { t } = useTranslation()
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <h2 className="text-2xl text-sky-500 mb-4">Sub App (test i18n: {t('hello')})</h2>

        <Routes>
          <Route path={basePath} element={<SubAppContainer />}>
            <Route path="" element={<Home />} />
            <Route path="assets" element={<WithAssets />} />
            <Route path="button" element={<WithButton />} />
          </Route>
        </Routes>
      </div>
    </I18nextProvider>
  )
}

export default App
