export default function SplitSection({ children }) {
  return (
    <section className="md:min-h-[calc(100vh-79px)]">
      <div className="md:flex md:sticky md:top-[79px]">{children}</div>
    </section>
  );
}
