import { React, useState, useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { GetFile } from "../Services/fileService";

export default function AddCustomer({ showAddCustomer, setShowAddCustomer }) {
  const { postCustomer } = GetFile();
  const handleClose = () => setShowAddCustomer(false);
  const fileInputRef = useRef(null);

  //Form Data Handling starts here
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    email: "",
    image: null
  });

  const getInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const getFileInput = (e) => {
    const fieldName = e.target.name;
    const file = e.target.files[0];
    setFormData({ ...formData, [fieldName]: file });
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("username", formData.username);
    data.append("fullname", formData.customerName);
    data.append("email", formData.email);
    data.append("image", formData.image);

    try {
      const response = await postCustomer(data);
      setShowAddCustomer(false);
    } catch (error) {
      console.error("Error posting customer data:", error.message);
    }
  };

  //Form Data Handling ends here

  return (
    <>
      <Modal
        show={showAddCustomer}
        onHide={handleClose}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-gradient-to-r from-green-500 to-green-700  ">
          <div className="modalHeade p-5 mx-auto">
            <Modal.Title className="text-white">Add New Customer</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="p-3" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Enter Username"
                name="username"
                onChange={getInput}
              />
            </Form.Group>

            <Form.Group className="p-3" controlId="formFullname">
              <Form.Control
                type="text"
                placeholder="Enter Customer Name"
                name="customerName"
                onChange={getInput}
              />
            </Form.Group>

            <Form.Group className="p-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={getInput}
              />
            </Form.Group>

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              name="image"
              onChange={getFileInput}
            />
            <Form.Group className="p-3" controlId="formPhoto">
              <Form.Label>
                <a
                  href="#"
                  onClick={handleUploadClick}
                  className="text-green-500 underline"
                >
                  Upload Photo
                </a>
              </Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ color: "black" }}
          >
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              formSubmit(e);
              handleClose;
            }}
            style={{ color: "black" }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
