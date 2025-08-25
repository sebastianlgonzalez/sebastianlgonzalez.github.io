import { useState } from "react";

const cardContainer = "w-full bg-gradient-to-br from-slate-950/40 via-gray-950/60 to-black/80 rounded-xl overflow-hidden border border-slate-700/30 flex flex-col";
const cardHeaderBg = "relative px-8 py-24 bg-gradient-to-br from-slate-900/30 via-slate-950/50 to-black/70";
const overlayStyle = `
  radial-gradient(ellipse at center, transparent 50%, rgba(2,8,23,0.6) 100%),
  linear-gradient(to top, rgba(0,0,0,0.7), rgba(2,6,23,0.4) 60%, transparent),
  linear-gradient(to bottom right, rgba(15,23,42,0.2), transparent, rgba(2,6,23,0.5))
`;
const textSection = "px-6 py-6 bg-gradient-to-br from-black/90 via-slate-950/80 to-gray-950/90 relative flex-grow";
const headerStyle = "text-xl font-bold text-slate-100 mb-2 leading-tight relative tracking-tight";
const descStyle = "text-slate-300/90 text-sm mb-8 leading-relaxed relative flex-grow";
const buttonStyle = "w-full inline-flex bg-gradient-to-r from-blue-600/90 via-blue-500/90 to-cyan-500/90 text-white font-semibold py-3 px-4 rounded-lg items-center justify-center space-x-2 shadow-md shadow-blue-500/15 relative transition-all duration-500 ease-in-out hover:shadow-md hover:shadow-blue-400/25 hover:scale-[1.02] hover:from-blue-500 hover:via-blue-400 hover:to-cyan-400 active:scale-[0.98]";

export function ReportCard() {
  return (
    <div className={cardContainer}>
      <div className={cardHeaderBg}>
        <img src="front_page.jpg" alt="Technical Report" className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60" />
        <div className="absolute inset-0" style={{ background: overlayStyle }} />
      </div>

      <div className={textSection}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <h3 className={headerStyle}>Technical Report</h3>
        <p className={descStyle}>A detailed report presenting the project's design, development, implementation, and results.</p>
        <a href="https://drive.google.com/file/d/1w6PJJRVD60q_F1dzQ0fcH6khM11ic8BQ/view" target="_blank" rel="noopener noreferrer" className={buttonStyle}>
          <svg className="w-4 h-4 transition-all duration-500 ease-in-out group-hover:scale-105 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>OPEN REPORT</span>
        </a>
      </div>
    </div>
  );
}

export function VideoCard() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className={cardContainer}>
      <div className="relative w-full aspect-video bg-gradient-to-br from-slate-900/30 via-slate-950/50 to-black/70">
        {!isVideoLoaded ? (
          <div className="absolute inset-0 w-full h-full cursor-pointer group" onClick={() => setIsVideoLoaded(true)}>
            <img src="thumbnail.jpg" alt="Video Thumbnail" className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60" />
            <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-60" style={{ background: overlayStyle }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex items-center justify-center w-14 h-14
                bg-blue-500/10 backdrop-blur-[2px] rounded-full border border-blue-400/70 
                group-hover:bg-blue-400/25 group-hover:scale-105 transition-all duration-500 ease-in-out group-hover:shadow-sm group-hover:shadow-blue-400/30 group-hover:border-blue-300/80">
                <div className="border-l-[16px] border-l-slate-100 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1 transition-all duration-500 ease-in-out group-hover:border-l-white group-hover:scale-104"></div>
              </div>
            </div>
          </div>
        ) : (
          <iframe src="https://www.youtube.com/embed/vfgB5fgFy0c?autoplay=1" className="absolute inset-0 w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title="Robotic Arm Demo Video" />
        )}
      </div>

      <div className={textSection}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <h3 className={headerStyle}>Proof of Concept Video</h3>
        <p className="text-slate-300/90 text-sm leading-relaxed relative flex-grow">This video showcases our approach, illustrates how the components are integrated, and demonstrates the resulting motion of the robotic arm.</p>
      </div>
    </div>
  );
}

export function PosterCard() {
  return (
    <div className={cardContainer}>
      <div className={cardHeaderBg}>
        <img src="poster.jpg" alt="Technical Poster" className="absolute inset-0 w-full h-full object-cover object-top grayscale opacity-60" style={{ transform: 'translate(-1px, -1px) scale(1.01)' }} />
        <div className="absolute inset-0" style={{ background: overlayStyle }} />
      </div>

      <div className={textSection}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <h3 className={headerStyle}>Poster</h3>
        <p className={descStyle}>A structured academic-style poster outlining the project's design and implementation.</p>
        <a href="poster.jpg" target="_blank" rel="noopener noreferrer" className={buttonStyle}>
          <svg className="w-4 h-4 transition-all duration-500 ease-in-out group-hover:scale-105" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span>VIEW POSTER</span>
        </a>
      </div>
    </div>
  );
}
