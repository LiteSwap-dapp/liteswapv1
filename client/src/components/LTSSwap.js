import React from "react";

const LTSSwap = () => {
  return (
    <main>
 
      <div className="main-other">
        {/* <h1>Welcome to crypto!</h1> */}
     
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div className="card card-swap center">
        {/* <a>back</a> */}
          <div className="card-content">
            <div className="card-header card-header-swap">
              <h3>Exchange</h3>
              <p className="text-left">Trade tokens in an instant</p>
            </div>
            <form >
              <div className="card-body">
                <h3 className="swap-balance">Balance: 0</h3>
                <div className="media d-flex">
                  <div className="media-body text-left">
                    <div className="container-fluid">



                      <div className="row swap-input">
                        <div className="col col-6 ">
                          <label >From</label>
                          <input type="text" placeholder="0.0" />

                        </div>
                        <div className="col col-6">
                          <select className="select-swap0">
                            <option>BNB</option>
                          </select>
                        </div>
                      </div>





                    </div>
                  </div>
                  <div className="align-self-center">
                    <i className="icon-rocket danger font-large-2 float-right"></i>
                  </div>
                </div>
              </div>
              <div className="arrow-swap">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
</svg>
              </div>
            
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left">
                    <div className="container-fluid">
                      <div className="row swap-input">
                        <div className="col col-6 ">
                          <label >To</label>
                          <input type="text" placeholder="0.0" />

                        </div>
                        <div className="col col-6">
                          <select className="select-swap1">
                            <option>BNB</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="align-self-center">
                    <i className="icon-rocket danger font-large-2 float-right"></i>
                  </div>
                </div>
              </div>
              <div className="container-fluid">
                <button type="submit" className="swap-button">Unlock Wallet</button>
              </div>

            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </main>
  );
}

export default LTSSwap;