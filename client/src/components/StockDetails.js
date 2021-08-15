import React from "react";
import "./StockDetails.css";
import { Container, Row, Col } from "react-bootstrap";

export default class StockDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="card">
        <div className="outercard">
          <h4>name</h4>
          <div className="innercard">
            <Container>
              <Row>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Market Cap</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ 12.00
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Divident Yield{"   "}</span>
                    <span className="col-2" style={{ color: "red" }}>
                      12.00%
                    </span>
                  </div>
                </Col>
                <br />
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Debt</span>
                    <span className="col-2" style={{ color: "red" }}>
                      12.00%
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule">
                    <span className="col">Current Price</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ 12.00
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule">
                    <span className="col">ROCE</span>
                    <span className="col-2" style={{ color: "red" }}>
                      12.00%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule">
                    <span className="col">ROE</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ 12.00
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Stock P/E</span>
                    <span className="col-2" style={{ color: "red" }}>
                      12.00%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Debt Equality</span>
                    <span className="col-2" style={{ color: "red" }}>
                      12.00%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Reserves</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ 12.00
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule">
                    <span className="col">Debt</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ 12.00
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule"></div>
                </Col>
                <Col sm>
                  <div className="capsule"></div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}
