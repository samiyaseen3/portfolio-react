import React, { useState } from 'react';
import frontEndCertificateImage from '../assets/images/Certificate.jpeg'; // Importing image

function HighlightSection() {
  // State to control modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Function to handle "See" button click
  const handleSeeClick = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalVisible(false);
    setCurrentImage(null);
  };

  const highlights = [
    {
      title: 'Front-end Certificate',
      description: 'Completed Front-end With React Within 100 Hours Of Training From 24/9/2023 To 11/3/2024',
      imageSrc: frontEndCertificateImage, 
    },
 
  ];

  return (
    <section className="highlight section" id="Highlight">
      <div className="container section-title">
        <h2>Highlight</h2>
        <p>My Highlights</p>
      </div>
      <div className="container highlight-items">
        {highlights.map((highlight, index) => (
          <div className="high-item" key={index}>
            <h2>{highlight.title}</h2>
            <p>{highlight.description}</p>
            <button onClick={() => handleSeeClick(highlight.imageSrc)}>See</button>
          </div>
        ))}
      </div>

      {/* Modal for displaying the image */}
      {isModalVisible && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>×</span>
            <img src={currentImage} alt="Certificate" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
}

export default HighlightSection;
