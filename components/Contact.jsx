import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import ContactImg from "../public/images/contact.jpg";
import Container from "./Container";

const Contact = () => {
  return (
    <Container id={"contact"}>
      <div>
        <p className="sm:text-xl text-base tracking-widest uppercase text-primary">
          Contact
        </p>
        <h2 className="py-4 mb-2 text-xl sm:text-2xl lg:text-3xl">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-6 gap-8">
          {/* left */}
          <div className="col-span-3 backdrop-blur-xl bg-white/20 border w-full h-full shadow-xl dark:border-primary rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div className="rounded-xl overflow-hidden">
                <Image
                  className="rounded-xl overflow-hidden hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 text-2xl lg:text-3xl">Temuujin</h2>
                <p className="sm:text-lg font-medium">Software engineer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/clint-briley-50056920a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-xl border dark:border-primary hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird  sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>
                  <a
                    href="https://github.com/fireclint"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-xl border dark:border-primary hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird  sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-xl border dark:border-primary hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird  sm:p-6 p-4  cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume" scroll={false}>
                    <a>
                      <div className="rounded-full shadow-xl border dark:border-primary hover:shadow-black hover:shadow-2xl dark:hover:shadow-darkThird  sm:p-6 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3  backdrop-blur-xl bg-white/20  w-full h-auto border shadow-xl dark:border-primary rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full pb-2">
                  <div className="flex flex-col">
                    <label className="text-sm pb-2">Name</label>
                    <input
                      className="border-2 text-gray-800 outline-none rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-sm pb-2">Phone Number</label>
                    <input
                      className="border-2 text-gray-800 outline-none rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Email</label>
                  <input
                    className="border-2 text-gray-800 outline-none rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Subject</label>
                  <input
                    className="border-2 text-gray-800 outline-none rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="text-sm py-2">Message</label>
                  <textarea
                    className="border-2 dark:border-primary text-gray-800 outline-none rounded-lg p-3 border-gray-300"
                    rows="6"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full normal-case p-4 text-gray-100 mt-4 shadow-black/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-black/20 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
