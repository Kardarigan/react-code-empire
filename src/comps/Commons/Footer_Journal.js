const Footer_Journal = () => {
  const benefits = ["تخفیف ها", "رویداد ها", "بروزرسانی ها"];

  return (
    <div className="absolute lg:bottom-72 bottom-[90vh] right-0 w-full">
      <div className="lg:w-[50vw] w-[90vw] mx-auto bg text-slate-100 p-12 rounded-3xl gird grid-cols-2">
        <div className="text-center">
          <h4 className="title">عضویت در ماهنامه‌ی امپراتوری</h4>
          <div className="flex-fullcenter mt-3">
            <p>با عضویت ماهنامه، همیشه به‌روز باشید:</p>
            <ul className="flex gap-x-2 ms-1">
              {benefits.map((item, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <i className="fa-duotone fa-solid fa-circle-check me-1"></i>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <form className="flex p-2 gap-x-3 md:min-w-[35vw] min-w-full bg rounded-full">
            <input
              type="text"
              id="search"
              className="py-0 field rounded-full bg-opacity-80 focus-within:bg-opacity-100"
              placeholder="ایمیل خود را وارد کنید..."
            />
            <button type="submit" className="p-3 pl-5 hover:opacity-80">
              ارسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer_Journal;
