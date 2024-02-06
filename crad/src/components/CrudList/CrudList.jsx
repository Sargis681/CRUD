import React, { useEffect, useRef, useState } from "react";
import "./crudList.css";
import List from "../List/List";
import { useSelector } from "react-redux";
import { selectAdd } from "../../store/addSlice/addSlice";

function CrudList() {
  const [searchText, setSearchText] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const textInputRef = useRef();
  const dateInputRef = useRef();

  useEffect(() => {
    console.log("Text:", textInputRef.current.value);
    console.log("Date:", dateInputRef.current.value);
  }, [searchText, searchDate]);

  const data = useSelector(selectAdd);

  const handleTextChange = () => {
    setSearchText(textInputRef.current.value);
  };

  const handleDateChange = () => {
    setSearchDate(dateInputRef.current.value);
  };

  const filteredData = data
    ? data.list.filter(
        (e) =>
          e.text.toLowerCase().includes(searchText.toLowerCase()) &&
          e.date.toLowerCase().includes(searchDate.toLowerCase())
      )
    : [];

  return (
    <div className="crudList">
      <div className="crudList__sort">
        <input
          type="search"
          ref={textInputRef}
          onChange={handleTextChange}
          value={searchText}
          placeholder="Search Text"
        />
        <input
          type="date"
          ref={dateInputRef}
          onChange={handleDateChange}
          value={searchDate}
        />
      </div>
      <div className="crudList__all">
        {filteredData.map((e) => (
          <List key={e.id} text={e.text} date={e.date} id={e.id} />
        ))}
      </div>
    </div>
  );
}

export default CrudList;
