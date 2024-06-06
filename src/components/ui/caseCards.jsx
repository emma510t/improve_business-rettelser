import Image from "next/image";
import Link from "next/link";

export default function CaseCards({ title, intro, img, slug }) {
  return (
    <article className="flex flex-col gap-4 max-w-[380px] group">
      <Link href={`/cases/${slug}`}>
        <Image
          src={`/img/cases/${img}.webp`}
          alt={title}
          loading="lazy"
          width={380}
          height={180}
          className="aspect-[19/9] object-cover bg-ibsilver-400"
        />
        <div className="pt-4 md:pt-5">
          <h3 className="text-xl md:text-[26px]/[34px] font-semibold font-poppins text-ibsilver-600 font-poppins group-hover:underline">
            {title}
          </h3>
          <p className="line-clamp-3 text-base pt-1 md:pt-1.5 md:text-lg">
            {intro}
          </p>
        </div>
      </Link>
    </article>
  );
}
