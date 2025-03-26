import { useLanguage } from "../hooks/useLanguage";
import IconLogo from "../../assets/icon-logo.svg";
import { Link } from "react-router-dom";
import LazyImage from "./LazyImage";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#394E5E] text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Logo - Centered at the top */}
        <div className="mb-6 text-center">
          <LazyImage src={IconLogo} alt="Zepargn Logo" className="h-16 mb-4" />
        </div>

        {/* Secondary Navigation */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/cgu" className="hover:text-gray-300 transition-colors duration-300">
              {t.footer.termsOfUse}
            </Link>
            <Link to="/politiq" className="hover:text-gray-300 transition-colors duration-300">
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/legal" className="hover:text-gray-300 transition-colors duration-300">
              {t.footer.legalMentions}
            </Link>
            <Link to="/cookies" className="hover:text-gray-300 transition-colors duration-300">
              {t.footer.cookiesPolicy}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-400/30 mb-6"></div>

        {/* Social Media Icons */}
        <div className="mb-8">
          <div className="flex justify-center space-x-4 text-3xl">
            <a href="https://facebook.com/profile.php?id=61567830901375" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://x.com/ZPargn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a href="https://www.linkedin.com/company/zepargn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/zpargn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Download App Section - Shown for all screen sizes */}
        <div className="block">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">
              {t.footer.downloadApp}
            </h3>
            <div className="flex items-center justify-center space-x-6">
              <a href="https://play.google.com/store/apps/details?id=com.digitalelevate.zepargnmobileapp" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-all duration-300">
                <LazyImage src={t.hero.playStore} alt="Google Play Store" className="h-12 sm:h-14" />
              </a>
              <a href="https://apps.apple.com/us/app/zepargn/id6474701827?platform=iphone" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-all duration-300">
                <LazyImage src={t.hero.appStore} alt="Apple App Store" className="h-12 sm:h-14" />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-gray-300 mt-8">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
