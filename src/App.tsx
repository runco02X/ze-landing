import React from 'react';
import { Download, ChevronDown, Menu, Globe, ArrowRight, Star, Users, DollarSign, PiggyBank, CheckCircle, ArrowDownCircle, MessageCircle, PlusIcon, Plus } from 'lucide-react';
import logo from '../assets/logo.png';
import IconLogo from '../assets/icon-logo.svg';
import HeroDevice from '../assets/hero-device.svg';
import HeroDevice2 from '../assets/hero-device.png';
import BrightStar from '../assets/bright-star.svg';
import PlayStore from '../assets/playstore.png';
import AppStore from '../assets/appstore.png';
import MobileIllustration from '../assets/mobile-illustration.svg';
import Phones from '../assets/phones.png';

function App() {
  return (
    <div className="font-sans bg-white">
      {/* Header */}
      <header className="bg-white py-4  my-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <img src={logo} alt="Zepargn Logo" className="" />
          </div>

          <div className="hidden md:flex items-center bg-[#394E5E] rounded-full px-6 py-2">
            <nav className="flex space-x-6">
              <a href="#" className="text-white text-sm hover:text-[#FF7F2A]">Fonctionnalités</a>
              <a href="#" className="text-white text-sm hover:text-[#FF7F2A]">Comment ça marche</a>
              <a href="#" className="text-white text-sm hover:text-[#FF7F2A]">Zepargn Android</a>
              <a href="#" className="text-white text-sm hover:text-[#FF7F2A]">Zepargn iOS</a>
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center text-[#FF7F2A]">
              <div className="mr-2">
                <img src={BrightStar} alt="Bright Star" className="w-4 h-4" />
              </div>
              <span className="font-medium">Coach Budget</span>
            </div>

            <div className="flex items-center">
              <img src="https://flagcdn.com/w20/gb.png" alt="English" className="mr-1 h-4" />
              <span className="font-medium">EN</span>
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
              <span className="text-[#FF7F2A]">Épargnez</span> <span className="text-[#394E5E]">intelligemment,</span>
              <br />
              <span className="text-[#394E5E]">réalisez vos</span> <span className="text-[#FF7F2A]">projets</span>
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Avec Zepargn, organisez votre budget, rejoignez des groupes d'épargne
              <br />et atteignez vos objectifs plus facilement.
            </p>
            <button className="bg-[#FF7F2A] hover:bg-[#FF7F2A]/90 text-white px-8 py-3 rounded-full flex items-center">
              <span>Découvrir les fonctionnalités</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <img src={HeroDevice} alt="Hero Device" className="aspect-w-100" />
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
              <h2 className="text-6xl font-bold mb-10 text-[#394E5E]">Économisez plus<br />en stressant moins</h2>
              <p className="text-gray-600 mb-12 text-xl">
                Prenez le contrôle de vos finances sans pression !<br />
                Avec Zepargn, épargnez intelligemment, suivez vos progrès en temps réel<br />
                et atteignez vos objectifs sans stress. Moins d'inquiétude, plus d'économies !
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white py-2 rounded-lg flex items-center">
                  <img src={PlayStore} alt="Google Play" />
                </a>
                <a href="#" className="text-white py-2 rounded-lg flex items-center">
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
      <section className="py-16 bg-orange-50 rounded-3xl bg-[url('../assets/wavy-background.svg')]">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-[#394E5E] text-center mb-12">Zepargn en chiffre</h2>
          <div className="max-w-6xl mx-auto 4 border border-[#394E5E] rounded-full mb-12">
            <div className="flex flex-wrap justify-center">
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">3K+</div>
                <div className="text-2xl text-[#394E5E]">Utilisateurs</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">10+</div>
                <div className="text-2xl text-[#394E5E]">Pays</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">2,5k</div>
                <div className="text-2xl text-[#394E5E]">Clients Satisfaits</div>
              </div>
              <div className="px-8 py-4 text-center">
                <div className="text-5xl font-bold text-[#FF7F2A]">70M+</div>
                <div className="text-2xl text-[#394E5E]">épargnés</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            <div>
              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl"><span className="mr-2 text-5xl">•</span> Retrait sur objectifs</h3>
              <p className="text-gray-600 mb-6">
                Nous vous permettons de retirer votre argent uniquement que lorsque la date fixée dans les objectifs est atteinte Contactez le support en cas d'urgence.
              </p>

              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl"><span className="mr-2 text-5xl">•</span>  Rappels et calculs automatiques</h3>
              <p className="text-gray-600 mb-6">
                Avec Zépargn, fini l'oubli d'épargner grâce à nos rappels. Et même si ça arrive, nous vous calculons automatiquement le montant à épargner le jour suivant afin de vous aider à atteindre vos objectifs.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl"><span className="mr-2 text-5xl">•</span>  Synchronisation Mobile Money</h3>
              <p className="text-gray-600 mb-6">
                Depuis le confort de votre maison, économisez via l'argent mobile et la carte bancaire avec moins de frais en toute simplicité, rapidité, sécurité et flexibilité.
              </p>

              <h3 className="font-semibold text-[#FF7F2A]  flex items-center text-xl"><span className="mr-2 text-5xl">•</span>  Épargne collaborative</h3>
              <p className="text-gray-600 mb-6">
                Atteignez ensemble cet objectif commun avec vos proches. vacances construisez un capital pour une entreprise, un cadeau d'anniveraire?
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
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center"><span className="mr-2 text-5xl">•</span>Épargner pour chaque projet</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Planifiez et atteignez vos objectifs financiers avec Zepargn.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Suivez facilement votre progression et ajustez votre épargne selon vos besoins.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Profitez d'outils simples pour faire croître votre épargne au fil du temps.</span>
                    </li>
                  </ul>
                </div>

                {/* Feature 2 */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center"><span className="mr-2 text-5xl">•</span>Réduire les dettes superflues</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Identifiez et éliminez rapidement les dettes non essentielles avec l'aide de Zepargn.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Recevez des conseils personnalisés pour optimiser le remboursement de vos dettes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Gagnez en liberté financière en réduisant vos charges inutiles.</span>
                    </li>
                  </ul>
                </div>

                {/* Feature 3 */}
                <div>
                  <h3 className="text-xl font-semibold text-[#FF7F2A] flex items-center"><span className="mr-2 text-5xl">•</span>Garder le contrôle sur son budget</h3>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Visualisez clairement vos revenus et vos dépenses grâce à l'interface intuitive de Zepargn.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Fixez des limites budgétaires et recevez des alertes en cas de dépassement.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 ml-5">•</span>
                      <span>Analysez vos habitudes de dépenses pour prendre des décisions éclairées.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6">
                  <p className="text-lg font-thin mb-4 text-[#394E5E]">Téléchargez <span className="text-[#394E5E] font-bold">Zepargn</span> maintenant et commencez à gérer votre argent comme un pro !</p>
                  <div className="flex space-x-4">
                    <a href="#" className="inline-block">
                      <img src={PlayStore} alt="Get it on Google Play" />
                    </a>
                    <a href="#" className="inline-block">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-[#394E5E]">Comment ça marche ?</h2>
          <p className="text-center text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez Zepargn en 6 étapes simples ! Gérez votre argent intelligemment, épargnez en toute
            sécurité et réalisez vos projets plus facilement avec Zepargn !
          </p>

          <div className="relative max-w-7xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gray-50 rounded-3xl -z-10"></div>

            <div className="py-12 px-6 md:px-12">
              <div className="grid md:grid-cols-3 gap-14">
                <div className="relative">
                  <div className="bg-white rounded-full border border-[#394E5E] p-6 shadow-sm h-full ">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#FF7F2A] font-bold text-4xl shrink-0">
                        01
                      </div>
                      <h3 className="font-medium text-[#394E5E]">Créez un compte en quelques secondes avec votre email ou numéro de téléphone.</h3>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-white rounded-full border border-[#394E5E] p-6 shadow-sm h-full ">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#FF7F2A] font-bold text-4xl shrink-0">
                        01
                      </div>
                      <h3 className="font-medium text-[#394E5E]">Créez un compte en quelques secondes avec votre email ou numéro de téléphone.</h3>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-white rounded-full border border-[#394E5E] p-6 shadow-sm h-full ">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#FF7F2A] font-bold text-4xl shrink-0">
                        01
                      </div>
                      <h3 className="font-medium text-[#394E5E]">Créez un compte en quelques secondes avec votre email ou numéro de téléphone.</h3>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white bg-[url('../assets/wavy-background.svg')] ">
        <div className="container mx-auto px-4 ">
          <div className="flex justify-center mb-7">
            <p className="inline-block  px-4 py-2 bg-[#F5F5F5] rounded-full text-lg">AVIS</p>
          </div>
          <h2 className="text-5xl font-bold text-center mb-4 text-[#394E5E]">Ce que disent nos utilisateurs</h2>
          <p className="text-center text-xl font-thin text-gray-600 mb-12">Découvrez pourquoi nos clients adorent Zepargn</p>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F6] rounded-xl p-6 shadow-sm">
              <div className="mb-6 border border-[#DBDBDB] rounded-lg p-4">
                <p className="text-gray-700 italic">« Très bonne application, avec une interface facile à utiliser. Elle vous aide à économiser facilement. Je recommande.  »</p>
              </div>

              <div className="flex items-center gap-3 border border-[#DBDBDB] rounded-lg p-4">
                <img
                  src="https://i.pravatar.cc/150?img=61"
                  alt=""
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">Grâce DOSSOUHOUI</h4>
                  <p className="text-gray-600 text-sm">Pharmacienne</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* FAQs */}
      <section className="pb-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center text-[#394E5E] mb-5">FAQs</h2>
          <p className="text-xl font-thin text-[#394E5E] text-center mb-12">Questions Fréquemment Posées</p>
          <div className="max-w-3xl mx-auto">
            {[
              "Comment puis-je créer un compte ?",
              "Comment puis-je gérer mes épargnes avec Zepargn ?",
              "Quels sont les avantages et comment puis-je maximiser mes économies avec cette application ?",
              "Est-ce que l'application est gratuite ou y a-t-il des frais cachés ?",
              "Comment Zepargn contribue-t-il à la sécurité et comment mes données sont-elles protégées ?"
            ].map((question, i) => (
              <div key={i} className="mb-4 bg-[#394E5E] text-white rounded-lg">
                <button className="w-full text-left p-4 flex justify-between items-center">
                  <span>{question}</span>
                  <PlusIcon size={20} />
                </button>
              </div>
            ))}
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
              <p className="mb-4">Suivez-nous: @ZePargn</p>
              <div className="flex space-x-4 justify-center md:justify-start text-3xl">
                <a href="#" className="hover:text-gray-300"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-gray-300"><i className="fab fa-facebook"></i></a>
                <a href="#" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-gray-300"><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
            {/* Communauté Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Communauté</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Blog</a></li>
                <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
                <li><a href="#" className="hover:text-gray-300">Support</a></li>
              </ul>
            </div>

            {/* Entreprise Column */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Entreprise</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Journal de versions</a></li>
                <li><a href="#" className="hover:text-gray-300">Conditions d'utilisation</a></li>
                <li><a href="#" className="hover:text-gray-300">Politique de confidentialité</a></li>
              </ul>
            </div>

            {/* App Download Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Téléchargez notre application</h3>
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
              Zepargn est une plateforme d'épargne. Les informations fournies ont un but strictement informatif et éducatif et ne doivent pas être considérées comme des conseils sur des produits financiers ou des recommandations. Elles ont été élaborées sans prendre en compte vos objectifs, votre situation financière ou vos besoins. Nous vous encourageons à lire et comprendre les documents juridiques importants disponibles sur notre site avant de prendre une décision d'investissement ou d'épargner. Nous attirons votre attention sur le fait que la décision d'investir ou d'épargner relève de votre responsabilité. Pour plus d'informations sur nos services, veuillez vous référer à notre{' '}
              <a href="#" className="underline hover:text-gray-100">politique de confidentialité</a>
              {' '}et à nos{' '}
              <a href="#" className="underline hover:text-gray-100">conditions d'utilisation</a>.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white">
            <p>© 2025 Digitall Elevate - Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;