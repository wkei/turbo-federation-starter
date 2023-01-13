import { lazy, Suspense } from "react";
import { Link, Outlet, Routes, Route } from "react-router-dom";

import { Layout } from "components";
import { useTranslation } from 'i18n';

// @ts-ignore
const SubApp = lazy(() => import("subapp/App"));
// @ts-ignore
const WithMui = lazy(() => import("with-mui/App"));
// @ts-ignore
const WithAntd = lazy(() => import("with-antd/App"));

function App(): JSX.Element {
  const { t } = useTranslation()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<h2>HOME (test i18n: {t('hello')})</h2>} />
        <Route
          path="/subapp/*"
          element={
            <Suspense fallback={"loading subapp..."}>
              <SubApp basePath="" />
            </Suspense>
          }
        />
        <Route
          path="/with-mui/*"
          element={
            <Suspense fallback={"loading with-mui..."}>
              <WithMui />
            </Suspense>
          }
        />
        <Route
          path="/with-antd/*"
          element={
            <Suspense fallback={"loading with-antd..."}>
              <WithAntd />
            </Suspense>
          }
        />
        <Route path="*" element={<pre>NotFound</pre>} />
      </Route>
    </Routes>
  );
}

export default App;
