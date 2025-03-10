import { useLanguage } from "../hooks/useLanguage";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function PrivacyPolicy() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header showAppLinks={true} showNavigation={true} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center mb-8">
          <Link to="/" className="flex items-center text-[#394E5E] hover:text-[#FF7F2A]">
            <ArrowLeft size={20} className="mr-2" />
            <span>{currentLanguage === 'en' ? 'Back to Home' : 'Retour à l\'accueil'}</span>
          </Link>
        </div>

        <h1 className="text-[40px] font-bold text-center text-[#FF7F2A] mb-8">
          {currentLanguage === 'en' ? 'PRIVACY POLICY' : 'POLITIQUE DE CONFIDENTIALITÉ'}
        </h1>

        <div className="prose prose-lg max-w-none">
          {currentLanguage === 'en' ? (
            <>
              <p className="mb-6">
                At Zepargn, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our mobile application and services.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">1. Information We Collect</h2>
              <p className="mb-6">
                We collect several types of information from and about users of our application, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Personal identifiers such as name, phone number, and email address</li>
                <li>Financial information necessary to provide our services</li>
                <li>Usage data about how you interact with our application</li>
                <li>Device information including IP address, device type, and operating system</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. How We Use Your Information</h2>
              <p className="mb-6">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send notifications related to your account and activity</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Protect against unauthorized access and fraudulent activity</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. Data Security</h2>
              <p className="mb-6">
                We implement appropriate technical and organizational measures to protect your personal data against
                unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of
                transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Third-Party Services</h2>
              <p className="mb-6">
                Our application may use third-party services such as payment processors and analytics providers. These
                third parties may have access to your information only to perform specific tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">5. Your Rights</h2>
              <p className="mb-6">
                Depending on your location, you may have certain rights regarding your personal data, including:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>The right to access personal data we hold about you</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your data</li>
                <li>The right to restrict or object to processing</li>
                <li>The right to data portability</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">6. Children's Privacy</h2>
              <p className="mb-6">
                Our services are not intended for use by children under the age of 18. We do not knowingly collect
                personal information from children under 18. If we become aware that we have collected personal information
                from a child under 18, we will take steps to delete that information.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">7. Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">8. Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at privacy@zepargn.com.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: March 10, 2025
              </p>
            </>
          ) : (
            <>
              <p className="mb-6">
                Chez Zepargn, nous prenons votre vie privée au sérieux. Cette Politique de Confidentialité explique comment
                nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous utilisez notre application
                mobile et nos services.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">1. Informations que nous collectons</h2>
              <p className="mb-6">
                Nous collectons plusieurs types d'informations auprès des utilisateurs de notre application, notamment :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Des identifiants personnels tels que le nom, le numéro de téléphone et l'adresse e-mail</li>
                <li>Des informations financières nécessaires pour fournir nos services</li>
                <li>Des données d'utilisation sur la façon dont vous interagissez avec notre application</li>
                <li>Des informations sur l'appareil, y compris l'adresse IP, le type d'appareil et le système d'exploitation</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. Comment nous utilisons vos informations</h2>
              <p className="mb-6">
                Nous utilisons les informations que nous collectons pour :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Fournir, maintenir et améliorer nos services</li>
                <li>Traiter les transactions et envoyer les informations connexes</li>
                <li>Envoyer des notifications liées à votre compte et à votre activité</li>
                <li>Répondre à vos demandes et fournir un support client</li>
                <li>Surveiller et analyser les modèles d'utilisation et les tendances</li>
                <li>Protéger contre les accès non autorisés et les activités frauduleuses</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. Sécurité des données</h2>
              <p className="mb-6">
                Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données
                personnelles contre le traitement non autorisé ou illégal, la perte accidentelle, la destruction ou les
                dommages. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est sécurisée
                à 100%, et nous ne pouvons garantir une sécurité absolue.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Services tiers</h2>
              <p className="mb-6">
                Notre application peut utiliser des services tiers tels que des processeurs de paiement et des fournisseurs
                d'analyse. Ces tiers peuvent avoir accès à vos informations uniquement pour effectuer des tâches spécifiques
                en notre nom et sont tenus de ne pas les divulguer ou les utiliser à d'autres fins.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">5. Vos droits</h2>
              <p className="mb-6">
                Selon votre emplacement, vous pouvez avoir certains droits concernant vos données personnelles, notamment :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Le droit d'accéder aux données personnelles que nous détenons à votre sujet</li>
                <li>Le droit de demander la correction de données inexactes</li>
                <li>Le droit de demander la suppression de vos données</li>
                <li>Le droit de restreindre ou de vous opposer au traitement</li>
                <li>Le droit à la portabilité des données</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">6. Confidentialité des enfants</h2>
              <p className="mb-6">
                Nos services ne sont pas destinés à être utilisés par des enfants de moins de 18 ans. Nous ne collectons
                pas sciemment d'informations personnelles auprès d'enfants de moins de 18 ans. Si nous apprenons que nous
                avons collecté des informations personnelles d'un enfant de moins de 18 ans, nous prendrons des mesures
                pour supprimer ces informations.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">7. Modifications de cette politique de confidentialité</h2>
              <p className="mb-6">
                Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de
                tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour
                la date de "Dernière mise à jour".
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">8. Nous contacter</h2>
              <p className="mb-6">
                Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à
                privacy@zepargn.com.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Dernière mise à jour : 10 mars 2025
              </p>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default PrivacyPolicy;
