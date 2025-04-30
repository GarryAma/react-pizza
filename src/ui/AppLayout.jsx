import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative grid grid-rows-[auto_1fr_auto] h-screen font-display">
      {isLoading && <Loader />}
      {/* <Loader /> */}
      <Header />
      <main className="max-w-3xl w-full mx-auto">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
};

export default AppLayout;
