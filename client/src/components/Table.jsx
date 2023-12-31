import { React, useEffect, useState } from "react";

import AddCustomer from "../utility-component/AddCustomer";
import DeleteCustomer from "../utility-component/DeleteCustomer";
import { FaPlus } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { GetFile } from "../Services/fileService";
import { useDispatch, useSelector } from "react-redux";
import { setCustomers, selectCustomers } from "../Features/customerSlice";

export default function Table() {
  const { getCustomer } = GetFile();
  const dispatch = useDispatch();
  const customers = useSelector(selectCustomers);

  const [showAddCustomer, setShowAddCustomer] = useState(false);
  const [showDeleteCustomer, setShowDeleteCustomer] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await getCustomer();
        dispatch(setCustomers(response.data.data));
      } catch (error) {
        console.error("Error fetching customer data:", error.message);
      }
    };

    fetchCustomers();
  }, [customers]);

  const handleShowAddCustomer = () => setShowAddCustomer(true);
  const handleShowDeleteCustomer = (customerId) => {
    setSelectedCustomerId(customerId);
    setShowDeleteCustomer(true);
  };

  const tableGrid =
    "grid gap-2 px-4 xl-px-0 grid-cols-5 max-[992px]:grid-cols-[1fr] max-[1440px]:grid-cols-[1fr_1fr_1fr_1fr_1fr]  items-center rounded-[10px] mb-[38px] ";

  return (
    <div className="tableContainer px-6 py-6  lg:px-[50px] lg:py-[47px]">
      <div className="button_wrap mb-10 lg:mb-[40px]">
        <button
          onClick={handleShowAddCustomer}
          className="lg:max-w-[350px] flex items-center justify-center gap-3  xl:text-right relative w-full text-white transition hover:shadow-1 py-[15px] xl:px-10 rounded-[10px] text-[18px] uppercase tracking-[0.24px] btn-green-gradient"
        >
          <span className="icon_wrap relative left-[-10%]">
            <FaPlus />
          </span>
          ADD CUSTOMERS
        </button>
      </div>

      <AddCustomer
        showAddCustomer={showAddCustomer}
        setShowAddCustomer={setShowAddCustomer}
      />

      <DeleteCustomer
        showDeleteCustomer={showDeleteCustomer}
        setShowDeleteCustomer={setShowDeleteCustomer}
        customerId={selectedCustomerId}
      />

      <div id="customerTable">
        {/* Table HEader */}
        <div
          className={`tableHeader py-[14px]  bg-green-300 bg-opacity-[.3] ${tableGrid}`}
        >
          <div></div>
          <button className="hover:underline flex items-center gap-2 bg-none text-[18px] max-[1440px]:text-[14px] font-bold text-green-400">
            Username
            <FaSort />
          </button>
          <button className="hover:underline flex items-center gap-2 bg-none text-[18px] max-[1440px]:text-[14px] font-bold text-green-400">
            Customer Name
            <FaSort />
          </button>
          <button className="hover:underline flex items-center gap-2 bg-none text-[18px] max-[1440px]:text-[14px] font-bold text-green-400">
            Email
            <FaSort />
          </button>
        </div>

        {customers.map((customer) => (
          <div
            key={customer._id}
            className={`hover:scale-[1.01] transition cursor-pointer tableRow px-[14px] py-[9px] ${tableGrid} bg-white`}
          >
            <img src={customer.profilePicture} alt="" />
            <div className="userName text-grey-700 text-[18px] max-[1440px]:text-[12px]">
              {customer.username}
            </div>
            <div className="customerName text-green-500 tracking-[0.36px] capitalize underline font-semibold underline-offset-4 text-[18px] max-[1440px]:text-[12px]">
              {customer.fullname}
            </div>
            <div className="userEmail text-grey-700 text-[18px] max-[1440px]:text-[12px]">
              {customer.email}
            </div>
            {/* ... other fields */}
            <div className="flex flex-wrap items-center justify-start gap-2 tableButtons">
              {/* ... buttons for Edit and Delete */}
              <button className="py-[9px] px-[40px] w-full xl:max-w-[106px]  text-[16px] font-semibold text-green-700 bg-green-600 bg-opacity-[.4] rounded-[5px]">
                Edit
              </button>
              <button
                onClick={() => handleShowDeleteCustomer(customer._id)}
                className="py-[9px] px-[30px]  w-full xl:max-w-[106px] text-[16px] font-semibold text-red-700 bg-red-700 bg-opacity-[.4] rounded-[5px]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
