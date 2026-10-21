// Exercise 6: Components, State, Props & Modules
import React, { useState } from 'react';

// Sub-Module Component 1: Badge Display
export const BadgeList = ({ badges }) => (
  <div className="flex gap-2">
    {badges.map((b, i) => (
      <span key={i} className="badge">{b}</span>
    ))}
  </div>
);

// Sub-Module Component 2: Counter Controls
export const StatCounter = ({ label, value, onIncrement, onDecrement }) => (
  <div>
    <h4>{label}: {value}</h4>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </div>
);

// Main Component receiving Props and managing State
export default function UserProfile({ name, role, skills, points, onAddPoint, onSubPoint }) {
  return (
    <div className="profile-card">
      <h2>{name}</h2>
      <p>{role}</p>
      <BadgeList badges={skills} />
      <StatCounter 
        label="Points" 
        value={points} 
        onIncrement={onAddPoint} 
        onDecrement={onSubPoint} 
      />
    </div>
  );
}

