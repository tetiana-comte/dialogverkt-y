import { FC } from 'react';

interface Phase {
  number: number;
  title: string;
  description: string;
}

const phases: Phase[] = [
  {
    number: 1,
    title: 'Innledende dialog',
    description: 'Dette steget handler om å starte en åpen samtale mellom alle relevante parter, inkludert bedriften, lokalsamfunnet, myndigheter og miljøeksperter.'
  },
  {
    number: 2,
    title: 'Forhandling og planlegging',
    description: 'I denne fasen formaliseres samarbeidet gjennom avtaler og konkrete planer. Det er viktig å sikre at alle parter har en felles forståelse av mål og forventninger.'
  },
  {
    number: 3,
    title: 'Gjennomføring',
    description: 'Implementering av planene med fokus på å opprettholde god kommunikasjon og samarbeid mellom alle involverte parter gjennom hele prosessen.'
  }
];

const Timeline: FC = () => {
  return (
    <div className="bg-white p-4 sm:p-8 rounded-xl shadow-sm border border-gray-100 mb-8 sm:mb-12">
      <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Etableringfasene</h2>
      <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
        Hver etablering følger sin egen vei, men mange etableringer går gjennom lignende faser. Denne tidslinjen er en forenklet oversikt over de typiske stegene i en etableringsprosess.
      </p>
      
      <div className="relative">
        {/* Horizontal line - hidden on mobile */}
        <div className="hidden sm:block absolute left-0 right-0 top-12 h-0.5 bg-gray-900"></div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {phases.map((phase, index) => (
            <div key={phase.number} className="relative">
              {/* Circle with number */}
              <div className="sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:top-8 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-semibold z-10 mb-4 sm:mb-0">
                {phase.number}
              </div>
              
              {/* Content box */}
              <div className="sm:pt-24 px-2 sm:px-4">
                <h3 className="font-semibold text-base sm:text-lg mb-2 sm:text-center">{phase.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 sm:text-center">{phase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;