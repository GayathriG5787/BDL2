import React from "react";

const cards = [
  {
    title: "Gretel-ACTGAN",
    description: "Model for generating highly dimensional, mostly numeric, tabular data",
  },
  // You can repeat or map more card content here
  {
    title: "Gretel-ACTGAN",
    description: "Model for generating highly dimensional, mostly numeric, tabular data",
  },
  {
    title: "Gretel-ACTGAN",
    description: "Model for generating highly dimensional, mostly numeric, tabular data",
  },
];

const GradientCards = () => {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side gradient with circle */}
      <div className="relative w-1/2 bg-white flex justify-center items-center overflow-hidden">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-300 to-transparent rounded-full blur-3xl"></div>
        <div className="z-10 w-32 h-32 bg-white rounded-full shadow-2xl"></div>
      </div>

      {/* Right side cards */}
      <div className="w-1/2 bg-white px-4 py-8 flex flex-col justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg p-4 max-w-sm border border-gray-100"
          >
            <h3 className="text-blue-600 font-semibold">{card.title}</h3>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GradientCards;