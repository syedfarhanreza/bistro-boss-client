import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item, button }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      //  TODO:  send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price,
      }
      axiosSecure.post('/carts', cartItem)
      .then(res =>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
    } else {
      Swal.fire({
        title: "You are not logged In",
        text: "Please Login to order food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login Now!",
      }).then((result) => {
        if (result.isConfirmed) {
          // sent to the login page
          navigate("/login", {state: {from: location}});
        }
      });
    }
  };
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card bg-[#F3F3F3] w-96 shadow-xl rounded-none">
        <figure>
          <img src={image} alt={name} className="w-full" />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-950 text-white">
          ${price}
        </p>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn  border-b-4 border-b-[#D99904] text-[#D99904] hover:text-[#D99904] hover:bg-gray-950"
            >
              {button}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
