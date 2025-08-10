import ContactContainer from "../layout/ContactContainer";
import Container from "../layout/Container";
import Header from "../layout/Header";
import Sections from "../layout/Sections";

export default function Datenschutz() {
  return (
    <div className="flex justify-center">
      <Container>
        <Header />
        {/* Main content for Datenschutz */}
        <Sections>
          <section id="privacy" className="px-4 tablet:px-0 pt-48">
            <h1 className="text-heading-xl leading-tight mb-6">
              Datenschutzerklärung
            </h1>

            <p className="text-body mb-4">
              Der Schutz Ihrer persönlichen Daten ist mir ein besonderes
              Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf
              Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG).
            </p>

            <h2 className="text-heading-lg mb-4">Kontakt</h2>
            <p className="text-body mb-4">
              Wenn Sie per E-Mail Kontakt mit mir aufnehmen, werden Ihre
              angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall
              von Anschlussfragen sechs Monate bei mir gespeichert. Diese Daten
              gebe ich nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-body mb-4">
              Die Kontaktform dient momentan lediglich zu Trainingszwecken zur
              Anbindung einer Datenbank und wird nicht für andere Zwecke
              verwendet. Ihre Daten werden nicht an Dritte weitergegeben oder
              für Werbezwecke genutzt. Ihre Daten werden gelöscht.
            </p>

            <h3 className="text-heading-md mb-4">Server-Logfiles</h3>
            <p className="text-body mb-4">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Logfiles, die Ihr Browser
              automatisch übermittelt. Dies sind:
              <ul className="list-disc list-inside mt-2">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (in gekürzter Form)</li>
              </ul>
              <br />
              Diese Daten sind nicht bestimmten Personen zuordenbar. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird nicht
              vorgenommen.
            </p>

            <h3 className="text-heading-md mb-4">Ihre Rechte</h3>
            <p className="text-body mb-4">
              Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung,
              Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und
              Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer
              Daten gegen das Datenschutzrecht verstößt oder Ihre
              datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt
              worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
            </p>

            <h3 className="text-heading-md mb-4">Kontakt</h3>
            <p className="text-body mb-4">
              Verantwortlich für die Datenverarbeitung:
              <br />
              Cornelia Müller
              <br />
              Hans-Zeitler-Straße 2b
              <br />
              83075 Bad Feilnbach
              <br />
              E-Mail:{" "}
              <a
                href="mailto:cornelia.mueller@example.com"
                className="underline text-primary ml-1"
              >
                cmueller.mail@t-online.com
              </a>
            </p>
          </section>
        </Sections>
        <ContactContainer />
      </Container>
    </div>
  );
}
