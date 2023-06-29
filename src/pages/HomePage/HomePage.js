import React, { useCallback } from "react";
import Layout from "layouts/Layout";
import HeadGameList from "components/HeadGameList/HeadGameList";
import CardGames from "components/CardGame/CardGame";
import { CARD_DISPLAY } from "constant/games";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRoutePath, validUrlParamsKey } from "helpers/functions";
import * as actions from "store/actions";
import "./HomePage.css";
import { ROUTES } from "router/routes";

function HomePage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const gameList = useSelector((state) => state?.sortIds) ?? [];
  const cardDisplay =
    useSelector((state) => state?.cardDisplay) ?? CARD_DISPLAY;

  const displayGameList = gameList.slice(0, cardDisplay);

  const showMoreCard = () => {
    dispatch(actions.showMore());
  };

  const handleCardClick = useCallback(
    (item) => {
      dispatch(actions.changeGameDetails(item));

      history(
        getRoutePath(ROUTES.gameDetails, {
          key: validUrlParamsKey(item.key),
        })
      );
    },
    [history, dispatch]
  );

  const renderCardItem = () => {
    return displayGameList.map((item) => (
      <CardGames item={item} onClick={handleCardClick} key={item.key} />
    ));
  };

  if (gameList.length === 0) {
    return (
      <Layout>
        <HeadGameList />
        <div className="home-emty-page">Нету данных по вашему запросу</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <HeadGameList />
      <div className="home-holder-card-list">{renderCardItem()}</div>
      {cardDisplay < gameList.length && (
        <div className="home-holder-button-more">
          <button
            onClick={showMoreCard}
            className="home-button-more"
            disabled={cardDisplay >= gameList.length}
          >
            Показать еще
          </button>
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
