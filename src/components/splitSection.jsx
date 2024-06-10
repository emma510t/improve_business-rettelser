export default function SplitSection({ children }) {
  return (
    <section className="md:min-h-[calc(100vh-79px)] 2xl:min-h-[50vh]">
      <div className="md:flex md:sticky md:top-[79px] 2xl:grid 2xl:grid-cols-2 2xl:auto-rows-min">{children}</div>
    </section>
  );
}
