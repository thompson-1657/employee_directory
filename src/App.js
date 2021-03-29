import {useState} from 'react'
import Header from './components/Header.js'
import SearchInput from './components/SearchInput.js'
import './App.css';



function App() {

  const [employee, setEmployee] = useState({})
  const [employeeName, setEmployeeName] = useState('Bob')

  const handleSubmit = e => {
    e.preventDefault()
    console.log(employeeName);
  }

  return (
    <div>
      <Header />
      <SearchInput employeeName={employeeName} 
      setEmployeeName={setEmployeeName}
      handleSubmit={handleSubmit}/>
      
    </div>
  );
}

export default App;
