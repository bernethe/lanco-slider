import React from 'react'
import LogoLanco from './LogoLanco'

const Header = () => {
	return <>
		<div className='container'>
			<div className="header-logo">
				<LogoLanco />
			</div>
		</div>
		<div className='post-head'></div>
	</>
}

export default Header