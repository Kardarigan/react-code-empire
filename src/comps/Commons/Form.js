import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { handleHashChange } from "../Utility/Hash_Change";

const Form = ({
  fields,
  submit = "ارسال",
  service,
  template,
  selectedOption,
  setSelectedOption,
}) => {
  const form = useRef();
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleFieldChange = (e) => {
    const selectedOption = e.target.value;
    setSelectedOption(selectedOption);
    window.location.hash = encodeURIComponent(selectedOption); // Keep hash synchronized
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(service, template, form.current, {
        publicKey: "7g-CYayFlK8AuXyt9",
      })
      .then(
        () => {
          setShowMessage(true);
          setMessage("پیام شما فرستاده شد");
          setTimeout(() => {
            setShowMessage(false);
            window.scrollTo(0, 0);
          }, 2000);
        },
        () => {
          setShowMessage(true);
          setMessage("مشکلی پیش آمده!؟");
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        }
      );
  };

  return (
    <>
      <form className="box" ref={form} onSubmit={sendEmail}>
        <div className="grid grid-cols-2 gap-3">
          {fields.map((item, index) => {
            const id = item.label.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index} className={item.half ? "" : "col-span-2"}>
                <label htmlFor={id} className="label">
                  {item.label}
                </label>
                <div className="mt-1">
                  {item.type === "textarea" ? (
                    <textarea
                      className="field min-h-[120px]"
                      required={item.required}
                      name={item.name}
                    ></textarea>
                  ) : item.type === "select" ? (
                    <select
                      className="field"
                      name={item.name}
                      onChange={handleFieldChange}
                      value={selectedOption || ""}
                    >
                      <option value="" disabled>
                        انتخاب گزینه
                      </option>
                      {item.options.map((option, index) => (
                        <option key={index}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={id}
                      type={item.type}
                      name={item.name}
                      className="field"
                      required={item.required}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <button className="button button-blue mt-5" type="submit">
          {submit}
        </button>
      </form>

      <div
        className={`fixed flex items-center bottom-[22vw] right-[1vh] displayTrans duration-500 card size-auto p-5 ${
          showMessage ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <p>{message}</p>
      </div>
    </>
  );
};

export default Form;
