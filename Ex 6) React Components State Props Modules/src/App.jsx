import React, { useState } from 'react';
import UserProfile from './components/UserProfile';
import './App.css';

export default function App() {
  const [points, setPoints] = useState(10);

  const skills = ['Java', 'React', 'HTML', 'CSS'];

  const addPoint = () => setPoints(points + 1);

  const subtractPoint = () => {
    if (points > 0) {
      setPoints(points - 1);
    }
  };

  return (
    <div className="app">
      <h1>Exercise 6: User Profile</h1>

      <UserProfile
        name="Tamil Malar"
        role="Full Stack Developer"
        skills={skills}
        points={points}
        onAddPoint={addPoint}
        onSubPoint={subtractPoint}
      />
    </div>
  );
}
