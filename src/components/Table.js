import React, { useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { BiDownArrow } from "react-icons/bi";

const Table = ({ tableData, config }) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [sortedData, setSortedData] = useState(tableData);

  const onSortHandler = (label) => {
    label = label.toLowerCase();
    console.log(typeof label, "type of");
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }

    //actual sorting
    if (label === "score") {
      if (sortOrder === null) {
        setSortedData([...tableData].sort((a, b) => a.score - b.score));
        console.log("result after asc", sortedData);
      } else if (sortOrder === "asc") {
        setSortedData([...tableData].sort((a, b) => b.score - a.score));

        console.log(sortedData);
      } else if (sortOrder === "desc") {
        return setSortedData(tableData);
      }
    } else if (label === "name") {
      if (sortOrder === null) {
        setSortedData(
          [...tableData].sort((a, b) => a.name.localeCompare(b.name))
        );
        console.log("result after asc", sortedData);
      } else if (sortOrder === "asc") {
        setSortedData(
          [...tableData].sort((a, b) => b.name.localeCompare(a.name))
        );
        console.log(sortedData);
      } else if (sortOrder === "desc") {
        return setSortedData(tableData);
      }
    }
  };

  const getIcons = (label, sortBy, sortOrder) => {
    if (label.toLowerCase() !== sortBy) {
      return (
        <>
          <BiUpArrow /> <BiDownArrow />
        </>
      );
    }
    if (sortOrder === null) {
      return (
        <>
          <BiUpArrow /> <BiDownArrow />
        </>
      );
    }
    if (sortOrder === "asc") {
      return (
        <>
          <BiUpArrow />
        </>
      );
    }
    if (sortOrder === "desc") {
      return (
        <>
          <BiDownArrow />
        </>
      );
    }
  };

  return (
    <table className="table-auto border-spacing-2 p-3">
      <thead className="bg-sky-500/75">
        <tr className="border-b">
          {config.map((tableHeader) => {
            return (
              <td
                className="p-3"
                onClick={() => onSortHandler(tableHeader.label)}
              >
                <span className="label-sort">
                  {tableHeader.label}
                  {tableHeader.sortable && (
                    <>{getIcons(tableHeader.label, sortBy, sortOrder)}</>
                  )}
                </span>
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((data) => (
          <tr>
            {config.map((con) => {
              return <td className="p-2">{con.render(data)}</td>;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
