import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Footer from '../components/Footer';

function CookiesPolicy() {
  const { currentLanguage } = useLanguage();
  return (
    <div className="min-h-screen bg-white">
      <Header showAppLinks={true} showNavigation={true} />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-[40px] font-bold text-center text-[#FF7F2A] mb-8">
          {currentLanguage === 'en' ? 'COOKIES POLICY' : 'POLITIQUE RELATIVE AUX COOKIES'}
        </h1>
        <div className="prose prose-lg max-w-none">
          {currentLanguage === 'en' ? (
            // English content
            <>
              <p className="mb-4">
                This policy is written in accordance with the information obligation incumbent on the data controller provided for in Article 415,
                appearing in the fifth book of the Digital Code applicable in the Republic of Benin, relating to the Protection of Personal Data.
              </p>
              <p className="mb-4">
                When you first connect to the website, you are warned by a banner at the bottom of your screen that information relating to your
                browsing may be recorded in files called "cookies".
              </p>
              <p className="mb-4">
                Our cookie policy allows you to better understand the provisions we implement in terms of navigation on our website and web application
                "Zepargn". It informs you in particular about all the cookies present on our "Zepargn", their purpose and gives you the procedure to
                configure them.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Article 1: General information on cookies present on the site</h2>
              <p className="mb-4">
                Digitall Elevate S.A.S.U company, as publisher of this website and this web application "Zepargn", may proceed to implant a cookie on
                the hard drive of your terminal (computer, tablet, mobile, etc.) in order to guarantee you a smooth and optimal navigation on our website.
              </p>
              <p className="mb-4">
                "Cookies" (or connection tokens) are small text files of limited size that allow us to recognize your computer, tablet or mobile for the
                purpose of personalizing the services we offer you.
              </p>
              <p className="mb-4">
                The information collected through cookies does not in any way allow you to be identified by name. It is used exclusively for our own
                needs in order to improve the interactivity and performance of our website and web application and to send you content adapted to your
                interests.
              </p>
              <p className="mb-4">
                None of this information is communicated to third parties except when Digitall Elevate S.A.S.U has obtained your prior consent or when
                the disclosure of this information is required by law, by order of a court or any administrative or judicial authority empowered to have
                knowledge of it.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Article 2: Configuration of your preferences on cookies</h2>
              <p className="mb-4">
                You can accept or refuse the deposit of cookies at any time.
              </p>
              <p className="mb-4">
                When you first connect to the website and web application of Digitall Elevate S.A.S.U company, a banner briefly presenting information
                relating to the deposit of cookies and similar technologies appears at the bottom of your screen.
              </p>
              <p className="mb-4">
                This banner warns you that by continuing your navigation on the website, you accept the deposit of cookies on your terminal. You are also
                deemed to have given your agreement to the deposit of cookies by clicking on the "Accept and continue" icon.
              </p>
              <p className="mb-4">
                Depending on the type of cookie in question, collecting your consent to the deposit and reading of cookies on your terminal may be
                imperative.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-[#394E5E] mb-4">2.1. Cookies exempt from consent</h3>
              <p className="mb-4">
                Some cookies are exempt from prior collection of your consent insofar as they are strictly necessary for the operation of the website or
                have the exclusive purpose of allowing or facilitating communication by electronic means.
              </p>
              <p className="mb-4">
                These include session identifier cookies, authentication, load balancing session as well as cookies for customizing your interface. These
                cookies are fully subject to this policy insofar as they are issued and managed by Digitall Elevate S.A.S.U company.
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-[#394E5E] mb-4">2.2. Cookies requiring your prior consent</h3>
              <p className="mb-4">
                This requirement concerns cookies issued by third parties and which are qualified as "persistent" insofar as they remain in your terminal
                until they are deleted or their expiry date.
              </p>
              <p className="mb-4">
                As such cookies are issued by third parties, their use and deposit are subject to their own privacy policies.
              </p>
              <p className="mb-4">
                This family of cookies includes audience measurement cookies and advertising cookies.
              </p>
              <p className="mb-4">
                Audience measurement cookies establish statistics concerning the frequency and use of various elements of the website (such as the
                content/pages you have visited).
              </p>

              <h3 className="text-lg sm:text-xl font-semibold text-[#394E5E] mb-4">2.3. You have various cookie setting tools</h3>
              <p className="mb-4">
                Most Internet browsers are configured by default so that cookie deposit is allowed.
              </p>
              <p className="mb-4">
                Your browser offers you the opportunity to modify these standard settings so that all cookies are systematically rejected or that only
                part of the cookies are accepted or refused according to their issuer.
              </p>
              <p className="mb-4 font-bold">
                ATTENTION: We draw your attention to the fact that refusing to deposit cookies on your terminal is nevertheless likely to alter your user
                experience as well as your access to certain services or features of this website.
              </p>
              <p className="mb-4">
                Where applicable, Digitall Elevate S.A.S.U company declines all responsibility concerning the consequences related to the degradation of
                your browsing conditions that occur due to your choice to refuse, delete or block cookies necessary for the operation of the site.
              </p>
              <p className="mb-4">
                These consequences cannot constitute damage and you cannot claim any compensation for this.
              </p>
              <p className="mb-4">
                Your browser also allows you to delete existing cookies on your terminal or to notify you when new cookies are likely to be placed on
                your terminal.
              </p>
            </>
          ) : (
            // French content
            <>
              <p className="mb-4">
                La présente politique est rédigée conformément à l'obligation d'information incombant au responsable de traitement prévu à l'article 415,
                figurant au cinquième livre du code du numérique applicable en République du Bénin, relatif à la Protection des Données à caractère personnel.
              </p>
              <p className="mb-4">
                Lors de votre première connexion sur le site web, vous êtes avertis par un bandeau en bas de votre écran que des informations relatives à
                votre navigation sont susceptibles d'être enregistrées dans des fichiers dénommés « cookies ».
              </p>
              <p className="mb-4">
                Notre politique d'utilisation des cookies vous permet de mieux comprendre les dispositions que nous mettons en œuvre en matière de navigation
                sur notre site et application web « Zepargn ». Elle vous informe notamment sur l'ensemble des cookies présents sur notre « Zepargn », leur
                finalité et vous donne la marche à suivre pour les paramétrer.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Article 1 : Informations générales sur les cookies présents sur le site</h2>
              <p className="mb-4">
                La société Digitall Elevate S.A.S.U en tant qu'éditeur du présent site web et de la présente application web « Zepargn », pourra procéder
                à l'implantation d'un cookie sur le disque dur de votre terminal (ordinateur, tablette, mobile etc.) afin de vous garantir une navigation
                fluide et optimale sur notre site Internet.
              </p>
              <p className="mb-4">
                Les « cookies » (ou témoins de connexion) sont des petits fichiers texte de taille limitée qui nous permettent de reconnaître votre ordinateur,
                votre tablette ou votre mobile aux fins de personnaliser les services que nous vous proposons.
              </p>
              <p className="mb-4">
                Les informations recueillies par le biais des cookies ne permettent en aucune manière de vous identifier nominativement. Elles sont utilisées
                exclusivement pour nos besoins propres afin d'améliorer l'interactivité et la performance de notre site et application web et de vous adresser
                des contenus adaptés à vos centres d'intérêts.
              </p>
              <p className="mb-4">
                Aucune de ces informations ne fait l'objet d'une communication auprès de tiers sauf lorsque la société Digitall Elevate S.A.S.U a obtenu au
                préalable votre consentement ou bien lorsque la divulgation de ces informations est requise par la loi, sur ordre d'un tribunal ou toute
                autorité administrative ou judiciaire habilitée à en connaître.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Article 2 : Configuration de vos préférences sur les cookies</h2>
              <p className="mb-4">
                Vous pouvez accepter ou refuser le dépôt de cookies à tout moment.
              </p>
              <p className="mb-4">
                Lors de votre première connexion sur le site et l'application web de la société Digitall Elevate S.A.S.U, une bannière présentant brièvement
                des informations relatives au dépôt de cookies et de technologies similaires apparaît en bas de votre écran.
              </p>
              <p className="mb-4">
                Cette bannière vous avertit qu'en poursuivant votre navigation sur le site web, vous acceptez le dépôt de cookies sur votre terminal. Vous
                êtes également réputé avoir donné votre accord au dépôt de cookies en cliquant sur l'icône « Accepter et continuer ».
              </p>
              <p className="mb-4">
                Selon le type de cookie en cause, le recueil de votre consentement au dépôt et à la lecture de cookies sur votre terminal peut être impératif.
              </p>

              <h3 className="text-lg font-bold text-[#394E5E] mt-4 mb-2">2.1. Les cookies exemptés de consentement</h3>
              <p className="mb-4">
                Certains cookies sont dispensés du recueil préalable de votre consentement dans la mesure où ils sont strictement nécessaires au fonctionnement
                du site internet ou ont pour finalité exclusive de permettre ou faciliter la communication par voie électronique.
              </p>
              <p className="mb-4">
                Il s'agit notamment des cookies d'identifiant de session, d'authentification, de session d'équilibrage de charge ainsi que des cookies de
                personnalisation de votre interface. Ces cookies sont intégralement soumis à la présente politique dans la mesure où ils sont émis et gérés
                par la société Digitall Elevate S.A.S.U.
              </p>

              <h3 className="text-lg font-bold text-[#394E5E] mt-4 mb-2">2.2. Les cookies nécessitant le recueil préalable de votre consentement</h3>
              <p className="mb-4">
                Cette exigence concerne les cookies émis par des tiers et qui sont qualifiés de « persistants » dans la mesure où ils demeurent dans votre
                terminal jusqu'à leur effacement ou leur date d'expiration.
              </p>
              <p className="mb-4">
                De tels cookies étant émis par des tiers, leur utilisation et leur dépôt sont soumis à leurs propres politiques de confidentialité.
              </p>
              <p className="mb-4">
                Cette famille de cookie regroupe les cookies de mesure d'audience et les cookies publicitaires.
              </p>
              <p className="mb-4">
                Les cookies de mesure d'audience établissent des statistiques concernant la fréquentation et l'utilisation de divers éléments du site web
                (comme les contenus/pages que vous avez visité).
              </p>

              <h3 className="text-lg font-bold text-[#394E5E] mt-4 mb-2">2.3. Vous disposez de divers outils de paramétrage des cookies</h3>
              <p className="mb-4">
                La plupart des navigateurs Internet sont configurés par défaut de façon à ce que le dépôt de cookies soit autorisé.
              </p>
              <p className="mb-4">
                Votre navigateur vous offre l'opportunité de modifier ces paramètres standards de manière à ce que l'ensemble des cookies soit rejeté
                systématiquement ou bien à ce qu'une partie seulement des cookies soit acceptée ou refusée en fonction de leur émetteur.
              </p>
              <p className="mb-4 font-bold">
                ATTENTION : Nous attirons votre attention sur le fait que le refus du dépôt de cookies sur votre terminal est néanmoins susceptible d'altérer
                votre expérience d'utilisateur ainsi que votre accès à certains services ou fonctionnalités du présent site web.
              </p>
              <p className="mb-4">
                Le cas échéant, la société Digitall Elevate S.A.S.U décline toute responsabilité concernant les conséquences liées à la dégradation de vos
                conditions de navigation qui interviennent en raison de votre choix de refuser, supprimer ou bloquer les cookies nécessaires au fonctionnement
                du site.
              </p>
              <p className="mb-4">
                Ces conséquences ne sauraient constituer un dommage et vous ne pourrez prétendre à aucune indemnité de ce fait.
              </p>
              <p className="mb-4">
                Votre navigateur vous permet également de supprimer les cookies existants sur votre terminal ou encore de vous signaler lorsque de nouveaux
                cookies sont susceptibles d'être déposés sur votre terminal.
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CookiesPolicy;
