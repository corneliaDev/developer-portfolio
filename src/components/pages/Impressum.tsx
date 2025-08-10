import ContactContainer from "../layout/ContactContainer";
import Container from "../layout/Container";
import Sections from "../layout/Sections";

import Header from "../layout/Header";

export default function Impressum() {
  return (
    <div className="flex justify-center">
      <Container>
        <Header />
        <Sections>
          {/* Main content for Impressum */}
          <section id="impressum" className="px-4 tablet:px-0 pt-48">
            <h1 className="text-heading-xl leading-tight mb-6">Impressum</h1>

            <h2 className="text-heading-lg mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-body mb-4">
              Cornelia Dev
              <br />
              XXX
              <br />
              XXX
              <br />
              Deutschland
            </p>

            <h3 className="text-heading-md mb-4">Kontakt</h3>
            <p className="text-body mb-4">
              E-Mail:{" "}
              <a
                href="mailto:cornelia.mueller@example.com"
                className="underline text-primary ml-1"
              >
                corneliaDev@dev.xx{" "}
              </a>
            </p>

            <h3 className="text-heading-md mb-4">Umsatzsteuer-ID</h3>
            <p className="text-body mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
              <br />
              noch nicht vorhanden
            </p>

            <h3 className="text-heading-md mb-4">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p className="text-body mb-4">
              CorneliaDev
              <br />
              XXX
              <br />
              XXX
              <br />
              Deutschland
            </p>

            <h2 className="text-heading-md mb-4">EU-Streitschlichtung</h2>
            <p className="text-body mb-2">
              Die Europäische Kommission stellt eine Plattform zur
              Online-Streitbeilegung (OS) bereit:
              <br />
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
            <p className="text-body mb-4">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
              teilzunehmen.
            </p>
          </section>
        </Sections>
        <ContactContainer />
      </Container>
    </div>
  );
}
