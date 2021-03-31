import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
 margin-top: 20px;
`


const Header = () => {
    return (
        <div className="container">
         <div className="row" style={{textAlign: 'center'}}>
             <div className="jumbotron">
                <H1>Employee Directory</H1>
             </div>
         </div>
        </div>
)
}

export default Header