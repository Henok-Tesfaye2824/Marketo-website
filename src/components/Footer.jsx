import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <div style={styles.content}>
        <p style={styles.copyright}>&copy; 2026, Bartery Marketing Website All rights reserved.</p>
        <p style={styles.trackingNotice}>
          <strong>This website is biuld for training purspose only be awere, now will bw responsible for any data and money lost </strong> 
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footerContainer: {
    background: '#2c3e50',
    color: '#ffffff',
    padding: '40px 20px',
    marginTop: '60px',
    borderTop: '4px solid #2ecc71',
  },
  content: {
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center',
  },
  copyright: {
    margin: '0 0 15px 0',
    fontSize: '1rem',
  },
  trackingNotice: {
    fontSize: '0.8rem',
    color: '#bdc3c7',
    lineHeight: '1.5',
    margin: 0,
  }
};

export default Footer;