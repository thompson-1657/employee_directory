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
     const result = await axios(`https://randomuser.me/api/?results=25&nat=us,dk,fr,gb&seed=seed`)
     console.log(result);
     setEmployee(result.data.results)
     setFilterEmployee(result.data.results)
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    console.log(employeeName);
    const filteredResults = employee.filter(emp => {
      if(emp.name.first.toLowerCase() || emp.name.last.toLowerCase() === employeeName.toLowerCase()) {
        console.log(emp.name.first);
      }
      let values = Object.values(emp).join().toLowerCase()
      return values.indexOf(employeeName.toLowerCase()) !== -1
    })
    setFilterEmployee(filteredResults)
  }
  
  const handleReset = e => {
    fetchEmployee()
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
