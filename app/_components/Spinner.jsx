function Spinner() {
  return (
    <div
      className="m-12 w-16 h-16 rounded-full animate-rotate mx-auto"
      style={{
        background:
          "radial-gradient(farthest-side, #4f46e5 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, #0071bc)",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 10px), #000 0)"
      }}
      role="status"
    ></div>
  );
}

export default Spinner;
