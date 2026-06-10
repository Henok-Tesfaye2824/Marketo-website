import React from 'react';

const homeFeaturedItems = [
  {
    id: 1,
    name: "Ethiopian Premium Coffee Beans",
    price: 850,
    desc: "100% Organic Arabica coffee beans, medium roasted, sourced directly from Yirgacheffe."
  },
  {
    id: 2,
    name: "Handwoven Traditional Habesha Kemis",
    price: 4500,
    desc: "Beautifully detailed, custom-made traditional dress stitched with high-quality local cotton."
  },
  {
    id: 3,
    name: "Pure Organic Honey (Mar)",
    price: 600 ,
    desc: "Natural golden honey harvested from the pristine highlands of Gojjam."
  }
];

const FeaturedProducts = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Featured Products Highlights</h2>
      <p style={styles.sectionSubtitle}>Handpicked local items selected for peak quality.</p>
      
      <div style={styles.grid}>
        {homeFeaturedItems.map((product) => (
          <div key={product.id} style={styles.card}>
            <h3 style={styles.cardName}>{product.name}</h3>
            <p style={styles.cardPrice}>{product.price} Birr</p>
            <p style={styles.cardDesc}>{product.desc}</p>
            <button style={styles.cardButton}>View Product</button>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '2.2rem',
    color: '#2c3e50',
    margin: '0 0 10px 0',
  },
  sectionSubtitle: {
    color: '#7f8c8d',
    marginBottom: '40px',
  },
  grid: {
    display: 'flex',
    gap: '25px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e1e8ed',
    borderRadius: '6px',
    padding: '20px',
    minWidth: '260px',
    maxWidth: '300px',
    flex: '1',
    textAlign: 'left',
    boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
  },
  cardName: {
    margin: '0 0 10px 0',
    color: '#2c3e50',
    fontSize: '1.2rem',
  },
  cardPrice: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#2ecc71',
    margin: '0 0 10px 0',
  },
  cardDesc: {
    fontSize: '0.9rem',
    color: '#7f8c8d',
    lineHeight: '1.4',
    marginBottom: '20px',
  },
  cardButton: {
    width: '100%',
    padding: '10px',
    background: '#2c3e50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default FeaturedProducts;