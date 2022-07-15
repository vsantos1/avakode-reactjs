import React, { useEffect, useState } from "react";
import { setPageTitle } from "../../hooks/ChangeTitle";
import Header from "../../components/Header";
import Background from "../../components/Background";
import { userAuthenticated } from "../../hooks/Authenticated";
import { Navigate } from "react-router-dom";

function App() {
  const isAuth = userAuthenticated();

  return isAuth ? (
    <Navigate to="/dashboard" />
  ) : (
    <>
      <Header />
      <Background />
    </>
  );
}

export default App;
