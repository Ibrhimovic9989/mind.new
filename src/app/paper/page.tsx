"use client";

export default function PaperPage() {
  return (
    <main className="min-h-screen">
      <Nav />
      <article className="max-w-[760px] mx-auto px-6 pt-28 pb-24">
        {/* Header */}
        <header className="mb-16 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] font-medium tracking-widest uppercase">Technical Paper</span>
            <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-[var(--muted)] font-medium">April 2026</span>
          </div>
          <h1 className="text-[clamp(1.6rem,4vw,2.6rem)] leading-[1.15] tracking-[-0.03em] font-medium text-white mb-6">
            AQAL: A Foundation Model Approach to Predicting{" "}
            <span className="gradient-text">Neurodiverse Brain Activity</span>
          </h1>
          <div className="text-[14px] text-[var(--muted)] font-light space-y-2">
            <div className="flex items-center justify-center gap-4">
              <a href="https://www.linkedin.com/in/mohammed-ibrahim-raza-2a560b248" target="_blank" rel="noopener noreferrer" className="text-[var(--text)] font-normal hover:text-[var(--accent)] transition">Ibrahim Raza</a>
              <span className="text-[var(--border)]">&middot;</span>
              <a href="https://www.linkedin.com/in/merajf/" target="_blank" rel="noopener noreferrer" className="text-[var(--text)] font-normal hover:text-[var(--accent)] transition">Meraj Faheem</a>
            </div>
            <p>Leeza Care Research &amp; Development Foundation</p>
          </div>
        </header>

        {/* Abstract */}
        <Section id="abstract">
          <SectionTitle>Abstract</SectionTitle>
          <div className="paper-card p-6">
            <p className="text-[14px] leading-[1.85] text-[var(--text)] font-light">
              We present AQAL, a computational system that predicts how neurodiverse (autistic) brains process sensory stimuli by combining a proprietary multimodal brain encoding model (177M parameters) with a statistical neurodiverse transform derived from 871 resting-state fMRI scans from a large-scale multi-site autism neuroimaging consortium. AQAL maps text, audio, and video inputs onto 20,484 cortical surface vertices and generates both neurotypical and neurodiverse brain activation predictions in real time. Our connectivity analysis identifies 387 FDR-corrected significant connections (q &lt; 0.05) between ASD and typically-developing groups across 4,950 tested pairs, with site harmonization and age/sex covariates applied across 100 cortical parcels, with the limbic temporal pole, default mode network, and visual cortex showing the largest effect sizes. We further introduce a sensory profiling module that quantifies divergence across seven canonical brain networks, enabling practical applications in accessibility auditing and personalized accommodation design.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["neurodiversity", "autism", "brain encoding", "fMRI", "foundation model", "sensory processing", "cortical mapping"].map(kw => (
                <span key={kw} className="text-[10px] px-2 py-0.5 rounded-full border border-[var(--border)] text-[var(--muted)]">{kw}</span>
              ))}
            </div>
          </div>
        </Section>

        {/* Table of Contents */}
        <Section id="toc">
          <SectionTitle>Contents</SectionTitle>
          <nav className="grid grid-cols-2 gap-2">
            {[
              ["1", "Introduction", "introduction"],
              ["2", "Related Work", "related-work"],
              ["3", "Methods", "methods"],
              ["4", "Results", "results"],
              ["5", "Applications", "applications"],
              ["6", "Limitations & Critique", "limitations"],
              ["7", "Roadmap", "roadmap"],
              ["8", "Conclusion", "conclusion"],
            ].map(([num, title, id]) => (
              <a key={id} href={`#${id}`} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-white/[0.03] transition group">
                <span className="text-[11px] text-[var(--accent)] font-medium w-4">{num}</span>
                <span className="text-[13px] text-[var(--muted)] group-hover:text-white transition">{title}</span>
              </a>
            ))}
          </nav>
        </Section>

        {/* 1. Introduction */}
        <Section id="introduction">
          <SectionTitle number="1">Introduction</SectionTitle>
          <P>Autism spectrum conditions affect approximately 1 in 36 children worldwide (CDC, 2023). Understanding how autistic brains process sensory information differently from neurotypical brains is critical for designing inclusive environments, educational strategies, and clinical interventions. However, functional neuroimaging studies are expensive, slow, and inaccessible to most practitioners and families.</P>
          <P>Recent advances in brain encoding models — neural networks trained to predict brain activity from sensory stimuli — offer a new paradigm. State-of-the-art multimodal transformers can now predict cortical surface activity from vision, audition, and language inputs with meaningful accuracy across subjects.</P>
          <P>We asked: <strong className="text-white">Can a brain encoding model, combined with population-level connectivity data from autism neuroimaging, predict how a neurodiverse brain would respond to arbitrary stimuli?</strong></P>
          <P>AQAL is our answer. Rather than requiring individual brain scans, AQAL uses a proprietary statistical transform trained on a large multi-site fMRI corpus to convert neurotypical brain predictions into neurodiverse variants, making neuroscience-informed predictions accessible through a web API.</P>

          <SubTitle>1.1 Contributions</SubTitle>
          <ol className="space-y-2 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">A CPU-based statistical transform</strong> that converts neurotypical predictions to neurodiverse predictions using connectivity effect sizes from 871 subjects across 20 clinical sites.</li>
            <li><strong className="text-white font-normal">A connectivity analysis pipeline</strong> identifying 387 FDR-corrected significant connections (1,065 uncorrected) between ASD and TD groups across 4,950 tested pairs, with site harmonization and age/sex covariates.</li>
            <li><strong className="text-white font-normal">A sensory profiling system</strong> that maps brain-level divergence onto seven functional networks (visual, auditory, motor, language, social, default mode, salience).</li>
            <li><strong className="text-white font-normal">A publicly accessible platform</strong> (API + web interface) enabling real-time neurodiverse brain prediction from text, audio, or video input.</li>
          </ol>
        </Section>

        {/* 2. Related Work */}
        <Section id="related-work">
          <SectionTitle number="2">Related Work</SectionTitle>

          <SubTitle>2.1 Brain Encoding Models</SubTitle>
          <P>Brain encoding models learn a mapping from stimulus features to neural activity. Early approaches used linear ridge regression on hand-crafted features (Huth et al., 2016; de Heer et al., 2017). More recent work leverages deep neural network representations, with models like BrainLM (Ortega Caro et al., 2023) and BrainBERT (Thomas et al., 2023) achieving increasingly accurate predictions across modalities.</P>
          <P>AQAL builds on this lineage with a proprietary multimodal architecture that accepts vision, audio, and language inputs simultaneously and predicts activity across 20,484 cortical surface vertices using a deep transformer encoder.</P>

          <SubTitle>2.2 Autism Neuroimaging</SubTitle>
          <P>Large-scale multi-site autism neuroimaging consortia have provided resting-state fMRI data from over 1,100 individuals, enabling population-level connectivity analysis. Studies using these datasets have consistently identified differences in functional connectivity between ASD and TD groups, particularly in the default mode network, salience network, and limbic regions (Hull et al., 2017; Holiga et al., 2019).</P>

          <SubTitle>2.3 Gap</SubTitle>
          <P>No prior work has combined a multimodal brain encoding model with population-level autism connectivity data to generate stimulus-specific neurodiverse brain predictions. AQAL bridges this gap.</P>
        </Section>

        {/* 3. Methods */}
        <Section id="methods">
          <SectionTitle number="3">Methods</SectionTitle>

          <SubTitle>3.1 System Architecture</SubTitle>
          <div className="paper-card p-5 my-6 font-mono text-[12px] text-[var(--muted)] leading-[1.7] overflow-x-auto">
            <pre>{`Stimulus (text / audio / video)
        │
        ▼
┌───────────────────────┐
│   Feature Extraction  │  Proprietary multimodal encoders
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   AQAL Brain Encoder  │  8-layer transformer, 177M params
│   (NT Prediction)     │  → 20,484 vertices × T timesteps
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   ND Transform        │  Trained on 871 multi-site subjects
│   (ASD Prediction)    │  Per-vertex scale + shift
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   Analysis &          │  Divergence metrics, sensory profile,
│   Visualization       │  connectivity mapping, interpretation
└───────────────────────┘`}</pre>
          </div>

          <SubTitle>3.2 AQAL Brain Encoder</SubTitle>
          <P>The AQAL brain encoder is a proprietary multimodal transformer trained to predict cortical surface activity from sensory inputs. The model architecture consists of:</P>
          <ul className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-disc list-inside">
            <li><strong className="text-white font-normal">Feature extractors:</strong> Dedicated encoders for text (6 layers), video (2 layers), and audio (2 layers) built on state-of-the-art foundation models</li>
            <li><strong className="text-white font-normal">Feature projectors:</strong> Per-modality MLPs mapping to a common hidden dimension of 1,152</li>
            <li><strong className="text-white font-normal">Temporal smoothing:</strong> Gaussian kernel (size 9) for hemodynamic response alignment</li>
            <li><strong className="text-white font-normal">Transformer encoder:</strong> 8 layers, 18 heads, head dimension 64, FF dimension 3,072</li>
            <li><strong className="text-white font-normal">Subject layers:</strong> Low-rank output adaptation (bottleneck 2,048) with 0.1 dropout</li>
            <li><strong className="text-white font-normal">Output space:</strong> 20,484 vertices on a standard cortical surface mesh (10,242 per hemisphere)</li>
          </ul>
          <P>The model operates at 2 Hz temporal resolution. Modality dropout of 0.3 enables predictions from any subset of input modalities.</P>

          <SubTitle>3.3 Training Dataset</SubTitle>
          <P>We trained the neurodiverse transform on a large-scale multi-site autism neuroimaging corpus comprising 871 resting-state fMRI scans:</P>
          <Table headers={["Group", "N", "Sites"]} rows={[["ASD", "403", "20"], ["TD", "468", "20"]]} />
          <P>All scans were preprocessed using a standard fMRI preprocessing pipeline with band-pass filtering (0.01–0.1 Hz) and no global signal regression. We extracted mean timeseries from 100 cortical parcels using a validated cortical parcellation, computed Pearson correlation matrices, and applied Fisher&apos;s z-transform for variance stabilization, producing 4,950 unique connectivity features per subject.</P>

          <SubTitle>3.4 Statistical Group Comparison</SubTitle>
          <P>For each of the 4,950 unique connectivity pairs, we performed independent-samples t-tests with age and sex as covariates and site effects residualized. After Benjamini-Hochberg FDR correction (q &lt; 0.05), 387 of 4,950 connections (7.8%) survived. For reference, 1,065 (21.5%) were significant uncorrected, and 48 (1.0%) survived Bonferroni correction.</P>
          <P>The most affected regions ranked by normalized effect size:</P>
          <Table
            headers={["Rank", "Region", "Network", "Effect"]}
            rows={[
              ["1", "Limbic Temporal Pole R", "Limbic", "1.000"],
              ["2", "Limbic Temporal Pole L", "Limbic", "0.857"],
              ["3", "Visual 9 L", "Visual", "0.551"],
              ["4", "Default Mode Temporal 2 R", "Default Mode", "0.549"],
              ["5", "Default Mode Temporal 2 L", "Default Mode", "0.527"],
            ]}
          />
          <P>These findings are consistent with the autism neuroimaging literature, which identifies limbic hyperconnectivity and default mode network alterations as hallmarks of ASD (Hull et al., 2017).</P>

          <SubTitle>3.5 Neurodiverse Transform</SubTitle>
          <P>We derive a proprietary per-vertex transform that converts neurotypical predictions to neurodiverse predictions. For each of 20,484 cortical vertices <I>v</I>:</P>
          <ol className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li>Identify the cortical ROI <I>r(v)</I> to which vertex <I>v</I> belongs.</li>
            <li>Compute the normalized effect size <I>e<sub>r</sub></I> for that ROI from connectivity t-tests.</li>
            <li>Compute scale and shift factors using a proprietary mapping function.</li>
            <li>Apply: <I>&ycirc;<sub>v</sub><sup>ND</sup> = &ycirc;<sub>v</sub><sup>NT</sup> &times; scale<sub>v</sub> + shift<sub>v</sub></I></li>
          </ol>
          <P>Of 20,484 vertices, 18,067 (88.3%) are affected by the transform, reflecting the widespread but heterogeneous nature of connectivity differences in autism.</P>

          <SubTitle>3.6 Sensory Profiling</SubTitle>
          <P>We map vertex-level divergence between NT and ND predictions onto seven canonical functional brain networks:</P>
          <Table
            headers={["Network", "Function", "Brain Areas"]}
            rows={[
              ["Visual", "Processing sight", "Primary and secondary visual cortex"],
              ["Auditory", "Processing sound", "Auditory cortex, belt regions"],
              ["Language", "Speech and words", "Broca's and Wernicke's areas"],
              ["Motor", "Movement and body", "Primary motor and somatosensory cortex"],
              ["Social", "Understanding others", "Superior temporal regions"],
              ["Default Mode", "Self-reflection", "Posterior cingulate, medial prefrontal"],
              ["Salience", "Filtering what matters", "Insula, anterior cingulate"],
            ]}
          />
          <P>Scores are normalized to [0, 1] by dividing by the maximum network divergence, providing an interpretable summary of which processing domains are most differently activated.</P>

          <SubTitle>3.7 Infrastructure</SubTitle>
          <Table
            headers={["Component", "Technology"]}
            rows={[
              ["Brain model", "AQAL Encoder (proprietary, PyTorch)"],
              ["API server", "Cloud VM (8 cores, 32 GB RAM)"],
              ["Frontend", "Next.js on Vercel"],
              ["Interpretation", "LLM-powered (GPT)"],
            ]}
          />
          <P>All inference runs on CPU. No GPU is required.</P>
        </Section>

        {/* 4. Results */}
        <Section id="results">
          <SectionTitle number="4">Results</SectionTitle>

          <SubTitle>4.1 Connectivity Analysis</SubTitle>
          <P>Analysis of 871 subjects across 20 clinical sites, with site harmonization and age/sex covariates, revealed 387 FDR-corrected significant connections out of 4,950 tested (7.8%, q &lt; 0.05). The limbic system showed the largest effect sizes, consistent with known emotional regulation differences. Default mode network showed bilateral temporal alterations. Age-stratified analysis showed the strongest signal in adolescents (12-18): 73 FDR connections from 174 ASD + 209 TD subjects. Children (0-12) yielded 0 FDR connections — insufficient power with 106 ASD + 116 TD subjects.</P>

          <SubTitle>4.2 Network-Level Differences</SubTitle>
          <Table
            headers={["Network", "Difference", "Direction"]}
            rows={[
              ["Limbic", "Highest", "Hyperconnectivity"],
              ["Default Mode", "High", "Altered connectivity"],
              ["Visual", "Moderate\u2013High", "Modified processing"],
              ["Salience", "Moderate", "Altered filtering"],
              ["Dorsal Attention", "Moderate", "Shifted focus"],
              ["Control", "Low\u2013Moderate", "Mild executive differences"],
              ["Somatomotor", "Low\u2013Moderate", "Subtle motor differences"],
            ]}
          />

          <SubTitle>4.3 Transform Coverage</SubTitle>
          <P>The neurodiverse transform affects 18,067 of 20,484 cortical vertices (88.3%), with scale factors ranging from 0.85 to 1.15 and shift factors from \u22120.05 to 0.01. The transform is denser in temporal and limbic regions and sparser in primary motor cortex, matching the known neuroanatomy of autism.</P>

          <SubTitle>4.4 Real-Time Performance</SubTitle>
          <Table
            headers={["Operation", "Latency"]}
            rows={[
              ["Text \u2192 events (TTS + ASR)", "~3\u20135s"],
              ["AQAL encoder inference (10 timesteps)", "~8\u201315s"],
              ["ND transform application", "< 100ms"],
              ["Surface rendering (4 views \u00d7 10 steps)", "~5\u20138s"],
              ["Total end-to-end", "~20\u201330s"],
            ]}
          />
        </Section>

        {/* 5. Applications */}
        <Section id="applications">
          <SectionTitle number="5">Applications</SectionTitle>

          <SubTitle>5.1 Sensory Accessibility Auditing</SubTitle>
          <P>AQAL can process video of physical spaces (classrooms, offices, retail environments) and generate second-by-second sensory stress predictions for neurodiverse individuals, including flagged high-stress moments and actionable accessibility recommendations.</P>

          <SubTitle>5.2 Educational Accommodation Design</SubTitle>
          <P>By profiling how specific educational content differently activates neurodiverse brain networks, AQAL can inform content pacing, optimal break timing, and modality-specific accommodations.</P>

          <SubTitle>5.3 Clinical Communication</SubTitle>
          <P>The sensory profile output provides a quantitative, brain-data-grounded framework for communicating how a neurodiverse individual might experience specific stimuli — replacing subjective descriptions with measurable network-level predictions.</P>
        </Section>

        {/* 6. Limitations & Critique */}
        <Section id="limitations">
          <SectionTitle number="6">Limitations &amp; Critique</SectionTitle>
          <P>We present an honest assessment of the structural weaknesses in AQAL v0.1. These are not caveats — they are the core problems that must be solved before AQAL can move beyond an accessibility heuristic toward clinical utility.</P>

          <SubTitle>6.1 The Transform is Statistics, Not Learning</SubTitle>
          <P>AQAL multiplies a neurotypical prediction by a fixed map derived from t-tests. This is a linear approximation that discards covariance structure between brain regions. A properly fine-tuned conditional encoder would learn the neurodiverse manifold directly from task fMRI, rather than patching a neurotypical prediction after the fact. GPU fine-tuning was not feasible due to compute constraints, but it is the single most important improvement needed.</P>

          <SubTitle>6.2 Resting-State to Task-Evoked Leap</SubTitle>
          <P>The transform extracts connectivity differences from resting-state fMRI (brains doing nothing) and applies them to task-evoked predictions (brains actively processing stimuli). This assumes that resting wiring differences map perfectly to how the brain processes real-time input — a major, imperfect assumption. While resting-state connectivity correlates with task-evoked patterns in the literature, the relationship is not one-to-one, and the degree of error this introduces is unquantified.</P>

          <SubTitle>6.3 The &ldquo;Average&rdquo; Neurodiverse Brain</SubTitle>
          <P>Autism is inherently heterogeneous. AQAL produces a single, generalized neurodiverse prediction by shifting a neurotypical baseline — this risks stereotyping neurodivergent processing. The same transform is applied to 88.3% of cortical vertices regardless of the individual. A 5-minute individual calibration module is planned but not yet validated.</P>

          <SubTitle>6.4 Statistical Rigor</SubTitle>
          <P>The v0.1 release reported 820 uncorrected connections (p &lt; 0.05). After implementing FDR correction, site harmonization, and age/sex covariates in v0.2, this drops to 387 FDR-corrected connections (q &lt; 0.05) — 1,065 uncorrected, 48 Bonferroni. The surviving 387 are reliable; the core findings in limbic and default mode networks persist. We publish both corrected and uncorrected maps for transparency. Bootstrap confidence intervals (200 iterations) yield a mean 95% CI width of 0.027 across 20,484 vertices.</P>

          <SubTitle>6.5 No Behavioral Ground Truth</SubTitle>
          <P>There is no validation that predicted ND divergence correlates with actual sensory overload, eye-tracking data, or caregiver report. Without behavioral validation, AQAL is a visualization engine, not a clinical tool. Prospective studies comparing predictions against physiological markers (pupil dilation, galvanic skin response, heart rate variability) are a prerequisite for any clinical claims.</P>

          <SubTitle>6.6 Dataset Limitations</SubTitle>
          <P>The training corpus is heterogeneous (20 sites, varying protocols, 86.6% male). Age ranges are mixed without stratification. Results may not generalize to females, young children, or underrepresented populations. Site harmonization and age-stratified transforms are in development.</P>
        </Section>

        {/* 7. Roadmap */}
        <Section id="roadmap">
          <SectionTitle number="7">Roadmap</SectionTitle>
          <P>Based on expert review, we divide the improvement plan into two tracks: what can be done on CPU (statistical and validation work) and what requires GPU compute (model retraining).</P>

          <SubTitle>7.1 Without GPU — Fix the Science</SubTitle>
          <ol className="space-y-2 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">FDR-corrected connectivity map.</strong> Re-run all 4,950 tests with Benjamini-Hochberg correction, site as random effect, age and sex as covariates. Publish both corrected and uncorrected maps.</li>
            <li><strong className="text-white font-normal">Age stratification.</strong> Split the 871 subjects into developmental bands (child, adolescent, adult) and compute separate transforms per band. No retraining — just regrouping the per-vertex factors.</li>
            <li><strong className="text-white font-normal">Uncertainty quantification.</strong> Bootstrap the transform (200+ iterations) to produce 95% credible intervals for each of 20,484 vertices. Propagate uncertainty to the seven network scores so the UI can display confidence ranges.</li>
            <li><strong className="text-white font-normal">5-minute individual calibration.</strong> Design a standardized stimulus set, collect brief behavioral or low-cost EEG responses, and fit a per-person scaling vector with ordinary least squares.</li>
            <li><strong className="text-white font-normal">Behavioral validation.</strong> Run prospective studies: child watches a classroom video, AQAL predicts high visual-network divergence, measure pupil dilation, gaze aversion, and caregiver stress rating. Report sensitivity, specificity, and calibration curves.</li>
            <li><strong className="text-white font-normal">Site harmonization.</strong> Standardize preprocessing choices, document protocol differences, release a clean metadata table to reduce noise before any GPU work.</li>
            <li><strong className="text-white font-normal">Clinical guardrails.</strong> Define referral language, risk-flag thresholds, and ethics documentation. Specify what &ldquo;increased visual and salience divergence&rdquo; triggers in a pediatric workflow — and what it does not.</li>
          </ol>

          <SubTitle>7.2 With GPU — Learn the Neurodiverse Brain</SubTitle>
          <ol className="space-y-2 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">Conditional encoder fine-tuning.</strong> Replace the statistical patch with GPU-accelerated fine-tuning of the 177M-parameter transformer directly on autistic task fMRI, using low-rank adapters per subgroup. Learn the ND manifold instead of multiplying by a fixed map.</li>
            <li><strong className="text-white font-normal">Developmental models.</strong> Train separate encoders for infants and toddlers using prospective datasets. Early detection lives in the first 18 months — adult resting-state maps cannot be extrapolated to babies.</li>
            <li><strong className="text-white font-normal">Inverse pipeline for screening.</strong> Train a brain-to-behavior model: take home video or eye-tracking, predict likelihood of atypical sensory processing using AQAL predictions as a generative prior. A mismatch score across seven networks becomes a risk flag, not a diagnosis.</li>
            <li><strong className="text-white font-normal">Multi-condition expansion.</strong> Joint training for ADHD, sensory processing disorder, and anxiety, plus EEG fusion for portable monitoring.</li>
            <li><strong className="text-white font-normal">End-to-end uncertainty.</strong> Use ensembles or Bayesian neural nets so credible intervals come from the model itself, not post-hoc bootstrapping.</li>
          </ol>

          <SubTitle>7.3 Toward Early Detection</SubTitle>
          <P>AQAL does not currently detect autism — it predicts brain activity given a stimulus. Early detection requires the inverse problem: observe naturalistic behavior, infer likely neural processing differences, and flag risk for follow-up. This requires three prerequisites:</P>
          <ol className="space-y-2 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">Train on infants and toddlers.</strong> The largest effects in AQAL are limbic and DMN, but early autism markers involve visual attention and social orienting in the first 18 months.</li>
            <li><strong className="text-white font-normal">Flip the pipeline.</strong> Instead of stimulus → brain, build brain → behavior. Compare predicted sensory profiles to real home videos or eye-tracking.</li>
            <li><strong className="text-white font-normal">Clinical pathway integration.</strong> Any risk flag must trigger a structured referral, not a label. Output example: &ldquo;increased visual and salience divergence relative to age norms, consider M-CHAT follow-up.&rdquo; Models do not replace clinical assessment.</li>
          </ol>

          <SubTitle>7.4 Toward Clinical Diagnostic Rigidity (SaMD)</SubTitle>
          <P>To transition from a heuristic tool to a regulated Software as a Medical Device, AQAL would need:</P>
          <ul className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-disc list-inside">
            <li>ISO 13485 Quality Management System with auditable version control</li>
            <li>Prospective clinical trials comparing predictions against ADOS-2 and ADI-R gold standards</li>
            <li>Physiological validation against real-time markers (HRV, GSR, cortisol)</li>
            <li>FDA De Novo classification pathway with strict Intended Use statement</li>
            <li>Predetermined Change Control Plan (PCCP) for safe algorithm updates</li>
            <li>Proof of clinical utility: clinician + AQAL outperforms clinician alone</li>
          </ul>
        </Section>

        {/* 8. Conclusion */}
        <Section id="conclusion">
          <SectionTitle number="8">Conclusion</SectionTitle>
          <P>AQAL is a promising accessibility design tool today. It demonstrates that combining a multimodal brain encoding model with population-level autism connectivity data can produce neuroscience-informed predictions from arbitrary stimuli — without individual brain scans or GPU infrastructure.</P>
          <P>However, the current system is a prototype, not a clinical instrument. The statistical transform is an approximation that discards individual variation, the connectivity map requires FDR correction, and no behavioral validation exists. These are not minor caveats — they are the core problems to solve.</P>
          <P>The path forward is clear: fix the statistics on CPU first (FDR correction, age stratification, behavioral validation), then invest GPU budget to replace the statistical patch with a learned conditional encoder. Only then can AQAL responsibly explore early detection as a screening aid within standard clinical workflows.</P>
          <P>By publishing both the platform and an honest account of its limitations, we aim to accelerate computational neurodiversity research while setting realistic expectations about what the system can and cannot do.</P>
        </Section>

        {/* References */}
        <Section id="references">
          <SectionTitle>References</SectionTitle>
          <div className="space-y-3 text-[13px] text-[var(--muted)] font-light leading-[1.7]">
            <Ref>CDC. (2023). Autism Spectrum Disorder: Data &amp; Statistics. Centers for Disease Control and Prevention.</Ref>
            <Ref>de Heer, W. A., Huth, A. G., Griffiths, T. L., Gallant, J. L., &amp; Theunissen, F. E. (2017). The hierarchical cortical organization of human speech processing. <Em>Journal of Neuroscience</Em>, 37(27), 6539–6557.</Ref>
            <Ref>Holiga, S., et al. (2019). Patients with autism spectrum disorders display reproducible functional connectivity alterations. <Em>Science Translational Medicine</Em>, 11(481).</Ref>
            <Ref>Hull, J. V., et al. (2017). Resting-state functional connectivity in autism spectrum disorders: A review. <Em>Frontiers in Psychiatry</Em>, 7, 205.</Ref>
            <Ref>Huth, A. G., de Heer, W. A., Griffiths, T. L., Theunissen, F. E., &amp; Gallant, J. L. (2016). Natural speech reveals the semantic maps that tile human cerebral cortex. <Em>Nature</Em>, 532(7600), 453–458.</Ref>
            <Ref>Ortega Caro, J., et al. (2023). BrainLM: A Foundation Model for Brain Activity Recordings. <Em>arXiv preprint arXiv:2311.00656</Em>.</Ref>
            <Ref>Thomas, A. W., et al. (2023). Self-supervised learning of brain dynamics from broad neuroimaging data. <Em>Advances in Neural Information Processing Systems</Em>, 36.</Ref>
          </div>
        </Section>

        {/* Appendices */}
        <Section id="appendix">
          <SectionTitle>Appendix A: Model Parameters</SectionTitle>
          <Table
            headers={["Parameter", "Value"]}
            rows={[
              ["Total parameters", "177M"],
              ["Hidden dimension", "1,152"],
              ["Transformer layers", "8"],
              ["Attention heads", "18"],
              ["Head dimension", "64"],
              ["Feedforward dimension", "3,072"],
              ["Output vertices", "20,484"],
              ["Temporal resolution", "2 Hz"],
              ["Low-rank bottleneck", "2,048"],
              ["Modality dropout", "0.3"],
              ["Subject dropout", "0.1"],
            ]}
          />

          <div className="mt-10" />
          <SectionTitle>Appendix B: Training Corpus Demographics</SectionTitle>
          <Table
            headers={["Metric", "ASD", "TD"]}
            rows={[
              ["N", "403", "468"],
              ["Mean age", "16.9 \u00b1 7.8", "16.6 \u00b1 7.0"],
              ["Male (%)", "86.6", "84.2"],
              ["Sites", "20", "20"],
            ]}
          />

          <div className="mt-10" />
          <SectionTitle>Appendix C: System Availability</SectionTitle>
          <Table
            headers={["Resource", "URL"]}
            rows={[
              ["Landing page", "mind.new"],
              ["NeuroBrain", "neuro.mind.new"],
              ["Sensory Audit", "sensory.mind.new"],
            ]}
          />
        </Section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-[13px] text-[var(--muted)] font-light">Correspondence: ibrahim.raza@leeza.app</p>
          <p className="text-[12px] text-[var(--muted)]/50 mt-1">Leeza Care Research &amp; Development Foundation</p>
        </footer>
      </article>
    </main>
  );
}

