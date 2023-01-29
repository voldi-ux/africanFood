import React from 'react'
import './button.scss'

const MainButton = ({value,style,...props}) => {

    return <button {...props} className={`main-btn ${style}`}>
        {value}
    </button>
}

export default MainButton