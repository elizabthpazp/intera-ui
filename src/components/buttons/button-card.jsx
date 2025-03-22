"use client"

import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const ButtonCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black flex items-center justify-center p-4">
      <div className="relative">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`
            relative
            px-8 py-3
            text-white font-medium
            border-2 border-purple-400
            bg-transparent
            rounded-xl
            transition-all duration-300 ease-out
            uppercase tracking-wide
            flex items-center gap-2
            hover:border-purple-300
            ${isOpen ? 'opacity-0' : 'opacity-100'}
          `}
        >
          <span>Enter</span>
          <ArrowRight size={18} />
        </button>

        {/* Overlay para cerrar al hacer click fuera */}
        {isOpen && (
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div className={`
          absolute
          left-1/2 top-1/2
          -translate-x-1/2 
          bg-gradient-to-b from-purple-50 to-white
          rounded-2xl
          p-6
          transform
          transition-all duration-300 ease-out
          shadow-[0_0_40px_rgba(168,85,247,0.15)]
          backdrop-blur-sm
          ${isOpen ? 'opacity-100 -translate-y-1/2 scale-100' : 'opacity-0 -translate-y-[40%] scale-95 pointer-events-none'}
          min-w-[320px]
          z-50
        `}>
          <div className="space-y-5">
            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                Welcome Back
              </h2>
              <p className="text-gray-500 text-sm mt-1">Sign in to continue</p>
            </div>
            
            <div className="space-y-3">
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600" size={18} />
                <input 
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
                />
              </div>
              
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 transition-colors duration-200 group-focus-within:text-purple-600" size={18} />
                <input 
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-2.5 bg-purple-50/50 border border-purple-100 rounded-xl focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200 text-sm"
                />
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center text-gray-600">
                <input type="checkbox" className="mr-2 rounded border-purple-200 text-purple-600 focus:ring-purple-500" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Forgot?</a>
            </div>

            <div className="space-y-2.5">
              <button 
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2.5 rounded-xl hover:from-purple-700 hover:to-purple-600 transition-all duration-200 font-medium shadow-lg shadow-purple-500/20"
              >
                Sign In
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="w-full bg-purple-50 text-purple-600 py-2.5 rounded-xl hover:bg-purple-100 transition-colors duration-200 font-medium"
              >
                Create Account
              </button>
            </div>
          </div>
        </div>

        <div className={`
          absolute inset-0
          -z-10
          blur-3xl
          bg-purple-400
          opacity-20
          transition-all duration-500
          ${isOpen ? 'scale-150' : 'scale-100'}
        `}/>
      </div>
    </div>
  );
};

export default ButtonCard;