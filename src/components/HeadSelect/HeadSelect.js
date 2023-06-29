import { SELECT_VALUE_ALL_DISPLAY } from "constant/games";
import React, { memo } from "react";
import { useSelector } from "react-redux";
import "./HeadSelect.css";

function HeadSelect({
  title = "",
  defaultOption = "Все",
  dataList = [],
  onSelect = () => {},
  currentKey = "",
}) {
  const value = useSelector((state) => state?.[currentKey]) ?? "";

  const handleSelect = ({ target }) => {
    onSelect(currentKey, target.value);
  };

  const renderSelect = () => {
    return (
      <select
        disabled={dataList.length === 0}
        onChange={handleSelect}
        value={value}
        className="head-select-holder"
      >
        <option value={SELECT_VALUE_ALL_DISPLAY}>{defaultOption}</option>
        {dataList.length > 0 &&
          dataList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
      </select>
    );
  };

  return (
    <label className="head-select-label">
      {title}
      {renderSelect()}
    </label>
  );
}

export default memo(HeadSelect);
