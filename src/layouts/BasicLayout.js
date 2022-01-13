import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar'
import Sidebar from '../components/Layout/Sidebar'

const BasicLayout = props => {
  const ui = useSelector(state => state.Ui)

  useEffect(() => {
    document.title = props.title + ' | NightWalk'
    return () => (document.title = 'Loading | NightWalk')
  }, [props.title])

  return (
    <main className={`main ${!ui.sidebarExpanded && 'expanded-main'}`}>
      <Navbar />
      <Sidebar />
      <section className='page-content'>{props.children}</section>
      {/* <Footer /> */}
    </main>
  )
}

export default BasicLayout
