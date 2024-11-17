import React from 'react'

const Contacts = () => {
  return (
    <section aria-label="contacts" className="contacts">
    <div className="container">
      <div className="first-column">
        <img src="/icons/contacts2.png" alt="contacts bild" />
      </div>
      <div className="secound-column">
        <div className="content">
          <h2>Receive payment from international bank details</h2>
          <div className="app-features">
            <div className="app-feature">
              <div className="feature-icon">
                <img src="/icons/credit-card.svg" alt="credit card" />
              </div>
              <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
            </div>
              <div className="app-feature">
                <div className="feature-icon">
                  <img src="/icons/wallet.svg" alt="wallet icon" />
                </div>
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
          </div>
            <a className="btn btn-learn-more" href="#">Learn more <i className="fa-solid fa-arrow-right"></i></a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Contacts