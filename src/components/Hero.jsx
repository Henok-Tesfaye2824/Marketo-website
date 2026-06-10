import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    if (window.MktoForms2) {
      window.MktoForms2.loadForm("https://app-sj01.marketo.com", "123-ABC-456", 1234);
    }
  }, []);

  return (
    <section style={styles.heroSection}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Come Trade With Us</h1>
        <p style={styles.heroSubtitle}>
          Discover top Products With Fair Price!
        </p>
        
        
        <div style={styles.formBox}>
          <form id="mktoForm_1234"></form>
        </div>
      </div>
    </section>
  );
};

const styles = {
  heroSection: {

    background: 'linear-gradient( gray,darkgray )',
    padding: '80px 20px',
    textAlign: 'center',
    borderBottom: '3px solid #7ccd7c',
  },
  heroContent: {
    maxWidth: '700px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.8rem',
    color: '#2c3e50',
    margin: '0 0 15px 0',
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#4f5f6f',
    lineHeight: '1.6',
    marginBottom: '35px',
  },
  formBox: {
    background: 'lightgray',
    padding: '25px',
    borderRadius: '8px',
    maxWidth: '380px',
    margin: '0 auto',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  }
};

export default Hero;