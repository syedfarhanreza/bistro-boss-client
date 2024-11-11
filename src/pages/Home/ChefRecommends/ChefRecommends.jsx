import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import FoodCard from "../../../components/FoodCard/FoodCard";

const ChefRecommends = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then(res => res.json())
      .then((data) => {
        const offerItems = data.filter((item) => item.category === "offered");
        setOffers(offerItems)});
  }, []);
  return (
    <section>
      <SectionTitle
        heading={"Chef Recommends"}
        subHeading={"---Check it out---"}
      ></SectionTitle>
      <div className="grid md:grid-cols-3 gap-6">
      {
        offers.slice(0,3).map((item) => (
          <FoodCard key={item._id} item={item} button={"Buy Now"}></FoodCard>
        ))
      }
      </div>
    </section>
  );
};

export default ChefRecommends;
