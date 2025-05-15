import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPen,
  FaPaperPlane,
} from "react-icons/fa";
import "../Styling/Feedback.css";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "suggestion",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      type: "suggestion",
      message: "",
    });
  };

  return (
    <div className="feedback-form-container">
      <h2 className="feedback-title">Submit Your Feedback</h2>
      {submitted && <div className="feedback-success">Thank you for your feedback!</div>}
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          <FaUser className="icon" /> Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <FaEnvelope className="icon" /> Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <FaCommentDots className="icon" /> Type of Feedback:
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="suggestion">Suggestion</option>
            <option value="issue">Report an Issue</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label>
          <FaPen className="icon" /> Message:
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">
          <FaPaperPlane className="icon" /> Submit
        </button>
      </form>
    </div>
  );
}
