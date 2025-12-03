"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControls from "./WindowControls";
import { socials } from "@/data";

const Contact = () => {
    return (
        <>

            <div className="flex items-center px-4 py-2">
                <WindowControls target="contact" />
            </div>


            <div className="space-y-6">


                <div className="flex justify-center">
                    <div className="rounded-full overflow-hidden border border-gray-300 shadow-xl">
                        <Image
                            src="/images/adrian.jpg"
                            alt="contact"
                            width={140}
                            height={140}
                        />
                    </div>
                </div>


                <div className="flex flex-col items-center gap-2">
                    <h2 className="text-xl font-semibold">Let’s Connect</h2>

                    <p className="text-center text-sm text-gray-600 font-medium">
                        Wanna build something? Just call
                        <span className="font-bold text-gray-800 ml-1">
                            Your friendly Neighbourhood Blue Onion
                        </span>
                    </p>

                    <p className="text-gray-800 font-semibold text-sm">
                        rawatadityasingh963@gmail.com
                    </p>
                </div>

                <div className="p-8">
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
                        {socials.map((social) => (
                            <li
                                key={social.id}
                                className="h-32 w-32 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                                style={{ backgroundColor: social.bg }}
                            >
                                <Link
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center gap-2 h-full w-full"
                                >
                                    <Image src={social.icon} alt={social.text} width={52} height={52} />
                                    <span className="text-xs font-semibold text-white drop-shadow-md">
                                        {social.text}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
};

const contactWindow = WindowWrapper(Contact, "contact");
export default contactWindow;
