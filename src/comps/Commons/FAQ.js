import { useState } from "react";
import { Accordion } from "../Portal";

const FAQ = ({ questions, className = "" }) => {
  return (
    <section className={`grid gap-y-3 ${className}`}>
      <h2 className="title mb-3">ممکنه از خودت بپرسی: </h2>
      {questions.mainEntity.map((item, index) => {
        const question = {
          quiz: item.name,
          answer: item.acceptedAnswer.text,
        };
        return <Accordion key={index} question={question} />;
      })}
    </section>
  );
};

export default FAQ;
