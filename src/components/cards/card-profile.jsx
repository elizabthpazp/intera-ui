"use client";
import React from "react"; 
import BorderImage from "../animations/border-image";
import { cn } from "../../lib/utils";

/**
 * @param {Object} props
 * @param {boolean} [props.darkMode=false]
 * @param {string|null} [props.title=null]
 * @param {string|null} [props.subtitle=null]
 * @param {string|null} [props.description=null]
 * @param {string|null} [props.buttonLeftLabel=null]
 * @param {string|null} [props.buttonRightLabel=null]
 * @param {function} [props.onClickRight=() => {}]
 * @param {function} [props.onClickLeft=() => {}]
 * @param {string|null} [props.image=null]
 * @param {string} [props.className=""] - Clases para el contenedor externo
 * @param {string} [props.cardClassName=""] - Clases para la card interna
 * @param {React.CSSProperties} [props.style]
 */

const CardProfile = ({
  darkMode= false, 
  title= null, 
  subtitle= null, 
  description= null, 
  buttonLeftLabel= null, 
  buttonRightLabel= null, 
  onClickRight= () => {}, 
  onClickLeft= () => {}, 
  image= null,
  className = "",
  cardClassName = "",
  style,
}) => {
  return (
    <div className={cn("bg-gradient-to-br font-medium flex justify-center", className)} style={style}>
      <div className={cn(
        "backdrop-blur-sm rounded-[2rem] px-4 py-8 max-w-sm w-full shadow-2xl",
        darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300 text-gray-800 border',
        cardClassName
      )}>
        <div className="flex flex-col items-center gap-5">
          <BorderImage image={image} darkMode={darkMode} />
          <div className="space-y-2 text-center">
            <h2 className={cn("text-2xl font-bold", darkMode ? 'text-white' : 'text-gray-900')}>{ title ?? 'Emily Brooks '}</h2>
            <p className={cn("text-sm", darkMode ? 'text-zinc-300' : 'text-gray-800')}>{ subtitle ?? 'Senior Full Stack Engineer'}</p>
            <p className={cn("text-sm leading-relaxed", darkMode ? 'text-gray-400/90' : 'text-gray-500')}>
            { description ?? 'Building robust and powerful, scalable applications with a strong focus on delivering seamless user experiences.'}
            </p>
          </div>
          <div className="flex gap-3 mt-2">
            <button onClick={onClickLeft}  className={cn("px-8 py-2.5 rounded-xl text-sm font-medium border transition-all duration-300", darkMode ? 'bg-transparent border-gray-700 text-white hover:bg-white/10' : 'bg-slate-950 border-gray-700 text-white hover:bg-gray-800')}>
            { buttonLeftLabel ?? 'Portfolio'}
            </button>
            <button onClick={onClickRight} className={cn("px-8 py-2.5 rounded-xl bg-white text-sm font-medium transition-all duration-300 border", darkMode ? 'text-gray-900 hover:text-black hover:bg-gray-300' : 'text-gray-900 hover:text-black hover:bg-gray-300 border-gray-500')}>
            { buttonRightLabel ?? 'Follow'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
