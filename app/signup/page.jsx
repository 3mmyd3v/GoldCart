"use client";
import Layout from "@layout";
import "./signup.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
const SignUp = () => {
  const [show, setShow] = useState(true);
  return (
    <Layout page="Sign up">
      <div className=" signInContainer flex justify-center">
        <div className="main">
          {/* <div className=" mainTop gap-2">
            <div className="Image">
              <Image
                src="/assets/icons/logo.svg"
                alt="goldcart"
                width={50}
                height={50}
              />
            </div>

            <p className="text_gradient_text">GoldCart</p>
          </div> */}
          <div className="MainBottom">
            <div className="formText">
              <p className="formTitle">Sign Up</p>
              <p className="formDescription">Create your Goldcart account</p>
            </div>
            <div className="formInput">
              <div className="input">
                <div className="label">
                  <label htmlFor="name">Name</label>
                </div>

                <input
                  type="text"
                  placeholder="First Name and Last Name"
                  name="name"
                  required
                  autoFocus
                  autoComplete="given-name"
                  id="name"
                />
              </div>
              <div className="input">
                <div className="label">
                  <label htmlFor="email">Email Address</label>
                </div>

                <input
                  type="email"
                  placeholder="Enter Email Address"
                  name="email"
                  required
                  autoComplete="email"
                />
              </div>
              <div className="input">
                <div className="label">
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  name="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9]*"
                  id="phone"
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
              </div>
              <div className="submit flex justify-center items-center">
                <input
                  type="submit"
                  value="Sign Up"
                  name="submit"
                  className="cursor-pointer"
                />
              </div>

              <div className="underText flex flex-row gap-5 justify-center">
                <p className="darkText">Already have an account?</p>
                <Link href="/signin" className="blueText">
                  Sign In
                </Link>
                {/* <p className="blueText">Sign in</p> */}
              </div>
              <div className="innerUnder flex justify-center items-center">
                <div className="anotherUnderText flex flex-row gap-1 text-center justify-center items-center">
                  <p className="darkText">
                    By signing up you accept our{" "}
                    <span className="blueText">
                      terms and condition & privacy policy
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
