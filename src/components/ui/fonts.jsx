function H1({ children, className }) {
  return (
    <h1
      className={`font-bold text-4xl pb-5 md:text-[42px]/[1.4] md:pb-7 lg:text-[50px]/[1.4] ${className}`}
    >
      {children}
    </h1>
  );
}

function H2({ children, className }) {
  return (
    <h2
      className={`font-bold text-[32px]/[1.4] pb-4 sm:text-4xl md:text-[38px]/[1.4] md:pb-7 lg:text-[46px]/[1.5] break-words ${className}`}
    >
      {children}
    </h2>
  );
}

function H3({ children, className }) {
  return (
    <h3 className={`font-bold pb-3 text-[24px] md:text-[36px] ${className}`}>
      {children}
    </h3>
  );
}

function P({ children, className }) {
  return (
    <p
      className={`text-base pb-4 md:text-lg md:pb-[30px] lg:text-xl ${className}`}
    >
      {children}
    </p>
  );
}
export { H1, H2, H3, P };
