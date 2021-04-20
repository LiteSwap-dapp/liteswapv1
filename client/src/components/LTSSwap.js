import React from "react";

const LTSSwap = () => {
  return (
    <main>
 
      <div className="main-other">
        {/* <h1>Welcome to crypto!</h1> */}
     
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div className="card center">
        {/* <a>back</a> */}
          <div className="card-content">
            <div className="card-header">
              <h3>Exchange</h3>
              <p className="text-left">Trade tokens in an instant</p>
            </div>
            <form >
              <div className="card-body">
                <div className="media d-flex">
                  <div className="media-body text-left">
                    <div className="container-fluid">



                      <div className="row swap-input">
                        <div className="col col-6 ">
                          <label >From</label>
                          <input type="text" placeholder="0.0" />

                        </div>
                        <div className="col col-6">
                          <select>
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
                          <select>
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