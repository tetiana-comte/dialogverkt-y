import { useNavigate } from 'react-router-dom';
import ResultsHeader from '../components/ResultsHeader';
import AmbitionScore from '../components/AmbitionScore';
import CategoryScores from '../components/CategoryScores';
import SurveyAnswers from '../components/SurveyAnswers';
import { DetailedOverview, getAmbitionColor } from '../components/AmbitionLevels';
import { calculateCategories } from '../utils/categoryHelpers';
import type { Answer } from '../types';

interface Props {
  answers: Answer[];
}

export default function Results({ answers }: Props) {
  const navigate = useNavigate();
  const categories = calculateCategories(answers);
  
  const totalScore = categories.reduce((sum, cat) => sum + cat.score, 0);
  const maxScore = categories.reduce((sum, cat) => sum + cat.maxScore, 0);
  const scorePercentage = (totalScore / maxScore) * 100;
  const ambitionLevel = getAmbitionColor(totalScore, maxScore);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div id="results-content">
        <ResultsHeader
          onBack={() => navigate('/survey')}
          onPrint={handlePrint}
          onNavigateToImprovementAreas={() => navigate('/improvement-areas')}
        />

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Resultater</h2>
          
          <AmbitionScore
            level={ambitionLevel.level}
            percentage={scorePercentage}
            bgColor={ambitionLevel.bgColor}
            textColor={ambitionLevel.textColor}
            barColor={ambitionLevel.barColor}
          />

          <CategoryScores categories={categories} />

          <DetailedOverview categories={categories} />
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <SurveyAnswers answers={answers} />
        </div>
      </div>
    </div>
  );
}