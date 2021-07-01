import PropTypes from "prop-types";

import { Container, Row, Col, Button } from "react-bootstrap";

import { useCounter } from "../hooks/useCounter";

const Counter = ({ value }) => {
  const { increment, decrement, counter } = useCounter(value);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1>El gran contador {counter}🔥</h1>
          <Button onClick={increment}>+1</Button>
          <Button onClick={decrement}>-1</Button>
        </Col>
      </Row>
    </Container>
  );
};

Counter.defaultProps = {
  value: 0,
};

Counter.propTypes = {
  value: PropTypes.number,
};

export default Counter;
