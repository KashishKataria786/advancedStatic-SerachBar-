function Spinner({ size = 30, color = "text-gray-300" }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
      style={{ width: size, height: size }}
    ></div>
  );
}

export default Spinner;