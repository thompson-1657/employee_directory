import React from 'react'

const EmployeeInformation = ({employees}) => {
    return (
    <div className="container">
        <table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Email</th>
      <th scope="col">Location</th>
    </tr>
  </thead>
  <tbody>
      {employees[0] !== undefined ? (employees.map(({name, picture, phone, email, location}) => {
          return(
            <tr>
            <th scope="row"><img src={picture.thumbnail} alt={name.first} /></th>
            
            <td>{name.first} {name.last}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{location.country}</td>
          </tr>
          )
      })
      ): (<></>)}
   
    
  </tbody>
</table>
</div>
    )
}

export default EmployeeInformation