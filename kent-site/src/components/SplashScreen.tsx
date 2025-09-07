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

    // Entrance animation
    tl.fromTo(
      '.char',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.5, ease: 'power3.out' },
      'start'
    );

    // Exit animation
    const exitDelay = 'start+=1.5';
    tl.to('.k, .top-triangle', { y: '-100%', ease: 'power3.in', duration: 0.7 }, exitDelay)
      .to('.h, .bottom-triangle', { y: '100%', ease: 'power3.in', duration: 0.7 }, exitDelay)
      .to('.one, .eight, .left-triangle', { x: '-100%', ease: 'power3.in', duration: 0.7 }, exitDelay)
      .to('.seven, .three, .right-triangle', { x: '100%', ease: 'power3.in', duration: 0.7 }, exitDelay)
      .to(splashScreenRef.current, { opacity: 0, duration: 0.3 }, '>-0.3');

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
