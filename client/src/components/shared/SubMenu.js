import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './SubMenu.css'

const SubMenu = ({ item }) => {
	const [subnav, setSubnav] = useState(false)

	const showSubnav = () => {
		setSubnav((prevState) => !prevState)
	}

	return (
		<>
			<Link
				className='SidebarLink'
				to={item.path}
				onClick={item.subNav && showSubnav}
			>
				<div>
					{item.icon}
					<span className='SidebarLabel'>{item.title}</span>
				</div>
				<div>{subnav ? item.iconOpened : item.iconClosed}</div>
			</Link>
			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<Link
							className='DropdownLink'
							to={item.path}
							key={index}
							onClick={item.subNav && showSubnav}
						>
							{item.icon}
							<span className='SidebarLabel'>{item.title}</span>
						</Link>
					)
				})}
		</>
	)
}

export default SubMenu
