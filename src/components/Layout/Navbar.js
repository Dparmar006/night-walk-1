import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { collapseSidebar, expandSidebar } from '../../redux/actions/ui'

const Navbar = () => {
  const dispatch = useDispatch()
  const ui = useSelector(state => state.Ui)

  const sidebarToggle = () => {
    ui.sidebarExpanded ? dispatch(collapseSidebar()) : dispatch(expandSidebar())
  }
  return (
    <nav className='navbar'>
      <button className='btn sm' onClick={sidebarToggle}>
        <span class='material-icons'>face</span>
      </button>
    </nav>
  )
}

export default Navbar
