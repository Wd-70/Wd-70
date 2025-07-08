'use client';

import React from 'react';

export default function KmongMainImage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-[652px] h-[488px] bg-gradient-to-br from-blue-600 via-blue-700 to-purple-600 relative overflow-hidden font-sans shadow-2xl">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-16 left-16 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 bg-white rounded-full"></div>
          <div className="absolute top-32 right-32 w-12 h-12 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-32 w-8 h-8 bg-white rounded-full"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 h-full flex flex-col p-12">
          
          {/* Header Section */}
          <div className="flex justify-between items-start mb-8">
            {/* Logo & Brand */}
            <div className="flex items-center">
              <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center mr-3 shadow-xl">
                <span className="text-blue-600 font-bold text-xl">AI</span>
              </div>
              <div>
                <h1 className="text-white text-3xl font-bold leading-tight">바이브코딩</h1>
                <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold mt-1 inline-block">
                  컴퓨터공학 전공자
                </div>
              </div>
            </div>
            
            {/* Flutter Badge */}
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-xl px-3 py-2">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center mr-2">
                <span className="text-blue-600 font-bold text-sm">F</span>
              </div>
              <span className="text-white text-sm font-semibold">Flutter</span>
            </div>
          </div>

          {/* Main Message */}
          <div className="flex-1 flex flex-col justify-center text-center">
            <h2 className="text-white text-4xl font-bold leading-tight mb-4">
              안드로이드 앱을 <span className="text-yellow-300">1시간</span>에 완성
            </h2>
            <div className="text-white/90 text-xl mb-6 leading-relaxed">
              AI 기술로 <span className="font-semibold text-yellow-200">초고속</span> 앱 개발
            </div>
            
            {/* Key Features - Redesigned */}
            <div className="flex justify-center space-x-4 mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center min-w-[120px]">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white font-semibold text-sm">초고속 개발</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center min-w-[120px]">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white font-semibold text-sm">실시간 확인</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center min-w-[120px]">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-lg">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="text-white font-semibold text-sm">전문성</div>
              </div>
            </div>

            {/* Special Feature */}
            <div className="bg-white rounded-2xl p-4 shadow-2xl inline-block mx-auto">
              <div className="text-red-500 text-base font-bold mb-1">
                🔥 결과부터 확인하고 결제하세요!
              </div>
              <div className="text-gray-700 text-sm font-medium">
                완성된 앱을 먼저 보고 만족하면 그때 결제!
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex justify-between items-end mt-6">
            {/* Portfolio Link */}
            <div>
              <div className="text-white/80 text-xs mb-1">포트폴리오 확인</div>
              <div className="text-yellow-300 font-semibold text-base">
                wd-70.space/projects/mobile
              </div>
            </div>
            
            {/* Android Badge */}
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
              <span className="text-white text-xs font-medium">Android 전용 개발</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}