import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Table from "./components/Table";

// import AddCustomer from "./utility-component/AddCustomer";
export default function App() {
  const [sidepanelState, setSidepanelState] = useState(false);
  return (
    <>
      <div id="main" className="grid grid-cols-12 min-h-screen bg-white">
        <Sidebar
          sidepanelState={sidepanelState}
          sidePanelSetState={setSidepanelState}
        />

        <main className="col-span-full xl:col-span-9 h-full bg-grey-400">
          <Header sidePanelSetState={setSidepanelState} />
          <Table />
        </main>
      </div>
    </>
  );
}
