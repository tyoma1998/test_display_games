import HeadSelect from "components/HeadSelect/HeadSelect";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "store/actions";
import "./HeadGameList.css";

function HeadGameList() {
  const dispatch = useDispatch();
  const providerList = useSelector((state) => state?.providerList) ?? [];
  const currencyList = useSelector((state) => state?.currencyList) ?? [];

  const dataListSelect = [
    {
      title: "Валюта",
      dataList: currencyList,
      currentKey: "currency",
    },
    {
      title: "Провайдеры",
      dataList: providerList,
      currentKey: "provider",
    },
  ];

  const handleSelect = (key, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(actions.changeSort({ [key]: value }));
  };

  useEffect(() => {
    dispatch(actions.getProviderList());
    dispatch(actions.getCurrencyList());
  }, [dispatch]);

  const renderSelectList = () => {
    return dataListSelect.map(({ title, dataList, currentKey }) => (
      <HeadSelect
        title={title}
        dataList={dataList}
        onSelect={handleSelect}
        currentKey={currentKey}
        key={currentKey}
      />
    ));
  };

  return (
    <>
      <div className="head-game-list-container">{renderSelectList()}</div>
      <div className="head-game-hidden-block" />
    </>
  );
}

export default HeadGameList;
