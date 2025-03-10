import { useLanguage } from "../hooks/useLanguage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function TermsOfUse() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header showAppLinks={true} showNavigation={true} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">

        <h1 className="text-[40px] font-bold text-center text-[#FF7F2A] mb-8">
          {currentLanguage === 'en' ? 'TERMS OF USE' : 'CONDITIONS GÉNÉRALES D\'UTILISATION'}
        </h1>

        <div className="prose prose-lg max-w-none">
          <div className="prose prose-lg max-w-none">
            {currentLanguage === 'en' ? (
              <>
                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">1. Acceptance of Terms</h2>
                <p className="mb-6">
                  By accessing and using the Zepargn application and services, you agree to be bound by these Terms of Use,
                  all applicable laws and regulations, and agree that you are responsible for compliance with any applicable
                  local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this application.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. Description of Services</h2>
                <p className="mb-6">
                  Zepargn provides a digital savings platform that allows users to set savings goals, track progress,
                  and manage their financial objectives. Our services include personal savings, group savings, and guardian-protected
                  savings features, accessible via mobile applications and web interfaces.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. User Accounts</h2>
                <p className="mb-6">
                  To use certain features of the Zepargn platform, you must register for an account. You agree to provide
                  accurate, current, and complete information during the registration process and to update such information
                  to keep it accurate, current, and complete. You are responsible for safeguarding your password and for all
                  activities that occur under your account.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Financial Transactions</h2>
                <p className="mb-6">
                  Zepargn facilitates financial transactions through third-party payment processors. By using our services,
                  you agree to comply with the terms and conditions of these payment processors. Zepargn is not responsible
                  for any issues arising from payment processing services outside our direct control.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">5. Modifications to Terms</h2>
                <p className="mb-6">
                  Zepargn reserves the right to modify these Terms of Use at any time. We will notify users of any significant
                  changes. Your continued use of the platform following the posting of changes constitutes your acceptance of those changes.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">6. Limitation of Liability</h2>
                <p className="mb-6">
                  Zepargn shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages
                  resulting from your access to or use of, or inability to access or use, the services or any content provided
                  on or through the services.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">7. Governing Law</h2>
                <p className="mb-6">
                  These Terms shall be governed by and construed in accordance with the laws of the countries where Zepargn
                  operates, without regard to its conflict of law provisions.
                </p>

                <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">8. Contact Information</h2>
                <p className="mb-6">
                  If you have any questions about these Terms, please contact us at support@zepargn.com.
                </p>

                <p className="text-sm text-gray-600 mt-8">
                  Last updated: March 10, 2025
                </p>
              </>
            ) : (
              <>
                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PREAMBULE</h2>
                <p>La société Digitall Elevate S.A.S a développé une solution numérique dénommée "Zepargn", sous la forme d'application et de site internet.</p>
                <p>La solution numérique propose trois services majeurs à savoir :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>la gestion d'épargne ;</li>
                  <li>l'éducation financière et conseils financiers</li>
                  <li>Gamification ;</li>
                </ul>
                <p>Les services offerts par la société Digitall Elevate S.A.S via "Zepargn", y compris dans leurs différentes déclinaisons, ne sont en aucun cas et ne peuvent en aucun cas être considérés comme des services bancaires, de tontine, ni d'émission ou de distribution de monnaie électronique.</p>
                <p>Dans le cadre du fonctionnement, de l'utilisation et de l'exploitation de Zepargn, les présentes conditions générales d'utilisation sont édictées à l'attention de tout utilisateur appelé à profiter de Zepargn et des services offerts.</p>
                <p>Les dispositions des présentes conditions générales s'appliquent à toute utilisation de Zepargn, indépendamment du territoire de l'utilisateur.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DÉFINITIONS</h2>
                <p>La présente clause a pour objet de définir les différents termes essentiels des Conditions Générales d'Utilisation :</p>
                <p><strong>Utilisateur :</strong> ce terme désigne toute personne qui utilise le site ou l'un des services proposés par le site.</p>
                <p><strong>Editeur :</strong> ce terme désigne la société Digitall Elevate S.AS.U, propriétaire de Zepargn</p>
                <p><strong>Contenu utilisateur :</strong> ce sont les données transmises par l'Utilisateur au sein du site.</p>
                <p><strong>Zepargn :</strong> solution numérique sous la forme d'application ou de site internet offrant les services de gestion d'épargne, d'éducation financière et de conseils financiers, et de gamification.</p>
                <p><strong>Identifiant et mot de passe :</strong> c'est l'ensemble des informations nécessaires à l'identification d'un Utilisateur sur la plateforme Zepargn (site ou application). L'identifiant et le mot de passe permettent à l'Utilisateur d'accéder à son compte utilisateur. Le mot de passe est confidentiel.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">OBJET</h2>
                <p>Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l'utilisation de Zepargn, par l'utilisateur.</p>
                <p>Ce contrat est conclu entre :</p>
                <p>La société Digitall Elevate S.A.S, inscrite au RCCM sous le numéro, dont le siège social est sis à Fidjrossè centre, lot n°1756, maison ADEOTI ARIYO, représentée par son Président, Lawal Adechina ALAO, et</p>
                <p>Toute personne physique ou morale souhaitant accéder à Zepargn ci-après appelé « l'Utilisateur ».</p>
                <p>Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et tant son accès à Zepargn que l'utilisation d'un des services proposés par Zepargn, vaut acceptation de ces conditions.</p>
                <p>En cas de non-acceptation des conditions générales d'utilisation stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par Zepargn.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">MENTIONS LÉGALES</h2>
                <p>Zepargn est édité et réalisé par la société Digitall Elevate S.A.S, inscrit au RCCM sous le numéro, dont le siège social est sis à Fidjrossè centre, lot n°1756, maison ADEOTI ARIYO, représentée par son Président, Lawal Adechina ALAO, numéro de téléphone : +229 0161382869</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">ACCÈS AUX SERVICES</h2>
                <p>L'Utilisateur de Zepargn a accès aux services suivants :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Création de compte Zepargn ;</li>
                  <li>Épargne individuelle ;</li>
                  <li>Épargne en groupe ;</li>
                  <li>Hébergement et sécurisation de fonds via des partenaires agréés ;</li>
                  <li>Education financière ;</li>
                  <li>Conseils financiers ;</li>
                  <li>Gestion d'épargne ;</li>
                  <li>Support clients ;</li>
                  <li>Et tous autres services en lien avec l'objet de Zepargn.</li>
                </ul>
                <p>Tout utilisateur ayant accès à internet peut accéder gratuitement et en tout lieu à Zepargn. Les frais supportés par l'utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'éditeur.</p>
                <p>Pour certains services, avant toute demande, l'Utilisateur doit créer un compte Zepargn.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">RESPONSABILITÉ DE L'UTILISATEUR</h2>
                <p>L'Utilisateur est responsable des risques liés à l'utilisation de son identifiant de connexion et de son mot de passe.</p>
                <p>Le mot de passe de l'Utilisateur doit rester secret. En cas de divulgation de mot de passe, la société Digitall Elevate S.A.S.U décline toute responsabilité.</p>
                <p>L'utilisateur assume l'entière responsabilité de l'utilisation qu'il fait des informations et contenus présents sur Zepargn.</p>
                <p>Tout usage des services Zepargn par l'utilisateur ayant directement ou indirectement pour conséquence des dommages soit à l'encontre d'un autre utilisateur soit de l'éditeur, doit faire l'objet d'une indemnisation au profit de la victime des dommages, conformément à la législation en vigueur.</p>
                <p>L'utilisateur est exclusivement responsable de l'épargne en groupe à laquelle il consent de participer, sans qu'il ne puisse être recherché une quelconque responsabilité de l'éditeur.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">RESPONSABILITÉ DE L'ÉDITEUR</h2>
                <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">En matière de fonctionnement des épargnes</h3>
                <p>L'éditeur s'engage, en ce qui concerne l'épargne individuelle ou personnelle, à :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>créer et effectuer un suivi d'objectifs personnels de l'utilisateur ;</li>
                  <li>produire, à l'utilisateur, un historique des dépôts, transactions et retraits sur son compte Zepargn ;</li>
                  <li>sécuriser les fonds de l'utilisateur ;</li>
                  <li>appliquer des règles et processus de retrait flexibles ;</li>
                  <li>plafonner, à 5.000.000, le montant maximal des fonds à héberger sur le compte Zepargn de l'utilisateur ;</li>
                  <li>préserver la confidentialité des données personnelles et l'état du compte Zepargn de l'utilisateur, dans les limites des exigences légales et réglementaires.</li>
                  <li>reverser à l'utilisateur la totalité des sommes figurant sur son compte, et dans les délais légaux ou réglementaires, sur demande de celui-ci (sont autorisés uniquement pour reversement, 1000 FCFA minimum pour les épargnes individuelles et 5000 FCFA minimum pour les épargnes en groupe).</li>
                </ul>

                <p>L'éditeur s'engage, en ce qui concerne l'épargne en groupe, à :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>mettre en place un mécanisme permettant à l'utilisateur, qui en prend l'initiative, de créer un groupe d'épargne en commun. Ce dernier est dénommé l'administrateur du groupe ;</li>
                  <li>fournir à l'utilisateur qui désire participer à ou rejoindre un groupe d'épargne en commune, les informations sur l'administrateur et sur les utilisateurs, membre du groupe ;</li>
                  <li>communiquer à tous les participants de l'épargne en groupe, les informations complètes sur l'état des fond collectés ainsi que sur la contributions de chacun, et en assure la totale transparence ;</li>
                  <li>plafonner à 50.000.000 le montant maximal des fonds à héberger sur le compte d'épargne en groupe ;</li>
                  <li>n'endosser aucune responsabilité en ce qui concerne la gestion et l'organisation interne de l'épargne en groupe ;</li>
                  <li>à mettre à la disposition de l'utilisateur, des contenus pédagogiques sur la gestion financière et l'épargne.</li>
                </ul>

                <p>Nonobstant ce qui précède, l'épargne en groupe est soumise aux règles ci-après :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>la création ou la participation à une épargne en groupe est faite indépendamment de la volonté et de la responsabilité de l'éditeur ;</li>
                  <li>L'utilisateur consent librement à souscrire à une épargne en groupe ;</li>
                  <li>l'épargne en groupe n'est pas constitutive de tontine, conformément à la législation en vigueur en République du Bénin. Elle consiste, pour les utilisateurs participants, à mettre des fonds en commun en vue de la réalisation d'un objectif commun (exemples : capital pour entreprise, cotiser pour un voyage, cotiser pour offrir un cadeau etc..) ;</li>
                  <li>les fonds collectés par les participants de l'épargne en groupe sont la propriété commune de tous les participants ;</li>
                  <li>Seul l'administrateur est admis à retirer la totalité des fonds de l'épargne en groupe.</li>
                  <li>En cas de demande de retrait par l'administrateur, tous les autres participants reçoivent une notification de retrait, avec l'option d'y faire opposition ;</li>
                  <li>En cas d'opposition de la moitié ou plus du nombre des participants de l'épargne en groupe, la demande de retrait est rejetée et l'éditeur procède au reversement des fonds à la contribution de chaque utilisateur, sur leur compte épargne individuel respectif ;</li>
                  <li>tout utilisateur qui participe à une épargne en groupe a le droit de demander un retrait du groupe. Son retrait emporte le reversement de sa contribution sur son épargne individuelle ;</li>
                  <li>Le retrait de tout participant d'un groupe par l'administrateur de ce groupe emporte le reversement de sa contribution sur son épargne individuelle ou sur son moyen de paiement de préférence.</li>
                </ul>
                <p>L'utilisateur qui s'engage à créer, participer ou rejoindre une épargne en groupe est réputé avoir consenti aux règles ci-dessus.</p>

                <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">En matière de sécurité des fonds</h3>
                <p>Hormis le cas des épargnes en groupe, le dépôt par l'utilisateur de ses fonds sur son compte individuel Zepargn, fait de lui le créancier de l'éditeur, à hauteur du montant déposé.</p>
                <p>L'éditeur garantit à l'utilisateur de Zepargn, la sécurité et la disponibilité de ses fonds.</p>
                <p>En conséquence, et sous réserve de l'observation des délais de transaction appliqués par les partenaires chargés de l'hébergement des fonds, l'utilisateur a le droit à tout moment de demander et d'obtenir la restitution de ses fonds.</p>
                <p>En cas de refus de restitution des fonds, l'utilisateur dispose du droit d'engager, contre l'éditeur, toute poursuite judiciaire en vue de l'obtention de ses fonds, sans préjudice des dommages et intérêts auxquels il peut prétendre.</p>

                <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">En matière de dysfonctionnement de Zepargn</h3>
                <p>Tout dysfonctionnement du serveur, du réseau, de l'application ou site internet Zepargn, ne peut engager la responsabilité de la société Digitall Elevate S.A.S.U.</p>
                <p>De même, la responsabilité de l'éditeur ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.</p>
                <p>Zepargn s'engage à mettre en œuvre tous les moyens nécessaires pour garantir son bon fonctionnement, la sécurité et la confidentialité des données.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PROPRIÉTÉ INTELLECTUELLE</h2>
                <p>Les contenus de Zepargn (logos, textes, éléments graphiques, vidéos, etc.) sont protégés par le droit d'auteur, en vertu des dispositions de la loi n° 2005-30 du 10 avril 2006 relative à la protection des droits d'auteurs et des droits voisins en République du Bénin et du Code du Numérique en ses articles 529 et suivants portant sur l'atteinte aux droits de la propriété intellectuelle et industrielle.</p>
                <p>Ils sont la propriété exclusive de la République du Bénin à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou auteurs. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par écrit de l'éditeur.</p>
                <p>L'utilisateur est entièrement responsable de tout contenu qu'il met en ligne et il s'engage à ne pas porter atteinte à un tiers.</p>
                <p>L'éditeur se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis en ligne par les utilisateurs, et ce sans justification.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DONNÉES PERSONNELLES</h2>
                <p>L'utilisateur doit obligatoirement fournir des informations personnelles et nécessaires pour procéder à son inscription sur Zepargn.</p>
                <p>L'adresse électronique (e-mail) de l'utilisateur pourra notamment être utilisée par Zepargn, pour la communication d'informations diverses et la gestion de son compte.</p>
                <p>La société Digitall Elevate S.A.S.U garantit le respect de la vie privée de l'utilisateur, conformément à la loi portant Code du Numérique en République du Bénin au livre 5 sur la protection des données à caractère personnel et conformément à la Politique de Confidentialité.</p>
                <p>Zepargn est déclaré auprès de l'Autorité de Protection des Données Personnelles (APDP).</p>
                <p>L'Utilisateur consent au traitement de ses données à caractère personnel communiquées sur Zepargn et autorise l'éditeur à communiquer au besoin à ses partenaires et toute personne concernée dans le cadre du fonctionnement de Zepargn.</p>
                <p>En vertu des articles du code du Numérique en vigueur en République du Bénin, l'Utilisateur dispose d'un droit d'accès, d'interrogation, de rectification et de suppression, d'opposition de ses données personnelles, d'introduire une réclamation auprès de l'APDP etc.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">EVOLUTION DU CONTENU DES CONDITIONS GÉNÉRALES D'UTILISATION</h2>
                <p>L'éditeur se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification. De ce fait, les conditions applicables seront celles disponibles sur Zepargn.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DURÉE</h2>
                <p>Les présentes Conditions Générales d'Utilisation sont conclues pour une durée indéterminée. Elles produisent leurs effets à l'égard de l'utilisateur à compter du début de l'utilisation de Zepargn.</p>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PRÉLÈVEMENT</h2>
                <p>Les services Zepargn sont payés par l'Utilisateur sous forme de frais prélevés par l'éditeur comme suit :</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>2% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn via MTN Mobile Money Bénin, Moov money Bénin, Celtis Cash ;</li>
                  <li>3,5% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn, via une carte bancaire ;</li>
                  <li>0,5% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn via un moyen de paiement depuis un pays autre que le Bénin en plus des frais facturés par l'agrégateur de paiement ;</li>
                  <li>5% du montant à retirer au moment du retrait, lorsque le retrait intervient avant la fin de l'objectif de l'épargne auquel l'utilisateur a souscrit.</li>
                </ul>

                <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DROIT APPLICABLE ET JURIDICTION COMPETENTE</h2>
                <p>Le présent contrat est soumis au droit béninois.</p>
                <p>A défaut d'un règlement à l'amiable entre l'utilisateur et la société Digitall Elevate S.A.S.U, le Tribunal de commerce de Cotonou sera compétent pour connaître de tout litige survenu de l'interprétation ou de l'exécution des présentes conditions générales.</p>

                <p className="text-sm text-gray-600 mt-8">
                  Dernière mise à jour : 10 mars 2025
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default TermsOfUse;
