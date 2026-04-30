export default function PillarCard({ number, icon, title, desc }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm p-6 text-center relative border border-gray-100">

      {/* Number Badge */}
      <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
        {number}
      </div>

      {/* Icon */}
      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-50 rounded-full mb-5">
        {icon}
      </div>

      {/* Title */}
      <h4 className="font-semibold text-[#0B132B]">
        {title}
      </h4>

      {/* Underline */}
      <div className="w-10 h-[2px] bg-blue-500 mx-auto my-2 rounded-full"></div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}