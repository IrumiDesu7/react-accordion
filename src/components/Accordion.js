import { useRef, useState } from 'react';
import Chevron from './Chevron';

export default function Accordion(props) {
  const [isActive, setIsActive] = useState('');
  const [height, setHeight] = useState('0px');
  const [rotate, setRotate] = useState('icon');

  const content = useRef(null);

  function toggleAccordion() {
    setIsActive(isActive === '' ? 'active' : '');
    setHeight(
      isActive === 'active' ? '0px' : `${content.current.scrollHeight}px`
    );
    setRotate(isActive === 'active' ? 'icon' : 'icon rotate');
  }

  return (
    <div className='accordionContainer'>
      <button className={`accordion ${isActive}`} onClick={toggleAccordion}>
        <p className='accordionTitle'>{props.title}</p>
        <Chevron className={`${rotate}`} height={10} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${height}` }}
        className='accordionContent'
      >
        <div
          className='accordionText'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}
