import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context'

const Line = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
      <div className="breakLine" style={{
        backgroundColor: darkMode ? '#fff' : '#000',
        height: '5px',
        border: 'none',
        width: '100%'}}></div>
  )
}

export default Line;