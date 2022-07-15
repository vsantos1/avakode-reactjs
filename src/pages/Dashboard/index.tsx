import React, { useEffect, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { setPageTitle } from "../../hooks/ChangeTitle";
import { Container, Logo } from "./styles";
import { userAuthenticated } from "../../hooks/Authenticated";
import DashboardHeader from "../../components/DashboardHeader";

const Dashboard: React.FC = () => {
  const isAuth = userAuthenticated();

  setPageTitle("@vsantos1 | Dashboard");

  return isAuth ? (
    <>
      <DashboardHeader />
      <Container>
        <video height={200} src="/music.mp4" role="music" controlsList="nodownload nofullscreen" translate="yes" title="Lil peep song" controls poster="/poster.jpg" />
      </Container>
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default Dashboard;
