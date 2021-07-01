import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useFetch } from "../hooks/useGet";

const APICall = () => {
  const [info, loading, error] = useFetch("character"); // info = [] info.results

  if (loading) return <h3>Cargando...</h3>;
  if (error) return <h3>Ocurrió un error</h3>;

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h1 className="text-center">Personajes</h1>

          {info.results.length > 0 &&
            info.results.map((character) => <p>{character.name}</p>)}
        </Col>
      </Row>
    </Container>
  );
};

export default APICall;
