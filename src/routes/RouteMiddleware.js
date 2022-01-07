import React from 'react'
import { Route } from 'react-router-dom'
const RouteMiddleware = ({
  components: Component,
  layout: Layout,
  isAuthProtected,
  path,
  ...rest
}) => (
  <>
    {console.log(...rest)}
    <Route
      path={path}
      element={
        <Layout>
          <Component />
        </Layout>
      }
      {...rest}
    />
  </>
)
export default RouteMiddleware
