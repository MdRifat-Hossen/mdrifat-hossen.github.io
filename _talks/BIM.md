---
title: "Evaluation Targeted Productivity in Bangladesh’s Garment Sector Using Machine Learning and Deep Learning with Explainable AI: A Data-Driven Method for Enhanced Production Planning"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/BIM
venue: "2025 3rd International Conference on Big Data, IoT and Machine Learning"
date: 2025-09-27
location: "Dhaka, Bangladesh"
---

<img src='/images/BIM1.jpg'>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/10.pptx';">View Slides</button>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/pid_10.pdf';">IEEE Article</button>

In this talk, we explore the implementation of our research titled **“Evaluation of Targeted Productivity in Bangladesh’s Garment Sector Using Machine Learning and Deep Learning with Explainable AI”**

---

## Introduction

- Garment industry contributes over 80% of Bangladesh export earnings
- Production planning often based on manual judgment
- Manual targets lead to:
  - Unrealistic goals
  - Inefficiency
  - Resource wastage
- Need for data-driven productivity prediction

---

## Problem Statement

- Target productivity set manually by factory managers
- Manual estimation problems:
  - Personal bias
  - Ignoring real-time data
  - Missed deadlines
- Research gap:
  - Most studies predict actual productivity
  - Few studies predict optimal target productivity

---

## Research Questions

- Can ML/DL predict targeted productivity accurately?
- Which model performs best?
- How can XAI make predictions interpretable?

---

## Research Objectives

- Develop ML and DL models for prediction
- Identify key productivity factors
- Use SHAP and LIME for explainability
- Build transparent planning framework

---

## Methodology

- Dataset:
  - Kaggle garment productivity dataset (1197 samples)
  - Additional industrial data collected
- Preprocessing:
  - Missing value handling
  - Outlier removal (IQR)
  - Label encoding
  - Standardization

---

## Models and Evaluation

- Machine Learning models
- Deep Learning models
- Performance comparison using:
  - R² score
  - Cross-validation

---

## Model Interpretability

- SHAP:
  - Global feature importance
- LIME:
  - Local prediction explanation
- Goal:
  - Understand why a prediction is made

---

## Key Findings

- Neural Network achieved R² = 0.987
- Important features identified:
  - SMV
  - Idle Men
  - Style Changes
- XAI provides transparent explanations

---

## Discussion & Implications

- Enables realistic production targets
- Reduces inefficiency
- Improves resource allocation
- Supports data-driven factory management

---

## Conclusion

- Data-driven framework successfully developed
- Neural Network performed best
- XAI improves trust and usability

---

## Future Work

- Use real-time data streams
- Validate across multiple factories
- Explore temporal models (RNN, LSTM)
- Develop decision support dashboard

---

## Acknowledgement

- Thanks to Square Food & Beverage Ltd for support

---

## Thank You

Feel free to contribute, raise issues, or suggest improvements!

<h3>After Technical Session </h3>
<img src='/images/BIM.jpg'>
<h6>Dhaka Internation University</h6>
