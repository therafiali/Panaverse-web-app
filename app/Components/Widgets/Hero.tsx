import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import poster from "/public/hero-poster.webp";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className=" text-teal-800 font-medium text-sm md:text-lg md:font-semibold">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-4xl font-semibold md:text-6xl md:font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <div className="max-w-lg text-justify">
            <p className="mt-6 text-slate-500 text-xs md:text-lg ">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-6 text-slate-500 text-xs md:text-lg">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p></div>
            <div className="mt-6">
              <Button text={"Learn More"}/>
            </div>
          </div>
          {/* right side */}
          <div className="flex-1">
            <Image src={poster} alt="hero poster" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
