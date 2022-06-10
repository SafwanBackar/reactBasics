import React from 'react'
import './myStyles.css'


// 2. method => by adding style tag to h1 , you can pass {heading} to the css
// const heading = {
//   fontSize : '200px',
//   color : 'pink'
// }


// 1. by passing class name as props
function StyleSheet(props) {
  let className = props.primary? 'primary' : ''
    return (
    <div>
        <h1 className={`${className} font-xl`}>StyleSheet</h1>
    </div>
  )
}

export default StyleSheet