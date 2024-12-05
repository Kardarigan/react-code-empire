const Tip = ({ message, className, blue = false }) => {
  return (
    <div
      className={`w-full inline-flex justify-between items-center p-3 warn ${className}`}
    >
      <span className="warn font-extrabold px-5 text-center">توجه</span>
      <p
        dangerouslySetInnerHTML={{ __html: message }}
        className="mx-5 max-md:text-sm para"
      />
      <i className="fal fa-chevron-left px-3" />
    </div>
  );
};

export default Tip;
