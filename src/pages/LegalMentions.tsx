import { useLanguage } from "../hooks/useLanguage";
import Footer from "../components/Footer";
import Header from "../components/Header";

function LegalMentions() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header showAppLinks={true} showNavigation={true} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-[40px] font-bold text-center text-[#FF7F2A] mb-8">
          {currentLanguage === 'en' ? 'LEGAL MENTIONS' : 'MENTIONS LÉGALES'}
        </h1>

        <div className="prose prose-lg max-w-none">
          {currentLanguage === 'en' ? (
            <>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Identity</h2>
              <p className="mb-4">
                Website and application name: Zepargn<br />
                Website address: https://zepargn.com/<br />
                Owner: Digitall Elevate S.A.S.U company<br />
                Publication manager: Adechina Lawal ALAO
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Hosting</h2>
              <p className="mb-4">
                [Hosting information]
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">APDP Declaration</h2>
              <p className="mb-4">
                In accordance with Law 2017-20 on the Digital Code in the Republic of Benin (Book 5 relating to the protection of personal data and privacy),
                the "Zepargn" website and application has been declared to the Personal Data Protection Authority (www.apdp.bj) under the number [...].
              </p>
              <p className="mb-4">
                In any case, Digitall Elevate S.A.S company only collects personal information relating to the user for the needs of certain services
                offered by the "Zepargn" website and application.
              </p>
              <p className="mb-4">
                The user provides this information knowingly, particularly when they enter it themselves.
              </p>
              <p className="mb-4">
                In accordance with the provisions of Law 2017-20 on the Digital Code in the Republic of Benin, any user has the right to access,
                rectify and object to personal data concerning them, by making a written and signed request, accompanied by a copy of their ID with
                the holder's signature, specifying the address to which the response should be sent.
              </p>
              <p className="mb-4">
                No personal information of the user of the "Zepargn" website and application is published without the user's knowledge, exchanged,
                transferred, assigned or sold on any medium to third parties.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Right of Access</h2>
              <p className="mb-4">
                Under this law, internet users have the right to access, rectify, modify and delete data that personally concerns them.
                This right can be exercised by mail to [...] or by email to the following address: lawal@zepargn.com.
              </p>
              <p className="mb-4">
                Personal information collected is never entrusted to third parties.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Confidentiality</h2>
              <p className="mb-4">
                Your personal data is confidential and will never be communicated to third parties, apart from approved partners through whom
                your funds are hosted and authorized persons due to legal, regulatory and judicial obligations.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Interactivity</h2>
              <p className="mb-4">
                Site users can deposit content, appearing on the site in dedicated spaces that they can access after identification and account opening.
              </p>
              <p className="mb-4">
                The content deposited in discussion and comment spaces remains the responsibility of its author, who assumes full legal responsibility.
              </p>
              <p className="mb-4">
                The site owner nevertheless reserves the right to remove without notice and without justification any content deposited by a user
                that does not satisfy the purpose of the site or the legislation in force.
              </p>

              <h2 className="text-xl sm:text-2xl font-semibold text-[#394E5E] mb-4">Intellectual Property</h2>
              <p className="mb-4">
                All content on this site, including, but not limited to, graphics, images, texts, videos, animations, sounds, logos, gifs and icons
                as well as their formatting are the exclusive property of Digitall Elevate S.A.S.U company, with the exception of trademarks, logos
                or content belonging to other partner companies or authors.
              </p>
              <p className="mb-4">
                Any reproduction, distribution, modification, adaptation, retransmission or publication, even partial, of these various elements
                is strictly prohibited without the express written consent of Digitall Elevate S.A.S.U company.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Identité</h2>
              <p className="mb-4">
                Nom du site web et de l'application : Zepargn<br />
                Adresse du site web : https://zepargn.com/<br />
                Propriétaire : société Digitall Elevate S.A.S.U<br />
                Responsable de publication : Adechina Lawal ALAO
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Hébergement</h2>
              <p className="mb-4">
                [Informations d'hébergement]
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Déclaration à l'APDP</h2>
              <p className="mb-4">
                Conformément à la loi 2017-20 portant code du numérique en République du Bénin (Livre 5ième relatif à la protection des données personnelles et de la vie privée),
                le site et l'application « Zepargn » a fait l'objet d'une déclaration auprès de l'Autorité de Protection des Données Personnelles (www.apdp.bj) sous le numéro (…………………………………………).
              </p>
              <p className="mb-4">
                En tout état de cause la société Digitall Elevate S.A.S, ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services
                proposés par le site et l'application « Zepargn ».
              </p>
              <p className="mb-4">
                L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie.
              </p>
              <p className="mb-4">
                Conformément aux dispositions de la loi 2017-20 portant code du numérique en République du Bénin, tout utilisateur dispose d'un droit d'accès, de rectification et
                d'opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d'une copie du titre d'identité avec signature du
                titulaire de la pièce, en précisant l'adresse à laquelle la réponse doit être envoyée.
              </p>
              <p className="mb-4">
                Aucune information personnelle de l'utilisateur du site et de l'application « Zepargn » n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou
                vendue sur un support quelconque à des tiers.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Droit d'accès</h2>
              <p className="mb-4">
                En application de cette loi, les internautes disposent d'un droit d'accès, de rectification, de modification et de suppression concernant les données qui les
                concernent personnellement. Ce droit peut être exercé par voie postale auprès de ……………………….. ou par voie électronique à l'adresse email suivante :
                lawal@zepargn.com.
              </p>
              <p className="mb-4">
                Les informations personnelles collectées ne sont en aucun cas confiées à des tiers.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Confidentialité</h2>
              <p className="mb-4">
                Vos données personnelles sont confidentielles et ne seront en aucun cas communiquées à des tiers, en dehors des partenaires agréés via lesquels
                s'effectue l'hébergement de vos fonds et des personnes habilitées en raison d'obligations légales, réglementaires et judiciaires.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Interactivité</h2>
              <p className="mb-4">
                Les utilisateurs du site peuvent y déposer du contenu, apparaissant sur le site dans des espaces dédiés auxquels ils peuvent accéder après identification et ouverture
                de compte.
              </p>
              <p className="mb-4">
                Le contenu déposé dans les espaces de discussion et de commentaire reste sous la responsabilité de son auteur, qui en assume pleinement l'entière responsabilité
                juridique.
              </p>
              <p className="mb-4">
                Le propriétaire du site se réserve néanmoins le droit de retirer sans préavis et sans justification tout contenu déposé par un utilisateur qui ne satisferait pas à l'objet
                du site ou à la législation en vigueur.
              </p>

              <h2 className="text-xl font-bold text-[#394E5E] mt-6 mb-4">Propriété intellectuelle</h2>
              <p className="mb-4">
                Tout le contenu du présent site, incluant, de façon non limitative, les graphismes, images, textes, vidéos, animations, sons, logos, gifs et icônes ainsi que leur mise en
                forme sont la propriété exclusive de la société Digitall Elevate S.A.S.U, à l'exception des marques, logos ou contenus appartenant à d'autres sociétés partenaires ou
                auteurs.
              </p>
              <p className="mb-4">
                Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite
                sans l'accord exprès par écrit de la société Digitall Elevate S.A.S.U.
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

export default LegalMentions;
