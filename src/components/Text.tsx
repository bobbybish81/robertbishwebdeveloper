import React, { useEffect, useState } from 'react';

interface TextProps {
  text: string;
  milliseconds: number;
}

const Text = ({ text, milliseconds }: TextProps) => {
  const [currentText, setCurrentText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((index) => index + 1);
      }, milliseconds);

      return () => clearTimeout(timeoutId);
    }
  }, [currentText, text, index]);

  return (
    milliseconds < 50 ?
      <h5 className='skills mt-4 py-2 px-4'>{currentText}</h5> :
      <h1 className='intro-text'>{currentText}</h1>
  );
};

export default Text;
