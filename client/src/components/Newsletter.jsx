import React from 'react'

export default function Newsletter() {
  return (
    <div className="subscribe-newsletter-container">
        <h2>
          Subscribe to our newsletter to get updates <br />
          to our latest collections
        </h2>
        <p id="newsletter-offer">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <input
          type="text"
          className="email-input-newsletter"
          placeholder="Enter your email"
        />
        <button className="btn-subscribe-newsletter">Susbcribe</button>
        <p id="fake-blood-policy">
          Read our policy <u>here</u>
        </p>
      </div>
  )
}
