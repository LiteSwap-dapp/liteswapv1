import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CardDao = ({ contract, accounts, web3 }) => {

  const [show, setShow] = useState(false);
  const [groupShow, setGroupShow] = useState(false);
  const [getGroupName, setGroupName] = useState("");
  const [join, setJoin] = useState("");
  const [dao, setDao] = useState([])




  const handleClose = () => setShow(false);
  const handleGroupClose = () => setGroupShow(false);


  const handleShow = () => {
    setShow(true);
    try{
    contract.methods.getcooperativeGroupNames().call()
    .then((list) => {
      setDao(list);
    })
    }catch(error){
      console.log(error);
    }

  }

  const handleGroupJoin = (e) => {
    setJoin(e.target.value)
   }

  const addMemberToGroup = (e) => {
    contract.methods.joinCooperativeGroup(join).call().then(res => console.log(res))
    handleClose();
  }

  const handleGroupCreation = (e) => {
    e.preventDefault();
    try {
      contract.methods.createCooperativeGroup(getGroupName, 10).send({
        from: accounts[0]
      }).then(res => console.log(res))

      handleGroupClose()
    }
    catch (error) {
      console.log(error)
    }



  }

  const handleGroupInput = (e) => {
    setGroupName(e.target.value);



  }


  const showGroupInput = () => {
    setGroupShow(true);
  }
  return (
    <main>
      <div className="main-other">
        {/* <div class="col-xl-12 col-sm-12 col-12"> */}
        <div className="card card-group">

          <div className="card-content">
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <button className="button-dao" onClick={showGroupInput}>Create a Cooperative</button>
                </div>
                {/* <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div> */}
              </div>
            </div>
            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body">
                  <button className="button-dao" onClick={() => handleShow()}>Join a Cooperative</button>

                </div>
                {/* <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div> */}
              </div>
            </div>

            <div className="card-body">
              <div className="media d-flex">
                <div className="media-body text-left">
                  <button className="button-dao">Pay your Dues</button>

                </div>
                {/* <div className="align-self-center">
                  <i className="icon-rocket danger font-large-2 float-right"></i>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>

      <Modal show={show} size="md" animation="true" centered onHide={handleClose}>
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <div class="alert alert-warning">Would you rather prefer to explore the respective groups before joining? follow this <a href="#">Explore Groups</a></div>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Select Group to Join</Form.Label>
              <Form.Control as="select" onChange={handleGroupJoin}>
                {
                  dao.length === null ? "No Cooperative yet" :
                    dao.map((list) => {
                      return <option>{list}</option>
                    })}

              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={addMemberToGroup} >
              Join Cooperative
  </Button>
          </Form>
        </Modal.Body>

      </Modal>

      <Modal size="md" animation="true" centered show={groupShow} onHide={handleGroupClose} >
        <Modal.Header closeButton >
        </Modal.Header>
        <Modal.Body>
        <Container fluid>
          <Row>
          <Col>
          <Form >
            <Form.Group controlId="exampleForm.ControlInput1">

            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
            <div class="alert alert-warning">Note, Cooperative Group creation attracts a fee</div>
              <Form.Group controlId="exampleForm.ControlInput1">
            
                <Form.Label>Cooperative Name</Form.Label>
                <Form.Control type="text" placeholder="Enter New Cooperative" onChange={handleGroupInput} />
              </Form.Group>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleGroupCreation} >
              Create Group
  </Button>
          </Form>  
          </Col>
          </Row>
          </Container>
        

        </Modal.Body>

      </Modal>


    </main>
  );
}

export default CardDao;