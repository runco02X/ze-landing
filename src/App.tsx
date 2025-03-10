import { PlusIcon, MinusIcon, ChevronLeft, ChevronRight } from "lucide-react";
import HeroDevice from "../assets/hero-device.svg";
import MobileIllustration from "../assets/mobile-illustration.svg";
import Phones from "../assets/phones.png";
import { useLanguage } from "./hooks/useLanguage";
import { useEffect, useState, useCallback } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const { t, currentLanguage } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Calculate how many testimonials to show per slide based on screen size
  const getTestimonialsPerSlide = () => {
    if (windowWidth < 640) return 1; // Mobile: 1 per slide
    if (windowWidth < 1024) return 2; // Tablet: 2 per slide
    return 3; // Desktop: 3 per slide
  };

  const testimonialsPerSlide = getTestimonialsPerSlide();
  const totalTestimonialSlides = Math.ceil(t.testimonials.reviews.length / testimonialsPerSlide);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Reset current slide when screen size changes to avoid empty slides
  useEffect(() => {
    setCurrentTestimonialSlide(0);
  }, [testimonialsPerSlide]);

  const nextTestimonialSlide = useCallback(() => {
    setCurrentTestimonialSlide((prev) =>
      prev === totalTestimonialSlides - 1 ? 0 : prev + 1
    );
  }, [totalTestimonialSlides]);

  const prevTestimonialSlide = useCallback(() => {
    setCurrentTestimonialSlide((prev) =>
      prev === 0 ? totalTestimonialSlides - 1 : prev - 1
    );
  }, [totalTestimonialSlides]);

  // Auto-advance carousel
  useEffect(() => {
    const autoAdvanceInterval = setInterval(() => {
      nextTestimonialSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoAdvanceInterval);
  }, [nextTestimonialSlide]);
  return (
    <div className="font-sans bg-white" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <Header showNavigation={true} showAppLinks={true} isHomePage={true} />

      {/* Hero Section */}
      <section className="bg-white pt-8 sm:pt-12 lg:pt-16 bg-[url('../assets/wavy-background.svg')] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span className="text-[#FF7F2A] animate-fade-in-up">{t.hero.title1}</span>{" "}
                <span className="text-[#394E5E] animate-fade-in-up animation-delay-100">{t.hero.title2}</span>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mt-2 sm:mt-3">
                <span className="text-[#394E5E] animate-fade-in-up animation-delay-200">{t.hero.title3}</span>{" "}
                <span className="text-[#FF7F2A] animate-fade-in-up animation-delay-300">{t.hero.title4}</span>
              </div>
            </h1>
            <p className="text-gray-600 mb-6 sm:mb-8 lg:mb-10 max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg lg:text-xl animate-fade-in-up animation-delay-400">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:space-x-4 animate-fade-in-up animation-delay-500">
              <a
                href="https://play.google.com/store/apps/details?id=com.digitalelevate.zepargnmobileapp"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <img src={t.hero.playStore} alt="Google Play" className="h-12 sm:h-14" />
              </a>
              <a
                href="https://apps.apple.com/us/app/zepargn/id6474701827?platform=iphone"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300"
              >
                <img src={t.hero.appStore} alt="App Store" className="h-12 sm:h-14" />
              </a>
            </div>
          </div>

          <div className="flex justify-center animate-float">
            <div className="relative w-full max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-3xl"></div>
              <img
                src={HeroDevice}
                alt="Hero Device"
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Save More Section */}
      <section className="py-8 sm:py-12 lg:py-16 from-gray-50 to-gray-100 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-6 sm:my-8 lg:my-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 text-[#394E5E] leading-tight">
                {t.saveMore.title1}
                <br className="hidden sm:block" />
                <span className="inline-block mt-2 sm:mt-0">{t.saveMore.title2}</span>
              </h2>
              <p className="text-gray-600 mb-8 sm:mb-10 lg:mb-12 text-base sm:text-lg lg:text-xl">
                {t.saveMore.description}
              </p>
              <div className="flex space-x-4 justify-center sm:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.digitalelevate.zepargnmobileapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white py-2 rounded-lg flex items-center transform hover:scale-105 transition-transform"
                >
                  <img src={t.hero.playStore} alt="Google Play" className="h-12 sm:h-14" />
                </a>
                <a
                  href="https://apps.apple.com/us/app/zepargn/id6474701827?platform=iphone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white py-2 rounded-lg flex items-center transform hover:scale-105 transition-transform"
                >
                  <img src={t.hero.appStore} alt="App Store" className="h-12 sm:h-14" />
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src={MobileIllustration}
                alt="Mobile App Illustration"
                className="max-w-full h-auto w-4/5 md:w-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section id="features" className="py-8 sm:py-12 lg:py-16 bg-orange-50 rounded-3xl bg-[url('../assets/wavy-background.svg')]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#394E5E] text-center mb-8 sm:mb-10 lg:mb-12">
            {t.stats.title}
          </h2>
          <div className="max-w-6xl mx-auto border border-[#394E5E] rounded-3xl sm:rounded-full mb-8 sm:mb-10 lg:mb-12 py-4 sm:py-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="px-4 sm:px-6 lg:px-8 py-4 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF7F2A] mb-2">3K+</div>
                <div className="text-base sm:text-xl lg:text-2xl text-[#394E5E]">{t.stats.users}</div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-4 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF7F2A] mb-2">10+</div>
                <div className="text-base sm:text-xl lg:text-2xl text-[#394E5E]">{t.stats.countries}</div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-4 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF7F2A] mb-2">2,5k</div>
                <div className="text-base sm:text-xl lg:text-2xl text-[#394E5E]">
                  {t.stats.satisfied}
                </div>
              </div>
              <div className="px-4 sm:px-6 lg:px-8 py-4 text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FF7F2A] mb-2">70M+</div>
                <div className="text-base sm:text-xl lg:text-2xl text-[#394E5E]">{t.stats.saved}</div>
              </div>
            </div>
          </div>


        </div>
      </section> */}

      <section id="features" className="py-8 sm:py-12 lg:py-16 bg-orange-50 rounded-b-3xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Right side - App Screenshots */}
            <div className="w-full md:w-1/2 relative">
              <div className="flex justify-center items-center">
                <img
                  src={Phones}
                  alt="Zepargn App Screenshots"
                  className="w-4/5 md:w-full max-w-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            {/* Left side - Features */}
            <div className="w-full md:w-1/2">
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {/* Feature 1 */}
                <div className="bg-white/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-4xl sm:text-5xl">•</span>{t.features.feature1.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature1.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature1.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature1.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div className="bg-white/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-4xl sm:text-5xl">•</span>{t.features.feature2.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature2.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature2.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature2.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div className="bg-white/50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#FF7F2A] flex items-center">
                    <span className="mr-2 text-4xl sm:text-5xl">•</span>{t.features.feature3.title}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3 mt-3 sm:mt-4">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature3.bullet1}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature3.bullet2}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5 text-[#FF7F2A]">•</span>
                      <span className="text-sm sm:text-base lg:text-lg text-gray-700">
                        {t.features.feature3.bullet3}
                      </span>
                    </li>
                  </ul>
                </div>

                <div id="download" className="pt-4 sm:pt-6 lg:pt-8">
                  <p className="text-base sm:text-lg lg:text-xl font-thin mb-4 sm:mb-6 text-[#394E5E]">
                    {t.features.downloadNow}
                  </p>
                  <div className="flex space-x-4 justify-center sm:justify-start">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.digitalelevate.zepargnmobileapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform hover:scale-105 transition-transform"
                    >
                      <img src={t.hero.playStore} alt="Get it on Google Play" className="h-12 sm:h-14" />
                    </a>
                    <a
                      href="https://apps.apple.com/us/app/zepargn/id6474701827?platform=iphone"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block transform hover:scale-105 transition-transform"
                    >
                      <img src={t.hero.appStore} alt="Download on the App Store" className="h-12 sm:h-14" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 text-[#394E5E]">
            {t.howItWorks.title}
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto px-4">
            {t.howItWorks.description}
          </p>

          <div className="relative max-w-7xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gray-50 rounded-2xl sm:rounded-3xl -z-10"></div>

            <div className="py-8 sm:py-10 lg:py-12 px-4 sm:px-8 lg:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-14">
                {t.howItWorks.steps.slice(0, 3).map((step, index) => (
                  <div className="relative" key={index}>
                    <div className="bg-white rounded-2xl sm:rounded-full border border-[#394E5E] p-4 sm:p-6 shadow-sm h-full transition-transform hover:scale-105">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-[#FF7F2A] font-bold text-2xl sm:text-3xl lg:text-4xl shrink-0 border-2 border-[#FF7F2A]">
                          {step.number}
                        </div>
                        <h3 className="font-medium text-sm sm:text-base lg:text-lg text-[#394E5E]">
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
      <section className="py-8 sm:py-12 lg:py-16 bg-white bg-[url('../assets/wavy-background.svg')]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-5 sm:mb-7">
            <p className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-[#F5F5F5] rounded-full text-base sm:text-lg">
              {currentLanguage === 'en' ? 'REVIEWS' : 'AVIS'}
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 text-[#394E5E]">
            {t.testimonials.title}
          </h2>
          <p className="text-center text-base sm:text-lg lg:text-xl font-thin text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>

          {/* Testimonial Carousel */}
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonialSlide * 100}%)` }}
              >
                {Array.from({ length: totalTestimonialSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                    <div className={`grid grid-cols-1 ${testimonialsPerSlide === 2 ? 'sm:grid-cols-2' : testimonialsPerSlide === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''} gap-6 sm:gap-8 lg:gap-10`}>
                      {t.testimonials.reviews
                        .slice(slideIndex * testimonialsPerSlide, slideIndex * testimonialsPerSlide + testimonialsPerSlide)
                        .filter(review => review) // Filter out undefined items
                        .map((review, index) => (
                          <div
                            className="bg-[#F6F6F6] rounded-xl p-4 sm:p-6 shadow-sm transition-transform hover:scale-105"
                            key={index}
                          >
                            <div className="mb-4 sm:mb-6 border border-[#DBDBDB] rounded-lg p-3 sm:p-4">
                              <p className="text-gray-700 italic text-sm sm:text-base">
                                {review.text}
                              </p>
                            </div>

                            <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-3 sm:p-4">
                              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                                <img
                                  src={`https://i.pravatar.cc/150?img=${61 + (slideIndex * testimonialsPerSlide) + index}`}
                                  alt={`${review.name}`}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                              </div>
                              <div className="min-w-0">
                                <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                                  {review.name}
                                </h4>
                                <p className="text-gray-600 text-xs sm:text-sm truncate">{review.profession}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevTestimonialSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7F2A] focus:ring-opacity-50"
                aria-label="Previous testimonials"
              >
                <ChevronLeft size={windowWidth < 640 ? 20 : 24} className="text-[#394E5E]" />
              </button>

              <div className="flex space-x-2 justify-center">
                {Array.from({ length: totalTestimonialSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialSlide(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${currentTestimonialSlide === index ? 'bg-[#FF7F2A] w-4 sm:w-6' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonialSlide}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#FF7F2A] focus:ring-opacity-50"
                aria-label="Next testimonials"
              >
                <ChevronRight size={windowWidth < 640 ? 20 : 24} className="text-[#394E5E]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-8 sm:py-12 lg:pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-[#394E5E] mb-3 sm:mb-5">
            {t.faqs.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-thin text-[#394E5E] text-center mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto">
            {t.faqs.subtitle}
          </p>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {t.faqs.questions.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="mb-4 sm:mb-6 border border-[#DBDBDB] rounded-lg overflow-hidden transition-shadow hover:shadow-md"
                >
                  <button
                    className={`w-full text-left p-3 sm:p-4 flex justify-between items-center gap-4 ${isOpen ? 'bg-[#FF7F2A] text-white' : 'bg-gray-100 text-[#394E5E] hover:bg-gray-200'}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-medium text-sm sm:text-base flex-1 pr-2">{faq.question}</span>
                    <span className="flex-shrink-0">
                      {isOpen ? <MinusIcon size={16} className="sm:w-5 sm:h-5" /> : <PlusIcon size={16} className="sm:w-5 sm:h-5" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-3 sm:p-4 bg-white">
                      <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
