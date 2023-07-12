import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {

    let {title}  = useParams()
    
    return (
        <div style={{ backgroundColor: 'red', padding: '100px' }}>This is a contact Page  { title}</div>
    )
}

export default Contact