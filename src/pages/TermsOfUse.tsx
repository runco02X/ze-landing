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
          {currentLanguage === 'en' ? (
            <>
              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PREAMBLE</h2>
              <p className="mb-4">Digitall Elevate S.A.S has developed a digital solution called "Zepargn", available as both an application and a website.</p>
              <p className="mb-4">The digital solution offers three major services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>savings management;</li>
                <li>financial education and financial advice;</li>
                <li>gamification;</li>
              </ul>
              <p className="mb-4">The services offered by Digitall Elevate S.A.S via "Zepargn", including in their various forms, are not and cannot under any circumstances be considered as banking services, tontine services, or as issuing or distributing electronic money.</p>
              <p className="mb-4">In the context of the operation, use, and exploitation of Zepargn, these general terms of use are established for any user seeking to benefit from Zepargn and the services offered.</p>
              <p className="mb-4">The provisions of these general terms apply to any use of Zepargn, regardless of the user's territory.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DEFINITIONS</h2>
              <p className="mb-4">This clause aims to define the various essential terms of the General Terms of Use:</p>
              <p className="mb-4"><strong>User:</strong> this term refers to any person who uses the site or any of the services offered by the site.</p>
              <p className="mb-4"><strong>Publisher:</strong> this term refers to Digitall Elevate S.A.S.U, owner of Zepargn.</p>
              <p className="mb-4"><strong>User Content:</strong> this refers to the data transmitted by the User within the site.</p>
              <p className="mb-4"><strong>Zepargn:</strong> digital solution in the form of an application or website offering savings management, financial education and financial advice, and gamification services.</p>
              <p className="mb-4"><strong>Username and password:</strong> this is all the information necessary for the identification of a User on the Zepargn platform (site or application). The username and password allow the User to access their user account. The password is confidential.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PURPOSE</h2>
              <p className="mb-4">These "general terms of use" aim to provide a legal framework for the use of Zepargn by the user.</p>
              <p className="mb-4">This contract is concluded between:</p>
              <p className="mb-4">Digitall Elevate S.A.S, registered with the RCCM under the number, with its headquarters at Fidjrossè centre, lot n°1756, ADEOTI ARIYO house, represented by its President, Lawal Adechina ALAO, and</p>
              <p className="mb-4">Any natural or legal person wishing to access Zepargn, hereinafter referred to as "the User".</p>
              <p className="mb-4">The general terms of use must be accepted by any User, and both their access to Zepargn and the use of any of the services offered by Zepargn constitutes acceptance of these terms.</p>
              <p className="mb-4">In case of non-acceptance of the general terms of use stipulated in this contract, the User must refrain from accessing the services offered by Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">LEGAL NOTICE</h2>
              <p className="mb-4">Zepargn is published and developed by Digitall Elevate S.A.S, registered with the RCCM under the number, with its headquarters at Fidjrossè centre, lot n°1756, ADEOTI ARIYO house, represented by its President, Lawal Adechina ALAO, phone number: +229 0161382869</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">ACCESS TO SERVICES</h2>
              <p className="mb-4">The User of Zepargn has access to the following services:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Creation of a Zepargn account;</li>
                <li>Individual savings;</li>
                <li>Group savings;</li>
                <li>Hosting and securing funds via approved partners;</li>
                <li>Financial education;</li>
                <li>Financial advice;</li>
                <li>Savings management;</li>
                <li>Customer support;</li>
                <li>And all other services related to the purpose of Zepargn.</li>
              </ul>
              <p className="mb-4">Any user with internet access can access Zepargn for free from any location. The costs incurred by the user to access it (internet connection, computer equipment, etc.) are not the responsibility of the publisher.</p>
              <p className="mb-4">For the creation of a user account, the following services are not accessible to the User until they are logged in:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Individual savings;</li>
                <li>Group savings;</li>
                <li>Hosting and securing funds via approved partners;</li>
                <li>Savings management;</li>
              </ul>
              <p className="mb-4">Notwithstanding the foregoing, group savings are subject to the following rules:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>the creation of or participation in group savings is done independently of the will and responsibility of the publisher;</li>
                <li>The user freely consents to subscribe to group savings;</li>
                <li>group savings do not constitute a tontine, in accordance with the legislation in force in the Republic of Benin. It consists, for participating users, of pooling funds for the achievement of a common goal (examples: capital for a business, contributing to a trip, contributing to offer a gift, etc.);</li>
                <li>the publisher cannot be held responsible for failures, shortcomings, or any other fact that may be attributed to any of the participants in group savings;</li>
                <li>the publisher is not a party to group savings and cannot be held responsible for the consequences of group savings;</li>
                <li>participants in group savings are solely responsible for the consequences of their participation in group savings;</li>
                <li>the publisher cannot be held responsible for the use of funds saved in a group;</li>
                <li>participants in group savings are solely responsible for the use of funds saved in a group;</li>
              </ul>
              <p className="mb-4">The publisher strives to allow access to the site 24 hours a day, 7 days a week, except in cases of maintenance or force majeure. In the event of inability to access the service, the publisher undertakes to do its utmost to restore access to the service and will endeavor to communicate the dates and times of the intervention to users in advance.</p>
              <p className="mb-4">Being subject only to an obligation of means, the publisher cannot be held responsible for any damage, whatever its nature, resulting from unavailability of the service.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">INTELLECTUAL PROPERTY</h2>
              <p className="mb-4">Trademarks, logos, signs, as well as all site content (texts, images, sound...) are protected by the Intellectual Property Code and more particularly by copyright.</p>
              <p className="mb-4">The User must request prior authorization from the site for any reproduction, publication, or copy of the various contents. They commit to using the site's content strictly for private purposes; any use for commercial and advertising purposes is strictly prohibited.</p>
              <p className="mb-4">Any total or partial representation of this site by any process whatsoever, without the express authorization of the operator of the Internet site, would constitute an infringement punishable by article L 335-2 and following of the Code of intellectual property.</p>
              <p className="mb-4">It is reminded in accordance with article L122-5 of the Intellectual Property Code that the User who reproduces, copies, or publishes protected content must cite the author and their source.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PERSONAL DATA</h2>
              <p className="mb-4">The user must necessarily provide personal and necessary information to proceed with their registration on Zepargn.</p>
              <p className="mb-4">The user's email address may notably be used by Zepargn for communication of various information and account management.</p>
              <p className="mb-4">Digitall Elevate S.A.S.U guarantees respect for the user's privacy, in accordance with the law on the Digital Code in the Republic of Benin in book 5 on the protection of personal data and in accordance with the Privacy Policy.</p>
              <p className="mb-4">Zepargn is declared to the Personal Data Protection Authority (APDP).</p>
              <p className="mb-4">The User consents to the processing of their personal data communicated on Zepargn and authorizes the publisher to communicate as needed to its partners and any person concerned in the context of the operation of Zepargn.</p>
              <p className="mb-4">By virtue of the articles of the Digital Code in force in the Republic of Benin, the User has the right to access, query, rectify and delete, oppose their personal data, lodge a complaint with the APDP, etc.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">EVOLUTION OF THE CONTENT OF THE GENERAL TERMS OF USE</h2>
              <p className="mb-4">The publisher reserves the right to modify the clauses of these general terms of use at any time and without justification. As a result, the applicable conditions will be those available on Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DURATION</h2>
              <p className="mb-4">These General Terms of Use are concluded for an indefinite period. They take effect with respect to the user from the beginning of the use of Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">FEES</h2>
              <p className="mb-4">Zepargn services are paid by the User in the form of fees charged by the publisher as follows:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>2% of the amount to be saved for each deposit made by the user on their Zepargn account via MTN Mobile Money Benin, Moov money Benin, Celtis Cash;</li>
                <li>3.5% of the amount to be saved for each deposit made by the user on their Zepargn account via a bank card;</li>
                <li>0.5% of the amount to be saved for each deposit made by the user on their Zepargn account via a payment method from a country other than Benin, in addition to the fees charged by the payment aggregator;</li>
                <li>5% of the amount to be withdrawn at the time of withdrawal, when the withdrawal occurs before the end of the savings goal to which the user has subscribed.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">APPLICABLE LAW AND COMPETENT JURISDICTION</h2>
              <p className="mb-4">This contract is subject to Beninese law.</p>
              <p className="mb-4">In the absence of an amicable settlement between the user and Digitall Elevate S.A.S.U, the Commercial Court of Cotonou will be competent to hear any dispute arising from the interpretation or execution of these general terms.</p>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: March 7, 2025
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PREAMBULE</h2>
              <p className="mb-4">La société Digitall Elevate S.A.S a développé une solution numérique dénommée "Zepargn", sous la forme d'application et de site internet.</p>
              <p className="mb-4">La solution numérique propose trois services majeurs à savoir :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>la gestion d'épargne ;</li>
                <li>l'éducation financière et conseils financiers</li>
                <li>Gamification ;</li>
              </ul>
              <p className="mb-4">Les services offerts par la société Digitall Elevate S.A.S via "Zepargn", y compris dans leurs différentes déclinaisons, ne sont en aucun cas et ne peuvent en aucun cas être considérés comme des services bancaires, de tontine, ni d'émission ou de distribution de monnaie électronique.</p>
              <p className="mb-4">Dans le cadre du fonctionnement, de l'utilisation et de l'exploitation de Zepargn, les présentes conditions générales d'utilisation sont édictées à l'attention de tout utilisateur appelé à profiter de Zepargn et des services offerts.</p>
              <p className="mb-4">Les dispositions des présentes conditions générales s'appliquent à toute utilisation de Zepargn, indépendamment du territoire de l'utilisateur.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DÉFINITIONS</h2>
              <p className="mb-4">La présente clause a pour objet de définir les différents termes essentiels des Conditions Générales d'Utilisation :</p>
              <p className="mb-4"><strong>Utilisateur :</strong> ce terme désigne toute personne qui utilise le site ou l'un des services proposés par le site.</p>
              <p className="mb-4"><strong>Editeur :</strong> ce terme désigne la société Digitall Elevate S.AS.U, propriétaire de Zepargn</p>
              <p className="mb-4"><strong>Contenu utilisateur :</strong> ce sont les données transmises par l'Utilisateur au sein du site.</p>
              <p className="mb-4"><strong>Zepargn :</strong> solution numérique sous la forme d'application ou de site internet offrant les services de gestion d'épargne, d'éducation financière et de conseils financiers, et de gamification.</p>
              <p className="mb-4"><strong>Identifiant et mot de passe :</strong> c'est l'ensemble des informations nécessaires à l'identification d'un Utilisateur sur la plateforme Zepargn (site ou application). L'identifiant et le mot de passe permettent à l'Utilisateur d'accéder à son compte utilisateur. Le mot de passe est confidentiel.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">OBJET</h2>
              <p className="mb-4">Les présentes « conditions générales d'utilisation » ont pour objet l'encadrement juridique de l'utilisation de Zepargn, par l'utilisateur.</p>
              <p className="mb-4">Ce contrat est conclu entre :</p>
              <p className="mb-4">La société Digitall Elevate S.A.S, inscrite au RCCM sous le numéro, dont le siège social est sis à Fidjrossè centre, lot n°1756, maison ADEOTI ARIYO, représentée par son Président, Lawal Adechina ALAO, et</p>
              <p className="mb-4">Toute personne physique ou morale souhaitant accéder à Zepargn ci-après appelé « l'Utilisateur ».</p>
              <p className="mb-4">Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et tant son accès à Zepargn que l'utilisation d'un des services proposés par Zepargn, vaut acceptation de ces conditions.</p>
              <p className="mb-4">En cas de non-acceptation des conditions générales d'utilisation stipulées dans le présent contrat, l'Utilisateur se doit de renoncer à l'accès des services proposés par Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">MENTIONS LÉGALES</h2>
              <p className="mb-4">Zepargn est édité et réalisé par la société Digitall Elevate S.A.S, inscrit au RCCM sous le numéro, dont le siège social est sis à Fidjrossè centre, lot n°1756, maison ADEOTI ARIYO, représentée par son Président, Lawal Adechina ALAO, numéro de téléphone : +229 0161382869</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">ACCÈS AUX SERVICES</h2>
              <p className="mb-4">L'Utilisateur de Zepargn a accès aux services suivants :</p>
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
              <p className="mb-4">Tout utilisateur ayant accès à internet peut accéder gratuitement et en tout lieu à Zepargn. Les frais supportés par l'utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'éditeur.</p>
              <p className="mb-4">Pour certains services, avant toute demande, l'Utilisateur doit créer un compte Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">RESPONSABILITÉ DE L'UTILISATEUR</h2>
              <p className="mb-4">L'Utilisateur est responsable des risques liés à l'utilisation de son identifiant de connexion et de son mot de passe.</p>
              <p className="mb-4">Le mot de passe de l'Utilisateur doit rester secret. En cas de divulgation de mot de passe, la société Digitall Elevate S.A.S.U décline toute responsabilité.</p>
              <p className="mb-4">L'utilisateur assume l'entière responsabilité de l'utilisation qu'il fait des informations et contenus présents sur Zepargn.</p>
              <p className="mb-4">Tout usage des services Zepargn par l'utilisateur ayant directement ou indirectement pour conséquence des dommages soit à l'encontre d'un autre utilisateur soit de l'éditeur, doit faire l'objet d'une indemnisation au profit de la victime des dommages, conformément à la législation en vigueur.</p>
              <p className="mb-4">L'utilisateur est exclusivement responsable de l'épargne en groupe à laquelle il consent de participer, sans qu'il ne puisse être recherché une quelconque responsabilité de l'éditeur.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">RESPONSABILITÉ DE L'ÉDITEUR</h2>
              <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">1. En matière de fonctionnement des épargnes</h3>
              <p className="mb-4">L'éditeur s'engage, en ce qui concerne l'épargne individuelle ou personnelle, à :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>créer et effectuer un suivi d'objectifs personnels de l'utilisateur ;</li>
                <li>produire, à l'utilisateur, un historique des dépôts, transactions et retraits sur son compte Zepargn ;</li>
                <li>sécuriser les fonds de l'utilisateur ;</li>
                <li>appliquer des règles et processus de retrait flexibles ;</li>
                <li>plafonner, à 5.000.000, le montant maximal des fonds à héberger sur le compte Zepargn de l'utilisateur ;</li>
                <li>préserver la confidentialité des données personnelles et l'état du compte Zepargn de l'utilisateur, dans les limites des exigences légales et réglementaires.</li>
                <li>reverser à l'utilisateur la totalité des sommes figurant sur son compte, et dans les délais légaux ou réglementaires, sur demande de celui-ci (sont autorisés uniquement pour reversement, 1000 FCFA minimum pour les épargnes individuelles et 5000 FCFA minimum pour les épargnes en groupe).</li>
              </ul>
              <p className="mb-4">L'éditeur s'engage, en ce qui concerne l'épargne en groupe, à :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>mettre en place un mécanisme permettant à l'utilisateur, qui en prend l'initiative, de créer un groupe d'épargne en commun. Ce dernier est dénommé l'administrateur du groupe ;</li>
                <li>fournir à l'utilisateur qui désire participer à ou rejoindre un groupe d'épargne en commune, les informations sur l'administrateur et sur les utilisateurs, membre du groupe ;</li>
                <li>communiquer à tous les participants de l'épargne en groupe, les informations complètes sur l'état des fond collectés ainsi que sur la contributions de chacun, et en assure la totale transparence ;</li>
                <li>plafonner à 50.000.000 le montant maximal des fonds à héberger sur le compte d'épargne en groupe ;</li>
                <li>n'endosser aucune responsabilité en ce qui concerne la gestion et l'organisation interne de l'épargne en groupe ;</li>
                <li>à mettre à la disposition de l'utilisateur, des contenus pédagogiques sur la gestion financière et l'épargne.</li>
              </ul>
              <p className="mb-4">Nonobstant ce qui précède, l'épargne en groupe est soumise aux règles ci-après :</p>
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
              <p className="mb-4">L'utilisateur qui s'engage à créer, participer ou rejoindre une épargne en groupe est réputé avoir consenti aux règles ci-dessus.</p>

              <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">2. En matière de sécurité des fonds</h3>
              <p className="mb-4">Hormis le cas des épargnes en groupe, le dépôt par l'utilisateur de ses fonds sur son compte individuel Zepargn, fait de lui le créancier de l'éditeur, à hauteur du montant déposé.</p>
              <p className="mb-4">L'éditeur garantit à l'utilisateur de Zepargn, la sécurité et la disponibilité de ses fonds.</p>
              <p className="mb-4">En conséquence, et sous réserve de l'observation des délais de transaction appliqués par les partenaires chargés de l'hébergement des fonds, l'utilisateur a le droit à tout moment de demander et d'obtenir la restitution de ses fonds.</p>
              <p className="mb-4">En cas de refus de restitution des fonds, l'utilisateur dispose du droit d'engager, contre l'éditeur, toute poursuite judiciaire en vue de l'obtention de ses fonds, sans préjudice des dommages et intérêts auxquels il peut prétendre.</p>

              <h3 className="text-lg font-semibold text-[#394E5E] mt-4 mb-2">3. En matière de dysfonctionnement de Zepargn</h3>
              <p className="mb-4">Tout dysfonctionnement du serveur, du réseau, de l'application ou site internet Zepargn, ne peut engager la responsabilité de la société Digitall Elevate S.A.S.U, que dans les limites de la législation en vigueur.</p>
              <p className="mb-4">L'éditeur s'engage à mettre en œuvre tous les moyens nécessaires mis à sa disposition pour garantir son bon fonctionnement, la sécurité et la confidentialité des données.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PROPRIÉTÉ INTELLECTUELLE</h2>
              <p className="mb-4">Les marques, logos, signes ainsi que tous les contenus du site (textes, images, son…) font l'objet d'une protection par le Code de la Propriété Intellectuelle et plus particulièrement par le droit d'auteur.</p>
              <p className="mb-4">L'Utilisateur doit solliciter l'autorisation préalable du site pour toute reproduction, publication, copie des différents contenus. Il s'engage à une utilisation des contenus du site dans un cadre strictement privé, toute utilisation à des fins commerciales et publicitaires est strictement interdite.</p>
              <p className="mb-4">Toute représentation totale ou partielle de ce site par quelque procédé que ce soit, sans l'autorisation expresse de l'exploitant du site Internet constituerait une contrefaçon sanctionnée par l'article L 335-2 et suivants du Code de la propriété intellectuelle.</p>
              <p className="mb-4">Il est rappelé conformément à l'article L122-5 du Code de propriété intellectuelle que l'Utilisateur qui reproduit, copie ou publie le contenu protégé doit citer l'auteur et sa source.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DONNÉES PERSONNELLES</h2>
              <p className="mb-4">L'utilisateur doit obligatoirement fournir des informations personnelles et nécessaires pour procéder à son inscription sur Zepargn.</p>
              <p className="mb-4">L'adresse électronique (e-mail) de l'utilisateur pourra notamment être utilisée par Zepargn, pour la communication d'informations diverses et la gestion de son compte.</p>
              <p className="mb-4">La société Digitall Elevate S.A.S.U garantit le respect de la vie privée de l'utilisateur, conformément à la loi portant Code du Numérique en République du Bénin au livre 5 sur la protection des données à caractère personnel et conformément à la Politique de Confidentialité.</p>
              <p className="mb-4">Zepargn est déclaré auprès de l'Autorité de Protection des Données Personnelles (APDP).</p>
              <p className="mb-4">L'Utilisateur consent au traitement de ses données à caractère personnel communiquées sur Zepargn et autorise l'éditeur à communiquer au besoin à ses partenaires et toute personne concernée dans le cadre du fonctionnement de Zepargn.</p>
              <p className="mb-4">En vertu des articles du code du Numérique en vigueur en République du Bénin, l'Utilisateur dispose d'un droit d'accès, d'interrogation, de rectification et de suppression, d'opposition de ses données personnelles, d'introduire une réclamation auprès de l'APDP etc.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">EVOLUTION DU CONTENU DES CONDITIONS GÉNÉRALES D'UTILISATION</h2>
              <p className="mb-4">L'éditeur se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification. De ce fait, les conditions applicables seront celles disponibles sur Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DURÉE</h2>
              <p className="mb-4">Les présentes Conditions Générales d'Utilisation sont conclues pour une durée indéterminée. Elles produisent leurs effets à l'égard de l'utilisateur à compter du début de l'utilisation de Zepargn.</p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">PRÉLÈVEMENT</h2>
              <p className="mb-4">Les services Zepargn sont payés par l'Utilisateur sous forme de frais prélevés par l'éditeur comme suit :</p>
              <ul className="list-disc pl-6 mb-4">
                <li>2% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn via MTN Mobile Money Bénin, Moov money Bénin, Celtis Cash ;</li>
                <li>3,5% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn, via une carte bancaire ;</li>
                <li>0,5% du montant à épargner à chaque dépôt effectué par l'utilisateur sur son compte Zepargn via un moyen de paiement depuis un pays autre que le Bénin en plus des frais facturés par l'agrégateur de paiement ;</li>
                <li>5% du montant à retirer au moment du retrait, lorsque le retrait intervient avant la fin de l'objectif de l'épargne auquel l'utilisateur a souscrit.</li>
              </ul>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">DROIT APPLICABLE ET JURIDICTION COMPETENTE</h2>
              <p className="mb-4">Le présent contrat est soumis au droit béninois.</p>
              <p className="mb-4">A défaut d'un règlement à l'amiable entre l'utilisateur et la société Digitall Elevate S.A.S.U, le Tribunal de commerce de Cotonou sera compétent pour connaître de tout litige survenu de l'interprétation ou de l'exécution des présentes conditions générales.</p>

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

export default TermsOfUse;
