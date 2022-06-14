import React from 'react'
import "./styles.css";
import { useState } from 'react';
function Expense() {
    
    const [expId, setExpId] = useState('')
    const [expDate, setExpDate] = useState('')
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('')
    const [category, setCategory] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        const expenseSave = { expId, expDate, description, location, category }
        console.log(expenseSave)
        fetch("http://localhost:8086/expense_dtls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(expenseSave)

        }).then(() => {
            setIsSubmitted(true);
        })
    }

  return (
    <div className="container" >
    <div className = "app-wrapper" >
    <div className="form">
          <form onSubmit={handleClick}>
              <div className="input-container">
                  <label> Expense Id  </label>
                  <input type="number" name="expId" value={expId} onChange={(e) => setExpId(e.target.value)} required />
              </div><br></br>
              <div className="input-container">
                  <label>Expense Date  </label>
                  <input type="date" name="expenseDate" value={expDate} onChange={(e) => setExpDate(e.target.value)} required />
              </div><br></br>
              <div className="input-container">
                  <label>Description  </label>
                  <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
              </div><br></br>
              <div className="input-container">
                  <label>Location</label>
                  <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
              </div><br></br>
              <div className="input-container">
                  <label>Category</label>
                  <input type="text" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
              </div><br></br>

              <div>
                  <button className="submit">Submit</button>
              </div>
          </form>
      </div>
      </div>
      </div>
  );
}

export default Expense