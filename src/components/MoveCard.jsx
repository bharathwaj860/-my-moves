import {useState} from 'react'
import MoveDetails from './MoveDetails'

const MoveCard = ({move}) => {
  const [showDetails, setShowDetails] = useState(false)

  const toggleDetails = () => {
    setShowDetails(prev => !prev)
  }

  return (
    <div className="move-card">

      <div className="move-top">

        <div className="location">
          <h3>From</h3>
          <p>{move.moving_from}</p>
        </div>

        <div className="arrow">
          →
        </div>

        <div className="location">
          <h3>To</h3>
          <p>{move.moving_to}</p>
        </div>

        <div className="request">
          <h3>Request#</h3>
          <p>{move.estimate_id}</p>
        </div>

      </div>

      <div className="move-info">

        <div className="info-item">
          <span className="info-icon">⌂</span>
          <span>{move.property_size}</span>
        </div>

        <div className="info-item">
          <span className="info-icon">▦</span>
          <span>{move.total_items}</span>
        </div>

        <div className="info-item">
          <span className="info-icon">♟</span>
          <span>{move.total_inventory}</span>
        </div>

        <div className="info-item">
          <span className="info-icon">⌖</span>
          <span>{move.distance}</span>
        </div>

        <div className="info-item date">
          <span className="info-icon">▣</span>
          <span>{move.move_date}</span>
          <span className="edit-icon">✎</span>
        </div>

        <div className="flexible">
          <span className="check">✓</span>
          <span>Is flexible</span>
        </div>

        <button
          type="button"
          className="details-button"
          onClick={toggleDetails}
        >
          {showDetails
            ? 'Hide Move Details'
            : 'View Move Details'}
        </button>

        <button
          type="button"
          className="quotes-button"
        >
          Quotes Awaiting
        </button>

      </div>

      <div className="disclaimer">
        <span className="warning">⚠</span>

        <strong>Disclaimer:</strong>

        <span>
          Please update your move date before two days of shifting
        </span>
      </div>

      {showDetails && (
        <MoveDetails move={move} />
      )}

    </div>
  )
}

export default MoveCard