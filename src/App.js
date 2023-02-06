import { useEffect, useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import Modal from "./components/Modal";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";

function App() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 2,
      label: "Can I use Javascript on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
    {
      id: 3,
      label: "Can I use CSS on a project?",
      content:
        "You can use React on any project you want. You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.",
    },
  ];

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  const tableData = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-500", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];

  const config = [
    { label: "Name", render: (row) => row.name, sortable: true },
    {
      label: "Color",
      render: (row) => {
        return (
          <div className="m-3">
            <td className={`${row.color} p-3`}></td>
          </div>
        );
      },
      sortable: false,
    },
    { label: "Score", render: (row) => row.score, sortable: true },
  ];

  const [showModal, setShowModal] = useState(false);
  const onOpenModalHandler = () => {
    setShowModal(true);
  };
  return (
    <main className="main-wrapper">
      <aside className="sidebar">
        <Sidebar />
      </aside>
      <div className="components">
        <h1 className="text-center pb-3">Accordion</h1>
        <Accordion items={items} />
        <h1 className="text-center pt-5">Dropdown</h1>
        <Dropdown options={options} />
        <h1 className="text-center pb-3">Modal</h1>
        <button
          className="bg-sky-500/75 text-white p-3"
          onClick={onOpenModalHandler}
        >
          OpenModal
        </button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <h1 className="text-center pb-3">Table</h1>
        <Table tableData={tableData} config={config} />
      </div>
    </main>
  );
}

export default App;
