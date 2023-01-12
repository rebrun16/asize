import React from 'react'
import AccordionItem from '../Accordion/AccordionItem';
import AccordionWrapper from '../Accordion/AccordionWrapper';
import "./question.scss"

const data = [
  {
    "title": "Sed ut perspiciatis unde omnis iste natus ?",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  },
  {
    "title": "Temporibus autem quibusdam et aut ?",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  },
  {
    "title": "Sed ut perspiciatis unde omnis iste natus ?",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque."
  }
];

const Question = () => {
  return (
    <>
      <div className="questions">
        <div className="left">
          <h2 className='question'>Frequently Asked Question</h2>
          <div className="subtitle">Excepteur sint occaecat cupidatat non proident</div>
          <AccordionWrapper>
            {data.map((item, index) => (
              <AccordionItem key={index} index={index} title={item.title} description={item.description} />
              ))}
          </AccordionWrapper>
        </div>
        <div className="right">
          <div className="img">
            <span className='bg'>
              <img src="/img/Image.png" alt="bb"/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question