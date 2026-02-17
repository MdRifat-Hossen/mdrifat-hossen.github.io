---
title: "Tversky Loss Mechanisms: A ResUNet Approach to Improving Brain Tumor Segmentation."
collection: talks
type: "Conference proceedings talk"
permalink: /talks/QPAIN
venue: "2025 IEEE International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN 2025)"
date: 2025-03-31
location: "Saidpur, Bangladesh"
---

<img src='/images/QPAIN.jpg'>

<button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/1599.pdf';">View Slides</button> <button class = "btn" onclick="window.location.href='http://mdrifat-hossen.github.io/files/pid_1599.pdf';">IEEE Article</button>

## Introduction

In this talk, we explore the implementation of our research titled **“Tversky Loss Mechanisms: A ResUNet Approach to Improving Brain Tumor Segmentation.”**

Biomedical imaging plays a critical role in healthcare, particularly in detecting and diagnosing brain tumors. Brain tumors—whether benign or malignant—can significantly disrupt brain function. Early detection is especially important because malignant tumors can grow rapidly.

Magnetic Resonance Imaging (MRI) is widely used for brain imaging. However, manually segmenting tumors from MRI scans is labor-intensive, time-consuming, and often inconsistent due to differences between observers. To address these challenges, our work proposes a deep-learning-based automated segmentation approach.

---

## Objectives

The main objectives of this research are:

- To improve brain tumor segmentation accuracy using a **ResUNET model**.
- To address **class imbalance** using the **Tversky loss function**, which helps detect small tumor regions.
- To improve segmentation performance, especially for small and critical tumor areas.
- To evaluate the proposed model and compare it with traditional CNN and U-Net methods.

---

## Methodology

A **dual-model approach** was adopted:

1. First, a **ResNet-50 classifier**, pre-trained on ImageNet, was used to detect whether a tumor is present.
2. If a tumor was detected, the image was passed to a **ResUNET model** for segmentation.

The ResUNET architecture integrates:

- Residual connections
- Convolutional layers
- Max pooling and ReLU activation in the encoder
- A decoder to reconstruct spatial features and generate a binary segmentation mask

To handle class imbalance, the **Tversky loss function** was used during training, improving sensitivity to small tumor pixels.

Training used:

- Generator-based approach
- Batch size of 16
- Early stopping to prevent overfitting

Performance was evaluated using standard segmentation metrics.

---

## Metrics and Evaluation

To evaluate performance, the following metrics were used:

- Dice Coefficient
- Intersection over Union (IoU)
- Precision, Recall, and F1-score

### Results

- Dice Score: **0.98**
- IoU: **0.95**
- Classification Accuracy: **98%**

These results indicate strong agreement between predicted masks and ground truth annotations.

---

## Comparative Study

The model was compared with several recent approaches, including:

- SEResU-Net
- ResUNet+
- U-Net++
- CNN + U-Net Ensemble

The proposed model achieved higher Dice and IoU scores than many existing methods, demonstrating improved segmentation performance.

---

## Results Visualization

The study includes:

- Segmentation outputs comparing original images, ground-truth masks, and predicted masks
- Training and validation accuracy curves
- Loss curves
- Confusion matrix results

These visual results confirm the robustness of the proposed method.

---

## Conclusion

The proposed **ResUNET model with Tversky loss** provides a robust and efficient solution for brain tumor segmentation.

Key strengths:

- High segmentation accuracy
- Effective handling of class imbalance
- Improved detection of small tumor regions
- Efficient dual-stage architecture

This approach can support faster, more consistent diagnosis and improved treatment planning.

---

## Future Work

Future directions include:

- Cross-validation and testing on external datasets
- Improving generalization
- Extending the model to **3D MRI scans**
- Applying the framework to other cancer types

---

## Acknowledgment

We would like to thank all collaborators and institutions who supported this research and contributed to its successful completion.

Feel free to contribute, raise issues, or suggest improvements!

<h3>After Technical Session </h3>
<img src='/images/QPAIN.jpg'>
<h6>Bangladesh Army University of Science and Technology (BAUST)</h6>
