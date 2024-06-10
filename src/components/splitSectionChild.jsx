export default function SplitSectionChild({ children, className, img, sticky, desktop, fit }) {
  return (
    <div
      className={
        (img ? " md:w-1/2 md:h-[calc(100vh-79px)] md:sticky md:top-[79px] " : " pb-8 md:pb-12 pt-[25px] md:pt-[40px] px-2.5 sm:px-4 md:px-6 lg:px-8 xl:px-10 md:w-1/2 md:overflow-auto 2xl:w-full ") +
        (sticky ? " md:h-[calc(100vh-79px)] md:sticky md:top-[79px] " : " ") +
        (desktop ? "2xl:h-full 2xl:w-full " : " ") +
        ` ${className}`
      }
    >
      {children}
    </div>
  );
}
