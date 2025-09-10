import React from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
  return (
    <>
      <div className="collapse collapse-arrow bg-[#111827] border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-bold text-[#3a97fa]">
          {question}
        </div>
        <div className="collapse-content text-sm">{answer}</div>
      </div>
    </>
  );
};

export default Accordion;
