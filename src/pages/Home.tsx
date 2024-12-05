import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Timeline from '../components/Timeline';
import Button from '../components/Button';
import Dialogmodell from '../components/Dialogmodell';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-20">
            Velkommen til Dialogverktøy for grønne industrietableringer
          </h1>
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold mb-6">Hva er dette?</h2>
            <p className="text-gray-600">
              Dialogverktøyet er utviklet for å fremme strukturert og effektiv dialog mellom industri, kommune og lokalsamfunn i tidlig fase av en etablering. Det hjelper dere med å identifisere ambisjoner, sette klare mål og sikre at viktige tema blir tatt opp på et tidlig nok tidspunkt.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Dialogmodell noPadding />
        </div>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6">Målgruppe</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Industriaktører</h3>
            <p className="text-gray-600">
              Deg som etablerer ny industri eller utvikler og innoverer i eksisterende industriprosjekter.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Vertskap</h3>
            <p className="text-gray-600">
              Deg som støtter industriaktører med lokasjon, infrastruktur og ressurser, og bidrar som samarbeidspartner for å realisere ambisjoner innen sosial og miljømessig bærekraft. For eksempel kommuner, industriparker eller andre grunneiere.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6">Hvordan fungerer det?</h2>
        <p className="text-gray-600">
          En representant fra industriaktøren, samt en representant fra vertsskapet går gjennom verktøyet hver for seg. Gjennom å utforske ambisjoner innenfor 9 ulike tema vil verktøyet gi deg oversikt over hvor dere står, hva som er viktig, og hvordan dere kan samarbeide for å nå felles mål. Deretter kan en møtes fysisk, sammenligne ambisjonsprofilene til hverandre, og bruke dialogverktøyet for å utforske dette videre.
        </p>
      </div>

      <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6">Hvorfor bruke dialogverktøyet?</h2>
        <p className="text-gray-600 mb-4">Ved å bruke verktøyet kan dere:</p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li>Sette ambisjoner innenfor det grønne skiftet</li>
          <li>Komme raskt i gang med en god dialog mellom deg og samarbeidspartneren din</li>
          <li>Få din egen ambisjonsprofil og oversikt over viktige dialogtema</li>
        </ul>
      </div>

      <Timeline />

      <Button
        onClick={() => navigate('/survey')}
        fullWidth
        icon={ArrowRight}
        className="mt-6"
      >
        Start evaluering nå
      </Button>
    </div>
  );
}