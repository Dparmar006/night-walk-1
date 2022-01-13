import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const ui = useSelector(state => state.Ui)

  return (
    <section
      className={`sidebar
    ${!ui.sidebarExpanded && 'sidebar-collapsed'}`}
    >
      <ul className='sidebar-list'>
        <li>
          <NavLink className='btn-primary btn' to='/'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink className='btn-primary btn' to='/notes'>
            Notes
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

export default Sidebar
