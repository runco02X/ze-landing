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
                This privacy policy is written in accordance with the information obligation
                incumbent on the data controller provided for in Article 415,
                appearing in the fifth book of the Digital Code applicable in the Republic of
                Benin, relating to the Protection of Personal Data.
              </p>
              <p className="mb-6">
                It helps you understand what personal data we collect and
                process through the "Zepargn" digital platform, the intended purposes as well as
                the provisions that have been taken in order to comply with the legislation in force in
                the Republic of Benin regarding the protection of personal data and
                privacy, and mentions the proof of the completion of the preliminary formalities
                with the Personal Data Protection Authority (APDP) (article 405
                of the Digital Code).
              </p>
              <p className="mb-6">
                By providing your Personal Data when making requests on the platform
                "Zepargn" to subscribe to any of the services offered there, you
                declare that you have read this privacy policy
                and that you expressly consent to it, as well as to the processing of
                your Personal Data. Please read this Privacy Policy
                carefully as it is binding on us.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">1. Processing Responsibility</h2>
              <p className="mb-6">
                The controller of your Personal Data is Digitall
                Elevate S.A.S represented by its President, Mr. Lawal Adéchina ALAO.
              </p>
              <p className="mb-6">
                Contact: +229 0161382869
                <br />
                Email: lawal@zepargn.com
              </p>
              <p className="mb-6">
                The data controller takes all necessary measures to ensure
                the security of your data and comply with legal obligations regarding
                personal data. They are firmly committed to respecting a set of
                legal requirements to guarantee the confidentiality of all data concerning you.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>Commitment to transparency: throughout this document, we detail
                  how the various data concerning you is obtained, stored, and processed.</li>
                <li>Commitment to security: technical and operational security measures
                  meeting industry standards are applied at all levels of information
                  processing, whether it be collection, storage, or backups.</li>
                <li>Commitment to non-disclosure: no data is subject to automated
                  dissemination to service providers or third parties. Some information
                  may nevertheless be published and disseminated within the strict limits of
                  the needs related to transactions carried out via the "Zepargn" digital
                  platform.</li>
                <li>Commitment to respecting the rights of data subjects: the rights
                  allowing access for consultation, rectification, and deletion of certain
                  personal data and export of their entirety are ensured.</li>
                <li>Commitment to compliance with legislation: the information system is in
                  compliance with data protection legislation.</li>
              </ul>

              <p className="mb-6">
                We have implemented appropriate technical and organizational security measures
                to prevent destruction, loss, falsification, modification, unauthorized access,
                or erroneous notification to third parties of the collected Personal Data,
                as well as any other unauthorized processing of this data.
              </p>
              <p className="mb-6">
                We guarantee a sufficient level of protection by making the obligations
                applicable to all collaborators.
              </p>
              <p className="mb-6">
                However, you are solely responsible for the use made from the
                "Zepargn" platform of your computer, your phone, your IP address
                and your identification data, as well as their confidentiality. You must
                at all times respect the security rules, particularly by preventing any
                unauthorized access to your login and code.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. Preliminary Formalities</h2>
              <p className="mb-6">
                In accordance with Articles 405 and 407 of the Digital Code, the collection and
                processing of personal data are subject to the completion of
                preliminary formalities. Depending on the category of data concerned, this may involve
                the declaration of data processing or the request for authorization of
                processing from the Personal Data Protection Authority.
              </p>
              <p className="mb-6">
                The processing contained in this policy has been subject to adequate
                preliminary formalities by Digitall Elevate S.A.S, with the
                Personal Data Protection Authority (APDP).
              </p>
              <p className="mb-6">
                You can contact the Authority and verify the terms of this declaration
                through the following contact information:
                <br />
                Street 6.076 "Aïdjèdo, El MARZOUK Joël Building"
                <br />
                01 BP: 04837 Cotonou
                <br />
                +229 21 32 57 88 / 69 55 00 00
                <br />
                contact@apdp.bj www.apdp.bj
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. Personal Data Subject to Processing</h2>
              <p className="mb-6">
                The data collected from users of the "Zepargn" digital platform
                are:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>last name, first name, date and place of birth, address, information from your
                  ID card, gender, email address, phone number, ID
                  photo, financial information from your Zepargn savings account</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Operations Performed</h2>
              <p className="mb-6">
                Digitall Elevate S.A.S only collects personal information
                relating to users and service providers for the exclusive need of services
                offered by itself.
              </p>
              <p className="mb-6">
                The information collected is subject to either electronic or
                manual processing intended to achieve the purposes mentioned below.
              </p>
              <p className="mb-6">
                The operations performed are:
                <br />
                Collection; development; display and presentation; storage;
                copying; exploitation; recording; adaptation; modification; extraction;
                backup; consultation; use; communication by transmission;
                dissemination or any other form of making available; structuring;
                matching or interconnection; limitation; encryption; automated
                processing; deletion; destruction; organization;
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">5. Purpose(s) of Processing</h2>
              <p className="mb-6">
                Information is collected for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Assistance and support for Zepargn users;</li>
                <li>Providing information about services to Zepargn users;</li>
                <li>Offering Zepargn products and services;</li>
                <li>Creating and managing Zepargn user accounts;</li>
                <li>Creating and managing the user's Zepargn savings account;</li>
                <li>Holding funds in the user's Zepargn savings account;</li>
                <li>Withdrawing, depositing, transferring funds to and from the user's Zepargn
                  savings account;</li>
                <li>Monitoring and guiding the user;</li>
                <li>etc.</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">6. Recipients of Personal Data (communication and transfer)</h2>
              <p className="mb-6">
                The recipients of this data are the following internal departments of Digitall
                Elevate S.A.S:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Zépargn support;</li>
                <li>The President of Digitall Elevates S.A.S, Lawal Adéchina ALAO;</li>
              </ul>
              <p className="mb-6">
                No data will be transmitted to third parties, except to approved partners through
                which your funds are held. However, we may be required to communicate data to
                authorized persons due to legal, regulatory, and judicial obligations.
              </p>
              <p className="mb-6">
                In any case, Digitall Elevate S.A.S will not sell, rent, distribute, or make your
                Personal Data commercially accessible to third parties, except in the cases
                described above or with your prior consent.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">7. Duration of processing, retention, and storage</h2>
              <p className="mb-6">
                Personal Data is retained for a period not exceeding the purposes for which it
                was collected and processed by Digitall Elevate S.A.S.
              </p>
              <p className="mb-6">
                In accordance with legal provisions, processed personal data may be retained
                beyond the above period for archival, statistical, or scientific purposes, taking
                into account required technical and organizational measures such as
                anonymization, encryption, pseudonymization, etc.
              </p>
              <p className="mb-6">
                Personal Data is retained and stored as follows:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Data in paper form: Benin, on the premises of Digitall Elevate S.A.S;</li>
                <li>Data in electronic form: Benin, on the company's computers, local server
                  rooms, US database servers, and the national data center</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">8. Rights of data subjects regarding processing</h2>
              <p className="mb-6">
                The Digital Code gives you rights regarding your personal data. In the context of
                processing activities within Digitall Elevate S.A.S, the following rights can be
                exercised depending on the processing concerned:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>right of access to collected information;</li>
                <li>right of inquiry;</li>
                <li>right of modification;</li>
                <li>right of rectification;</li>
                <li>right to object to processing;</li>
                <li>right to delete data;</li>
                <li>right to be forgotten;</li>
                <li>right to compensation.</li>
              </ul>
              <p className="mb-6">
                You can consult the definition of these rights in the Digital Code in force in the
                Republic of Benin.
              </p>
              <p className="mb-6">
                You can exercise your rights by writing to the President of Digitall Elevate S.A.S
                at +22961382869 (contact), either by email: lawal@zepargn.com, or by letter to
                the following address:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>Mr. President of Zepargn, lot 1756 Fidjrossè center</li>
              </ul>
              <p className="mb-6">
                We guarantee a response to your requests within an average period of one (01)
                month from the date of submission.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">9. Complaints</h2>
              <p className="mb-6">
                You have the right to file a complaint with the Personal Data Protection Authority.
              </p>
              <p className="mb-6">
                The complaint is:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>submitted at the headquarters of the Institution at Rue 6.076 Aïdjèdo Cotonou</li>
                <li>addressed (email only) to: contact@apdp.bj</li>
              </ul>
              <p className="mb-6">
                This is without prejudice to recourse before a competent court.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">10. Applicable Law</h2>
              <p className="mb-6">
                The methods of storage and processing of Personal Data as well as the
                responsibility of the data controller, and all other rights and obligations related to
                Personal Data are subject to Beninese Law, in particular to Law No. 2017-20 of
                April 20, 2018 on the Digital Code in the Republic of Benin.
              </p>

              <p className="text-sm text-gray-600 mt-8">
                Last updated: March 7, 2025
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
                la sécurité de vos données et se conformer aux obligations légales concernant
                les données personnelles. Il s'engage fermement à respecter un ensemble
                d'exigences légales pour garantir la confidentialité de toutes les données vous concernant.
              </p>

              <ul className="list-disc pl-6 mb-6">
                <li>Engagement de transparence : tout au long de ce document, nous détaillons
                  comment les différentes données vous concernant sont obtenues, stockées et traitées.</li>
                <li>Engagement de sécurité : des mesures de sécurité techniques et opérationnelles
                  répondant aux normes de l'industrie sont appliquées à tous les niveaux du traitement
                  de l'information, qu'il s'agisse de la collecte, du stockage ou des sauvegardes.</li>
                <li>Engagement de non-divulgation : aucune donnée ne fait l'objet d'une
                  diffusion automatisée à des prestataires ou à des tiers. Certaines informations
                  peuvent néanmoins être publiées et diffusées dans les limites strictes des
                  besoins liés aux transactions effectuées via la plateforme numérique "Zepargn".</li>
                <li>Engagement de respect des droits des personnes concernées : les droits
                  permettant l'accès à la consultation, la rectification et la suppression de certaines
                  données personnelles et l'exportation de leur intégralité sont assurés.</li>
                <li>Engagement de conformité à la législation : le système d'information est en
                  conformité avec la législation sur la protection des données.</li>
              </ul>

              <p className="mb-6">
                Nous avons mis en place des mesures de sécurité techniques et organisationnelles appropriées
                pour prévenir la destruction, la perte, la falsification, la modification, l'accès non autorisé,
                ou la notification erronée à des tiers des Données Personnelles collectées,
                ainsi que tout autre traitement non autorisé de ces données.
              </p>
              <p className="mb-6">
                Nous garantissons un niveau de protection suffisant en rendant les obligations
                applicables à tous les collaborateurs.
              </p>
              <p className="mb-6">
                Toutefois, vous êtes seul responsable de l'utilisation faite depuis la
                plateforme "Zepargn" de votre ordinateur, de votre téléphone, de votre adresse IP
                et de vos données d'identification, ainsi que de leur confidentialité. Vous devez
                à tout moment respecter les règles de sécurité, notamment en empêchant tout
                accès non autorisé à votre identifiant et code.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">2. Formalités Préalables</h2>
              <p className="mb-6">
                Conformément aux articles 405 et 407 du Code du Numérique, la collecte et
                le traitement des données à caractère personnel sont soumis à l'accomplissement de
                formalités préalables. Selon la catégorie de données concernée, cela peut impliquer
                la déclaration du traitement des données ou la demande d'autorisation de
                traitement auprès de l'Autorité de Protection des Données Personnelles.
              </p>
              <p className="mb-6">
                Les traitements contenus dans cette politique ont fait l'objet de
                formalités préalables adéquates par Digitall Elevate S.A.S, auprès de
                l'Autorité de Protection des Données Personnelles (APDP).
              </p>
              <p className="mb-6">
                Vous pouvez contacter l'Autorité et vérifier les termes de cette déclaration
                via les coordonnées suivantes :
                <br />
                Rue 6.076 "Aïdjèdo, Immeuble El MARZOUK Joël"
                <br />
                01 BP : 04837 Cotonou
                <br />
                +229 21 32 57 88 / 69 55 00 00
                <br />
                contact@apdp.bj www.apdp.bj
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">3. Données Personnelles Objet du Traitement</h2>
              <p className="mb-6">
                Les données collectées auprès des utilisateurs de la plateforme numérique "Zepargn"
                sont :
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>nom, prénom, date et lieu de naissance, adresse, informations de votre
                  carte d'identité, genre, adresse email, numéro de téléphone, photo
                  d'identité, informations financières de votre compte d'épargne Zepargn</li>
              </ul>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">4. Opérations Effectuées</h2>
              <p className="mb-6">
                Digitall Elevate S.A.S ne collecte que les informations personnelles
                relatives aux utilisateurs et prestataires pour le besoin exclusif des services
                offerts par elle-même.
              </p>
              <p className="mb-6">
                Les informations collectées font l'objet d'un traitement soit électronique soit
                manuel destiné à réaliser les finalités mentionnées ci-dessous.
              </p>
              <p className="mb-6">
                Les opérations effectuées sont :
                <br />
                Collecte ; élaboration ; affichage et présentation ; stockage ;
                copie ; exploitation ; enregistrement ; adaptation ; modification ; extraction ;
                sauvegarde ; consultation ; utilisation ; communication par transmission ;
                diffusion ou toute autre forme de mise à disposition ; structuration ;
                rapprochement ou interconnexion ; limitation ; chiffrement ; traitement
                automatisé ; effacement ; destruction ; organisation ;
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
