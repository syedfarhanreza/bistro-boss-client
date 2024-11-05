import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

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
        offers.slice(0,3).map((offer) => (
          <div key={offer._id} className="card bg-[#F3F3F3] w-96 shadow-xl rounded-none">
            <figure>
              <img
                src={offer.image}
                alt={offer.name}
                className="w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{offer.name}</h2>
              <p>{offer.recipe}</p>
              <div className="card-actions">
                <button className="btn btn-outline border-b-4 border-[#D99904] text-[#D99904] hover:text-[#D99904]">Buy Now</button>
              </div>
            </div>
          </div>
        ))
      }
      </div>
    </section>
  );
};

export default ChefRecommends;
