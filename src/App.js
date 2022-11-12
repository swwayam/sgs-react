import React, { useState } from "react";
import Icon from "./Components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

const iconsArray = new Array(9).fill("empty");

function App() {
  const [isCross, setIsCross] = useState(true);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    setIsCross(true);
    setWinMessage("");
    iconsArray.fill("empty", 0,9)
  };

  const checkWinner = () => {
    //
  };

  const changeIcons = (iconNumber) => {
    if(winMessage){
      // return something
    }

    if(iconsArray[iconNumber] === "empty"){
      iconsArray[iconNumber] = isCross ? "Cross" : "Circle";
      setIsCross(!isCross)
    }else{
      return toast("Already Filled", {type: "error"})
    }
  };

  return (
    <div>
      <Container className="p-5">
        <ToastContainer position="bottom-center" />
        <Row>
          <Col md={6} className="offset-md-3">
            {winMessage ? (
              <div className="mb-2 mt-2">
                <h1 className="text-primary text-uppercase text-center">
                  {winMessage}
                </h1>
                <Button color="success" block onClick={reloadGame}>
                  Reload
                </Button>
              </div>
            ) : (
              <h1 className="text-center text-warning">
                {isCross ? "Cross" : "Circle"} Turns
              </h1>
            )}
            <div className="grid">
              {
                iconsArray.map((icon,index) => (
                  <Card key={index} color="warning" onClick={() => {changeIcons(index)}}>
                    <CardBody className="box">
                      <Icon theIcon={icon} />
                    </CardBody>
                  </Card>
                ))
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
