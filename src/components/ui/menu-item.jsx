import Link from "next/link";

function MenuItem({ children, linkref, className }) {
  return (
    <Link
      className={`w-fit md:hover:border-b md:hover:border-current md:ease-in md:duration-150 ${className}`}
      href={linkref}
    >
      {children}
    </Link>
  );
}

export default MenuItem;
