import React from 'react'

const Statistics = () => {
  return (
    <section className="statistics-section">
        <h1 className="statistics-title">Database Stats ⚡📈</h1>
        <h2 className="related-title">By the Numbers</h2>
        <div className="statistics-container">
            <div className="statistic">
                <p className="stats-digits">800</p>
                <h2>Total Words</h2>
            </div>
            <div className="statistic">
                <p className="stats-digits">400</p>
                <h2>Total Examples</h2>
            </div>
           
            <div className="statistic">
              <p className="stats-digits">0</p>
              <h2>Total Audio Pronunciations</h2> 
            </div>
        </div>
    </section>
  )
}

export default Statistics
