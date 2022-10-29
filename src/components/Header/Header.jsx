import React from 'react'
import style from './style.module.css'
function Header() {
  return (
    <div className={style.navigation}>
        <div className={style.logo}>
            <h2>Dev<span>Loop</span> </h2>
        </div>
        <div className={style.mune}>
            <ul>
                <li>Home</li>
                <li>about</li>
                <li>contact</li>
                <li>Service</li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
  )
}

export default Header