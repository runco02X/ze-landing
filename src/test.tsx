import React from 'react';
import { Download, ChevronDown, Menu, Globe, ArrowRight, Star, Users, DollarSign, PiggyBank, CheckCircle, ArrowDownCircle, MessageCircle } from 'lucide-react';

function App() {
    return (
        <div className="font-sans">
            {/* Header */}
            <header className="bg-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div>
                        <svg width="140" height="60" viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#FF7F2A]">
                            <path d="M65.5 25.2c0-1.8 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2-1.4 3.2-3.2 3.2-3.2-1.4-3.2-3.2zm-5.8 9.6c0-4.9 4-8.9 8.9-8.9 1.7 0 3.3.5 4.6 1.3v-1h3.8v16.3h-3.8v-1c-1.3.8-2.9 1.3-4.6 1.3-4.9 0-8.9-4-8.9-8.9zm8.9 5.1c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1zm11.9-13.8h3.8v1c1.3-.8 2.9-1.3 4.6-1.3 4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9c-1.7 0-3.3-.5-4.6-1.3v7.4h-3.8V26.1zm8.4 13.8c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1zm11.9-13.8h3.8v1c1.3-.8 2.9-1.3 4.6-1.3 4.9 0 8.9 4 8.9 8.9s-4 8.9-8.9 8.9c-1.7 0-3.3-.5-4.6-1.3v1h-3.8V26.1zm8.4 13.8c2.8 0 5.1-2.3 5.1-5.1s-2.3-5.1-5.1-5.1-5.1 2.3-5.1 5.1 2.3 5.1 5.1 5.1zm11.9-13.8h3.8v1c1.3-.8 2.9-1.3 4.6-1.3 2.7 0 5.1 1.2 6.7 3.1 1.6-1.9 4-3.1 6.7-3.1 4.9 0 8.9 4 8.9 8.9v8.9h-3.8v-8.9c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v8.9h-3.8v-8.9c0-2.8-2.3-5.1-5.1-5.1s-5.1 2.3-5.1 5.1v8.9h-3.8V26.1z" fill="currentColor" />
                            <path d="M35.9 22.9c-1.8-1-3.9-1-5.7 0l-11.4 6.6c-1.8 1-2.9 3-2.9 5v13.1c0 2.1 1.1 4 2.9 5l11.4 6.6c1.8 1 3.9 1 5.7 0l11.4-6.6c1.8-1 2.9-3 2.9-5V34.5c0-2.1-1.1-4-2.9-5l-11.4-6.6z" fill="currentColor" />
                            <path d="M33 20c-1.8-1-3.9-1-5.7 0l-11.4 6.6c-1.8 1-2.9 3-2.9 5v13.1c0 2.1 1.1 4 2.9 5l11.4 6.6c1.8 1 3.9 1 5.7 0l11.4-6.6c1.8-1 2.9-3 2.9-5V31.6c0-2.1-1.1-4-2.9-5L33 20z" fill="currentColor" />
                            <path d="M30.1 17.1c-1.8-1-3.9-1-5.7 0L13 23.7c-1.8 1-2.9 3-2.9 5v13.1c0 2.1 1.1 4 2.9 5l11.4 6.6c1.8 1 3.9 1 5.7 0l11.4-6.6c1.8-1 2.9-3 2.9-5V28.7c0-2.1-1.1-4-2.9-5l-11.4-6.6z" fill="currentColor" />
                        </svg>
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
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="8" fill="currentColor" fillOpacity="0.2" />
                                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="currentColor" />
                                </svg>
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

            {/* Features Section */}
            <section className="py-16 bg-orange-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {/* Left side - Features */}
                        <div className="md:w-1/2">
                            <div className="space-y-8">
                                {/* Feature 1 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#FF7F2A] mb-4">Épargner pour chaque projet</h3>
                                    <ul className="space-y-3 text-[#394E5E]">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Planifiez et atteignez vos objectifs financiers avec Zepargn.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Suivez facilement votre progression et ajustez votre épargne selon vos besoins.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Profitez d'outils simples pour faire croître votre épargne au fil du temps.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Feature 2 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#FF7F2A] mb-4">Réduire les dettes superflues</h3>
                                    <ul className="space-y-3 text-[#394E5E]">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Identifiez et éliminez rapidement les dettes non essentielles avec l'aide de Zepargn.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Recevez des conseils personnalisés pour optimiser le remboursement de vos dettes.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Gagnez en liberté financière en réduisant vos charges inutiles.</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* Feature 3 */}
                                <div>
                                    <h3 className="text-xl font-semibold text-[#FF7F2A] mb-4">Garder le contrôle sur son budget</h3>
                                    <ul className="space-y-3 text-[#394E5E]">
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Visualisez clairement vos revenus et vos dépenses grâce à l'interface intuitive de Zepargn.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Fixez des limites budgétaires et recevez des alertes en cas de dépassement.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="mr-2">•</span>
                                            <span>Analysez vos habitudes de dépenses pour prendre des décisions éclairées.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="pt-6">
                                    <p className="text-lg font-medium mb-4">Téléchargez <span className="text-[#FF7F2A]">Zepargn</span> maintenant et commencez à gérer votre argent comme un pro !</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="inline-block">
                                            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/fr_badge_web_generic.png" alt="Get it on Google Play" className="h-12" />
                                        </a>
                                        <a href="#" className="inline-block">
                                            <img src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" alt="Download on the App Store" className="h-12" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - App Screenshots */}
                        <div className="md:w-1/2 relative">
                            <div className="flex justify-center items-center gap-4">
                                {/* Left Phone */}
                                <div className="relative" style={{ transform: 'rotate(-5deg)' }}>
                                    <div className="bg-black rounded-[3rem] p-2 shadow-xl">
                                        <div className="relative rounded-[2.5rem] overflow-hidden w-[250px] h-[500px]">
                                            <img
                                                src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                                alt="Zepargn App Screen 1"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Phone */}
                                <div className="relative" style={{ transform: 'rotate(5deg) translateY(20px)' }}>
                                    <div className="bg-black rounded-[3rem] p-2 shadow-xl">
                                        <div className="relative rounded-[2.5rem] overflow-hidden w-[250px] h-[500px]">
                                            <img
                                                src="https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                                                alt="Zepargn App Screen 2"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;