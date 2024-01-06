import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { React, useState, useEffect, useRef } from "react";
import { GetFile } from "../Services/fileService";
import { useDispatch, useSelector } from "react-redux";
import {
  setCustomerId,
  selectCustomers,
  selectCustomerId,
  updatedCustomer
} from "../Features/customerSlice";

export default function EditCustomer({
  showEditCustomer,
  setShowEditCustomer
}) {
  const { updateCustomer } = GetFile();
  const dispatch = useDispatch();
  const customerId = useSelector(selectCustomerId);
  const customers = useSelector(selectCustomers);
  const fileInputRef = useRef();

  const [customerData, setCustomerData] = useState({
    username: "",
    fullname: "",
    email: "",
    image: null
  });

  const handleClose = () => setShowEditCustomer(false);
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const getInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setCustomerData((prevData) => ({ ...prevData, [fieldName]: fieldValue }));
  };

  const getFileInput = (e) => {
    const fieldName = e.target.name;
    const file = e.target.files[0];
    console.log("fieldName:", fieldName);
    console.log("file:", file);
    setCustomerData((prevData) => {
      const newData = { ...prevData, [fieldName]: file };

      return newData;
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", customerData.username);
    data.append("fullname", customerData.fullname);
    data.append("email", customerData.email);
    data.append("image", customerData.image);

    try {
      const response = await updateCustomer(customerData._id, data);
      dispatch(updatedCustomer(response.data.data));
      setShowEditCustomer(false);
    } catch (error) {
      console.log("Error Updating Customer: ", error);
    }
  };

  useEffect(() => {
    const fetchSingleCustomer = async () => {
      try {
        const selected = customers.find(
          (customer) => customer._id === customerId
        );
        if (selected) {
          setCustomerData(selected);
        }
      } catch (error) {
        console.error("Error fetching customer data:", error.message);
      }
    };

    if (customerId) {
      fetchSingleCustomer();
    }
  }, [customerId]);

  return (
    <>
      <Modal show={showEditCustomer} onHide={handleClose} centered>
        <Modal.Header className="bg-gradient-to-r from-green-500 to-green-700">
          <div className="p-5 mx-auto">
            <Modal.Title className="text-white">
              Edit Customer Details
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="p-3" controlId="formUsername">
              <Form.Control
                type="text"
                name="username"
                value={customerData.username || ""}
                onChange={getInput}
              ></Form.Control>
            </Form.Group>
            <Form.Group className="p-3" controlId="formFullname">
              <Form.Control
                type="text"
                name="fullname"
                value={customerData.fullname || ""}
                onChange={getInput}
              ></Form.Control>
            </Form.Group>

            <Form.Group className="p-3" controlId="formEmail">
              <Form.Control
                type="text"
                name="email"
                value={customerData.email || ""}
                onChange={getInput}
              ></Form.Control>
            </Form.Group>

            <input
              type="file"
              ref={fileInputRef}
              name="image"
              style={{ display: "none" }}
              onChange={getFileInput}
            />
            <Form.Group className="p-3" controlId="formPhoto">
              <a
                href="#"
                onClick={handleUploadClick}
                className="text-green-500 underline"
              >
                Change Photo
              </a>
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
            Update Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
