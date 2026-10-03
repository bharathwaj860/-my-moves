import {useState} from 'react'

const Inventory = ({items = {}}) => {
  const [openCategory, setOpenCategory] = useState(null)

  const categories = [
    {
      key: 'furniture',
      title: 'Furniture',
      count: 15,
    },
    {
      key: 'electronics',
      title: 'Electronics',
      count: 9,
    },
    {
      key: 'vehicle',
      title: 'Vehicle',
      count: 1,
    },
    {
      key: 'boxes',
      title: 'Boxes/Trolley',
      count: 13,
    },
    {
      key: 'custom',
      title: 'Custom Items',
      count: 1,
    },
  ]

  const furnitureFallback = [
    ['1 Seater Sofa', 'Wooden', '1'],
    ['2 Seater Sofa', 'Wooden', '1'],
    ['3 Seater Sofa', 'Fabric', '1'],
    ['Sofa cum bed', '', '1'],
    ['Sectional Sofa', '4 Piece', '1'],
    ['Sofa Footrest', '', '1'],
    ['Ottoman', '', '1'],
  ]

  const tableFallback = [
    ['Centre / Coffee', 'Glass', '1'],
    ['Teapoy', 'Glass', '1'],
    ['Side Table', 'Glass', '1'],
    ['4 Seater Dining Table', 'Metal, Dismantable', '1'],
    ['6 Seater Dining Table', 'Glass, Dismantable', '1'],
    ['Iron Board', '', '1'],
    ['Plastic Table', '', '1'],
    ['Drafting Table', '', '1'],
  ]

  const getItems = key => {
    if (Array.isArray(items?.[key])) {
      return items[key]
    }

    if (key === 'furniture') {
      return furnitureFallback
    }

    return []
  }

  const toggleCategory = key => {
    setOpenCategory(prev => (
      prev === key ? null : key
    ))
  }

  return (
    <div className="inventory">
      {categories.map(category => {
        const categoryItems = getItems(category.key)

        return (
          <div
            className="inventory-category"
            key={category.key}
          >
            <button
              type="button"
              className="category-button"
              onClick={() => toggleCategory(category.key)}
            >
              <span>
                {category.title}{' '}
                <b>{category.count}</b>
              </span>

              <span className="category-arrow">
                {openCategory === category.key ? '⌃' : '⌄'}
              </span>
            </button>

            {openCategory === category.key && (
              <div className="category-content">
                {category.key === 'furniture' ? (
                  <>
                    <div className="inventory-column">
                      <h5>Sofa</h5>

                      {furnitureFallback.map(
                        (item, index) => (
                          <div
                            className="inventory-row"
                            key={index}
                          >
                            <div>
                              <strong>{item[0]}</strong>
                              {item[1] && (
                                <p>{item[1]}</p>
                              )}
                            </div>

                            <span>{item[2]}</span>
                          </div>
                        ),
                      )}
                    </div>

                    <div className="inventory-column">
                      <h5>Table</h5>

                      {tableFallback.map(
                        (item, index) => (
                          <div
                            className="inventory-row"
                            key={index}
                          >
                            <div>
                              <strong>{item[0]}</strong>
                              {item[1] && (
                                <p>{item[1]}</p>
                              )}
                            </div>

                            <span>{item[2]}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </>
                ) : categoryItems.length > 0 ? (
                  categoryItems.map((item, index) => (
                    <div
                      className="inventory-row"
                      key={index}
                    >
                      <div>
                        <strong>
                          {item.name || item[0]}
                        </strong>

                        <p>
                          {item.type || item[1]}
                        </p>
                      </div>

                      <span>
                        {item.quantity || item[2] || 1}
                      </span>
                    </div>
                  ))
                ) : (
                  <p>No items available</p>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Inventory