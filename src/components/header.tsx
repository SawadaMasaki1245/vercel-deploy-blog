import { FC } from "react";
import Logo from "./logo";
import Nav from "./nav";

const Header: FC = () => {
  return (
    <header className="flex justify-center items-center">
      <div
        className="container flex flex-row justify-between
            items-center max-w-5xl"
      >
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
