const Form = ({ fields, submit = "ارسال" }) => {
  return (
    <form className="box">
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
  );
};

export default Form;
