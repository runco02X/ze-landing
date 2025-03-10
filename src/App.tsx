import { Menu, PlusIcon, MinusIcon } from "lucide-react";
import Logo from "../assets/logo.png";
import IconLogo from "../assets/icon-logo.svg";
import HeroDevice from "../assets/hero-device.svg";
import BrightStar from "../assets/bright-star.svg";
import PlayStore from "../assets/playstore.png";
import AppStore from "../assets/appstore.png";
import MobileIllustration from "../assets/mobile-illustration.svg";
import Phones from "../assets/phones.png";
import { useLanguage } from "./hooks/useLanguage";
import { useState } from "react";

function App() {
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div className="font-sans bg-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <header className="bg-white py-4  my-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <img src={Logo} alt="Zepargn Logo" className="" />
          </div>

          <div className="hidden md:flex items-center bg-[#394E5E] rounded-full px-6 py-2">
            <nav className="flex space-x-6">
              <a
                href="#features"
                onClick={(e) => handleSmoothScroll(e, 'features')}
                className="text-white text-sm hover:text-[#FF7F2A]"
              >
                {t.nav.features}
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                className="text-white text-sm hover:text-[#FF7F2A]"
              >
                {t.nav.howItWorks}
              </a>
              <a
                href="#download"
                onClick={(e) => handleSmoothScroll(e, 'download')}
                className="text-white text-sm hover:text-[#FF7F2A]"
              >
                {t.nav.androidApp}
              </a>
              <a
                href="#download"
                onClick={(e) => handleSmoothScroll(e, 'download')}
                className="text-white text-sm hover:text-[#FF7F2A]"
              >
                {t.nav.iosApp}
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[#FF7F2A]">
              <div className="mr-2">
                <img src={BrightStar} alt="Bright Star" className="w-4 h-4" />
              </div>
              <span className="font-medium">{t.nav.budgetCoach}</span>
            </div>

            <div className="flex items-center">
              <img
                src={`https://flagcdn.com/w20/${currentLanguage === 'en' ? 'gb' : 'fr'}.png`}
                alt={currentLanguage === 'en' ? 'English' : 'Français'}
                className="mr-1 h-4 cursor-pointer"
                onClick={() => changeLanguage(currentLanguage === 'en' ? 'fr' : 'en')}
              />
              <span className="font-medium">{currentLanguage.toUpperCase()}</span>
            </div>

            <Menu className="md:hidden" size={24} />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white pt-12 bg-[url('../assets/wavy-background.svg')] relative overflow-hidden">
        <div className="absolute inset-0  opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <h1 className="lg:text-7xl font-bold mb-8">
              <span className="text-[#FF7F2A]">{t.hero.title1}</span>{" "}
              <span className="text-[#394E5E]">{t.hero.title2}</span>
              <br />
              <span className="text-[#394E5E]">{t.hero.title3}</span>{" "}
              <span className="text-[#FF7F2A]">{t.hero.title4}</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              {t.hero.subtitle}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-2 rounded-lg flex items-center"
              >
                <img src={PlayStore} alt="Google Play" />
              </a>
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white py-2 rounded-lg flex items-center"
              >
                <img src={AppStore} alt="App Store" />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img
                src={HeroDevice}
                alt="Hero Device"
                className="aspect-w-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi choisir <span className="text-[#FF7F2A]">Zepargn</span> ?
            <br />
            <span className="text-xl font-normal">(Avantages principaux)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Star className="text-[#FF7F2A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Une Expérience Innovante</h3>
                    <p className="text-gray-600 text-sm">Notre interface intuitive vous permet de gérer facilement vos finances et d'atteindre vos objectifs d'épargne.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <Users className="text-[#FF7F2A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Support et Conseil</h3>
                    <p className="text-gray-600 text-sm">Notre équipe est disponible pour vous aider et vous conseiller dans la gestion de vos finances.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-full mr-4">
                    <DollarSign className="text-[#FF7F2A]" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Gestion intelligente de vos finances</h3>
                    <p className="text-gray-600 text-sm">Suivez vos dépenses, créez des budgets et atteignez vos objectifs financiers plus facilement.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-center text-sm font-medium mb-2">Nos produits</h4>
                  <img
                    src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                    alt="Products"
                    className="rounded-lg mx-auto"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h4 className="text-center text-sm font-medium mb-2">Nos épargnes</h4>
                  <img
                    src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80"
                    alt="Savings"
                    className="rounded-lg mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Save More Section */}
      <section className="py-16 from-gray-50 to-gray-100 bg-white ">
        <div className="container mx-auto px-4 my-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-6xl font-bold mb-10 text-[#394E5E]">
                {t.saveMore.title1}
                <br />
                {t.saveMore.title2}
              </h2>
              <p className="text-gray-600 mb-12 text-xl">
                {t.saveMore.description}
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-white py-2 rounded-lg flex items-center"
                >
                  <img src={PlayStore} alt="Google Play" />
                </a>
                <a
                  href="#"
                  className="text-white py-2 rounded-lg flex items-center"
                >
                  <img src={AppStore} alt="App Store" />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={MobileIllustration}
                alt="Mobile App Illustration"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white"></section>

      {/* Stats Section */}
      <section id="features" className="py-16 bg-orange-50 rounded-3xl bg-[url('../assets/wavy-background.svg')]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#394E5E] text-center mb-12">
            {t.stats.title}
          </h2>
          <div className="max-w-6xl mx-auto 4 border border-[#394E5E] rounded-full mb-12">
            <div className="flex flex-wrap justify-center">
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">3K+</div>
                <div className="text-2xl text-[#394E5E]">{t.stats.users}</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">10+</div>
                <div className="text-2xl text-[#394E5E]">{t.stats.countries}</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">2,5k</div>
                <div className="text-2xl text-[#394E5E]">
                  {t.stats.satisfied}
                </div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">70M+</div>
                <div className="text-2xl text-[#394E5E]">{t.stats.saved}</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            <div>
              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl">
                <span className="mr-2 text-5xl">•</span> {t.stats.feature1.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.stats.feature1.description}
              </p>

              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl">
                <span className="mr-2 text-5xl">•</span> {t.stats.feature2.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.stats.feature2.description}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl">
                <span className="mr-2 text-5xl">•</span> {t.stats.feature3.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.stats.feature3.description}
              </p>

              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl">
                <span className="mr-2 text-5xl">•</span> {t.stats.feature4.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {t.stats.feature4.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-orange-50 rounded-b-3xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Features */}
            <div className="md:w-1/2">
              <div className="space-y-8">
                {/* Feature 1 */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-5xl">•</span>{t.features.feature1.title}
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature1.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature1.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature1.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-5xl">•</span>{t.features.feature2.title}
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature2.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature2.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature2.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-5xl">•</span>{t.features.feature3.title}
                  </h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature3.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature3.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>
                        {t.features.feature3.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                <div id="download" className="pt-6">
                  <p className="text-lg font-thin mb-4 text-[#394E5E]">
                    {t.features.downloadNow}
                  </p>
                  <div className="flex space-x-4">
                    <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src={PlayStore} alt="Get it on Google Play" />
                    </a>
                    <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                      <img src={AppStore} alt="Download on the App Store" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - App Screenshots */}
            <div className="md:w-1/2 relative">
              <div className="flex justify-center items-center gap-4">
                <img src={Phones} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#394E5E]">
            {t.howItWorks.title}
          </h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            {t.howItWorks.description}
          </p>

          <div className="relative max-w-7xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gray-50 rounded-3xl -z-10"></div>

            <div className="py-12 px-6 md:px-12">
              <div className="grid md:grid-cols-3 gap-14">
                {t.howItWorks.steps.slice(0, 3).map((step, index) => (
                  <div className="relative" key={index}>
                    <div className="bg-white rounded-full border border-[#394E5E] p-6 shadow-sm h-full">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#FF7F2A] font-bold text-4xl shrink-0">
                          {step.number}
                        </div>
                        <h3 className="font-medium text-[#394E5E]">
                          {step.description}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white bg-[url('../assets/wavy-background.svg')] ">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-center mb-7">
            <p className="inline-block  px-4 py-2 bg-[#F5F5F5] rounded-full text-lg">
              {currentLanguage === 'en' ? 'REVIEWS' : 'AVIS'}
            </p>
          </div>
          <h2 className="text-5xl font-bold text-center mb-4 text-[#394E5E]">
            {t.testimonials.title}
          </h2>
          <p className="text-center text-xl font-thin text-gray-600 mb-12">
            {t.testimonials.subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {t.testimonials.reviews.slice(0, 6).map((review, index) => (
              <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm" key={index}>
                <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                  <p className="text-gray-700 italic">
                    {review.text}
                  </p>
                </div>

                <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                    <img
                      src={`https://i.pravatar.cc/150?img=${61 + index}`}
                      alt={`${review.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {review.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{review.profession}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#394E5E] mb-5">
            {t.faqs.title}
          </h2>
          <p className="text-xl font-thin text-[#394E5E] text-center mb-12">
            {t.faqs.subtitle}
          </p>
          <div className="max-w-3xl mx-auto">
            {t.faqs.questions.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="mb-6 border border-[#DBDBDB] rounded-lg overflow-hidden">
                  <button
                    className={`w-full text-left p-4 flex justify-between items-center ${isOpen ? 'bg-[#394E5E] text-white' : 'bg-white text-[#394E5E]'}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    {isOpen ? <MinusIcon size={20} /> : <PlusIcon size={20} />}
                  </button>
                  {isOpen && (
                    <div className="p-4 bg-white text-gray-700">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="bg-[#394E5E] text-white py-12">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Social Section */}
            <div className="text-center md:text-left container mx-auto">
              <div className="flex justify-center md:justify-start w-full">
                <img src={IconLogo} alt="Zepargn Logo" className="h-16 mb-4" />
              </div>
              <p className="mb-4">{t.footer.followUs}</p>
              <div className="flex space-x-4 justify-center md:justify-start text-3xl">
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-gray-300">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
            {/* Communauté Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.footer.community}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.blog}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.faq}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.support}
                  </a>
                </li>
              </ul>
            </div>

            {/* Entreprise Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.footer.company}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.releaseNotes}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.termsOfUse}
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    {t.footer.privacyPolicy}
                  </a>
                </li>
              </ul>
            </div>

            {/* App Download Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t.footer.downloadApp}
              </h3>
              <div className="flex space-x-4">
                <a href="#">
                  <img src={PlayStore} alt="" />
                </a>
                <a href="#">
                  <img src={AppStore} alt="" />
                </a>
              </div>
            </div>
          </div>

          {/* Disclaimer Text */}
          <div className="text-sm border-t border-white pt-8  text-white mb-8">
            <p className="mb-4 text-center">
              {t.footer.disclaimer.split('politique de confidentialité').map((part: string, i: number) => {
                if (i === 0) {
                  return (
                    <>
                      {part}
                      <a href="#" className="underline hover:text-gray-100">
                        {t.footer.privacyPolicy.toLowerCase()}
                      </a>
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
                              <a href="#" className="underline hover:text-gray-100">
                                {t.footer.termsOfUse.toLowerCase()}
                              </a>
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
    </div>
  );
}

export default App;
