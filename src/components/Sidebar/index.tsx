import React, { useState } from 'react';
import './styles.scss';

interface ISideBar {

}

const Sidebar: React.FC<ISideBar> = () => {
  const [opened, setOpened] = useState(false);
  const openMenu = () => {
    setOpened(!opened);
  }

  return (
    <>
      <div className={`sidebar ${opened ? "--open" : ""}`}>
        <div className='sidebar__container'>
          <div className='sidebar__top'>
            <img className='icon-logo' src='images/logo.png' alt="logo"/>

            <button className='sidebar__btn-group'>
              <img src='images/group.svg' alt='icon-group'/>
            </button>

            <button className="sidebar__btn-badge">
              <img src='images/badge.svg' alt='icon-badge'/>
            </button>

          </div>

          <div className='sidebar__bottom'>
            <div className='sidebar__profile'>
              <img src='/images/profile.png' alt='image-profile'/>
            </div>

            <div className='sidebar__logout'>
              <img className='icon-sign-out' src='/images/sign-out.svg'/>
            </div>
          </div>
        </div>
      </div>
      <button className='btn-menu' onClick={openMenu}>
        <div className='line' />
        <div className='line' />
        <div className='line' />
      </button>
    </>
  )
}

export default Sidebar;