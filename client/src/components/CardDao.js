import React from "react";

const CardDao = ({contract, accounts})=> {

  console.log(contract)
    return(
        <main>
        <div className="main-other">
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div className="card">
     
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                <button className="button-dao" onClick={()=> contract.methods.createLTSGroup("Opebi").send({
                                                        from: accounts[0],
                                                     }).then(res => console.log(res)) }>Create a Cooperative</button>
                  </div>
                <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body">
                <button className="button-dao" data-bs-toggle="modal" data-bs-target="#dao">Join a Cooperative</button>
            
                </div>
                <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>

            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                <button className="button-dao">Pay your Dues</button>
            
                </div>
                <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>

      <div className="modal fade" id="dao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </main>
    );
}

export default CardDao;