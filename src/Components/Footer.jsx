import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0f171e] pt-16 pb-8 px-6 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <span className="font-bold text-xl tracking-tighter text-white">
            prime <span className="text-[#00a8e1] ml-0.5">video</span>
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8 text-sm font-semibold text-[#00a8e1]">
          <a href="#" className="hover:underline">Terms and Privacy Notice</a>
          <a href="#" className="hover:underline">Send us feedback</a>
          <a href="#" className="hover:underline">Help</a>
          <span className="text-gray-500 font-normal">© 1996-2024, Amazon.com, Inc. or its affiliates</span>
        </div>
        
        <div className="text-[10px] text-gray-500 text-center max-w-2xl leading-relaxed">
          The availability of titles and services may vary by country or region. TMDB (The Movie Database) API is used for movie metadata and images. This application is a UI demonstration.
        </div>
      </div>
    </footer>
  )
}

export default Footer
