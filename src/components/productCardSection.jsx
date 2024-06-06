import { supabase } from "../lib/supabaseclient";
import { ProductCard } from "./ui/product-card";

export default async function ProductCardSection({ parentCategory, cardVariant, desc, slugIcon }) {
  const { data, error } = await supabase.from("ib-product-cards_v2").select("*").eq("parent", parentCategory);

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const productCards = data;

  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-4 md:gap-4 lg:gap-5 pt-[46px]">
        {productCards
          .filter((productCard) => productCard.icon !== slugIcon)
          .sort((a, b) => a.id - b.id)
          .map((productCard) => {
            return (
              <ProductCard
                key={productCard.url}
                heading={productCard.card_title}
                icon={productCard.icon}
                url={productCard.url}
                variant={cardVariant}
                {...(desc && { desc: productCard.desc })}
              ></ProductCard>
            );
          })}
      </div>
    </>
  );
}
