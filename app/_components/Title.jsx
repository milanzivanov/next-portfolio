export default function Title({ text, textColor }) {
  return (
    <h1 className="tracking-wider text-2xl md:text-3xl md:mt-5 mb-2 text-gray-600 dark:text-slate-100 font-bold">
      {text}
    </h1>
  );
}
