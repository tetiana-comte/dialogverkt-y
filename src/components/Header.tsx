import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from './Button';
import Logo from './Logo';

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showEvaluationButton = ['/', '/learn-more'].includes(location.pathname);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              className="flex items-center cursor-pointer" 
              onClick={() => navigate('/')}
              aria-label="Go to homepage"
            >
              <Logo />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigate('/learn-more')}
              className="text-gray-600 hover:text-gray-900"
            >
              Om Dialogverktøyet
            </button>
            {showEvaluationButton && (
              <Button
                onClick={() => navigate('/survey')}
                variant="primary"
              >
                Starte evaluering
              </Button>
            )}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  navigate('/learn-more');
                  setIsMenuOpen(false);
                }}
                className="text-gray-600 hover:text-gray-900 py-2"
              >
                Om Dialogverktøyet
              </button>
              {showEvaluationButton && (
                <Button
                  onClick={() => {
                    navigate('/survey');
                    setIsMenuOpen(false);
                  }}
                  variant="primary"
                  fullWidth
                >
                  Starte evaluering
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}