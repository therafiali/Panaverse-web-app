import Button from "../shared/Button";
import Quaterbox from "../shared/Quaterbox";
import Wrapper from "../shared/Wrapper";

const Coretracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  const coretrackersdata = [
    {
      header: "Quarter I",
      desc: "CS-101: Object-Oriented Programming using TypeScript",
      num: "1",
    },
    {
      header: "Quarter II",
      desc: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
      num: "2",
    },
    {
      header: "Quarter III",
      desc: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
      num: "3",
    },
  ];
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="max-w-screen-sm">
          <h4 className=" text-teal-700 font-medium text-sm md:text-lg md:font-semibold">
            Program of Studies
          </h4>
          <h2 className="text-2xl font-semibold md:text-4xl md:font-bold whitespace-pre-line">
            {header}
          </h2>
          <p className="mt-3 text-slate-500 text-xs md:text-lg ">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-5">
            <Button text="Learn More" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-4 gap-y-4   mt-16 ">
          {coretrackersdata.map((item, i) => {
            return (
              <Quaterbox key={i} header={item.header} desc={item.desc} number={i + 1} />
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Coretracks;
