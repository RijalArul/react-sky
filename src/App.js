import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App () {
  const [value, setValues] = useState(0)
  const [result, setResults] = useState()

  const handleChange = e => {
    setValues({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const generateOdd = e => {
    e.preventDefault()
    // console.log(typeof value.value)
    const numValue = parseInt(value.value)
    let numArr = []
    // console.log(numValue)

    for (let i = 1; i <= numValue; i++) {
      if (i % 2 !== 0) {
        numArr.push(i)
      }
    }

    setResults(numArr)
  }

  const generatePrime = e => {
    let arrNum = []
    let lowerNumber = 2
    let higherNumber = parseInt(value.value)

    for (let i = lowerNumber; i <= higherNumber; i++) {
      let flag = 0

      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1
          break
        }
      }

      if (i > 1 && flag == 0) {
        arrNum.push(i)
        setResults(arrNum)
      }
    }
  }
  return (
    <div className='App'>
      <form>
        <div class='mb-3'>
          <label for='number' class='form-label'>
            Input Angka
          </label>
          <input
            type='text'
            class='form-control'
            id='number'
            name='value'
            placeholder='input angka'
            onChange={e => handleChange(e)}
          />
        </div>
        <button type='button' class='btn btn-primary' onClick={generateOdd}>
          Generate Ganjil
        </button>

        <button type='button' class='btn btn-primary' onClick={generatePrime}>
          Generate Prime
        </button>
        {result}
      </form>
    </div>
  )
}

export default App
