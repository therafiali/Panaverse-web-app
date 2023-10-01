"use client";
import React, { useState } from "react";
import Wrapper from "../shared/Wrapper";
import Quaterbox from "../shared/Quaterbox";
import loop from "/public/loop.jpg";
import Image from "next/image";

export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Ai (Blockchain) and Metaverse Specialization",
    desc: "This AI and Metaverse specialization focuses on developing full-stack AI and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Ai (Blockchain) and Metaverse Specialization",
    desc: "This AI and Metaverse specialization focuses on developing full-stack AI and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Ai (Blockchain) and Metaverse Specialization",
    desc: "This AI and Metaverse specialization focuses on developing full-stack AI and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    desc: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Ai (Blockchain) and Metaverse Specialization",
    desc: "This AI and Metaverse specialization focuses on developing full-stack AI and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: loop,

    quarters: [
      {
        header: "Quarter IV",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4,
      },
      {
        header: "Quarter V",
        desc: "W2-201: Python Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5,
      },
    ],
  },
];

const Specializedsection = () => {
  const [tracks, setTracks] = useState("wmd");
  const findItems = programsData.find((item) => item.slug === tracks);

  return (
    <section className="mt-20">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h2 className="text-2xl font-semibold md:text-4xl md:font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-slate-500 text-xs md:text-lg ">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-4 gap-y-8">
          {/* main div */}
          <div className="border self-start sticky top-28 basis-8/12 shadow-xl border-slate-300 py-10 px-8 rounded-lg ">
            {/* left side div */}
            <div>
              <h4 className="text-teal-700  font-medium text-sm md:text-base md:font-semibold ">
                Specialized Track
              </h4>
              <h3 className="text-1xl font-semibold md:text-3xl md:font-bold ">
                {findItems?.header}
              </h3>
              <p className="mt-4 text-slate-500 text-xs md:text-lg">
                {findItems?.desc}
              </p>
              <button className=" flex hover:scale-105 duration-200 items-center shadow-xl border mt-6 py-2 px-5 rounded-lg border-teal-700 text-teal-700 font-bold">
                Learn More
                <span className="ml-2">
                  <svg
                    width="8"
                    height="11"
                    viewBox="0 0 8 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                      stroke="#00616C"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row mt-8 gap-4">
              {findItems?.quarters.map((item) => {
                return (
                  <Quaterbox
                    key={item.number}
                    header={item.header}
                    desc={item.desc}
                    number={item.number}
                    haveborder={false}
                  />
                );
              })}
            </div>
          </div>
          <div className="px-4 space-y-4  basis-4/12 flex-1 py-6 ">
            {/* right side div */}
            {programsData.map((item, i) => (
              <div
                onClick={() => setTracks(item.slug)}
                key={i}
                className="flex gap-x-4 item-center "
              >
                <div className="flex-shrink-0 h-20 w-36">
                  {/* <div className="bg-red-700 w-20 h-16"></div> */}
                  <Image
                    src={item.image}
                    alt={item.header}
                    className="h-20 object-cover rounded-md"
                  />
                </div>
                <div>
                  <h4 className=" text-primary font-medium text-sm md:text-base md:font-semibold ">
                    Specialized Track
                  </h4>
                  <h3 className=" font-semibold text-1xl md:font-bold ">
                    {item.header}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Specializedsection;
