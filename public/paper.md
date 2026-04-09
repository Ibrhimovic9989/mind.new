# AQAL: A Foundation Model Approach to Predicting Neurodiverse Brain Activity

**Ibrahim Raza**
Leeza Care Research & Development Foundation

**April 2026**

---

## Abstract

We present AQAL, a computational system that predicts how neurodiverse (autistic) brains process sensory stimuli by combining Meta's TRIBE v2 brain encoding model (177M parameters) with a statistical neurodiverse transform derived from 871 resting-state fMRI scans in the ABIDE I dataset. AQAL maps text, audio, and video inputs onto 20,484 cortical surface vertices and generates both neurotypical and neurodiverse brain activation predictions in real time. Our connectivity analysis identifies 820 statistically significant inter-regional differences (p < 0.05) between ASD and typically-developing groups across 100 Schaefer atlas parcels, with the limbic temporal pole, default mode network, and visual cortex showing the largest effect sizes. We further introduce a sensory profiling module that quantifies divergence across seven canonical brain networks, enabling practical applications in accessibility auditing and personalized accommodation design. The full system — model, API, and interactive visualization — is publicly available.

**Keywords:** neurodiversity, autism, brain encoding, fMRI, ABIDE, foundation model, sensory processing

---

## 1. Introduction

Autism spectrum conditions affect approximately 1 in 36 children worldwide (CDC, 2023). Understanding how autistic brains process sensory information differently from neurotypical brains is critical for designing inclusive environments, educational strategies, and clinical interventions. However, functional neuroimaging studies are expensive, slow, and inaccessible to most practitioners and families.

Recent advances in brain encoding models — neural networks trained to predict brain activity from sensory stimuli — offer a new paradigm. Meta's TRIBE v2 (d'Ascoli et al., 2026) demonstrated that a single transformer-based model can predict cortical surface activity from vision, audition, and language inputs with meaningful accuracy across subjects.

We asked: **Can a brain encoding model, combined with population-level connectivity data from autism neuroimaging, predict how a neurodiverse brain would respond to arbitrary stimuli?**

AQAL is our answer. Rather than requiring individual brain scans, AQAL uses a statistical transform trained on the ABIDE dataset to convert neurotypical brain predictions into neurodiverse variants, making neuroscience-informed predictions accessible through a web API.

### 1.1 Contributions

1. **A CPU-based statistical transform** that converts neurotypical TRIBE v2 predictions to neurodiverse predictions using connectivity effect sizes from 871 ABIDE subjects.
2. **A connectivity analysis pipeline** identifying 820 significant inter-regional differences between ASD and TD groups across 4,950 tested connections.
3. **A sensory profiling system** that maps brain-level divergence onto seven functional networks (visual, auditory, motor, language, social, default mode, salience).
4. **A publicly accessible platform** (API + web interface) enabling real-time neurodiverse brain prediction from text, audio, or video input.

---

## 2. Related Work

### 2.1 Brain Encoding Models

