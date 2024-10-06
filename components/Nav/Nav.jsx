"use client";
import "./nav.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { signIn, signOut, useSession, getproviders } from "next-auth/react";

const Nav = (props) => {
  const handleToggle = () => {
    setToggleDropdown((prev) => !prev);
  };

  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [toggleMenuIcon, setToggleMenuIcon] = useState(true);

  const isUserLoggedIn = false;
  const [providers, setProviders] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  });
  if (!isLoaded) return null;

  // const outside = (e) => {
  //   if (toggleDropdown === true) {
  //     setToggleDropdown(false);
  //   }
  // };

  return (
    <div className="nav flex flex-row py-4 gap-2">
      <div className="navleft">
        <Link href="/" className="flex gap-2 link">
          <Image
            src="/assets/icons/logo.svg"
            width={40}
            height={40}
            className="object-contain"
          />
          <p className="text_gradient">GoldCart</p>
        </Link>
        <div className="mediaSearch">
          <div className="navform flex flex-row items-center ">
            <div className="flex flex-row ">
              <div className="flex flex-row search ">
                <span className="span ">
                  <Image
                    src="/assets/icons/search.svg"
                    width={10.14}
                    height={10.14}
                    className="object-contain"
                  />
                </span>
                <input
                  name="search"
                  type="text"
                  placeholder="Search Products and Brands"
                  className="input"
                />
              </div>
              <div>
                <button className="bg-[#CF9D3A]  searchbutton">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navright flex flex-row items-center gap-10">
        <div
          className="onenav flex flex-row gap-1 cursor-pointer"
          onClick={() => setToggleDropdown((prev) => !prev)}>
          <p className="nav_text mediaA">Account</p>
          <div className="flex justify-center items-end down">
            <Image
              src="/assets/icons/down.svg"
              width={10}
              height={10}
              onClick={() => setToggleDropdown((prev) => !prev)}
              className="object-contain mediaA"
            />
          </div>
        </div>

        {toggleDropdown && (
          <div className="dropdown">
            <div className="innerAbsolute">
              {isUserLoggedIn ? (
                <div className="loggedIN">
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.Id)}
                        className=""></button>
                    ))}
                </div>
              ) : (
                <div className="notLoggedIn">
                  <div className="upperAbsolute">
                    <p className="absoluteText">New Customer?</p>

                    <div className="accountButtonSignUp">
                      <Link href="/signup">Sign Up</Link>
                    </div>
                  </div>
                  <span className="lineSpan"></span>

                  <div className="lowerAbsolute">
                    <p className="absoluteText">Returning Customer?</p>
                    <div className="accountButtonSignIn">
                      <Link href="/signin">Sign In</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        <div className="twonav cursor-pointer">
          <p className="nav_text">Support</p>
        </div>
        <div className="threenav">
          <div className="flex justify-center items-center ">
            <Image src="/assets/icons/cart.svg" width={30} height={30} />
            {toggleMenuIcon ? (
              <Image
                src="/assets/icons/menu.svg"
                width={32}
                height={32}
                className="object-contain mediaMenu cursor-pointer"
                onClick={() => setToggleMenuIcon((prev) => !prev)}
              />
            ) : (
              <Image
                src="/assets/icons/close.svg"
                width={23}
                height={23}
                className="object-contain mediaMenu cursor-pointer"
                onClick={() => setToggleMenuIcon((prev) => !prev)}
              />
            )}
          </div>
          {!toggleMenuIcon && (
            <div className="absoluteMenu">
              <div className="cursor-pointer">
                <p className="mediaNavText">Support</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
