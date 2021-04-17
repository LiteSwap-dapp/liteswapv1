import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CardDao = ({contract, accounts, web3})=> {

 const [show, setShow] = useState(false);




  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(contract.methods.getcooperativeGroupNames().call((error)=> {
      console.log(error)
    }).then((res)=>{
      console.log(res)
    }))
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
                                                         gas: 30000, gasPriceInWei : 1000
                                                         }).then(res => console.log(res)) }  data-bs-toggle="modal" data-bs-target="#joindao">Create a Cooperative</button>
                  </div>
                <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body">
                <Button className="button-dao" onClick={handleShow}>Join a Cooperative</Button>
            
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