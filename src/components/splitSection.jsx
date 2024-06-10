export default function SplitSection({ children, className, desktop }) {
  return (
    <section className="md:min-h-[calc(100vh-79px)] 2xl:min-h-1">
      <div className={`md:flex md:sticky md:top-[79px] ${desktop && "2xl:grid 2xl:grid-cols-2 2xl:auto-rows-max 2xl:grid-rows-1"}`}>{children}</div>
    </section>
  );
}
