import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items , title,  img}) => {
  return (
    <div className="pt-16">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 max-w-screen-lg mx-auto my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline border-b-4 border-b-slate-950 mt-4">Order Your Favourite Food </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
