import { Link } from "react-router-dom";

import { Button } from "ui";
import styles from "./header.module.css";

import { createI18n, useTranslation } from 'i18n'

const i18n = createI18n({
  en: {
    translation: {
      hello: 'hello from packages/components i18n'
    }
  },
  ja: {
    translation: {
      hello: 'こんにちは from packages/components i18n'
    }
  }
})

export const Header = () => {
  const { t } = useTranslation('translation', { i18n })
  return (
    <header className={styles.header}>
      <h1 className="text-3xl text-orange-500">LOGO</h1>
      (test i18n: {t('hello')})
      <div className={styles.nav}>
        <Link to={`/`}>Home</Link>
        &nbsp;&nbsp;
        <Link to={`/subapp`}>Sub App</Link>
        &nbsp;&nbsp;
        <Link to={`/with-mui`}>With Mui</Link>
        &nbsp;&nbsp;
        <Link to={`/with-antd`}>With Antd</Link>
      </div>
      <Button>Login</Button>
    </header>
  );
};
