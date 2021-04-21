import React from "react";

const Home = ({setView})=> {
    return(
        <main>
   
        <div className="main-wrapper">
        <div class="card card-home mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../swap-portfolio.svg" alt="..." className="img img-fluid"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Cooperative Savings</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" className="button-home" onClick={ ()=>setView("pool")}  class="btn btn-primary card-button button-home card-text">Pool
        <div className="fill-one"></div>
        </button>
      </div>
    </div>
  </div>
</div>

      <div class="card card-home mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../Bitcoin_P2P.svg" alt="..." className="img img-fluid"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Exchange Token</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" onClick={ ()=>setView("swap")}  class="btn btn-primary card-button button-home card-text">Swap</button>

      </div>
          
    </div>
  </div>
</div>

<div class="card card-home mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src="../crypto_portfolio.svg" alt="..." className="img img-fluid"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 class="card-title">Farm Token</h2>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" onClick={ ()=>setView("stake")} class="btn btn-primary card-button card-text button-home">Farm</button>
      </div>
    </div>
  </div>
</div>
      </div>
      </main>
    );
}

export default Home;