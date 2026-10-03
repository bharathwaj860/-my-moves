import {useEffect, useState} from 'react'
import Sidebar from './components/Sidebar'
import MoveCard from './components/MoveCard'
import './App.css'

const API_URL =
  'https://apis2.ccbp.in/packers-and-movers/packers-and-movers-details'

const App = () => {
  const [moves, setMoves] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const getMoves = async () => {
    try {
      const response = await fetch(API_URL)

      if (!response.ok) {
        throw new Error('Failed to fetch')
      }

      const data = await response.json()

     console.log('FIRST MOVE:', data.Customer_Estimate_Flow[0])

      setMoves(data.Customer_Estimate_Flow)
    } catch (err) {
      console.log(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMoves()
  }, [])

  return (
    <div className="app-container">
      <Sidebar />

      <main className="main-container">
        <h1>My Moves</h1>

        {loading && <p>Loading...</p>}

        {error && <p>Something went wrong. Please try again.</p>}

        {!loading &&
          !error &&
          moves.map((move, index) => (
            <MoveCard
              key={move.id || index}
              move={move}
            />
          ))}
      </main>
    </div>
  )
}

export default App