import React, { useState } from 'react'

const Sidebar = () => {
  const [activeButton, setActiveButton] = useState("Home");
  const handleClick = (buttonName:string)=>{
    setActiveButton(buttonName);
  }
  return (
    <div className='sidebar'>
      <div
        className={`sidebarButton ${activeButton === 'Home' ? 'active' : ''}`}
        onClick={() => handleClick('Home')}>
        Home
      </div>
      <div className={`sidebarButton ${activeButton === 'CreatePlaylist' ? 'active' : ''}`}
        onClick={() => handleClick('CreatePlaylist')}>
        CreatePlaylist
      </div>
      <div className={`sidebarButton ${activeButton === 'Favourite' ? 'active' : ''}`}
        onClick={() => handleClick('Favourite')}>
        Favourite
      </div>
      <div className={`sidebarButton ${activeButton === 'Recommended' ? 'active' : ''}`}
        onClick={() => handleClick('Recommended')}>
        Recommended
      </div>
    </div>
  )
}

export default Sidebar