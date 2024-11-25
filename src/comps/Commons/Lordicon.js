const Lordicon = (iconName) => {
  const iconHref = `https://cdn.lordicon.com/${iconName}.json`;
  return (
    <lord-icon
      src="https://cdn.lordicon.com/rmkahxvq.json"
      trigger="hover"
      colors="primary:#e5e7eb"
      style="width:250px;height:250px"
    ></lord-icon>
  );
};

export default Lordicon;
