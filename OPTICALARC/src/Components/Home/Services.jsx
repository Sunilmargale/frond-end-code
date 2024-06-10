import React, { useState } from 'react';



const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How to get a job in Optical Arc?",
      answer: "1.1️⃣Online Assessment Test. This is the first round of the Infosys recruitment process.  2️⃣Technical Interview. If you qualified for the online test, which is the first round, then you go for a technical interview.3️⃣HR Interview. If you clear the technical interview round, you will be eligible for the HR round."
    },
    {
      question: "Who is eligible for Optical Arc?",
      answer: "To be eligible for a job at Optical Arc, you must have a bachelor's degree in engineering, computer applications, or a related field."
    },
    {
      question: "What does Optical Arc company do?",
      answer: "Infosys provides software development, maintenance and independent validation services to companies in finance, insurance, manufacturing and other domains. "
    },
    {
      question: "How is an Optical Arc interview?      ",
      answer: "Good, easy, written assessment , technical round and HR round . "
    },
    {
      question: "",
      answer: ""
    },
  ];

  return (
    <div className="mt-10 ml-10">
      <h2 className="text-4xl font-bold mb-6 text-blue-900">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          <button
            className="text-lg font-semibold text-blue-700 w-full text-left focus:outline-none"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          )}
          <div className="border-b-2 border-gray-200 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-1/2 pl-8 pr-8">
          <h2 className="text-7xl font-bold mb-4 text-blue-900">We Are Providing...</h2>
          <p className='text-gray-700 mt-5 text-lg'>
            "Optimize your digital presence with our expert Web Application Maintenance and Support services, ensuring your website remains cutting-edge and competitive in today's fast-paced online landscape."
          </p>
        </div>
        <div className="w-1/2">
          <img src='src/Images/services.png' alt="About Us" className="w-full h-auto" />
        </div>
      </div>

      <div className="flex items-center gap-60 mt-10 ml-10">
        <div>
          <h1 className="text-3xl font-bold mb-4">Custom Software Development</h1>
          <p className="max-w-xl mb-8">
            Optical Arc's custom software boosts business performance by optimizing processes, increasing efficiency, and enhancing decision-making capabilities. Benefit from our agile development process, which enables us to deliver high-quality software solutions quickly and efficiently, with a focus on meeting your specific business needs.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full mb-8">Contact Us</button>
        </div>
        <div className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">DBMS</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Web Application</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Android Application</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">iOS Development</label>
            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-2">
              <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      <FAQ />
      
    </div>
  );
};

export default Services;
