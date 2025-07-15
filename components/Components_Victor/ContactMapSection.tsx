import React from 'react';
import { styles } from './styles/SectionContactMap.styles';

const ContactMapSection = () => {
  const handleSendMessage = () => {
    console.log('Mensaje enviado');
  };

  const openMap = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = 'https://maps.app.goo.gl/examplelink';
    window.open(url, '_blank');
  };

  return (
    <div style={styles.container}>
      {/* Sección de Contacto */}
      <div style={styles.contactSection}>
        <h2 style={styles.sectionTitle}>Feel free to ask anything</h2>
        
        <input
          style={styles.input}
          placeholder="Name"
          type="text"
        />
        
        <input
          style={styles.input}
          placeholder="Email"
          type="email"
        />
        
        <textarea
          style={{
            ...styles.input,
            height: 100,
            verticalAlign: 'top' // Reemplazo para textAlignVertical
          }}
          placeholder="Message"
          rows={4}
        />
        
        <button style={styles.button} onClick={handleSendMessage}>
          <span style={styles.buttonText}>Send Message</span>
        </button>
      </div>

      {/* Sección de Mapa */}
      <div style={styles.locationSection}>
        <h2 style={styles.sectionTitle}>Where you can find us</h2>
        <p style={styles.address}>120-240 Rio de Janeiro - State of Rio de Janeiro, Brazil</p>
        
        <div style={styles.mapContainer}>
          <div style={{ height: '400px', width: '100%' }}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBebAB3_uDkkz9C1NhkDNmas5_jM-CbcqA&q=-22.9068,-43.1729&zoom=14`}
              allowFullScreen
            />
          </div>
        </div>
        
        <a href="#" onClick={openMap} style={styles.mapLink}>
          Av. Licio Costa - View larger map
        </a>
        
        <h3 style={styles.areaTitle}>BARRA DA TIJUCA</h3>
        
        <div style={styles.infoBox}>
          <h4 style={styles.infoTitle}>Casa da Reserva</h4>
          <p style={styles.infoText}>Manipendi logico</p>
          <p style={styles.infoText}>A.uuecon</p>
        </div>
        
        <p style={styles.mapFooter}>
          Map data ©2023 Google | Terms of Use | Report a map error
        </p>
      </div>
    </div>
  );
};

export default ContactMapSection;