import { useLanguage } from "../hooks/useLanguage";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  showAppLinks?: boolean;
  showNavigation?: boolean;
  isHomePage?: boolean;
}

function Header({ showAppLinks = true, showNavigation = false, isHomePage = false }: HeaderProps) {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-white/95 backdrop-blur-sm sticky top-0 z-50 transform-gpu transition-all duration-300 ease-in-out
        ${isScrolled ? 'py-2 sm:py-3 shadow-md' : 'py-3 sm:py-4 shadow-sm'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <div className="w-24 sm:w-32 lg:w-40 transform-gpu transition-transform duration-300 hover:scale-105">
            <Link to="/">
              <img src={Logo} alt="Zepargn Logo" className="w-full h-auto" />
            </Link>
          </div>

          {showNavigation && (
            <div className="flex-1 flex justify-center px-4">
              <div className="hidden md:flex items-center bg-[#394E5E] rounded-full px-4 sm:px-6 py-2 hover:bg-[#2D3E4D] transition-all duration-300 transform-gpu hover:scale-102 hover:shadow-md">
                <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8">
                  {isHomePage ? (
                    <>
                      <a
                        href="#features"
                        onClick={(e) => handleSmoothScroll(e, 'features')}
                        className="text-white text-sm sm:text-base hover:text-[#FF7F2A] transition-all duration-300 transform hover:scale-105"
                      >
                        {t.nav.features}
                      </a>
                      <a
                        href="#how-it-works"
                        onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                        className="text-white text-sm sm:text-base hover:text-[#FF7F2A] transition-all duration-300 transform hover:scale-105"
                      >
                        {t.nav.howItWorks}
                      </a>
                    </>
                  ) : (
                    <Link
                      to="/"
                      className="text-white text-sm sm:text-base hover:text-[#FF7F2A] transition-all duration-300 transform hover:scale-105"
                    >
                      {currentLanguage === 'en' ? 'Home' : 'Accueil'}
                    </Link>
                  )}
                </nav>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2 sm:space-x-3">
            {showAppLinks && (
              <div className="hidden sm:flex items-center space-x-4 mr-2">
                <a 
                  href="https://apps.apple.com/app/zepargn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#394E5E] hover:text-[#FF7F2A] transition-colors"
                >
                  <FaApple size={20} className="mr-1" />
                  <span className="hidden lg:inline text-sm">
                    {currentLanguage === 'en' ? 'iOS' : 'iOS'}
                  </span>
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.zepargn.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-[#394E5E] hover:text-[#FF7F2A] transition-colors"
                >
                  <FaGooglePlay size={18} className="mr-1" />
                  <span className="hidden lg:inline text-sm">
                    {currentLanguage === 'en' ? 'Android' : 'Android'}
                  </span>
                </a>
              </div>
            )}

            <button
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-sm"
              onClick={() => changeLanguage(currentLanguage === 'en' ? 'fr' : 'en')}
            >
              <img
                src={`https://flagcdn.com/w20/${currentLanguage === 'en' ? 'gb' : 'fr'}.png`}
                alt={currentLanguage === 'en' ? 'English' : 'Français'}
                className="h-3 sm:h-4 transform-gpu transition-transform duration-300"
              />
              <span className="text-xs sm:text-sm font-medium transform-gpu transition-transform duration-300">{currentLanguage.toUpperCase()}</span>
            </button>

            {showNavigation && (
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-300 transform-gpu hover:scale-105 hover:shadow-sm relative overflow-hidden group"
                aria-label="Toggle mobile menu"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative">
                  {isMobileMenuOpen ? (
                    <X
                      size={20}
                      className="text-[#394E5E] transform-gpu transition-all duration-300 rotate-0 hover:rotate-90"
                    />
                  ) : (
                    <Menu
                      size={20}
                      className="text-[#394E5E] transform-gpu transition-all duration-300 hover:scale-110"
                    />
                  )}
                </span>
              </button>
            )}
          </div>
        </div>

        {showNavigation && (
          <>
            {/* Mobile Menu Backdrop */}
            <div
              className={`fixed inset-0 bg-black/20 backdrop-blur-xs z-60 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              onClick={toggleMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <div
              className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg transform-gpu transition-all duration-300 ease-bounce-in origin-top-center z-70 ${isMobileMenuOpen ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-4 opacity-0 scale-98 pointer-events-none'}`}
            >
              <nav className="py-6 px-6 space-y-2 relative">
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-2 right-2 p-2 text-gray-500 hover:text-[#FF7F2A] transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
                <div className="space-y-2 animate-scale-in">
                  {isHomePage ? (
                    <>
                      <a
                        href="#features"
                        onClick={(e) => handleSmoothScroll(e, 'features')}
                        className="block text-[#394E5E] hover:text-[#FF7F2A] transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                      >
                        {t.nav.features}
                      </a>
                      <a
                        href="#how-it-works"
                        onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                        className="block text-[#394E5E] hover:text-[#FF7F2A] transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                      >
                        {t.nav.howItWorks}
                      </a>
                    </>
                  ) : (
                    <Link
                      to="/"
                      className="block text-[#394E5E] hover:text-[#FF7F2A] transition-all duration-300 text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {currentLanguage === 'en' ? 'Home' : 'Accueil'}
                    </Link>
                  )}
                </div>

                {showAppLinks && (
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">{currentLanguage === 'en' ? 'Get our app:' : 'Téléchargez notre app:'}</p>
                    <div className="flex items-center space-x-4">
                      <a 
                        href="https://apps.apple.com/app/zepargn" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-[#394E5E] hover:text-[#FF7F2A] transition-colors py-2 px-3 bg-gray-50 rounded-lg"
                      >
                        <FaApple size={20} className="mr-2" />
                        <span>{currentLanguage === 'en' ? 'iOS App' : 'App iOS'}</span>
                      </a>
                      <a 
                        href="https://play.google.com/store/apps/details?id=com.zepargn.app" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-[#394E5E] hover:text-[#FF7F2A] transition-colors py-2 px-3 bg-gray-50 rounded-lg"
                      >
                        <FaGooglePlay size={18} className="mr-2" />
                        <span>{currentLanguage === 'en' ? 'Android App' : 'App Android'}</span>
                      </a>
                    </div>
                  </div>
                )}
              </nav>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
