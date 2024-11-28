import {
  FaAd,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
} from "react-icons/fa";
import { FaMessage, FaShop } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4">
          <li>
            <NavLink to="/dashboard/userHome">
              {" "}
              <FaHome></FaHome>User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              {" "}
              <FaCalendar></FaCalendar>Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              {" "}
              <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              {" "}
              <FaAd></FaAd>Add A Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
              {" "}
              <FaList></FaList>My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/"> <FaHome></FaHome>Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu"> <FaList></FaList>Menu</NavLink>
          </li>
          <li>
            <NavLink to="/order/salad"> <FaShop></FaShop>Shop</NavLink>
          </li>
          <li>
            <NavLink to="/"> <FaMessage></FaMessage>Contact</NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
