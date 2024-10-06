"use client";

import "./signin.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Layout from "@layout";

const SignIn = () => {
  const [show, setShow] = useState(true);
  return (
    <Layout page="signin">
      <div className="container">
        <div className="inner">
          {/* <div className="top gap-3">
            <div className="image">
              <Image
                src="/assets/icons/logo.svg"
                alt="goldcart"
                width={50}
                height={50}
                className="object-contain"
              />
            </div>

            <p className="text_gradient_text">GoldCart</p>
          </div> */}
          <div className="MainBottom">
            <div className="formText">
              <p className="formTitle">Sign In</p>
              <p className="formDescription">Sign into your Goldcart account</p>
            </div>
            <div className="formInput">
              <div className="input">
                <div className="label">
                  <label htmlFor="email">Email Address or Phone Number</label>
                </div>

                <input
                  type="email"
                  placeholder="Email Address or Phone Number"
                  name="email"
                  required
                  autoFocus
                  autoComplete="given-name"
                  id="email"
                />
              </div>

              <div className="outerPassword flex justify-center items-center flex-col">
                <div className="label ">
                  <label htmlFor="phone">Password</label>
                </div>
                <div className="pass flex justify-center items-center">
                  <div className="password flex flex-row justify-center items-center">
                    {!show ? (
                      <input
                        type="text"
                        placeholder="Password"
                        name="password"
                        required
                        autoComplete="password"
                        id="password"
                      />
                    ) : (
                      <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        autoComplete="password"
                        id="password"
                      />
                    )}

                    <span className="hide flex justify-center items-center cursor-pointer">
                      {show ? (
                        <Image
                          src="/assets/icons/eye.svg"
                          width={18}
                          height={18}
                          className="object-contain"
                          onClick={() => setShow((prev) => !prev)}
                          alt="show"
                        />
                      ) : (
                        <Image
                          src="/assets/icons/show.svg"
                          alt="hide"
                          width={18}
                          height={18}
                          className="object-contain"
                          onClick={() => setShow((prev) => !prev)}
                        />
                      )}
                    </span>
                  </div>
                </div>
                <div className="forgot">
                  <Link href="/">
                    <p className="forgotText">Forgot Password?</p>
                  </Link>
                </div>
              </div>

              <div className="submit flex justify-center items-center">
                <input
                  type="submit"
                  value="Sign In"
                  name="submit"
                  className="cursor-pointer"
                />
              </div>

              <div className="underText flex flex-row gap-5 justify-center">
                <p className="darkText">Don't have an account?</p>
                <Link href="/signup" className="blueText">
                  Sign Up
                </Link>
              </div>
              <div className="innerUnder flex justify-center items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
