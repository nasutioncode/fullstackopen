import React, { useState, useEffect } from "react";
import {
  Alert,
  Badge,
  Col,
  Container,
  Input,
  ListGroup,
  Row,
  Form,
  Label,
  FormGroup,
  Button,
  Collapse,
} from "reactstrap";
import UIKontak from "./components/UIListKontak";

import servicesContact from "./services/kontak";

import { IoIosAddCircle } from "react-icons/io";

function App() {
  const [contacts, setContacts] = useState([]);
  const [openNewContact, setOpenNewContact] = useState(false);
  const [inputContactName, setInputContactName] = useState("");
  const [inputContactNumber, setInputContactNumber] = useState("");
  const [alertCreate, setAlertCreate] = useState(false);
  const [alertDelete, setAlertDelete] = useState(false);
  const [alertUpdate, setAlertUpdate] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const toggleOpenContact = () => setOpenNewContact(!openNewContact);

  //readData from database
  useEffect(() => {
    servicesContact.readData().then((initialData) => {
      setContacts(initialData);
    });
  }, []);

  // createData to Database
  const handleInputName = (event) => {
    setInputContactName(event.target.value);
  };
  const handleInputNumber = (event) => {
    setInputContactNumber(event.target.value);
  };

  const addContact = (event) => {
    event.preventDefault();
    console.log("klik boss");
    const objDataContact = {
      name: inputContactName,
      number: inputContactNumber,
      id: contacts.length + 1,
    };

    const checkName = contacts.map((contact) => contact.name.toLowerCase());
    const findName = checkName.find(
      (contact) => contact === objDataContact.name
    );
    const id = checkName.indexOf(findName) + 1;

    const objDataContactUpdate = {
      name: inputContactName,
      number: inputContactNumber,
      id: id,
    };

    console.log("findName..", findName);
    console.log("findId..", id);

    if (objDataContact.name === findName) {
      if (
        window.confirm(
          `${objDataContact.name} sudah terdaftar apakah anda ingin mengganti nomornya ?`
        )
      ) {
        console.log("berhasil");

        servicesContact
          .updateData(id, objDataContactUpdate)
          .then((returnedData) => {
            setContacts(
              contacts.map((contact) =>
                contact.id !== id ? contact : returnedData
              )
            );
          });
        setAlertUpdate(!alertUpdate);
        setTimeout(() => {
          setAlertUpdate(alertUpdate);
        }, 3000);
      }
    } else {
      servicesContact.createData(objDataContact).then((returnedData) => {
        setContacts(contacts.concat(returnedData));
        setInputContactName("");
        setInputContactNumber("");

        setAlertCreate(!alertCreate);
        setTimeout(() => {
          setAlertCreate(alertCreate);
        }, 3000);
      });
    }
  };

  //deleteData from database
  const handleDeleteContact = (id) => {
    if (window.confirm("Apakah Anda Yakin Ingin Hapus Kontak ?")) {
      servicesContact
        .deleteData(id)
        .then((returnedData) =>
          setContacts(contacts.filter((contact) => contact.id !== id))
        );
      setAlertDelete(!alertDelete);
      setTimeout(() => {
        setAlertDelete(alertDelete);
      }, 3000);
    }
  };

  //handleSearch
  const handleSearch = (event) => {
    setInputSearch(event.target.value);
  };

  return (
    <Container>
      <Alert isOpen={alertCreate} className="mt-5" color="success">
        Kontak Berhasil Ditambahkan!
      </Alert>

      <Alert isOpen={alertDelete} className="mt-5" color="danger">
        Kontak Berhasil Di Hapus!
      </Alert>

      <Alert isOpen={alertUpdate} className="mt-5" color="success">
        Kontak Berhasil Di Update!
      </Alert>

      <Alert className="mt-3">
        <Row>
          <Col sm={10}>
            <h1>BUKU TELEPON</h1>
            Fitur <Badge color="danger">Create</Badge>
            <Badge color="primary">Read</Badge>
            <Badge color="warning">Update</Badge>
            <Badge color="info">Delete</Badge> Lokal Server
          </Col>
          <Col sm={2}>
            <IoIosAddCircle
              size={70}
              onClick={toggleOpenContact}
              style={{ cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Alert>

      <Collapse isOpen={openNewContact}>
        <Alert color="danger">
          <Form onSubmit={addContact}>
            <FormGroup>
              <Label>Nama Kontak</Label>
              <Input
                value={inputContactName}
                onChange={handleInputName}
                type="text"
                placeholder="Masukkan Nama"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Nomor Handphone</Label>
              <Input
                value={inputContactNumber}
                onChange={handleInputNumber}
                type="number"
                placeholder="Masukkan Nomor"
              />
            </FormGroup>
            <Button type="submit" color="primary">
              Tambah
            </Button>
          </Form>
        </Alert>
      </Collapse>

      <Alert color="dark">
        <h4>
          Cari Kontak <Badge color="info">{contacts.length}</Badge>{" "}
        </h4>
        <Input
          value={inputSearch}
          onChange={handleSearch}
          type="text"
          placeholder="Masukkan Nama"
          required
          autoFocus
        />
        <hr />
        <ListGroup>
          {contacts
            .filter((contact) => {
              if (!inputSearch) return true;
              if (
                contact.name.toLowerCase().includes(inputSearch) ||
                contact.name.toLowerCase().includes(inputSearch) ||
                contact.name.toUpperCase().includes(inputSearch) ||
                contact.name.toUpperCase().includes(inputSearch)
              ) {
                return true;
              }
            })
            .map((contact, i) => (
              <UIKontak
                key={i}
                contact={contact}
                hapusKontak={() => handleDeleteContact(contact.id)}
              />
            ))}
        </ListGroup>
      </Alert>
    </Container>
  );
}

export default App;
