import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context'

const Button = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <button className="button" style={{
        backgroundColor: '#FF7217',
        border: darkMode ? '2px solid white' : '2px solid black',
        color: darkMode ? '#3a3b3c' : 'white',
        borderRadius: 10,
        height: '35px',
        width: '100px',
        fontSize: 20,
        fontWeight: '700', 
        }}
        >Resume</button>
  )
}

export default Button;