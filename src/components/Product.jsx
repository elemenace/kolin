import React from "react";

function Product() {
  return (
    <div className="bg-yellow-50 min-h-screen w-full flex flex-col items-start justify-center px-6 text-left relative bg-cover bg-center">
      <div className="relative z-10">
      <p className="text-5xl font-bold text-[#15454e] leading-tight mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
      Explore Our
      Beauty Products
        </p>
        
        {/* Boxes Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Makeup Box */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="makeu.webp"
              alt="Makeup Products"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-[#15454e] mb-4">Makeup</h3>
            <p className="text-gray-600">Explore our wide range of makeup products for a flawless look.</p>
          </div>

          {/* Face Care Box */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="face.webp"
              alt="Face Care Products"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-[#15454e] mb-4">Face Care</h3>
            <p className="text-gray-600">Discover skincare products to nourish and hydrate your skin.</p>
          </div>

          {/* Body Care Box */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="body.avif"
              alt="Body Care Products"
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-2xl font-bold text-[#15454e] mb-4">Body Care</h3>
            <p className="text-gray-600">Pamper yourself with premium body care products.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
