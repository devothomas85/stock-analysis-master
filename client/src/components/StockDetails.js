import React from "react";
import "./StockDetails.css";
import { Container, Row, Col } from "react-bootstrap";

export default class StockDetails extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="card">
        <div className="outercard">
          <h4>{this.props.data.name}</h4>
          <div className="innercard">
            <Container>
              <Row>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Market Cap</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ {this.props.data.market_cap}
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Divident Yield{"   "}</span>
                    <span className="col-2" style={{ color: "red" }}>
                      {this.props.data.divident_yield}%
                    </span>
                  </div>
                </Col>
                <br />
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Debt Equality</span>
                    <span className="col-2" style={{ color: "red" }}>
                      {this.props.data.debt_to_equity}%
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule">
                    <span className="col">Current Price</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ {this.props.data.curr_market_price}
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule">
                    <span className="col">ROCE</span>
                    <span className="col-2" style={{ color: "red" }}>
                      {this.props.data.roce}%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule">
                    <span className="col">Eps</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ {this.props.data.eps}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Stock P/E</span>
                    <span className="col-2" style={{ color: "red" }}>
                      {this.props.data.stock_pe}%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">ROE</span>
                    <span className="col-2" style={{ color: "red" }}>
                      {this.props.data.roe_pre_annum}%
                    </span>
                  </div>
                </Col>
                <Col sm>
                  <div className="capsule1">
                    <span className="col">Reserves</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ {this.props.data.reserves}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <div className="capsule">
                    <span className="col">Debt</span>
                    <span className="col-2" style={{ color: "red" }}>
                      ₹ {this.props.data.debt}
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
        <div className="outercare-overlay"></div>
      </div>
    );
  }
}
