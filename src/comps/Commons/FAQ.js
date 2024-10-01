import { useState } from "react";
import { Accordion } from "../Portal";

const FAQ = ({ questions, className = null }) => {
  return (
    <section className={`grid gap-y-3 ${className}`}>
      <h2 className="title mb-3">ممکنه از خودت بپرسی: </h2>
      {questions.map((item, index) => {
        return <Accordion question={item} />;
      })}
    </section>
  );
};

export default FAQ;