/* ─── Nav ─── */
function Nav() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050507]/80 backdrop-blur-xl border-b border-[var(--border)]">
      <div className="max-w-[760px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" className="flex items-center gap-1">
          <img src="/brainlogo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="text-[20px] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontStyle: "italic", fontWeight: 500 }}>
            <span className="gradient-text">mind</span>
            <span className="text-[#52525b]" style={{ fontStyle: "normal" }}>.</span>
            <span className="text-[#d4d4d8] font-light">new</span>
          </span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/" className="text-[12px] text-[var(--muted)] hover:text-white transition">Home</a>
          <span className="text-[12px] px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]">Paper</span>
        </div>
      </div>
    </nav>
  );
}

/* ─── Typography Components ─── */
function Section({ id, children }: { id?: string; children: React.ReactNode }) {
  return <section id={id} className="mt-14 scroll-mt-20">{children}</section>;
}

function SectionTitle({ number, children }: { number?: string; children: React.ReactNode }) {
  return (
    <h2 className="text-[20px] tracking-tight font-medium text-white mb-5 flex items-center gap-3">
      {number && <span className="text-[var(--accent)] text-[14px] font-normal">{number}.</span>}
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-[15px] font-medium text-white mt-8 mb-3">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] leading-[1.85] text-[var(--text)] font-light mb-4">{children}</p>;
}

function I({ children }: { children: React.ReactNode }) {
  return <span className="italic text-[var(--accent)]">{children}</span>;
}

function Em({ children }: { children: React.ReactNode }) {
  return <em className="not-italic text-[var(--text)]">{children}</em>;
}

function Ref({ children }: { children: React.ReactNode }) {
  return <p className="pl-6 -indent-6">{children}</p>;
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-5 overflow-x-auto rounded-lg border border-[var(--border)]">
      <table className="w-full text-[13px]">
        <thead>
          <tr className="border-b border-[var(--border)] bg-white/[0.02]">
            {headers.map((h, i) => (
              <th key={i} className="text-left py-2.5 px-4 text-[var(--muted)] font-medium text-[11px] uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-[var(--border)] last:border-0">
              {row.map((cell, j) => (
                <td key={j} className="py-2.5 px-4 text-[var(--text)] font-light">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
