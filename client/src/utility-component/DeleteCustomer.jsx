import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IoTrashOutline } from "react-icons/io5";
import { GetFile } from "../Services/fileService";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteCustomer,
    setSelectedCustomerId,
    selectCustomersId,
} from "../Features/customerSlice";

export default function DeleteCustomer({
    showDeleteCustomer,
    setShowDeleteCustomer,
}) {
    const dispatch = useDispatch();
    const selectedCustomerId = useSelector(selectCustomersId);
    const handleClose = () => setShowDeleteCustomer(false);
    const { destroyCustomer } = GetFile();

    const handleDelete = async () => {
        try {
            const response = await destroyCustomer(selectedCustomerId);
            console.log("API Response:", response);

            console.log("id : ", selectedCustomerId);
            if (response.status === 200) {
                dispatch(deleteCustomer(selectedCustomerId));
                dispatch(setSelectedCustomerId(null));
                setShowDeleteCustomer(false);
            } else {
                console.error("Error deleting customer:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting customer:", error.message);
        }
    };
    return (
        <>
            <Modal show={showDeleteCustomer} onHide={handleClose} centered>
                <Modal.Body className="p-5">
                    <div className="text-center">
                        <div className="flex justify-center text-red-500">
                            <IoTrashOutline className="text-8xl mb-4 text-[#D80000]" />
                        </div>
                        <div className="mb-4">
                            <p className="font-semibold text-lg">
                                Are You Sure?
                            </p>
                            <p className="p-3">
                                Do you really want to delete this customer?{" "}
                                <br /> This process can not be undone.
                            </p>
                        </div>
                        <div className="flex justify-center space-x-8">
                            <Button
                                className="bg-[#A5A5AF] text-gray-700 px-20 py-2 rounded border-[#A5A5AF] hover:bg-[#A5A5AF]"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                className="bg-[#D80000] text-white px-20 py-2 mr-2 rounded border-[#D80000] hover:bg-[#D80000]"
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
