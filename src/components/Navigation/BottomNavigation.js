import React from 'react'

const BottomNavigation = ({ menuList }) => {
  return (
    <nav className='bottom-navigation'>
      {menuList.map(menu => (
        <div className='bottom-navigation-item'>
          <div className='bottom-navigation-icon'>{menu.icon}</div>
          <h6 className='bottom-navigation-title'>{menu.title}</h6>
        </div>
      ))}
    </nav>
  )
}

export default BottomNavigation
