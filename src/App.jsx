import { useState } from 'react'
import './App.css'
import Header from './component/Header/Header'
import Table from './component/RewardTable/Table'

function App() {
  const numbers = [
    { n1: "" },
    { n11: "" },
    { n12: "" },
    { n21: "" },
    { n22: "" },
    { n23: "" },
    { n02: "" },
  ]

  const [number, setNumber] = useState(numbers);

  return (
    <>
      <Header />
      <Table number={number} setNumber={setNumber} />
    </>
  )
}

export default App
