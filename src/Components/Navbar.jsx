import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useState } from "react";
import clsx from "clsx";

const Navbar = () => {
  const [istrue, setIstrue] = useState(false);

  const menu = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "#" },
    { label: "Contact Us", link: "#" },
  ];
  return (
    <div>
      <nav className="border-b-2 border-grey-400 w-screen h-14 flex items-center justify-between px-10">
        <div>
          <h6 className=" text-xl">Logo</h6>
        </div>
        <ul className=" hidden  md:flex justify-center gap-6 items-center ">
          {menu.map((data, i) => {
            return (
              <li key={i} className=" cursor-pointer">
                <a href={data.link}>{data.label}</a>
              </li>
            );
          })}
        </ul>
        <div className="lg:hidden md:hidden">
          <RxHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={() => {
              setIstrue(true);
            }}
          />
        </div>
        <div
          className={clsx(
            " fixed top-0 right-0 translate-x-full w-1/2 h-screen bg-slate-200 ",
            istrue && "translate-x-0"
          )}
        >
          <div>
            <MdClose
              className="text-3xl flex items-center w-full mt-4 cursor-pointer"
              onClick={() => {
                setIstrue(false);
              }}
            />
          </div>
          <div>
            <ul className=" flex items-center flex-col justify-center h-screen gap-5">
              {menu.map((data, i) => {
                return (
                  <li key={i}>
                    <a href={data.link}>{data.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
