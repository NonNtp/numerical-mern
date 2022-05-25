import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { IconContext } from 'react-icons/lib'

import SidebarData from './SidebarData'
import SubMenu from './SubMenu'
import './Sidebar.css'

const Sidebar = () => {
	const [sidebar, setSidebar] = useState(false)

	const navbarClass = sidebar ? 'SidebarNav active' : 'SidebarNav'

	const showSidebar = () => {
		setSidebar((prevState) => !prevState)
	}

	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<div className='Nav'>
					<Link className='NavIcon' to='#'>
						<FaBars onClick={showSidebar} />
					</Link>
				</div>
				<nav className={navbarClass}>
					<div className='SidebarWrap'>
						<Link className='NavIcon' to='#' onClick={showSidebar}>
							<AiOutlineClose />
						</Link>
						{SidebarData.map((item, index) => {
							return <SubMenu item={item} key={index} />
						})}
					</div>
				</nav>
			</IconContext.Provider>
		</>
	)
}

export default Sidebar
