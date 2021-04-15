import React from "react";

const Home = ()=> {
    return(
        <main>
          <div className="divider"></div>
        <div className="main-wrapper">
        <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../swap-portfolio.svg" alt="..." className="img"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Group Pool</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button"  class="btn btn-primary card-button card-text">Pool
        <div className="fill-one"></div>
        </button>
      </div>
    </div>
  </div>
</div>

      <div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../Bitcoin_P2P.svg" alt="..." className="img"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Exchange Token</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button"  class="btn btn-primary card-button card-text">Swap</button>

      </div>
          
    </div>
  </div>
</div>

<div class="card mb-3" style={{maxWidth: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../crypto_portfolio.svg" alt="..." className="img"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Farm Token</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button"  class="btn btn-primary card-button card-text">Farm</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </main>
    );
}

export default Home;