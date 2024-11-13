import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import FoodCard from "../../../components/FoodCard/FoodCard";
import "./OrderTab.css"; // Custom CSS file for styling

// Helper function to chunk items into groups of 6
const chunkItems = (items, size) => {
  const chunks = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
};

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const itemChunks = chunkItems(items, itemsPerPage); // Split items into groups of 6
  const totalPages = itemChunks.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
      setCurrentPage(swiperInstance.realIndex);
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
      setCurrentPage(swiperInstance.realIndex);
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto">
      <Swiper
        spaceBetween={30}
        slidesPerView={1} // Only show one "slide" at a time, which will contain 6 items
        onSlideChange={(swiper) => setCurrentPage(swiper.realIndex)}
        onSwiper={setSwiperInstance}
        allowTouchMove={false} // Disable touch move for more control
      >
        {itemChunks.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-3 gap-10">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item} button={"Add to Cart"} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Controls */}
      <div className="pagination-container">
        <button
          className={`pagination-button ${currentPage === 0 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          &larr;
        </button>

        <span className="page-indicator">{currentPage + 1} / {totalPages}</span>

        <button
          className={`pagination-button ${currentPage === totalPages - 1 ? "disabled" : ""}`}
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default OrderTab;
