import React from 'react'
import Logo from "./navitems/Logo"
import Link from "./navitems/Link"

const Nav = () => {
  return (
    <div className='flex justify-between p-8'>
      <Logo/>
      <Link/>
    </div>
  )
}

export default Nav
