import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const splashScreenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ onComplete });

    tl.fromTo(
      '.char',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 0.5, ease: 'power3.out' }
    ).to(splashScreenRef.current, { opacity: 0, duration: 1, delay: 1 });
  }, [onComplete]);

  return (
    <div className="splash-screen" ref={splashScreenRef}>
      <div className="splash-container">
        <div className="top-triangle"></div>
        <div className="left-triangle"></div>
        <div className="right-triangle"></div>
        <div className="bottom-triangle"></div>
        <span className="char k">K</span>
        <span className="char one">1</span>
        <span className="char eight">8</span>
        <span className="char seven">7</span>
        <span className="char three">3</span>
        <span className="char h">H</span>
      </div>
    </div>
  );
};

export default SplashScreen;
