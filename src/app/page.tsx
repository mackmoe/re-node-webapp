'use client';

import { ScrollSection } from '@/components/ScrollSection';
import { LenisProvider } from '@/context/LenisContext';

export default function Home() {
  return (
    <LenisProvider>
      <main className="w-full bg-black">
        {/* Section 1: Hero */}
        <ScrollSection
          index={0}
          backgroundType="video"
          backgroundSrc="https://commondatastorage.googleapis.com/gtv-videos-library/sample/BigBuckBunny.mp4"
          isPinned
        >
          <div className="text-center max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
              Welcome to the Hype
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              Scroll to experience cinematic storytelling
            </p>
          </div>
        </ScrollSection>

        {/* Section 2: Feature 1 */}
        <ScrollSection
          index={1}
          backgroundType="image"
          backgroundSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop"
          isPinned
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bold Motion
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Scroll-linked animations with parallax depth
            </p>
          </div>
        </ScrollSection>

        {/* Section 3: Feature 2 */}
        <ScrollSection
          index={2}
          backgroundType="video"
          backgroundSrc="https://commondatastorage.googleapis.com/gtv-videos-library/sample/ElephantsDream.mp4"
          isPinned
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Transforming Backgrounds
            </h2>
            <p className="text-base md:text-lg text-gray-300">
              Images and video blend seamlessly
            </p>
          </div>
        </ScrollSection>

        {/* Section 4: Call to Action */}
        <ScrollSection
          index={3}
          backgroundType="image"
          backgroundSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop"
          isPinned
        >
          <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to Begin?
            </h2>
            <button className="px-8 py-4 bg-white text-black font-bold text-lg rounded-lg hover:bg-gray-200 transition-colors duration-300">
              Explore Now
            </button>
          </div>
        </ScrollSection>
      </main>
    </LenisProvider>
  );
}
