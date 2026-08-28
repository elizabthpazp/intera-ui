"use client"

import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * @param {Object} props
 * @param {string | null} [props.principalButton=null]
 * @param {boolean} [props.darkMode=false]
 * @param {string | null} [props.title=null]
 * @param {string | null} [props.description=null]
 * @param {string | null} [props.primaryButton=null]
 * @param {string | null} [props.secondaryButton=null]
 * @param {string | null} [props.emailPlaceholder=null]
 * @param {string | null} [props.passwordPlaceholder=null]
 * @param {boolean} [props.notShowArrow=false]
 * @param {boolean} [props.notShowCombobox=false]
 * @param {boolean} [props.notShowForgot=false]
 * @param {string | null} [props.combobox=null]
 * @param {string | null} [props.forgot=null]
 * @param {function} [props.onLogin=() => {}]
 * @param {string | null} [props.forgotLink=null]
 * @param {function} [props.onSignUp=() => {}]
 * @param {string} [props.className=""] - Clases extra para el contenedor raíz (merge con cn)
 * @param {string} [props.triggerClassName=""] - Clases extra para el botón trigger
 * @param {string} [props.cardClassName=""] - Clases extra para la card desplegable
 * @param {React.CSSProperties} [props.style] - Estilos inline raíz
 */

const ButtonCard = ({
  principalButton = null, 
  darkMode = false, 
  title= null, 
  description= null, 
  primaryButton= null, 
  secondaryButton= null, 
  emailPlaceholder= null, 
  passwordPlaceholder= null, 
  notShowArrow= false, 
  notShowCombobox= false, 
  notShowForgot= false, 
  combobox= null, 
  forgot= null, 
  onLogin = () => {}, 
  forgotLink = null, 
  onSignUp = () => {},
  className = "",
  triggerClassName = "",
  cardClassName = "",
  style,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.stopPropagation()
    onLogin(email, password, rememberMe);
  };

  const handleSubmit2 = (e) => {
    e.stopPropagation()
    onSignUp(email, password, rememberMe);
  };

  return ( 
    <div className={cn("flex justify-center p-4", className)} style={style}>
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "relative px-8 py-3 font-medium border-2 rounded-xl transition-all duration-300 ease-out uppercase tracking-wide flex items-center gap-2",
            darkMode ? '!bg-gray-900 border-gray-900 text-white hover:border-gray-500 bg-transparent' : 'bg-gray-100 border-gray-300 text-gray-800 hover:border-gray-400 bg-transparent',
            isOpen ? 'opacity-0' : 'opacity-100',
            triggerClassName
          )}
        >
          <span>{ principalButton ?? 'Enter' }</span>
          {!notShowArrow ? <ArrowRight size={18}/> : '' }
        </button> 

        {isOpen && (
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div className={cn(
          "absolute left-16 -translate-x-1/2 rounded-2xl p-6 border-2 transform transition-all duration-300 ease-out shadow-xl backdrop-blur-sm z-50",
          "top-[72px]", // reemplaza top-18 (no existe en tailwind por defecto) por valor explícito
          darkMode ? 'bg-gray-900 border-gray-900' : 'bg-gradient-to-b from-purple-50 to-white border-gray-300',
          isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none',
          "min-w-[320px]",
          cardClassName
        )}>
          <button onClick={() => setIsOpen(false)} className={cn("absolute top-2 right-4 font-semibold transition", darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600')}>
            ✕
          </button>
          <div className="space-y-5">
            <div className="text-center">
              <h2 className={cn("text-2xl font-bold", darkMode ? 'text-white' : 'text-gray-800')}>
               { title ?? 'Welcome Back' }
              </h2>
              <p className={cn("text-sm mt-1", darkMode ? 'text-gray-300' : 'text-gray-800')}> { description ?? 'Sign in to continue' }</p>
            </div>
            
            <div className="space-y-3">
              <div className="relative group">
                <Mail className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-focus-within:text-gray-600", darkMode ? 'text-white' : 'text-gray-800')} size={18} />
                <input 
                  type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder={ emailPlaceholder ?? 'Email'}
                  className={cn("w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm", darkMode ? 'text-white bg-gray-900 border-gray-500' : 'text-gray-800 bg-purple-50/50 border-gray-300')}
                />
              </div>
              
              <div className="relative group">
                <Lock className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 group-focus-within:text-gray-600", darkMode ? 'text-white' : 'text-gray-800')} size={18} />
                <input 
                  type="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={ passwordPlaceholder ?? 'Password'}
                  className={cn("w-full pl-10 pr-4 py-2.5 border rounded-xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm", darkMode ? 'text-white bg-gray-900 border-gray-500' : 'text-gray-800 bg-purple-50/50 border-gray-300')}
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              { !notShowCombobox ? 
              <label className={cn("flex items-center", darkMode ? 'text-white' : 'text-gray-600')}>
                <input type="checkbox" className="mr-2 rounded focus:ring-purple-500" checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}  />
                 { combobox ?? 'Remember me'} 
              </label> : !notShowForgot ?
              <label className="flex items-center text-gray-600"></label> : ''
              }
              { !notShowForgot ?
              <a href={forgotLink ?? '#'} className={cn("hover:text-gray-500 font-medium", darkMode ? 'text-white' : 'text-gray-800')}>{ forgot ?? 'Forgot?'}</a>
                : ''}
            </div>

            <div className="space-y-2.5">
              <button onClick={(e) => handleSubmit(e)} 
                className={cn("w-full py-2.5 rounded-xl transition-all duration-200 font-medium shadow-lg shadow-gray-500/20 border", darkMode ? ' bg-white hover:text-white text-gray-800 hover:bg-slate-950' : 'bg-slate-950 hover:bg-white hover:text-gray-800 text-white hover:border-gray-600')}
              >
                { primaryButton ?? 'Sign In'}  
              </button>
              <button onClick={(e) => handleSubmit2(e)}
                className={cn("w-full py-2.5 rounded-xl transition-colors duration-200 font-medium border", darkMode ? ' bg-slate-950 hover:bg-white hover:text-gray-800 text-white' : 'bg-white hover:text-white text-gray-800 hover:bg-slate-950 border-gray-600')}
              >
               { secondaryButton ?? 'Create Account'} 
              </button>
            </div>
          </div>
        </div>

        <div className={cn(
          "absolute inset-0 -z-10 transition-all duration-500",
          isOpen ? 'scale-150' : 'scale-100'
        )}/>
      </div>
    </div> 
  );
};

export default ButtonCard;
