import React from 'react';
import './App.css'

function Hero() {
  return (
    <div className='hero'>
      <h1 className="logo">FitQuest</h1>
      <nav className="links">
        <a href="/">Workouts</a>
        <a href="/about">Progress</a>
        <a href="/login">Nutrition</a>
        <a href="/register">Community</a>
      </nav>
      <nav className="links2">
        <a href="/">Profile</a>
        <a href="/about">Get Started</a>
      </nav>
    </div>
  )
}

function Dashboard() { 
  return (
    <div>
      <section className="intro">
        <h2>Unlock your potential</h2>
        <p>
          With personalized workouts, progress tracking, and a community that motivates you to reach your goals.
        </p>
        <div className="intro-buttons">
          <button className="cta-btn primary">Start Your Journey</button>
          <button className="cta-btn">View Workouts</button>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>🎯 Goal Focused</h3>
          <p>Set and achieve your fitness goals with our guided programs.</p>
        </div>
        <div className="feature">
          <h3>📈 Track Progress</h3>
          <p>Monitor your improvements with detailed analytics.</p>
        </div>
        <div className="feature">
          <h3>🏋️ Expert Guidance</h3>
          <p>Follow professional workout routines and nutrition plans.</p>
        </div>
      </section>
    </div>
  )
}

function Styles(){
    return(
      <div>
        <section className="workouts">
          <h2>Choose Your Workout Style</h2>
            <p className="subtitle">
              Discover the perfect training program that matches your fitness level and goals
             </p>

        <div className="workout-grid">
          <div className="workout-card">
            <h3>💪 Strength Training</h3>
              <p>Build muscle and increase power with weight training routines</p>
                <span className="meta">45 workouts • 30-60 min</span>
                  <button className="cta-btn primary">Start Training</button>
          </div>

          <div className="workout-card">
            <h3>🏃 Cardio Blast</h3>
              <p>High-intensity workouts to boost your cardiovascular health</p>
                <span className="meta">32 workouts • 20-45 min</span>
              <button className="cta-btn primary">Start Training</button>
          </div>

          <div className="workout-card">
            <h3>🔥 HIIT Workouts</h3>
              <p>Maximum results in minimum time with high-intensity intervals</p>
              <span className="meta">28 workouts • 15-30 min</span>
              <button className="cta-btn primary">Start Training</button>
          </div>

          <div className="workout-card">
            <h3>🧘 Yoga & Mindfulness</h3>
              <p>Improve flexibility, balance, and mental well-being</p>
            <span className="meta">38 workouts • 30-90 min</span>
            <button className="cta-btn primary">Start Training</button>
          </div>
       </div>
       </section>

      </div>

    )
  }

  function TrackProgress() {
  return (
    <section className="track-progress">
      <h2>Track Your Progress</h2>
      <p className="subtitle">
        Stay motivated with detailed insights into your fitness journey
      </p>

      <div className="progress-grid">
        <div className="progress-card">
          <h3>📊 Weekly Progress</h3>
          <p className="stat">85%</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "85%" }}></div>
          </div>
          <span>4 of 5 workouts completed</span>
        </div>

        <div className="progress-card">
          <h3>🔥 Current Streak</h3>
          <p className="stat">12 days</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "60%" }}></div>
          </div>
          <span>Your longest streak yet!</span>
        </div>

        <div className="progress-card">
          <h3>⚡ Calories Burned</h3>
          <p className="stat">2,847</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "70%" }}></div>
          </div>
          <span>This week</span>
        </div>

        <div className="progress-card">
          <h3>🏆 Goals Achieved</h3>
          <p className="stat">8/10</p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "80%" }}></div>
          </div>
          <span>Monthly targets</span>
        </div>
      </div>

      <div className="challenge">
        <h3>Ready for Your Next Challenge?</h3>
        <p>You're doing great! Keep up the momentum and unlock new achievements.</p>
        <div className="challenge-buttons">
          <button className="cta-btn primary">Start Today's Workout</button>
          <button className="cta-btn">View All Stats</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 FitQuest. All rights reserved.</p>
      <nav className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </nav>
    </footer>
  )
}

                
function App() {
  return (
    <div>
      <Hero />
      <Dashboard />
      <Styles/>
      <TrackProgress/>
      <Footer />

    </div>
  );
};

export default HomePage;
