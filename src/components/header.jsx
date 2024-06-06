import MainNav from "./main-nav";
import { supabase } from "../lib/supabaseclient";

async function Header() {
  const { data, error } = await supabase.from("ib-product-cards_v2").select("*");

  if (error || !data || data.length === 0) {
    // Handle the error case (e.g., return a 404 page or a different component)
    return <div>Error: Data not found</div>;
  }

  const menuItems = data;

  return (
    <header className="text-ibsilver-100 font-poppins sticky top-0 z-10 border-b border-ibsilver-400">
      <MainNav menuItems={menuItems} />
    </header>
  );
}

export default Header;
