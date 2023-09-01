import React, { useEffect, useState } from 'react';

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps) => {

  const [currentText, setCurrentText] = useState<string>('');
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((value) => value + text.charAt(index));
        setIndex((index) => index + 1);
      }, 25);

      return () => clearTimeout(timeoutId);
    }
  }, [currentText, text, index]);

  return (
    <h5 className='skills mt-4 py-2 px-4'>{currentText}</h5>
  );
};

export default Text;
