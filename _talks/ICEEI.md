---
title: "Enhancing Robustness and Accuracy of Bone-Conducted Speech Emotion Recognition via Transformer Models"
collection: talks
type: "Conference proceedings talk"
permalink: /talks/ICEEI
venue: "IEEE 10th International Conference on Electrical Engineering and Informatics (ICEEI 2025)"
date: 2025-11-13
location: "Malysia"
---

<img src='/images/70.png'>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/70.pptx';">View Slides</button>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/pid_70.pdf';">IEEE Article</button>

In this talk, we explore the implementation of our research titled **“Enhancing Robustness and Accuracy of Bone-Conducted Speech Emotion Recognition via Transformer Models”**

## Motivation

- Speech Emotion Recognition suffers from:
  - Information loss
  - Performance degradation
- Need better temporal modeling
- Transformer models capture long-range dependencies
- Goal: Bone-conducted speech emotion recognition system

---

## Research Question

- How can a Transformer model improve emotion recognition using bone-conducted speech?

---

## Objectives

- Develop a Transformer-based model
- Optimize model performance
- Evaluate using EmoBone dataset
- Compare results with existing methods

---

## Introduction

- Speech conveys information and emotions
- Emotion recognition important for:
  - Human-computer interaction
  - Healthcare
  - Call centers
  - Education and security
- Speech Emotion Recognition (SER):
  - Detect emotions from speech signals
  - Uses acoustic features like pitch and energy

---

## Dataset Preparation

- EmoBone dataset used
- Emotion categories:
  - Happy
  - Angry
  - Sad
  - Calm
  - Neutral
  - Fear
  - Surprise
  - Disgust

---

## Methodology

- Audio preprocessing using torchaudio
- Feature extraction using MFCC
- Model architecture:
  - CNN feature extraction
  - Transformer encoder
  - Dense layer with Softmax
- Training:
  - Cross-entropy loss
  - Learning rate optimization
- Evaluation:
  - Accuracy
  - Confusion matrix
  - Classification report

---

## Results

- Transformer shows steady accuracy improvement
- Confusion matrix indicates strong classification
- ROC curve and per-class accuracy analyzed

---

## Discussion

- Balanced dataset improves performance
- Transformer handles temporal patterns effectively
- Some confusion between similar emotions
- Overall accuracy achieved: **99%**

---

## Achievements

- State-of-the-art accuracy on EmoBone dataset
- Improved classification of bone-conducted speech
- Reduced information loss and degradation

---

## Conclusion

- Transformer model significantly improves SER performance
- Effective for bone-conducted speech analysis
- Suitable for real-world emotion recognition systems

---

## Future Scope

- Transfer learning
- Multi-modal fusion
- Larger datasets
- Real-time emotion recognition systems

---

## Thank You

Feel free to contribute, raise issues, or suggest improvements!
