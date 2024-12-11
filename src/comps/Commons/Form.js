import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = ({ fields, submit = "ارسال" }) => {
  const form = useRef();
  const [message, setMessage] = useState("Everything is Awsome");
  const [showMessage, setShowMessage] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_auob6ff", "template_h64zus6", form.current, {
        publicKey: "7g-CYayFlK8AuXyt9",
      })
      .then(
        () => {
          setShowMessage(true);
          setMessage("Your Message Sent!");
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        },
        (error) => {
          setShowMessage(true);
          setMessage("Something is Wrong here!?");
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
                      required={item.required ? true : false}
                    ></textarea>
                  ) : item.type === "select" ? (
                    <select className="field">
                      {item.options.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  ) : (
                    <input
                      id={id}
                      type={item.type}
                      className="field"
                      required={item.required ? true : false}
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
        className={`fixed bottom-[1vw] right-[1vh] displayTrans duration-500 message ${
          showMessage
            ? "right-[1vw] opacity-100 visible"
            : "right-[-100%] opacity-0 invisible"
        }`}
      >
        <p>{message}</p>
        <button
          onClick={() => {
            setShowMessage(false);
          }}
        >
          <i className="fas fa-xmark" />
        </button>
      </div>
    </>
  );
};

export default Form;
