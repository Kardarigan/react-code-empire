const Tip = ({ message, className, blue = false }) => {
  return (
    <div
      className={`${
        blue ? "bg-blue-400" : "bg-indigo-400"
      } w-full inline-flex justify-between items-center rounded-full text-slate-50 p-3 ${className}`}
    >
      <span
        className={`${
          blue ? "bg-blue-500" : "bg-indigo-500"
        } rounded-full font-extrabold px-5 text-center`}
      >
        توجه
      </span>
      <p
        dangerouslySetInnerHTML={{ __html: message }}
        className="mx-5 max-md:text-sm"
      />
      <i className="fal fa-chevron-left px-3" />
    </div>
  );
};

export default Tip;
