import React from 'react';
import { styles } from './styles/SectionContactMap.styles';

const ContactMapSection = () => {
  const handleSendMessage = () => {
    console.log('Mensaje enviado');
  };

  return (
    <div style={styles.container}>
      <div style={styles.row}>
        <div style={styles.contactSection}>
          <h2 style={styles.sectionTitle}>Feel free to ask anything</h2>

          <input style={styles.input} type="text" placeholder="Name" />
          <input style={styles.input} type="email" placeholder="Email" />
          <textarea style={styles.textarea} placeholder="Message" rows={5} />

          <button style={styles.button} onClick={handleSendMessage}>
            <span style={styles.buttonText}>Send Message</span>
          </button>
        </div>

        <div style={styles.locationSection}>
          <h2 style={styles.sectionTitle}>Where you can find us</h2>
          <p style={styles.address}>📍 120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>

          <div style={styles.mapContainer}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBebAB3_uDkkz9C1NhkDNmas5_jM-CbcqA&q=-22.9068,-43.1729&zoom=14"
              allowFullScreen
            />
          </div>

          <a
            href="https://maps.app.goo.gl/examplelink"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.mapLink}
          >
            Av. Lício Costa - View larger map
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMapSection;
