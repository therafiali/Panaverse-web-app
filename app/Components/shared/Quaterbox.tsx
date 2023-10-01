import { FC } from "react";
interface Iprop {
  header: string;
  desc: string;
  number: number;
  haveborder?: boolean;
}
const Quaterbox: FC<Iprop> = ({ header, desc, number, haveborder = true }) => {
  return (
    <div
      className={` first-letter: rounded-md flex-1 flex flex-col justify-center  first-letter:w-4/12 relative px-8 py-16 ${
        haveborder && "border" 
      }`}
    >
      <h4 className="font-bold text-lg ">{header}</h4>
      <p className="text-slate-600 mt-2 z-0">{desc}</p>
      <div className="absolute text-gray-200 text-[170px]  font-bold -z-10 top-0 right-10">
        {number}
      </div>
    </div>
  );
};

export default Quaterbox;
