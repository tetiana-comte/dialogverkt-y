import { FC } from 'react';

interface DialogmodellProps {
  size?: 'small' | 'large';
  noPadding?: boolean;
}

const Dialogmodell: FC<DialogmodellProps> = ({ size = 'large', noPadding = false }) => {
  const dimensions = size === 'small' ? 'w-[300px] h-[300px]' : 'w-[400px] h-[400px]';
  const padding = noPadding ? '' : 'p-4';
  
  return (
    <div className={`${dimensions} flex items-center justify-center overflow-hidden rounded-lg ${padding}`}>
      <img 
        src="/assets/images/Dialogmodell.png"
        alt="Dialogmodell"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Dialogmodell;