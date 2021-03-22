import {
  Button,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
  Row,
  Col,
} from "reactstrap";

const UIKontak = ({ contact, hapusKontak, editKontak }) => {
  return (
    <ListGroupItem>
      <Row>
        <Col sm={8}>
          {" "}
          <ListGroupItemHeading>{contact.name}</ListGroupItemHeading>
          <ListGroupItemText>{contact.number}</ListGroupItemText>
        </Col>
        <Col sm={2}>
          <Button block color="info" onClick={editKontak}>
            Edit
          </Button>
        </Col>
        <Col sm={2}>
          <Button block color="danger" onClick={hapusKontak}>
            Delete
          </Button>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default UIKontak;