Brain encoding models learn a mapping from stimulus features to neural activity. Early approaches used linear ridge regression on hand-crafted features (Huth et al., 2016; de Heer et al., 2017). More recent work leverages deep neural network representations as intermediate features, with models like BrainLM (Ortega Caro et al., 2023), BrainBERT (Thomas et al., 2023), and TRIBE v2 (d'Ascoli et al., 2026) achieving increasingly accurate predictions.

TRIBE v2 is notable for its multimodal architecture: it accepts vision (V-JEPA2), audio (Wav2Vec-BERT), and language (LLaMA 3.2) inputs simultaneously and predicts activity across 20,484 cortical surface vertices using an 8-layer transformer encoder.

### 2.2 Autism Neuroimaging

The Autism Brain Imaging Data Exchange (ABIDE; Di Martino et al., 2014) provides resting-state fMRI data from over 1,100 individuals across 20+ sites, making it the largest open autism neuroimaging dataset. Studies using ABIDE have consistently identified differences in functional connectivity between ASD and typically-developing (TD) groups, particularly in the default mode network, salience network, and limbic regions (Hull et al., 2017; Holiga et al., 2019).

### 2.3 Gap

No prior work has combined a multimodal brain encoding model with population-level autism connectivity data to generate stimulus-specific neurodiverse brain predictions. AQAL bridges this gap.

---

## 3. Methods

### 3.1 System Architecture

AQAL consists of four stages:

```
Stimulus (text/audio/video)
        │
        ▼
┌─────────────────────┐
│  Feature Extraction  │  LLaMA 3.2 + V-JEPA2 + Wav2Vec-BERT
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  TRIBE v2 Encoder   │  8-layer transformer, 177M params
│  (NT Prediction)    │  → 20,484 vertices × T timesteps
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  ND Transform       │  Trained on 871 ABIDE subjects
│  (ASD Prediction)   │  Per-vertex scale + shift
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│  Analysis &         │  Divergence metrics, sensory profile,
│  Visualization      │  connectivity mapping, GPT interpretation
└─────────────────────┘
```

### 3.2 TRIBE v2 Brain Encoder

We use Meta's TRIBE v2 (Transformer for Relating and Interpreting Brain Encoding, version 2) as the base neurotypical brain encoder. The model architecture consists of:

- **Feature extractors:** LLaMA 3.2-3B (text, 6 layers), V-JEPA2-ViT-G (video, 2 layers), Wav2Vec-BERT 2.0 (audio, 2 layers)
- **Feature projectors:** Per-modality MLPs mapping extracted features to a common hidden dimension of 1,152
- **Temporal smoothing:** Gaussian kernel (size 9) for hemodynamic response alignment
- **Transformer encoder:** 8 layers, 18 heads, head dimension 64, feedforward dimension 3,072
- **Subject layers:** Low-rank output adaptation (bottleneck dimension 2,048) with 0.1 dropout
- **Output space:** 20,484 vertices on the fsaverage5 cortical surface mesh (10,242 per hemisphere)

The model operates at 2 Hz temporal resolution (one prediction every 0.5 seconds). Modality dropout of 0.3 is applied during training, enabling the model to make predictions from any subset of input modalities.

### 3.3 ABIDE Dataset Processing

We use the Autism Brain Imaging Data Exchange I (ABIDE I) dataset, comprising 871 resting-state fMRI scans:

| Group | N | Sites |
|-------|---|-------|
| ASD | 403 | 20 |
| TD | 468 | 20 |

**Preprocessing.** All scans were preprocessed using the Configurable Pipeline for the Analysis of Connectomes (C-PAC) with band-pass filtering (0.01–0.1 Hz) and no global signal regression.

**Parcellation.** We extracted mean timeseries from 100 cortical parcels using the Schaefer 2018 atlas, yielding a (100 × T) matrix per subject, where T varies by scan duration.

**Connectivity.** For each subject, we computed a 100 × 100 Pearson correlation matrix and applied Fisher's z-transform (arctanh) for variance stabilization, producing 4,950 unique connectivity features per subject.

### 3.4 Statistical Group Comparison

For each of the 4,950 unique connectivity pairs, we performed an independent-samples t-test comparing ASD and TD groups:

$$t_{ij} = \frac{\bar{z}_{ij}^{ASD} - \bar{z}_{ij}^{TD}}{\sqrt{\frac{s_{ij}^{2,ASD}}{n_{ASD}} + \frac{s_{ij}^{2,TD}}{n_{TD}}}}$$

where $\bar{z}_{ij}$ is the mean Fisher-z connectivity between regions *i* and *j*, and *s²* is the sample variance.

**Results.** 820 of 4,950 connections (16.6%) were significant at p < 0.05. The most affected regions ranked by normalized effect size:

| Rank | Region | Network | Effect |
|------|--------|---------|--------|
| 1 | Limbic Temporal Pole R | Limbic | 1.000 |
| 2 | Limbic Temporal Pole L | Limbic | 0.857 |
| 3 | Visual 9 L | Visual | 0.551 |
| 4 | Default Mode Temporal 2 R | Default Mode | 0.549 |
| 5 | Default Mode Temporal 2 L | Default Mode | 0.527 |

These findings are consistent with the autism neuroimaging literature, which identifies limbic hyperconnectivity and default mode network alterations as hallmarks of ASD (Hull et al., 2017).

### 3.5 Neurodiverse Transform

We derive a per-vertex transform that converts neurotypical TRIBE v2 predictions to neurodiverse predictions. The transform operates as follows:

For each of 20,484 cortical vertices *v*:

1. Identify the Schaefer ROI *r(v)* to which vertex *v* belongs.
2. Compute the normalized effect size *e_r* for that ROI from the connectivity t-tests.
3. Compute scale and shift factors:

$$\text{scale}_v = 1.0 + (e_r \times 0.3 - 0.15)$$

$$\text{shift}_v = \tanh(\bar{t}_r \times 0.1) \times e_r \times 0.15$$

where $\bar{t}_r$ is the mean t-statistic across all significant connections involving ROI *r*.

4. Apply the transform:

$$\hat{y}_v^{ND} = \hat{y}_v^{NT} \times \text{scale}_v + \text{shift}_v$$

The scale factors range from 0.85 to 1.15, and shift factors range from approximately -0.05 to 0.01. Of 20,484 vertices, 18,067 (88.3%) are affected by the transform, reflecting the widespread but heterogeneous nature of connectivity differences in autism.

The resulting transform is stored as a PyTorch tensor and published on HuggingFace (Ibrahim9989/neurobrain-nd-transform).

### 3.6 Sensory Profiling

We map vertex-level divergence between NT and ND predictions onto seven canonical functional brain networks:

| Network | Brain Function | Key Regions |
|---------|---------------|-------------|
| Visual | Processing sight | V1–V8, FFC, VVC |
| Auditory | Processing sound | A1, A4, A5, MBelt, LBelt |
| Language | Speech and words | Broca's area, Wernicke's, STV |
| Motor | Movement and body awareness | M1, S1, S2, 6a, 6d |
| Social | Understanding others | STS, TE1, TG |
| Default Mode | Self-reflection, mind-wandering | PCC, POS, RSC |
| Salience | Filtering what matters | Insula, dACC |

For each network *N*:

$$D_N = \frac{1}{|V_N|} \sum_{v \in V_N} |\hat{y}_v^{NT} - \hat{y}_v^{ND}|$$

Scores are normalized to [0, 1] by dividing by the maximum network divergence. The resulting sensory profile provides an interpretable summary of which processing domains are most differently activated in the neurodiverse prediction.

### 3.7 Visualization and Rendering

Brain surface predictions are rendered using Nilearn's surface plotting module on the fsaverage5 mesh. For each timestep, we generate four views (left lateral, left medial, right lateral, right medial) using:

- **Colormap:** cold_hot (symmetric diverging)
- **Threshold:** 60th percentile of absolute vertex values
- **Dynamic range:** Capped at 98th percentile for adaptive contrast
- **Resolution:** 150 DPI, base64-encoded PNG

### 3.8 Infrastructure

| Component | Technology |
|-----------|-----------|
| Brain model | TRIBE v2 (Meta, PyTorch) |
| API server | FastAPI on Azure VM (8 cores, 32 GB RAM) |
| Frontend | Next.js on Vercel |
| Interpretation | Azure OpenAI (GPT) |
| Model hosting | HuggingFace Hub |

All inference runs on CPU. No GPU is required, making the system accessible for deployment on standard cloud instances.

---

## 4. Results

### 4.1 Connectivity Analysis

Analysis of 871 ABIDE I subjects revealed:

- **820 significant connections** out of 4,950 tested (16.6%, p < 0.05 uncorrected)
- **Limbic system** showed the largest effect sizes, consistent with known emotional regulation differences in autism
- **Default mode network** showed bilateral temporal alterations, consistent with self-referential processing differences
- **Visual cortex** alterations align with documented sensory processing variations

### 4.2 Network-Level Differences

Aggregating connection-level statistics to the Yeo 7-network parcellation:

| Network | Mean Difference | Direction |
|---------|----------------|-----------|
| Limbic | Highest | Hyperconnectivity |
| Default Mode | High | Altered connectivity |
| Visual | Moderate-High | Modified processing |
| Salience | Moderate | Altered filtering |
| Dorsal Attention | Moderate | Shifted focus patterns |
| Control | Low-Moderate | Mild executive differences |
| Somatomotor | Low-Moderate | Subtle motor differences |

### 4.3 Transform Coverage

The neurodiverse transform affects 18,067 of 20,484 cortical vertices (88.3%), with scale factors ranging from 0.85 to 1.15 and shift factors from -0.05 to 0.01. The transform is denser in temporal and limbic regions and sparser in primary motor cortex, matching the known neuroanatomy of autism.

### 4.4 Real-Time Performance

On a Standard_D8as_v4 Azure VM (8 cores, 32 GB RAM, CPU-only):

| Operation | Latency |
|-----------|---------|
| Text → events (TTS + WhisperX) | ~3–5s |
| TRIBE v2 inference (10 timesteps) | ~8–15s |
| ND transform application | < 100ms |
| Surface rendering (4 views × 10 timesteps) | ~5–8s |
| Total end-to-end | ~20–30s |

---

## 5. Applications

### 5.1 Sensory Accessibility Auditing

AQAL can process video of physical spaces (classrooms, offices, retail environments) and generate second-by-second sensory stress predictions for neurodiverse individuals. The system outputs:

- A stress timeline with visual, auditory, and social components
- Flagged high-stress moments (threshold > 0.5)
- Actionable accessibility recommendations generated via LLM interpretation

### 5.2 Educational Accommodation Design

By profiling how specific educational content (lectures, videos, reading material) differently activates neurodiverse brain networks, AQAL can inform:

- Content pacing and sensory load management
- Optimal break timing based on predicted neural fatigue
- Modality-specific accommodations (e.g., reducing auditory complexity when auditory network divergence is high)

### 5.3 Clinical Communication

The sensory profile output provides a quantitative, brain-data-grounded framework for communicating how a neurodiverse individual might experience specific stimuli — replacing subjective descriptions with measurable network-level predictions.

---

## 6. Limitations

1. **No GPU fine-tuning.** The neurodiverse transform is a statistical approximation derived from connectivity differences, not a directly fine-tuned neural network. GPU fine-tuning of TRIBE v2 on neurodiverse fMRI data would likely improve prediction accuracy but was not feasible due to compute constraints.

2. **Indirect mapping.** The transform maps connectivity-level group differences onto vertex-level predictions. This assumes that resting-state connectivity differences generalize to task-evoked activity patterns — a reasonable but imperfect assumption.

3. **Group-level, not individual.** AQAL produces an average neurodiverse prediction, not a personalized one. Autism is a spectrum, and individual variation is substantial. Future work should incorporate individual calibration.

4. **Uncorrected p-values.** The 820 significant connections are reported at p < 0.05 without multiple comparison correction. With FDR correction, the number of significant connections decreases. We report uncorrected results to characterize the full landscape of differences while acknowledging the inflated false positive rate.

5. **ABIDE I limitations.** The dataset is heterogeneous (20 sites, varying protocols) and skewed toward males. Results may not generalize equally to females or underrepresented populations.

---

## 7. Future Work

- **GPU fine-tuning** of TRIBE v2 on neurodiverse fMRI data (pending NDA and SPARK dataset access applications)
- **Individual calibration** via a 5-minute sensory assessment to personalize predictions
- **Expanded datasets** including ABIDE II, NDA collections, and SPARK to reach 10,000+ subjects
- **Additional neurodivergent conditions** (ADHD, sensory processing disorder, anxiety)
- **EEG integration** for real-time, portable brain monitoring alongside fMRI-trained predictions
- **Clinical validation** studies comparing AQAL predictions against observed behavioral responses

---

## 8. Conclusion

AQAL demonstrates that combining a state-of-the-art multimodal brain encoding model with population-level autism neuroimaging data can produce meaningful neurodiverse brain predictions from arbitrary sensory stimuli. While the current statistical transform approach is an approximation, it makes neuroscience-informed predictions accessible without requiring individual brain scans or GPU infrastructure. The identification of 820 significant connectivity differences across 871 ABIDE subjects provides a robust empirical foundation, and the system's real-time performance enables practical applications in accessibility, education, and clinical communication.

By open-sourcing the platform, we aim to make computational neurodiversity research accessible to researchers, educators, clinicians, and families who lack access to neuroimaging facilities.

---

## References

CDC. (2023). Autism Spectrum Disorder: Data & Statistics. Centers for Disease Control and Prevention.

d'Ascoli, S., et al. (2026). TRIBE v2: A Foundation Model of Vision, Audition, and Language for In-Silico Neuroscience. Meta AI Research.

de Heer, W. A., Huth, A. G., Griffiths, T. L., Gallant, J. L., & Theunissen, F. E. (2017). The hierarchical cortical organization of human speech processing. *Journal of Neuroscience*, 37(27), 6539–6557.

Di Martino, A., et al. (2014). The autism brain imaging data exchange: towards a large-scale evaluation of the intrinsic brain architecture in autism. *Molecular Psychiatry*, 19(6), 659–667.

Holiga, S., et al. (2019). Patients with autism spectrum disorders display reproducible functional connectivity alterations. *Science Translational Medicine*, 11(481).

Hull, J. V., et al. (2017). Resting-state functional connectivity in autism spectrum disorders: A review. *Frontiers in Psychiatry*, 7, 205.

Huth, A. G., de Heer, W. A., Griffiths, T. L., Theunissen, F. E., & Gallant, J. L. (2016). Natural speech reveals the semantic maps that tile human cerebral cortex. *Nature*, 532(7600), 453–458.

Ortega Caro, J., et al. (2023). BrainLM: A Foundation Model for Brain Activity Recordings. *arXiv preprint arXiv:2311.00656*.

Schaefer, A., et al. (2018). Local-global parcellation of the human cerebral cortex from intrinsic functional connectivity MRI. *Cerebral Cortex*, 28(9), 3095–3114.

Thomas, A. W., et al. (2023). Self-supervised learning of brain dynamics from broad neuroimaging data. *Advances in Neural Information Processing Systems*, 36.

---

## Appendix A: Model Parameters

| Parameter | Value |
|-----------|-------|
| Total parameters | 177M |
| Hidden dimension | 1,152 |
| Transformer layers | 8 |
| Attention heads | 18 |
| Head dimension | 64 |
| Feedforward dimension | 3,072 |
| Output vertices | 20,484 |
| Temporal resolution | 2 Hz |
| Low-rank bottleneck | 2,048 |
| Modality dropout | 0.3 |
| Subject dropout | 0.1 |

## Appendix B: ABIDE I Demographics

| Metric | ASD | TD |
|--------|-----|-----|
| N | 403 | 468 |
| Mean age | 16.9 ± 7.8 | 16.6 ± 7.0 |
| Male (%) | 86.6 | 84.2 |
| Sites | 20 | 20 |

## Appendix C: System Availability

| Resource | URL |
|----------|-----|
| Web interface | https://neurobrain.vercel.app |
| API endpoint | https://neurobrain-api.eastus.cloudapp.azure.com |
| ND transform weights | https://huggingface.co/Ibrahim9989/neurobrain-nd-transform |
| Source code (frontend) | https://github.com/Ibrhimovic9989/neurobrain |
| Source code (model) | https://github.com/Ibrhimovic9989/tribeneuro |

---

*Correspondence: ibrahim.raza@leeza.app*

*This work was conducted at Leeza Care Research & Development Foundation.*
