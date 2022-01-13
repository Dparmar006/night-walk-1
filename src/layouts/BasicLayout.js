import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Navbar from '../components/Layout/Navbar'
import Sidebar from '../components/Layout/Sidebar'
import { collapseSidebar, expandSidebar } from '../redux/actions/ui'

const BasicLayout = props => {
  const ui = useSelector(state => state.Ui)
  const dispatch = useDispatch()

  useEffect(() => {
    document.title = props.title + ' | NightWalk'
    return () => (document.title = 'Loading | NightWalk')
  }, [props.title])

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1080) {
        dispatch(collapseSidebar())
      } else {
        dispatch(expandSidebar())
      }
    })

    return () => {
      window.removeEventListener('resize')
    }
  }, [])

  return (
    <main className={`main ${!ui.sidebarExpanded && 'expanded-main'}`}>
      <Navbar />
      <Sidebar />
      <section fluid className='page-content'>
        {props.children}
      </section>
      {/* <Footer /> */}
    </main>
  )
}

export default BasicLayout
