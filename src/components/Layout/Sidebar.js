import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { menuItems } from '../../helper/sidebarMenus'

const Sidebar = () => {
  const ui = useSelector(state => state.Ui)

  const sidebarList = useMemo(
    () => (
      <ul className='sidebar-list'>
        {menuItems.map(menu => (
          <li className='sidebar-list-item'>
            <NavLink className='btn-primary btn' to={menu.pathname}>
              {ui.sidebarExpanded && menu.title}
              <span>{menu.icon}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    ),
    [ui.sidebarExpanded]
  )

  return (
    <section
      className={`sidebar
    ${!ui.sidebarExpanded && 'sidebar-collapsed'}`}
    >
      {sidebarList}
    </section>
  )
}

export default Sidebar
