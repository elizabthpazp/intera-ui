import Tree from "./tree";
import GiftBox from "./gift-box";
import { generateSnowflakes } from "../../app/utils/globalMethods";

export default function ChristmasGift() {
  return (
    <div className="relative h-screen bg-[radial-gradient(ellipse_at_bottom,_#1B2735_0%,_#090A0F_100%)] overflow-hidden">
      <div className="justify-center text-center mt-5 font-christmas">
        <h1 className="font-principal text-green-400"> Merry Christmas! </h1>
        <h4 className="font-secondary mt-2 text-red-400"> Open the gift: </h4>
      </div> 
      <Tree />
      <GiftBox /> 
      <div className="absolute bottom-0 left-0 w-full h-[15%] bg-white rounded-t-[50%]"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">{generateSnowflakes(50)}</div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">{generateSnowflakes(50)}</div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">{generateSnowflakes(50)}</div>
      </div>
    </div>
  );
}
