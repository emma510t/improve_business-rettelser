export default function CaseStatementCard({ desc, title }) {
  return (
    <article className="p-3 m-4 flex relative">
      <span className="text-ibgreen-400 text-[24px] font-poppins absolute top-0 left-0">“ </span>
      <div className="flex flex-col gap-4">
        <p className="line-clamp-6 font-semibold text-base md:text-lg">{desc}</p>
        <div className="flex gap-3.5">
          <div>
            <p className="text-ibsilver-400 text-sm">– {title}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
