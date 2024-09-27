import { useState } from "react";
import { Accordion } from "../Portal";

const FAQ = ({ questions }) => {
  return (
    <section className="grid gap-y-3">
      <h2 className="title mb-3">ممکنه از خودت بپرسی: </h2>
      {questions.map((item, index) => {
        return <Accordion question={item} />;
      })}
    </section>
  );
};

export default FAQ;
