import { useState } from "react"
import './Filters.css' 

const Filter=() =>{
    const [minPrice, setMinPrice] = useState(0)

    const handlePriceChange = (event) => {
        setMinPrice(event.target.value)
    }
    return(
        <section className="filters">
      <div>
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="range"
          min="0"
          max="1000"
          onChange={handlePriceChange}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor="category">Category:</label>
        <select id="category" >
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
    )
}

export default Filter