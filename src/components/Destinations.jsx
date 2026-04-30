import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const destinations = [
  "Goa",
  "Manali",
  "Kashmir",
  "Kerala",
];

export default function Destinations() {
  const sectionRef = useRef();

useEffect(() => {
  const cards = sectionRef.current.querySelectorAll(".card");

  gsap.fromTo(
    cards,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );
}, []);

  return (
    <div ref={sectionRef} className="py-16 px-10 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Popular Destinations
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {destinations.map((place, i) => (
          <div
            key={i}
            className="card bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={`https://picsum.photos/300/200?random=${i}`}
              className="w-full h-48 object-cover rounded-t-lg"
            />

            <div className="p-4 text-center font-semibold">
              {place}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}