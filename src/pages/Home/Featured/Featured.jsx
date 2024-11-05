import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-12 my-20">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"From our menu"}
            ></SectionTitle>
            <div className="md:flex justify-center items-center pt-12 pb-20 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Nov 22,2024</p>
                    <p>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eligendi quis quisquam aperiam, possimus accusantium excepturi unde suscipit culpa libero assumenda expedita, est nulla sed hic totam id! Saepe, reiciendis.</p>
                    <button className="btn btn-outline border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;