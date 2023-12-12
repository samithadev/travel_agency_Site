import React from 'react'

function Button(props) {
  return (
    <div>
        <button className={`${props.backgroundColor} text-main px-8 py-2 rounded-full font-medium hover:bg-ash hover:text-white transition-all`}>{props.title}</button>
    </div>
  )
}

export default Button