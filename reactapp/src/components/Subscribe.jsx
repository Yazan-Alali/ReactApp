import React from 'react'

const Subscribe = () => {
  return (
    <section aria-label="subscribe" className="subscribe">
    <div className="container">
      <img src="/icons/notification.svg" alt=" bell" />
      <h2>Subscribe to our newsletter to stay informed about latest updates</h2>
      <form className="subscribe-form">
        <div className="input-container">
          <input type="email" name="email" placeholder="Your Email" />
          <i className="fa-regular fa-envelope"></i>
          <button type="submit" className="btn">Subscribe</button>
        </div>
      </form>
    </div>
  </section>
  )
}

export default Subscribe