import React from 'react'
import Echipe from './Echipe'
import Bilet from './Bilet'



function Layout ({children}) {
    return (
        <div>
            <Echipe />  
            { children }         
        </div>
    )
}

export default Layout