import Inventory from './Inventory'

const MoveDetails = ({move}) => {
  return (
    <div className="move-details">
      {/* Additional Information */}
      <div className="section-heading">
        <h3>Additional Information</h3>

        <button type="button">
          Edit Additional Info
        </button>
      </div>

      <p className="test-data">
        {move.additionalInfo || 'Test Data'}
      </p>

      {/* House Details */}
      <div className="section-heading">
        <h3>House Details</h3>

        <button type="button">
          Edit House Details
        </button>
      </div>

      <h4>Existing House Details</h4>

      <div className="house-details">
        <div>
          <strong>Floor No.</strong>
          <p>
            {move.existingHouse?.floorNo || '11'}
          </p>
        </div>

        <div>
          <strong>Elevator Available.</strong>
          <p>
            {move.existingHouse?.elevator || 'Yes'}
          </p>
        </div>

        <div>
          <strong>
            Distance from Elevator / Staircase to truck
          </strong>
          <p>
            {move.existingHouse?.distance || '11 meters'}
          </p>
        </div>
      </div>

      <h4>New House Details</h4>

      <div className="house-details">
        <div>
          <strong>Floor No.</strong>
          <p>
            {move.newHouse?.floorNo || '11'}
          </p>
        </div>

        <div>
          <strong>Elevator Available.</strong>
          <p>
            {move.newHouse?.elevator || 'Yes'}
          </p>
        </div>

        <div>
          <strong>
            Distance from Elevator / Staircase to truck
          </strong>
          <p>
            {move.newHouse?.distance || '11 meters'}
          </p>
        </div>
      </div>

      {/* Inventory */}
      <div className="section-heading inventory-heading">
        <h3>Inventory Details</h3>

        <button type="button">
          Edit Inventory
        </button>
      </div>

      <Inventory items={move.items} />
    </div>
  )
}

export default MoveDetails