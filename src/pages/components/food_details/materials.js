import { useEffect, useState } from "react";

export default function Materials({ data }) {
  return (
    <div className="w-full py-4 justify-center px-12">
      <div className="bg-white py-6 rounded-3xl overflow-hidden drop-shadow-lg">
        <div className="h-8 w-full text-white bg-primary px-5 flex items-center text-lg">
          Материалууд:
        </div>
        <div className="w-full px-4 grid grid-cols-3 gap-4 mt-4">
          {data &&
            data.map((row, i) => (
              <div
                key={i}
                className="w-full py-2 text-white rounded-3xl flex justify-center px-4  drop-shadow-lg"
                style={{ backgroundColor: row.color }}
              >
                {row.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
