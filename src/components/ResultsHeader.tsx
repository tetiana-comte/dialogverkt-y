import { FC } from 'react';
import Button from './Button';

interface ResultsHeaderProps {
  onBack: () => void;
  onPrint: () => void;
  onNavigateToImprovementAreas: () => void;
}

const ResultsHeader: FC<ResultsHeaderProps> = ({ onBack, onPrint, onNavigateToImprovementAreas }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <Button
        onClick={onBack}
        variant="secondary"
        iconPosition="left"
      >
        ← Tilbake
      </Button>
      <div className="flex space-x-4">
        <Button
          onClick={onNavigateToImprovementAreas}
          variant="secondary"
        >
          Inspirasjon til videre dialog
        </Button>
        <Button
          onClick={onPrint}
          variant="primary"
        >
          Laste ned PDF
        </Button>
      </div>
    </div>
  );
};

export default ResultsHeader;