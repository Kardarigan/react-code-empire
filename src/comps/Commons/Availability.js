const Availability = ({ available }) => {
  return (
    <div
      className={`${
        available ? "bg-green-600" : "bg-red-600"
      } text-red-50 rounded-full px-5 py-3 text-center`}
    >
      {available ? "در دسترس برای همه" : "اکنون این سرویس/دوره در دسترس نیست"}
    </div>
  );
};

export default Availability;
