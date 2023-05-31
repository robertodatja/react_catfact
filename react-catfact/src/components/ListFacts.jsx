import ListGroup from 'react-bootstrap/ListGroup';

function ListFacts({ facts }) {
  return (
    <ListGroup>
      {facts.map((fact) => (
        <ListGroup.Item key={fact.length}>
          {fact.fact}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ListFacts;