const Tip = ({ message, className, blue = false }) => {
  return (
    <div
      className={`${
        blue ? "bg-blue-400" : "bg-purple-400"
      } w-full inline-flex justify-between items-center para rounded-full text-slate-50 p-3 ${className}`}
    >
      <span
        className={`${
          blue ? "bg-blue-500" : "bg-purple-500"
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
