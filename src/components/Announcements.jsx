import { useEffect, useState } from "react";
import "../Styling/Announcements.css";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([
    "New grant application deadline: June 15, 2025",
    "Research policy updates available now",
    "RFMO portal maintenance on May 20th, 9–11AM",
    "Submit your quarterly reports before May 30",
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  return (
    <div className="announcement-banner">
      <p className="announcement-text">
        {announcements[currentIndex]}
      </p>
    </div>
  );
}
