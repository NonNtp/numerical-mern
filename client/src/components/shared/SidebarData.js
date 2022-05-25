import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { IoIosPaper } from 'react-icons/io'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'

const SidebarData = [
	{
		title: 'Root of equation',
		path: '/root/equation',
		icon: <AiFillHome />,
		iconClosed: <RiArrowDownSFill />,
		iconOpened: <RiArrowUpSFill />,

		subNav: [
			{
				title: 'Bisection',
				path: '/root/bisection',
				icon: <IoIosPaper />,
			},
			{
				title: 'False-Position',
				path: '/root/false',
				icon: <IoIosPaper />,
			},
			{
				title: 'One-Point Iteration',
				path: '/root/one',
				icon: <IoIosPaper />,
			},
			{
				title: 'Newton Raphson',
				path: '/root/new',
				icon: <IoIosPaper />,
			},
			{
				title: 'Secant',
				path: '/root/secant',
				icon: <IoIosPaper />,
			},
		],
	},
	{
		title: 'Linear System',
		path: '#',
		icon: <AiFillHome />,
		iconClosed: <RiArrowDownSFill />,
		iconOpened: <RiArrowUpSFill />,

		subNav: [
			{
				title: "CraMer's rule",
				path: '/linear/craMer',
				icon: <IoIosPaper />,
			},
			{
				title: 'Gauss Elimination',
				path: '/linear/elimination',
				icon: <IoIosPaper />,
			},
			{
				title: 'Jacobi',
				path: '/linear/jacobi',
				icon: <IoIosPaper />,
			},
			{
				title: 'Gauss-Seidel.js',
				path: '/linear/seidel',
				icon: <IoIosPaper />,
			},
		],
	},
]

export default SidebarData
