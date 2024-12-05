import React from 'react';
import Dialogmodell from '../components/Dialogmodell';

export default function LearnMore() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Om Dialogverktøyet
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Et verktøy for felles utforsking av ambisjoner om hvordan grønne industrietableringer kan bli mer bærekraftige, inkluderende og berikende for både virksomhet, natur og lokalsamfunn.
        </p>
      </div>

      <div className="max-w-4xl space-y-8">
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-4">
            Å videreutvikle eksisterende eller etablere ny, grønn industri er avgjørende for å opprettholde velferd gjennom å skape nye arbeidsplasser og sikre fremtidig eksport. Samtidig må dette skje på en måte som ivaretar behovene til framtidige generasjoner, reduserer naturtap og kutter klimagassutslipp i tråd med nasjonale og internasjonale forpliktelser.
          </p>
          <p className="text-gray-600">
            Dialogverktøyet er laget for å etablere et grunnlag for felles utforsking om hvordan grønne industrietableringer kan gi verdiskaping som er mer bærekraftig, inkluderende og berikende for både virksomhet, natur og lokalsamfunn. Hensikten er å få en mer helhetlig tilnærming, oppnå raskere og bedre prosesser, virkeliggjøre grønne ambisjoner og skape gode forbilder og resultater som styrker industriens rolle som troverdig drivkraft for å få til det grønne skiftet. For å lykkes er det behov for å etablere en tillitsbasert dialog mellom relevante parter som har en intensjon om å samarbeide om en konkret industrietablering.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600 mb-8">
            Verktøyet er utviklet for dialog mellom en industriaktør og et vertskap som har en intensjon om samarbeid om en konkret industrietablering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Industriaktør</h3>
              <p className="text-gray-600">
                En Industriaktør er en aktør eller aktørgruppe som søker å etablere ny industriell virksomhet, eller som driver (videre)utvikling og innovasjon i eksisterende industriprosjekter
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Vertskap</h3>
              <p className="text-gray-600">
                Et vertskap er en aktør eller aktørgruppe som tilbyr støtte til industriaktøren gjennom tilrettelegging, tilgang til lokasjon, infrastruktur eller andre ressurser, og som har en rolle som grunneier, medeier, tilrettelegger eller forpliktet samarbeidspartner.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <p className="text-gray-600">
            Dialogverktøyet tar utgangspunkt i et enkelt veikart for den tidlige fasen. Deretter leder det inn mot en rekke spørsmål som leder fram til en ambisjonsprofil basert på ni ulike målsettinger. Denne ambisjonsprofilen viser hvor man har høyere og lavere ambisjoner, og kan deles mellom partene som grunnlag for videre dialog.
          </p>
          <p className="text-gray-600 mt-4">
            For målsettinger der ambisjonene er sammenfallende, kan man jobbe videre med å konkretisere disse til omforente tiltak. For målsettinger der ambisjonene er avvikende, kan man belyse hvorfor og drøfte muligheter for å overkomme eventuelle uoverensstemmelser. Man kan også bruke profilene til å utfordre hverandre om å løfte egne eller felles ambisjoner, lære og videreutvikle prosjektet.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <p className="text-gray-600">
              Dialogverktøyet er forankret i rammeverket for den europeiske satsingen «New European Bauhaus» (NEB) som etterspør løsninger som ikke bare er bærekraftige, men også inkluderende og berikende. Det er designet for bruk i tidlig fase når det å etablere en felles forståelse, forankring og forpliktelse rundt hva man ønsker å få til er mest etterspurt, og handlingsrommet for å påvirke resultatet er størst. Dialogverktøyet er ikke knyttet opp mot formelle prosesser rundt finansiering eller planprosesser etter plan- og bygningsloven.
            </p>
            <div className="flex justify-center">
              <Dialogmodell size="small" noPadding />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}