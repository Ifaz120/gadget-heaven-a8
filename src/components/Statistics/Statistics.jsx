import React from 'react';

const Statistics = () => {
  return (
    <div>
      <div className="bg-[#9538E2] text-center text-white pt-10 pb-10 flex flex-col gap-y-5">
        <h2 className="text-3xl font-bold">Statistics</h2>
        <p>
          Track insights and analyze your data easily. <br />
          Get a clear overview of performance and trends.
        </p>
      </div>
      <div className="text-black w-[90%] mx-auto">
        <h2 className="text-2xl font-bold pb-10 pt-10">Statistics Overview</h2>

        <div className="flex justify-center items-center h-40">
          <p className="text-3xl font-bold">No data available</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;