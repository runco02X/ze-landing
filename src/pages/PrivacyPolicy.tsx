import { useLanguage } from "../hooks/useLanguage";
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
                La présente politique de confidentialité est rédigée conformément à l'obligation
                d'information incombant au responsable de traitement prévu à l'article 415,
                figurant au cinquième livre du code du numérique applicable en République du
                Bénin, relatif à la Protection des Données à caractère personnel.
              </p>
              <p className="mb-6">
                Elle vous aide à comprendre quelles données personnelles nous collectons et
                traitons à travers la plateforme numérique "Zépargn", les finalités visées ainsi que
                les dispositions qui ont été prises aux fins de respecter la législation en vigueur en
                République du Bénin en matière de protection des données personnelles et de la
                vie privée, et mentionne la preuve de l'accomplissement des formalités préalables
                auprès de l'Autorité de Protection des Données Personnelles (APDP) (article 405
                du Code numérique).
              </p>
              <p className="mb-6">
                En fournissant vos Données Personnelles lors des requêtes sur la plateforme
                "Zépargn" pour souscrire à l'un ou l'autre des services qui y sont proposés, vous
                déclarez que vous avez pris connaissance de la présente politique de
                confidentialité et que vous y consentez expressément, ainsi qu'au traitement de
                vos Données Personnelles. Veuillez donc lire attentivement cette Politique de
                confidentialité qui nous engage.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">1. Responsabilité du traitement</h2>
              <p className="mb-6">
                Le responsable du traitement de vos Données Personnelles est la société Digitall
                Elevate S.A.S représentée par son Président, Monsieur Lawal Adéchina ALAO.
              </p>
              <p className="mb-6">
                Contact : +229 0161382869
                <br />
                Email : lawal@zepargn.com
              </p>
              <p className="mb-6">
                Le responsable du traitement prend toutes les mesures nécessaires pour assurer
                la sécurité de vos données et respecter les obligations légales en matière de
                données personnelles. Ils s'engagent fermement à respecter un ensemble des
                prescriptions légales, dont celles ci-après, afin de garantir le respect de la
                confidentialité de l'ensemble des données vous concernant.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>Engagement de transparence : nous détaillons tout au long de ce
                  document la manière dont sont obtenues, stockées et traitées les
                  différentes données vous concernant.</li>
                <li>Engagement de sécurisation : des mesures techniques et opérationnelles
                  de sécurisation répondant aux standards du secteur sont appliquées à tous
                  les niveaux de traitement de l'information, qu'il s'agisse de la collecte, du
                  stockage, ou des sauvegardes.</li>
                <li>Engagement de non-diffusion : aucune donnée ne fait l'objet de diffusion
                  automatisée auprès de prestataires ou de tiers. Certaines informations
                  pourront néanmoins être publiées et diffusées dans la stricte limite des
                  besoins liés aux transactions effectuées via la plateforme numérique
                  "Zépargn".</li>
                <li>Engagement de respect des droits des personnes concernées : les droits
                  permettant l'accès en consultation, rectification et suppression de certaines
                  de vos données personnelles et export de leur ensemble sont assurés.</li>
                <li>Engagement de respect des législations : le système d'information est en
                  conformité avec les législations en matière de protection des données.</li>
              </ul>

              <p className="mb-6">
                Nous avons mis en place des mesures de sécurité technique et organisationnelle
                appropriées, pour éviter la destruction, la perte, la falsification, la modification,
                l'accès non autorisé ou la notification erronée à des tiers, des Données
                Personnelles collectées ainsi que tout autre traitement non autorisé de ces
                données.
              </p>
              <p className="mb-6">
                Nous garantissons un niveau de protection suffisant en rendant les obligations
                applicables aux collaborateurs.
              </p>
              <p className="mb-6">
                Cependant, vous êtes seul responsable de l'utilisation faite à partir de la
                plateforme "Zépargn" de votre ordinateur, de votre téléphone, de votre adresse IP
                et de vos données d'identification, ainsi que de leur confidentialité. Vous devez à
                tout moment respecter les règles de sécurité, notamment en empêchant tout
                accès non autorisé à votre login et code.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. Formalités préalables</h2>
              <p className="mb-6">
                Conformément aux articles 405 et 407 du Code du Numérique, la collecte et le
                traitement des données personnelles sont subordonnés à l'accomplissement de
                formalités préalables. Il peut s'agir selon la catégorie de données concernées, de
                la déclaration de traitement des données ou de la demande d'autorisation de
                traitement auprès de l'Autorité de Protection des Données Personnelles.
              </p>
              <p className="mb-6">
                Les traitements contenus dans cette politique ont fait l'objet de formalités
                préalables adéquates par la Société Digitall Elevate S.A.S, auprès de l'Autorité de
                Protection des Données Personnelles (APDP).
              </p>
              <p className="mb-6">
                Vous pouvez contacter l'Autorité et vérifier les termes de la présente déclaration
                par le biais des coordonnées suivantes :
                <br />
                Rue 6.076 «Aïdjèdo, Immeuble El MARZOUK Joël»
                <br />
                01 BP : 04837 Cotonou
                <br />
                +229 21 32 57 88 / 69 55 00 00
                <br />
                contact@apdp.bj www.apdp.bj
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. Les données personnelles objet du traitement</h2>
              <p className="mb-6">
                Les données collectées par les usagers de la plateforme numérique "Zépargn"
                sont :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>nom, prénoms, date et lieu de naissance, adresse, informations de votre
                  carte d'identité, sexe, adresse e-mail, numéro de téléphone, photo
                  d'identité, informations financières de votre compte épargne Zepargn</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Les opérations effectuées</h2>
              <p className="mb-6">
                La société Digitall Elevate S.A.S ne collecte des informations personnelles
                relatives aux usagers et aux prestataires que pour le besoin exclusif de services
                proposés par elle-même.
              </p>
              <p className="mb-6">
                Les informations recueillies font l'objet de traitements soit électronique soit
                manuel destinés à l'atteinte des finalités ci-dessous mentionnées.
              </p>
              <p className="mb-6">
                Les traitements opérés sont :
                <br />
                La collecte ; le développement ; l'exposition et l'affichage ; la conservation ; la
                copie ; l'exploitation ; l'enregistrement ; l'adaptation ; la modification ; l'extraction ;
                la sauvegarde ; la consultation ; l'utilisation ; la communication par transmission ;
                la diffusion ou toute autre forme de mise à disposition ; la structuration ; le
                rapprochement ou l'interconnexion ; la limitation ; le cryptage ; le traitement
                automatisé ; l'effacement ; la destruction ; l'organisation ;
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">5. La/les finalité(s) du/des traitement(s)</h2>
              <p className="mb-6">
                Les informations sont collectées pour les finalités suivantes :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>L'assistance et le support des usagers de Zepargn ;</li>
                <li>La fourniture d'informations sur les services aux usagers de Zepargn ;</li>
                <li>La proposition des offres et services de Zepargn ;</li>
                <li>La création et la gestion de compte d'utilisateur Zepargn ;</li>
                <li>La création et la gestion de compte d'épargne Zepargn l'utilisateur ;</li>
                <li>L'hébergement de fonds sur le compte d'épargne Zepargn de l'utilisateur ;</li>
                <li>Le retrait, le dépôt, le transfert de fonds sur le compte d'épargne Zepargn
                  de l'utilisateur ;</li>
                <li>Le suivi et l'orientation de l'utilisateur ;</li>
                <li>etc.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">6. Destinataires des Données personnelles (communication et transfert)</h2>
              <p className="mb-6">
                Les destinataires de ces données sont les services internes de la société Digitall
                Elevate S.A.S suivants :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Le support de Zépargn ;</li>
                <li>le Président de la société Digitall Elevates S.A.S, Lawal Adéchina ALAO ;</li>
              </ul>
              <p className="mb-6">
                Aucune donnée ne sera transmise à un tiers, en dehors des partenaires agréés via
                lesquels s'effectue l'hébergement de vos fonds. Toutefois, nous pourrions être
                appelés à communiquer les données à des personnes habilitées en raison
                d'obligations légales, réglementaires et judiciaires.
              </p>
              <p className="mb-6">
                En tout état de cause, la société Digitall Elevate S.A.S ne vendra pas, ne louera
                pas, ne distribuera pas ou ne rendra pas vos Données Personnelles
                commercialement accessibles à des tiers, sauf dans les cas décrits ci-dessus ou
                avec votre consentement préalable.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">7. Durée du traitement, conservation et stockage</h2>
              <p className="mb-6">
                Les Données Personnelles sont conservées pour une durée n'excédant pas les fins
                en vue desquelles elles ont été recueillies et traitées par la société Digitall
                Elevate S.A.S.
              </p>
              <p className="mb-6">
                Conformément aux dispositions légales, les données personnelles traitées
                pourront être conservées au-delà du délai ci-dessus pour des fins archivistiques,
                de statistiques, scientifiques en tenant compte des mesures techniques et
                organisationnelles requises telles que l'anonymisation, le chiffrement, la
                pseudonymisation, etc.
              </p>
              <p className="mb-6">
                Les Données Personnelles sont conservées et stockées comme suit :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Les données sous forme de papier : Bénin, dans les locaux de la société
                  Digitall Elevate S.A.S ;</li>
                <li>Les données sous forme électronique : Bénin, sur les ordinateurs de la
                  société, les salles serveurs locaux, les serveurs base de données US, et le
                  centre de données national</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">8. Les droits des personnes concernées à propos des traitements</h2>
              <p className="mb-6">
                Le Code du Numérique vous donne sur vos données personnelles des droits. Dans
                le cadre des activités de traitements au sein de la Société Digitall Elevate S.A.S, les
                droits suivants peuvent être exercés selon le traitement concerné :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>droit d'accès aux informations collectées ;</li>
                <li>droit d'interrogation ;</li>
                <li>droit de modification;</li>
                <li>droit de rectification ;</li>
                <li>droit d'opposition au traitement ;</li>
                <li>droit de suppression de données ;</li>
                <li>droit à l'oubli;</li>
                <li>droit à réparation.</li>
              </ul>
              <p className="mb-6">
                Vous pouvez consulter la définition de ces droits dans le Code du Numérique en
                vigueur en République du Bénin.
              </p>
              <p className="mb-6">
                Vous pouvez exercer vos droits en écrivant au Président de la Société Digitall
                Elevate S.A.S au +22961382869 (contact), soit par e-mail : lawal@zepargn.com, soit
                par lettre aux adresses ci-après :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Monsieur le Président de Zepargn, lot 1756 Fidjrossè centre</li>
              </ul>
              <p className="mb-6">
                Nous garantissons une réponse à vos demandes en moyenne dans un délai d'un
                (01) mois à compter de la date de dépôt.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">9. Plaintes</h2>
              <p className="mb-6">
                Vous avez le droit de déposer une plainte auprès de l'Autorité de Protection des
                Données Personnelles.
              </p>
              <p className="mb-6">
                La plainte est :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>déposée au siège de l'Institution Rue 6.076 Aïdjèdo Cotonou</li>
                <li>adressée (mail uniquement) à l'adresse : contact@apdp.bj</li>
              </ul>
              <p className="mb-6">
                Ceci est sans préjudice d'un recours devant un tribunal compétent.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">10. Droit applicable</h2>
              <p className="mb-6">
                Les modalités de stockage et de traitement des Données Personnelles ainsi que la
                responsabilité du responsable du traitement, et tous autres droits et obligations
                liés aux Données Personnelles sont soumis au Droit Béninois, en particulier à la
                Loi n° 2017-20 du 20 avril 2018 portant Code du numérique en République du
                Bénin.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Dernière mise à jour : 7 mars 2025
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
