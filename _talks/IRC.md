---
title: "Intelligent Overspeed Control in Autonomous Vehicles with DQN Deep Reinforcement Learning."
collection: talks
type: "Conference proceedings talk"
permalink: /talks/IRC
venue: "RUEC 2025 1st International Research Conference (IRC)"
date: 2025-09-06
location: "Rajshahi, Bangladesh"
---

<img src='/images/IRC.jpg'>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/109.pptx';">View Slides</button>

<!-- <button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/pid_1599.pdf';">IEEE Article</button> -->

## Introduction

In this talk, we explore the implementation of our research titled **“Intelligent Overspeed Control in Autonomous Vehicles with DQN Deep Reinforcement Learning.”**

## Introduction

- Road accidents cause about 3700 deaths per day (WHO)
- Reckless driving and over-speeding are major causes
- Different zones require different speed limits
  - Residential
  - School zones
  - Highways
- Need intelligent speed control system

---

## Research Background

- Traditional speed control lacks adaptability
- Reinforcement Learning learns from environment interaction
- Deep Reinforcement Learning improves performance
- Research gap:
  - Limited work on zone-based intelligent speed control

---

## Research Objective

- Develop a DQN-based intelligent speed control system
- Detect over-speeding in different zones
- Apply intelligent deceleration:
  - High
  - Medium
  - Low
- Optimize vehicle speed according to zone limits

---

## Methodology

- 4×4 grid environment simulation
- Zone-based speed limits (20–80 km/h)
- Inputs:
  - Current speed
  - Zone speed limit
  - Speed difference
- Action space:
  - High deceleration
  - Medium deceleration
  - Low deceleration
- Reward function:
  - Encourage safe speed

---

## System Architecture

- Environment state input
- LSTM-based DQN model
- Action selection mechanism
- Speed adjustment output

---

## Key Findings

- Model adapts to different speed zones
- Intelligent deceleration improves safety
- Effective decision-making under varying conditions

---

## Discussion & Implications

- Reduces over-speeding in multiple zones
- Adapts to uncertain driving environments
- Supports autonomous and semi-autonomous driving safety

---

## Conclusion

- DQN-based speed control is effective
- LSTM-DQN selects appropriate deceleration
- Dynamic speed control improves road safety

---

## Future Work

- Use real-world driving datasets
- Multi-agent learning for traffic scenarios
- Add pedestrian and collision detection
- Real-time deployment in autonomous vehicles

---

## Thank You

Feel free to contribute, raise issues, or suggest improvements!

<h3>After Technical Session </h3>
<img src='/images/IRC1.jpg'>
<h6>Rajshahi University (RU)</h6>
