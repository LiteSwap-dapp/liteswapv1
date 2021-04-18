import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const CardDao = ({contract, accounts, web3})=> {

 const [show, setShow] = useState(false);




  const handleClose = () => setShow(false);
  const handleShow = async (e) => {
    e.preventDefault();
    setShow(true);
    console.log(await contract.methods.getcooperativeGroupNames().call())
  }

    return(
        <main>
        <div className="main-other">
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div className="card">
     
          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                <button className="button-dao" onClick={()=> contract.methods.createCooperativeGroup("Surulere", 10).send({
                                                        from: accounts[0],
                                                        value: web3.utils.toWei( (20).toString() , 'ether'),
                                                         gas: 300000, gasPriceInWei : 1000
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
                <button className="button-dao" onClick={handleShow}>Join a Cooperative</button>
            
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       </Modal.Header>
        <Modal.Body><Form>
  <Form.Group controlId="exampleForm.ControlInput1">

  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Select Group to Join</Form.Label>
    <Form.Control as="select">
 
   
    </Form.Control>
  </Form.Group>
  </Form>
  </Modal.Body>
  
      </Modal>


      </main>
    );
}

export default CardDao;