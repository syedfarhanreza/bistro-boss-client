import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
            {items.map((item) => (
              <FoodCard key={item._id} item={item} button={"Add to Cart"}></FoodCard>
            ))}
          </div>
    );
};

export default OrderTab;