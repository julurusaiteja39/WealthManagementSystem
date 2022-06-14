import React from 'react'
import "./styles.css";
import { useState } from 'react';
function Category() {
    
    const [CatId, setCatId] = useState('')
    const [catName, setCatName] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleClick = (e) => {
        e.preventDefault()
        const catAdd = { CatId,catName }
        console.log(catAdd)
        fetch("http://localhost:8086/cat_dtls", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(catAdd)

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
                      <label> Category Id  </label>
                      <input type="number" name="CatId" value={CatId} onChange={(e) => setCatId(e.target.value)} required />
                  </div><br></br>
                  <div className="input-container">
                      <label>Category Name  </label>
                      <input type="text" name="catName" value={catName} onChange={(e) => setCatName(e.target.value)}required />
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

export default Category