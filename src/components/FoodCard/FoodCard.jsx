
const FoodCard = ({item, button}) => {
    const {name,image, price, recipe} = item;
    return (
        <div className="grid md:grid-cols-3 gap-6">
        
          <div className="card bg-[#F3F3F3] w-96 shadow-xl rounded-none">
            <figure>
              <img
                src={image}
                alt={name}
                className="w-full"
              />
            </figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-950 text-white">${price}</p>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{recipe}</p>
              <div className="card-actions">
                <button className="btn btn-outline border-b-4 border-[#D99904] text-[#D99904] hover:text-[#D99904]">{button}</button>
              </div>
            </div>
          </div>

      </div>
    );
};

export default FoodCard;