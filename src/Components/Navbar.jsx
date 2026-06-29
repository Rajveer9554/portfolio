import React, { useEffect, useRef, useState } from 'react';
import OverlayMenu from './OverlayMenu.jsx';
import logo from '../assets/logo.png';
import { CiMenuFries } from 'react-icons/ci';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);

  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setForceVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY.current) {
        setVisible(true);
      } else {
        setVisible(false);
        if (timerId.current) {
          clearTimeout(timerId.current);
        }
        timerId.current = setTimeout(() => {
          setVisible(true);
        }, 3000);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
    };
  }, [forceVisible]);

  return (
    <>
      <nav className={`fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-3 transition-transform duration-300 sm:px-6 lg:px-10 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-24 lg:h-24 lg:w-40" />
        </div>

        <div className="flex items-center">
          <button onClick={() => setMenuOpen(true)} className="rounded-full border border-white/20 p-2 text-3xl text-white focus:outline-none" aria-label="Open menu">
            <CiMenuFries />
          </button>
        </div>
      </nav>
      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
