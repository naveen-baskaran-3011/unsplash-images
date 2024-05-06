import React from 'react'
import { useGlobalContext } from './context'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs';

export default function ThemeToggle() {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  const IconToRender = isDarkTheme ? BsFillMoonFill : BsFillSunFill;
  return (
    <section className="toggle-container">
        <button className="dark-toggle" onClick={toggleDarkTheme}>
            <IconToRender className='toggle-icon' />
        </button>
    </section>
  )
}
