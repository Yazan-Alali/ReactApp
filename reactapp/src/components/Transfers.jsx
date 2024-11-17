import React from 'react'

const Transfers = () => {
  return (
    <section aria-label="transfers" className="transfers">
    <div className="container">
      <div className="first-column">
        <div className="content">
          <h2>Make your money transfer simple and clear</h2>
          <ul>
            <li className="checklist-item"><i className="fa-regular fa-circle-check btn-primary"></i>Banking transactions are free for you</li>
            <li className="checklist-item"><i className="fa-regular fa-circle-check btn-primary"></i>No monthly cash commission</li>
            <li className="checklist-item"><i className="fa-regular fa-circle-check btn-primary"></i>Manage payments and transactions online</li>
          </ul>
          <a className="btn btn-learn-more" href="#" >Learn more <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
      <div className="second-column">
        <img src="icons/trans1.png" alt="Silicon app bild" />
      </div>
    </div>
  </section>
  )
}

export default Transfers