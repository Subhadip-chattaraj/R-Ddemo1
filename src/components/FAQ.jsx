import { useState } from "react"
import React from 'react'
import "../Styling/FAQ.css"

const faqs = [
  {
    question: "What is a research grant?",
    answer:
      "A research grant is funding awarded to support academic or scientific research projects. It typically covers costs such as equipment, materials, and personnel.",
  },
  {
    question: "Who is eligible for a research grant?",
    answer:
      "Eligibility depends on the specific grant, but most are open to faculty, researchers, or graduate students affiliated with recognized institutions.",
  },
  {
    question: "How do I apply for a research grant?",
    answer:
      "You can apply by submitting a detailed proposal through the grant provider’s portal, outlining your objectives, methodology, and budget.",
  },
  {
    question: "What are the evaluation criteria?",
    answer:
      "Proposals are usually evaluated based on relevance, feasibility, innovation, and potential impact.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQs About Research Grants</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`faq-answer ${openIndex === index ? "open" : ""}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ
