import React, { useContext, useState } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PlusIcon, MinusIcon } from 'lucide-react';

const Functionalities: React.FC = () => {
  const { t } = useContext(LanguageContext);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-white min-h-screen">
      <Header showNavigation={true} />
      {/* Navigation Tabs */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex flex-wrap justify-center gap-4 border-b border-gray-200">
          <Link
            to="/budget-calculator"
            className="px-4 py-2 text-gray-600 hover:text-[#FF7F2A]"
          >
            {t.functionalities.budgetCalculator}
          </Link>
          <Link
            to="/functionalities"
            className="px-4 py-2 text-[#FF7F2A] border-b-2 border-[#FF7F2A]"
          >
            {t.functionalities.keyFeatures}
          </Link>
          <Link
            to="/why-use-it"
            className="px-4 py-2 text-gray-600 hover:text-[#FF7F2A]"
          >
            {t.functionalities.whyUseIt}
          </Link>
          <Link
            to="/how-it-works"
            className="px-4 py-2 text-gray-600 hover:text-[#FF7F2A]"
          >
            {t.functionalities.howItWorks}
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl font-medium text-center text-[#C8976C] mb-12">
          {t.functionalities.title}
        </h1>

        <div className="max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7F2A] text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#394E5E] mb-3">
                  {t.functionalities.feature1.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature1.bullet1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature1.bullet2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature1.bullet3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7F2A] text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#394E5E] mb-3">
                  {t.functionalities.feature2.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature2.bullet1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature2.bullet2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature2.bullet3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7F2A] text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#394E5E] mb-3">
                  {t.functionalities.feature3.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature3.bullet1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature3.bullet2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature3.bullet3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7F2A] text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#394E5E] mb-3">
                  {t.functionalities.feature4.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature4.bullet1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature4.bullet2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature4.bullet3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FF7F2A] text-white flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#394E5E] mb-3">
                  {t.functionalities.feature5.title}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature5.bullet1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature5.bullet2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF7F2A] mr-2">•</span>
                    <span>{t.functionalities.feature5.bullet3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                    className={`w-full text-left p-3 sm:p-4 flex justify-between items-center gap-4 transition-colors duration-300 ease-in-out ${isOpen ? 'bg-[#FF7F2A] text-white' : 'bg-[#394E5E] text-white hover:bg-[#FF7F2A]'}`}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span className="font-medium text-sm sm:text-base flex-1 pr-2">{faq.question}</span>
                    <span className="flex-shrink-0 transition-transform duration-300 ease-in-out">
                      {isOpen ? <MinusIcon size={16} className="sm:w-5 sm:h-5" /> : <PlusIcon size={16} className="sm:w-5 sm:h-5" />}
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <div className="p-3 sm:p-4 bg-white">
                      <p className="text-sm sm:text-base text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Functionalities;
