import { useLanguage } from "../hooks/useLanguage";
import IconLogo from "../../assets/icon-logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#394E5E] text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          {/* Logo & Social Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img src={IconLogo} alt="Zepargn Logo" className="h-16 mb-4" />
            </div>
            <p className="mb-4">{t.footer.followUs}</p>
            <div className="flex space-x-4 justify-center md:justify-start text-3xl">
              <a href="https://x.com/ZPargn" target="_blank" className="hover:text-gray-300 transition-colors duration-300">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61567830901375" target="_blank" className="hover:text-gray-300 transition-colors duration-300">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/zpargn/" target="_blank" className="hover:text-gray-300 transition-colors duration-300">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Download App Section - Centered */}
          <div className="w-full md:w-2/4 flex justify-center">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">
                {t.footer.downloadApp}
              </h3>
              <div className="flex items-center justify-center space-x-6">
                <a href="https://play.google.com/store/apps/details?id=com.digitalelevate.zepargnmobileapp" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-all duration-300">
                  <img src={t.hero.playStore} alt="Google Play Store" className="h-12 sm:h-14" />
                </a>
                <a href="https://apps.apple.com/us/app/zepargn/id6474701827?platform=iphone" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 transition-all duration-300">
                  <img src={t.hero.appStore} alt="Apple App Store" className="h-12 sm:h-14" />
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left  justify-end items-end">
            <h3 className="text-xl font-semibold mb-4">{t.footer.company}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/cgu#" className="hover:text-gray-300">
                  {t.footer.termsOfUse}
                </Link>
              </li>
              <li>
                <Link to="/politiq#" className="hover:text-gray-300">
                  {t.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link to="/mentions-legales#" className="hover:text-gray-300">
                  {t.footer.legalMentions}
                </Link>
              </li>
              <li>
                <Link to="/cookies#" className="hover:text-gray-300">
                  {t.footer.cookiesPolicy}
                </Link>
              </li>
            </ul>
          </div>

        </div>
        {/* Disclaimer Text */}
        <div className="text-sm border-t border-white  pt-8 text-white mb-8">
          <p className="mb-4 text-center">
            {t.footer.disclaimer.split('politique de confidentialité').map((part: string, i: number) => {
              if (i === 0) {
                return (
                  <>
                    {part}
                    <Link to="/politiq" className="underline hover:text-gray-100">
                      {t.footer.privacyPolicy.toLowerCase()}
                    </Link>
                  </>
                );
              } else {
                return (
                  <>
                    {part.split('conditions d\'utilisation').map((subPart: string, j: number) => {
                      if (j === 0) {
                        return (
                          <>
                            {subPart}
                            <Link to="/cgu" className="underline hover:text-gray-100">
                              {t.footer.termsOfUse.toLowerCase()}
                            </Link>
                          </>
                        );
                      } else {
                        return subPart;
                      }
                    })}
                  </>
                );
              }
            })}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-white">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
