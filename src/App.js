import {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header.js'
import SearchInput from './components/SearchInput.js'
import EmployeeInformation from './components/EmployeeInformation'
import './App.css';



function App() {

  const [employee, setEmployee] = useState({})
  const [filterEmployee, setFilterEmployee] = useState({})
  const [employeeName, setEmployeeName] = useState("")

  useEffect(() => fetchEmployee(), [])

  const fetchEmployee = async() => {
     const result = await axios(`https://randomuser.me/api/?results=25`)
     console.log(result);
     setEmployee(result.data.results)
     setFilterEmployee(result.data.results)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(employeeName);

    


    const firstName = e.target.value
    // console.log(firstName);
    const filteredResults = employee.filter(emp => {
      // console.log(emp.name.first.toLowerCase());
      if(emp.name.first.toLowerCase() === employeeName.toLowerCase()) {
        console.log(emp.name.first);
      }
      let values = Object.values(emp).join().toLowerCase()
      return values.indexOf(employeeName.toLowerCase()) !== -1
    })
    // console.log(filteredResults);
    setFilterEmployee(filteredResults)
  }

  return (
    <div>
      <Header />
      <SearchInput employeeName={employeeName} 
      setEmployeeName={setEmployeeName}
      handleSubmit={handleSubmit}/>
      <EmployeeInformation employees = {filterEmployee} />
      
    </div>
  );
}

export default App;
