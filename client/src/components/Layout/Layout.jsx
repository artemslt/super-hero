import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import { Container } from "./Layout.styled";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </>
  );
};
