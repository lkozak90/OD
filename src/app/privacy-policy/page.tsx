import type { Metadata } from "next";
import { SimpleBanner } from "@/components";
import { Container, Box, Grid, Button, Paper, Typography } from "@mui/material";

export const metadata: Metadata = {
  title: "Osada Domków | Polityka Prywatności",
  description: "Osada Domków w Kościelisku - polityka prywatności",
};

export default function PrivacyPolicyPage() {
  return (
    <Box>
      <SimpleBanner
        title="Privacy Policy"
        text="Lear more about our Privacy Policy"
      />
      <Container
        sx={{
          my: 20,
          overflow: "hidden",
          "& li": {
            mb: 1,
            fontWeight: 300,
          },
          "& strong": {
            fontWeight: 500,
          },
        }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Informacje o administratorze danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Administratorem danych osobowych Użytkowników jest Osada Domków
              (pełna nazwa firmy) <br />
              KRS: ________, NIP: ________, REGON: _______ <br />
              prowadząca serwis https://www.osada-domkow.pl/.
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Siedziba Administratora mieści się w ____________. <br />Z
              Administratorem można kontaktować się przez adres mailowy:
              _________ oraz listownie na adres siedziby.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Zakres przetwarzanych danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              W zależności od formy kontaktu z Osada Domków (pełna nazwa firmy),
              prowadzącą serwis https://www.osada-domkow.pl/, mogą być Państwo
              poproszeni o podanie mniejszego lub większego zakresu informacji
              niezbędnych do realizacji usług oferowanych przez Osada Domków
              (pełna nazwa firmy), tj: imię i nazwisko, nazwa Użytkownika, NIP,
              adres korespondencyjny, adres dostawy, adres e-mail, numer
              telefonu, adres IP, inne dane związane z realizacją usługi.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Cele i podstawy przetwarzania danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Pani/Pana dane osobowe mogą być przetwarzane są w celu:
            </Typography>
            <ul>
              <li>
                świadczenia usług (w tym świadczenia usług drogą elektroniczną)
                w zakresie składania zamówień,
              </li>
              <li>
                przesyłania informacji handlowych i branżowych i udostępniania
                Użytkownikom treści gromadzonych w Serwisie,
              </li>
              <li>
                podjęcia kroków do zawarcia umowy, zrealizowania i rozliczenia
                umowy,
              </li>
              <li>
                obsługi kontaktów z klientami, zapytań, skarg lub sugestii,
              </li>
              <li>
                spełniania wymogów wynikających z przepisów prawa (w tym
                przepisów rachunkowych),
              </li>
              <li>
                ustalenia i dochodzenia roszczeń lub obrony przed roszczeniami,
              </li>
              <li>
                administrowania stroną internetową w celach analitycznych i
                statystycznych, poprawy stosowanych funkcjonalności i
                świadczonych usług.
              </li>
            </ul>
            <Typography gutterBottom fontWeight={300}>
              W zależności od przypadku i celu przetwarzania, podstawą
              przetwarzania danych osobowych może być:
            </Typography>
            <ul>
              <li>
                zgoda, w odniesieniu do realizacji kontaktów, pozostawania w
                bazie klientów, przesyłania informacji handlowych i branżowych,
                administrowania stroną (w tym zgoda wyrażona za pośrednictwem
                banera cookies), (art. 6 ust. 1 lit. a RODO: osoba, której dane
                dotyczą wyraziła zgodę na przetwarzanie swoich danych osobowych
                w jednym lub większej liczbie określonych celów), która może być
                wycofana w każdym czasie, przy czym wycofanie zgody nie ma
                wpływu na legalność przetwarzania danych osobowych w czasie
                obowiązywania zgody;
              </li>
              <li>
                umowa realizowana przez Letniskowo sp. z o.o. na rzecz klientów
                (art. 6 ust. 1 lit. b RODO: przetwarzanie jest niezbędne do
                wykonania umowy, której stroną jest osoba, której dane dotyczą,
                lub do podjęcia działań na żądanie osoby, której dane dotyczą,
                przed zawarciem umowy);
              </li>
              <li>
                obowiązek prawny administratora (art. 6 ust. 1 lit. c RODO:
                przetwarzanie jest niezbędne do wypełnienia obowiązku prawnego
                ciążącego na administratorze, w tym obowiązki
                rachunkowo-księgowe);
              </li>
              <li>
                prawnie uzasadniony interes realizowany przez administratora
                (art. 6 ust. 1 lit. f RODO: przetwarzanie jest niezbędne do
                celów wynikających z prawnie uzasadnionych interesów
                realizowanych przez administratora lub przez stronę trzecią, z
                wyjątkiem sytuacji, w których nadrzędny charakter wobec tych
                interesów mają interesy lub podstawowe prawa i wolności osoby,
                której dane dotyczą). Powołujemy się na uzasadniony interes
                podczas analizy, rozwoju, usprawniania i optymalizacji strony
                internetowej (przede wszystkim w celu zapewnienia bezpieczeństwa
                strony internetowej, sieci i systemów), a także w aspekcie
                obrony przed roszczeniami i monitoringu w siedzibie Spółki.
              </li>
            </ul>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Okresy przetwarzania danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Dane osobowe będą przechowywane przez okres niezbędny do
              realizacji celu, dla którego zostały one zebrane i są przetwarzane
              (m.in. przez okres przechowywania dokumentacji dotyczącej umów,
              dokumentacji księgowej, wynikający z przepisów prawa), natomiast
              dane osobowe przetwarzane na podstawie zgody – do czasu jej
              wycofania. Okres przetwarzania danych może być przedłużony w
              przypadku, gdy przetwarzanie jest niezbędne do ustalenia i
              dochodzenia ewentualnych roszczeń lub obrony przed nimi, a po tym
              czasie jedynie w przypadku i w zakresie, w jakim będą wymagać tego
              przepisy prawa albo wyrażona przez Państwa zgoda. Po upływie
              okresu przetwarzania dane są nieodwracalnie usuwane lub
              anonimizowane.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Prawa podmiotów danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              O ile spełnione zostaną przesłanki wynikające z przepisów RODO i
              nie wyłączają tego przepisy szczególne, mogą Państwu przysługiwać
              następujące uprawnienia w zakresie przetwarzania danych osobowych:
            </Typography>
            <ol>
              <li>
                <strong>Art. 7 RODO – prawo do wycofania zgody</strong>
                <br />
                Osoba, której dane dotyczą, ma prawo w dowolnym momencie wycofać
                zgodę. Wycofanie zgody nie wpływa na zgodność z prawem
                przetwarzania, którego dokonano na podstawie zgody przed jej
                wycofaniem.
              </li>
              <li>
                <strong>Art. 13 i 14 RODO – prawo do informacji</strong>
                <br />
                Administrator podczas pozyskiwania danych osobowych podaje jej
                wszystkie informacje wypunktowane w treści art. 13 i 14 RODO.
                Administrator podejmuje odpowiednie środki, aby w zwięzłej,
                przejrzystej, zrozumiałej i łatwo dostępnej formie, jasnym i
                prostym językiem udzielić osobie, której dane dotyczą, wszelkich
                informacji, o których mowa w art. 13 i 14.
              </li>
              <li>
                <strong>
                  Art. 15 RODO – prawo dostępu do danych osobowych
                </strong>
                <br />
                Osoba, której dane dotyczą, jest uprawniona do uzyskania od
                administratora potwierdzenia, czy przetwarzane są dane osobowe
                jej dotyczące. Administrator dostarcza osobie, której dane
                dotyczą, kopię danych osobowych podlegających przetwarzaniu.
              </li>
              <li>
                <strong>
                  Art. 16 RODO – prawo żądania sprostowania danych osobowych
                </strong>
                <br />
                Osoba, której dane dotyczą, ma prawo żądania od administratora
                niezwłocznego sprostowania dotyczących jej danych osobowych,
                które są nieprawidłowe.
              </li>
              <li>
                <strong>
                  Art. 17 RODO – prawo żądania usunięcia danych osobowych
                </strong>
                <br />
                Osoba, której dane dotyczą, ma prawo żądania od administratora
                niezwłocznego usunięcia dotyczących jej danych osobowych tylko w
                sytuacji jeśli zajdą przesłanki wynikające z treści tego
                przepisu.
              </li>
              <li>
                <strong>
                  Art. 18 RODO – prawo żądania ograniczenia przetwarzania danych
                </strong>
                osobowych <br />
                Osoba, której dane dotyczą, ma prawo żądania od administratora
                ograniczenia przetwarzania w określonych prawem przypadkach.
                Jeżeli przetwarzanie zostało ograniczone, takie dane osobowe
                można przetwarzać, z wyjątkiem przechowywania, wyłącznie za
                zgodą osoby, której dane dotyczą, lub w celu ustalenia,
                dochodzenia lub obrony roszczeń, lub w celu ochrony praw innej
                osoby fizycznej lub prawnej, lub z uwagi na ważne względy
                interesu publicznego Unii lub państwa członkowskiego.
              </li>
              <li>
                <strong>
                  Art. 19 RODO – prawo do powiadomienia o sprostowaniu lub
                  usunięciu danych osobowych lub ograniczeniu przetwarzania
                </strong>
                <br />
                Administrator informuje o sprostowaniu lub usunięciu danych
                osobowych lub ograniczeniu przetwarzania, których dokonał
                zgodnie z art. 16, art. 17 ust. 1 i art. 18 RODO, każdego
                odbiorcę, któremu ujawniono dane osobowe, chyba że okaże się to
                niemożliwe lub będzie wymagać niewspółmiernie dużego wysiłku.
                Administrator informuje osobę, której dane dotyczą, o tych
                odbiorcach, jeżeli osoba, której dane dotyczą, tego zażąda.
              </li>
              <li>
                <strong>Art. 20 RODO – prawo do przenoszenia danych</strong>
                <br />
                Jeżeli przetwarzanie odbywa się na podstawie zgody lub umowy
                oraz przetwarzanie odbywa się w sposób zautomatyzowany, osoba,
                której dane dotyczą, ma prawo otrzymać w ustrukturyzowanym,
                powszechnie używanym formacie nadającym się do odczytu
                maszynowego dane osobowe jej dotyczące, które dostarczyła
                administratorowi, oraz ma prawo przesłać te dane osobowe innemu
                administratorowi bez przeszkód ze strony administratora, któremu
                dostarczono te dane osobowe.
              </li>
              <li>
                <strong>
                  Art. 21 RODO – prawo do wniesienia sprzeciwu wobec
                  przetwarzania danych
                </strong>
                <br />
                Osoba, której dane dotyczą, ma prawo w dowolnym momencie wnieść
                sprzeciw – z przyczyn związanych z jej szczególną sytuacją –
                wobec przetwarzania dotyczących jej danych osobowych opartego na
                art. 6 ust. 1 lit. e) lub f), w tym profilowania na podstawie
                tych przepisów.
                <br />
                Ponadto przysługuje Państwu prawo wniesienia skargi do organu
                nadzorczego zajmującego się ochroną danych osobowych w Polsce:
                Urząd Ochrony Danych Osobowych ul. Stawki 2, 00-193 Warszawa.
              </li>
            </ol>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Sposoby realizacji praw
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Zgłoszenia żądania realizacji praw w zakresie przetwarzania danych
              osobowych można dokonywać listownie na adres: __________ oraz
              mailowo na adres: ____________.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Odbiorcy danych
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Do danych osobowych przetwarzanych przez Letniskowo sp. z o.o.
              mają bezpośredni dostęp jedynie upoważnieni pracownicy i
              zleceniobiorcy oraz uprawnione i upoważnione osoby zajmujące się
              obsługą Serwisu, jak również podmioty, którym Administrator
              powierza przetwarzanie danych osobowych w drodze zawartych umów
              powierzenia przetwarzania danych na mocy art. 28 RODO (np.
              podmiotom świadczącym usługi IT, dostawcom oprogramowania). Dane
              osobowe mogą być udostępniane m.in. organom państwa na mocy
              przepisów prawa, lub innym podmiotom uprawnionym na podstawie
              przepisów prawa, celem wykonania ciążących na Administratorze
              obowiązków.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              fontWeight={500}
            >
              Inne przypadki przetwarzania danych osobowych przez Osada Domków
              (pełna nazwa firmy).
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Kontakt telefoniczny:
              <br />W przypadku kontaktowania się z Administratorem drogą
              telefoniczną, w sprawach niezwiązanych z zawartą umową lub
              świadczonymi usługami, Administrator może żądać podania danych
              osobowych tylko wówczas, gdy będzie to niezbędne do obsługi
              sprawy, której dotyczy kontakt. Podstawą prawną jest w takim
              wypadku uzasadniony interes Administratora (art. 6 ust. 1 lit. f
              RODO) polegający na konieczności rozwiązania zgłoszonej sprawy
              związanej z prowadzoną przez niego działalnością gospodarczą.
              Administrator po uprzednim uzyskaniu zgody może rejestrować
              rozmowy telefoniczne w celu zagwarantowania pewności i
              bezpieczeństwa co do ustaleń i świadczonych usług.
            </Typography>
            <Typography gutterBottom fontWeight={300}>
              Monitoring wizyjny:
              <br />W celu zapewnienia bezpieczeństwa osób i mienia
              Administrator stosuje w swojej siedzibie monitoring wizyjny.
              Zebrane w ten sposób dane nie są wykorzystywane do żadnych innych
              celów. Dane osobowe utrwalone w związku z prowadzonym
              monitoringiem wizyjnym są przetwarzane w celu zapewnienia
              bezpieczeństwa i porządku na terenie obiektu oraz ewentualnie w
              celu obrony przed roszczeniami lub ich dochodzenia. Podstawą
              przetwarzania Danych osobowych jest uzasadniony interes
              Administratora (art. 6 ust. 1 lit. f RODO) polegający na
              zapewnieniu bezpieczeństwa osobom przebywającym w budynkach oraz
              na terenie zarządzanym przez Administratora, w tym zapewnieniu
              bezpieczeństwa pracownikom i klientom oraz zapewnieniu
              bezpieczeństwa mieniu Administratora i klientów oraz ochrony jego
              praw. Obszary monitorowane są odpowiednio oznaczone piktogramami,
              dostępne są również klauzule informacyjne dotyczące przetwarzania
              danych osobowych w zakresie monitoringu.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
