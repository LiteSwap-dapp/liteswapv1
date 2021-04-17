import React from "react";

const CardDao = ({contract})=> {
    return(
        <main>
        <div className="main-other">
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div class="card">
     
          <div class="card-content">
            <div class="card-body">
              <div class="media d-flex">
                <div class="media-body text-left">
                <button className="button-dao" onClick={()=> contract.methods.createLTSGroup("Opebi").send({
                                                        from: this.state.accounts[0],
                                                     }) }>Create a Cooperative</button>
                  </div>
                <div class="align-self-center">
                  <i class="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div class="media d-flex">
                <div class="media-body">
                <button className="button-dao" data-bs-toggle="modal" data-bs-target="#dao">Join a Cooperative</button>
            
                </div>
                <div class="align-self-center">
                  <i class="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>

            <div class="card-body">
              <div class="media d-flex">
                <div class="media-body text-left">
                <button className="button-dao">Pay your Dues</button>
            
                </div>
                <div class="align-self-center">
                  <i class="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
      </div>

      <div class="modal fade" id="dao" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      </main>
    );
}

export default CardDao;