import { ReportCard, VideoCard, PosterCard } from "@/components/Card";
import ParticleBackground from "@/components/ParticleBackground";

const CardDashboard = () => {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="min-h-screen p-4 sm:p-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 sm:mb-6 pt-8 sm:pt-12">
            <div className="relative flex items-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Anthropomorphic Robotic Arm
              </h1>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 [grid-auto-rows:1fr]">
            <ReportCard />
            <VideoCard />
            <PosterCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;