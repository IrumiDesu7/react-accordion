export default function Accordion(props) {
  return (
    <div className='accordionContainer'>
      <button className='accordion'>
        <p className='accordionTitle'>{props.title}</p>
      </button>
      <div className='accordionContent'>
        <div
          className='accordionText'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}
