// EngagementChart.js
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '', value: 10 },
  { name: '', value: 15 },
  { name: '', value: 8 },
  { name: '', value: 12 },
  { name: '', value: 14 },
  { name: '7D', value: 10 },
  { name: '15D', value: 15 },
  { name: '1M', value: 8 },
  { name: '6M', value: 12 },
  { name: '1Y', value: 14 },
];

const EngagementChart = () => {
  return (
    <div className="max-lg:max-w-[600px] mt-16 xl:mt-6 h-1/2 py-4 px-3 md:py-6 md:px-5 rounded-[30px] border border-[#FF914D] shadow-md flex flex-col font-poppins">
      <div className="flex justify-between items-center mb-4"> 
        <h2 className="text-lg font-semibold text-gray-800">Engagement Rate</h2>
        <button className="px-3 font-semibold py-1 border rounded-full text-gray-700 border-purple-300 text-sm flex items-center">
          All <span className="ml-1">&#9662;</span> 
        </button>
      </div>
      <div className="relative flex-1 flex items-center">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 0 }}>
            <XAxis dataKey="name" tickMargin={10}/>
            <YAxis tickMargin={10}   />
            <Tooltip contentStyle={{ backgroundColor: '#f9fafb', border: '1px solid #e5e7eb', color: '#374151' }} />
            <Line type="linear" dataKey="value" stroke="#6366f1" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EngagementChart;
