import { Link } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header showAppLinks={true} showNavigation={true} />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-[#FF7F2A] mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-[#394E5E] mb-4">
            {t.notFound.title}
          </h2>
          <p className="text-gray-600 mb-8">
            {t.notFound.message}
          </p>
          <Link
            to="/"
            className="inline-block bg-[#FF7F2A] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#E06C1F] transition-colors duration-300"
          >
            {t.notFound.backHome}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default NotFound;
