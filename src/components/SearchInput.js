import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
font-size: 22px;
border-radius: 5px
`

const SearchInput = ({employeeName, setEmployeeName, handleSubmit}) => {
    return (
    <div className="container">
        <form>
            <div className="mb-3">
                 <label for="searchInput" className="form-label">Search</label>
                <Input 
                onChange={e => setEmployeeName(e.target.value)}
                value={employeeName}
                name="search"
                type="search" 
                className="form-control" 
                id="searchInput" 
                aria-describedby="seacrhHelp" />
                <div id="seacrhHelp" className="form-text">Search for an Employee</div>
             </div>
            <button 
                onClick={handleSubmit}
                type="submit" 
                className="btn btn-primary">Submit
         </button>
        </form>  
    </div>  
    )
}

export default SearchInput
