import { Button, Card, Container, Row, Col } from "react-bootstrap";
import books from "../books/history.json";

const AllTheBooks = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="text-center my-2">I Nostri Libri</h1>
        </Col>
      </Row>
      <Row className="justify-content-center g-3">
        {books.map((book) => {
          return (
            <Col key={book.asin} xs={6} md={4} lg={3} className="text-center">
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={book.img} className="w-auto" />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text className="flex-grow-1"></Card.Text>
                  <Button variant="primary">{book.price + "€"}</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
