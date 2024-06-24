import React from 'react'

const Features = () => {
  return (
    <section className="parent-features">
      <div className="features-container">
          <h2 className="section-title">Features</h2>
          <div className="feature-cards">
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-book"></i>
                  </div>
                  <h3 className="feature-title">Dictionary</h3>
                  <p className="feature-description">Explore a vast collection of Igala words and their detailed definitions, all at your fingertips.</p>
              </div>
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-volume-up"></i>
                  </div>
                  <h3 className="feature-title">Pronunciations </h3>
                  <p className="feature-description">Listen to authentic audio pronunciations of Igala words to enhance your language skills.</p>
              </div>
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-comment"></i>
                  </div>
                  <h3 className="feature-title">Usage Examples</h3>
                  <p className="feature-description">Understand the context and usage of Igala words through real-world examples and sentences.</p>
              </div>
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-exchange-alt"></i>
                  </div>
                  <h3 className="feature-title">Variations</h3>
                  <p className="feature-description">Discover variations of Igala words, allowing you to explore nuances in meaning and usage.</p>
              </div>
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-language"></i>
                  </div>
                  <h3 className="feature-title">Translator</h3>
                  <p className="feature-description">Effortlessly translate Igala words or phrases into other languages for clear communication.</p>
              </div>
              <div className="feature-card">
                  <div className="icon">
                      <i className="fas fa-cogs"></i>
                  </div>
                  <h3 className="feature-title">API</h3>
                  <p className="feature-description">Access our Igala language resources and features programmatically through our API for seamless integration.</p>
              </div>
          </div>
      </div>
  </section>
  )
}

export default Features
