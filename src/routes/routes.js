import Dashboard from '../apps/dashboard/Dashboard'
import Notes from '../apps/notes/Notes'
import BasicLayout from '../layouts/BasicLayout'

export const publicRoutes = [
  {
    pathname: '/',
    component: (
      <BasicLayout title='Home'>
        <Dashboard />
      </BasicLayout>
    )
  },
  {
    pathname: '/notes',
    component: (
      <BasicLayout title='Notes'>
        <Notes />
      </BasicLayout>
    )
  }
]
