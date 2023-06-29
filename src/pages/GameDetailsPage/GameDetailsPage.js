import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "store/actions";
import { useNavigate } from "react-router-dom";
import { getKeyGameFromLink } from "helpers/functions";
import Layout from "layouts/Layout";
import "./GameDetailsPage.css";

function GameDetailsPage() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { key } = useParams();
  const cardDisplay = useSelector((state) => state?.gameDetails) ?? {};
  const isRedirectHome = useSelector((state) => state?.isRedirectHome) ?? false;

  const redirectHome = () => {
    history(-1);
  };

  useEffect(() => {
    if (!cardDisplay.title && key) {
      dispatch(actions.findGameDetails(getKeyGameFromLink(key)));
    }
  }, [key, cardDisplay.title, dispatch]);

  useEffect(() => {
    if (isRedirectHome) {
      redirectHome();
      dispatch(actions.changeIsRedirectHome());
    }
  }, [isRedirectHome, dispatch]);

  return (
    <Layout>
      <div>
        <button onClick={redirectHome}>На главную</button>
      </div>
      <div className="game-details-holder-title">{cardDisplay.title || ""}</div>
    </Layout>
  );
}

export default GameDetailsPage;
