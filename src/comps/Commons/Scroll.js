import { Loaded_Animation } from "../Portal";
const Scroll = ({ children }) => {
  const { ref, className } = Loaded_Animation("max-h-0 py-0", "max-h-96 py-8");
  return (
    <div className="scroll" ref={ref}>
      <div className="scroll-end" />
      <div className={`scroll-main ${className}`}>{children}</div>
      <div className="scroll-end" />
    </div>
  );
};

export default Scroll;
