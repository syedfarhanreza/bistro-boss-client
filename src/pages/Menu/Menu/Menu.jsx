import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"}></Cover>
      {/* main cover */}
      <SectionTitle
        heading={"Today's Offer"}
        subHeading={"---Don't Miss---"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu items */}
      <MenuCategory
        items={desserts}
        title={"desserts"}
        img={dessertImg}
      ></MenuCategory>
      {/* pizzas menu items */}
      <MenuCategory
        items={pizzas}
        title={"pizzas"}
        img={pizzaImg}
      ></MenuCategory>
      {/* salads menu items */}
      <MenuCategory
        items={salads}
        title={"salads"}
        img={saladImg}
      ></MenuCategory>
      {/* soups menu items */}
      <MenuCategory items={soups} title={"Soups"} img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
