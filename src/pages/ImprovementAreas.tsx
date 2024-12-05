import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jsPDF } from 'jspdf';
import type { Answer } from '../App';

type Props = {
  answers: Answer[];
};

const tabs = [
  {
    id: 'baerekraft',
    title: 'Bærekraft',
    color: 'emerald',
    blocks: [
      {
        title: 'Naturhensyn',
        description: 'Hvordan kan vi styrke naturmangfold og økosystemtjenester?',
        questions: [
          'Hvilke naturverdier finnes i området, og hvordan kan disse ivaretas og styrkes?',
          'Hvordan kan etableringen bidra til å styrke økosystemtjenester?',
          'Hvilke muligheter finnes for å skape nye naturverdier?'
        ]
      },
      {
        title: 'Smart arealbruk',
        description: 'Hvordan kan vi optimalisere arealbruken?',
        questions: [
          'Hvilke muligheter finnes for flerbruk av arealer?',
          'Hvordan kan vi redusere fotavtrykket?',
          'Hvilke synergier kan skapes med omkringliggende virksomheter?'
        ]
      },
      {
        title: 'Ressursbruk',
        description: 'Hvordan kan vi fremme sirkulær økonomi?',
        questions: [
          'Hvilke materialer og ressurser kan gjenbrukes?',
          'Hvordan kan vi minimere avfall?',
          'Hvilke lokale ressurser kan utnyttes bedre?'
        ]
      }
    ]
  },
  {
    id: 'skjonnhet',
    title: 'Skjønnhet',
    color: 'orange',
    blocks: [
      {
        title: 'Stedsidentitet',
        description: 'Hvordan kan vi styrke stedets karakter?',
        questions: [
          'Hva er stedets historie og identitet?',
          'Hvordan kan etableringen bygge videre på eksisterende kvaliteter?',
          'Hvilke nye kvaliteter kan tilføres?'
        ]
      },
      {
        title: 'Destinasjon',
        description: 'Hvordan kan stedet bli attraktivt for besøkende?',
        questions: [
          'Hvilke opplevelser kan skapes for besøkende?',
          'Hvordan kan stedet bli en destinasjon?',
          'Hvilke aktiviteter kan tilbys?'
        ]
      },
      {
        title: 'Konteksttilpasning',
        description: 'Hvordan kan bygget tilpasses omgivelsene?',
        questions: [
          'Hvordan kan arkitekturen speile stedets karakter?',
          'Hvilke visuelle kvaliteter bør vektlegges?',
          'Hvordan kan bygget bli et positivt landemerke?'
        ]
      }
    ]
  },
  {
    id: 'fellesskap',
    title: 'Fellesskap',
    color: 'blue',
    blocks: [
      {
        title: 'Tillitsbygging',
        description: 'Hvordan kan vi skape tillit mellom aktørene?',
        questions: [
          'Hvilke arenaer for dialog kan etableres?',
          'Hvordan sikre åpen og transparent kommunikasjon?',
          'Hvilke felles mål kan defineres?'
        ]
      },
      {
        title: 'Felles eierskap',
        description: 'Hvordan kan vi skape lokalt eierskap?',
        questions: [
          'Hvordan involvere lokalsamfunnet?',
          'Hvilke samarbeidsmodeller kan utvikles?',
          'Hvordan sikre langsiktig forankring?'
        ]
      },
      {
        title: 'Kunnskapsutvikling',
        description: 'Hvordan kan vi fremme læring og innovasjon?',
        questions: [
          'Hvilke kunnskapsmiljøer kan involveres?',
          'Hvordan dele erfaringer og læring?',
          'Hvilke innovasjonsmuligheter finnes?'
        ]
      }
    ]
  }
];

export default function ImprovementAreas({ answers }: Props) {
  const [activeTab, setActiveTab] = useState('baerekraft');
  const navigate = useNavigate();

  const handleDownloadPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    let yOffset = 10;
    const margin = 20;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const contentWidth = pageWidth - (margin * 2);

    // Add title
    pdf.setFontSize(20);
    pdf.text('Inspirasjon til innledende dialog', margin, yOffset);
    yOffset += 15;

    // Add description
    pdf.setFontSize(12);
    const description = 'Spørsmålene er ment som inspirasjon for utforskning gjennom dialog. Basert på intervjuer med kommuner og industrien vet vi at noen unnlater å diskutere disse viktige spørsmålene, og kommer til å angre på det senere i prosessen.';
    const descriptionLines = pdf.splitTextToSize(description, contentWidth);
    pdf.text(descriptionLines, margin, yOffset);
    yOffset += (descriptionLines.length * 7) + 10;

    // Process each tab
    for (const tab of tabs) {
      // Add tab title
      pdf.setFontSize(16);
      pdf.text(tab.title, margin, yOffset);
      yOffset += 10;

      // Process each block in the tab
      for (const block of tab.blocks) {
        // Check if we need a new page
        if (yOffset > 270) {
          pdf.addPage();
          yOffset = 20;
        }

        // Add block title
        pdf.setFontSize(14);
        pdf.text(block.title, margin, yOffset);
        yOffset += 7;

        // Add block description
        pdf.setFontSize(12);
        const blockDescLines = pdf.splitTextToSize(block.description, contentWidth);
        pdf.text(blockDescLines, margin, yOffset);
        yOffset += (blockDescLines.length * 7) + 5;

        // Add questions
        for (const question of block.questions) {
          // Check if we need a new page
          if (yOffset > 270) {
            pdf.addPage();
            yOffset = 20;
          }

          const questionLines = pdf.splitTextToSize(`• ${question}`, contentWidth - 5);
          pdf.text(questionLines, margin + 5, yOffset);
          yOffset += (questionLines.length * 7) + 3;
        }

        yOffset += 10;
      }

      // Add page break between tabs
      if (tab !== tabs[tabs.length - 1]) {
        pdf.addPage();
        yOffset = 20;
      }
    }

    pdf.save('dialogverktoy-inspirasjon.pdf');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/results')}
          className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
        >
          <span>← Tilbake</span>
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Last ned PDF
        </button>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-4">
        Inspirasjon til innledende dialog
      </h1>
      <p className="text-gray-600 mb-8">
        Spørsmålene er ment som inspirasjon for utforskning gjennom dialog. Basert på intervjuer med kommuner og industrien vet vi at noen unnlater å diskutere disse viktige spørsmålene, og kommer til å angre på det senere i prosessen.
      </p>

      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? `bg-${tab.color}-100 text-${tab.color}-900`
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {tabs.map((tab) => (
        tab.id === activeTab && (
          <div key={tab.id} className="space-y-8">
            {tab.blocks.map((block) => (
              <div
                key={block.title}
                className={`bg-white p-6 rounded-xl shadow-sm border border-${tab.color}-100`}
              >
                <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
                <p className="text-gray-600 mb-4">{block.description}</p>
                <ul className="space-y-2">
                  {block.questions.map((question, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className={`text-${tab.color}-600`}>•</span>
                      <span>{question}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )
      ))}
    </div>
  );
}