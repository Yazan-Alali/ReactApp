import React from 'react'

function Features() {
  return (
    <section aria-label="App features" className="features">

    <div className="container">
      <div className="iphone">
        <img src="/icons/iphone features.png" alt="an iphone with credit card popping out" />
      </div>

      <div className="text space-y-1">
        <h2 className="h1">App Features</h2>
        <p className="text-lg"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
          Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus. </p>

        <div className="features-grid">

          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/credit-card.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Easy Payments</h3>
              <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/shield.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Data Security</h3>
              <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/bars-graphic.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Cost Statistics</h3>
              <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/communication.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Support 24/7</h3>
              <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/wallet.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Regular Cashback</h3>
              <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
            </div>
          </div>
          <div className="feature-card">
            <div className="icon-container">
              <img src="/icons/happy.svg" alt="" />
            </div>
            <div className="space-y-1">
              <h3 className="h5">Top Standards</h3>
              <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </section>
  )
}

export default Features
