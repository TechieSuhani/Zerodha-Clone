import React from 'react';

function Universe() {
    return (
   <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>Extend your trading and investment experience even further with our partner platforms</p>
      

  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/smallcaseLogo.png"
      alt="smallcase"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Thematic investing platform that helps you invest in diversified
      baskets of stocks on ETFs.
    </p>
  </div>

  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/streak.png"
      alt="streak"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Systematic trading platform that allows you to create and backtest
      strategies without coding.
    </p>
  </div>

  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/zerodhaHouse.png"
      alt="zerodha"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Our asset management venture that is creating simple and transparent
      index funds to help you save for your goals.
    </p>
  </div>


  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/tijori.png"
      alt="Tijori"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Investment research platform that offers detailed insights on
      stocks, sectors, supply chains, and more.
    </p>
  </div>

  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/sensibull.png"
      alt="Sensibull"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Options trading platform that lets you create strategies,
      analyze positions, and examine data points like open
      interest, FII/DII, and more.
    </p>
  </div>

  <div className="col-12 col-sm-6 col-lg-4 p-3 mt-5">
    <img
      src="./media/ditto.png"
      alt="Ditto"
      className="img-fluid partner-logo"
    />

    <p className="text-muted mt-3 partner-text">
      Personalized advice on life and health insurance.
      No spam and no mis-selling.
    </p>
  </div>
      <button className="p-2 btn btn-primary fs-5 mb-5 mt-5 cta-button" style={{margin: "0 auto"}}>Sign up for free</button>
    </div>
</div>

    );
}

export default Universe ;