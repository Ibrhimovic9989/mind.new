"use client";

import { useEffect, useRef } from "react";

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
          <div className="text-[14px] text-[var(--muted)] font-light space-y-1">
            <p className="text-[var(--text)] font-normal">Ibrahim Raza</p>
            <p>Leeza Care Research & Development Foundation</p>
          </div>
        </header>

        {/* Abstract */}
        <Section id="abstract">
          <SectionTitle>Abstract</SectionTitle>
          <div className="paper-card p-6">
            <p className="text-[14px] leading-[1.85] text-[var(--text)] font-light">
              We present AQAL, a computational system that predicts how neurodiverse (autistic) brains process sensory stimuli by combining Meta&apos;s TRIBE v2 brain encoding model (177M parameters) with a statistical neurodiverse transform derived from 871 resting-state fMRI scans in the ABIDE I dataset. AQAL maps text, audio, and video inputs onto 20,484 cortical surface vertices and generates both neurotypical and neurodiverse brain activation predictions in real time. Our connectivity analysis identifies 820 statistically significant inter-regional differences (p &lt; 0.05) between ASD and typically-developing groups across 100 Schaefer atlas parcels, with the limbic temporal pole, default mode network, and visual cortex showing the largest effect sizes. We further introduce a sensory profiling module that quantifies divergence across seven canonical brain networks, enabling practical applications in accessibility auditing and personalized accommodation design.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {["neurodiversity", "autism", "brain encoding", "fMRI", "ABIDE", "foundation model", "sensory processing"].map(kw => (
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
              ["6", "Limitations", "limitations"],
              ["7", "Future Work", "future-work"],
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
          <P>Recent advances in brain encoding models — neural networks trained to predict brain activity from sensory stimuli — offer a new paradigm. Meta&apos;s TRIBE v2 (d&apos;Ascoli et al., 2026) demonstrated that a single transformer-based model can predict cortical surface activity from vision, audition, and language inputs with meaningful accuracy across subjects.</P>
          <P>We asked: <strong className="text-white">Can a brain encoding model, combined with population-level connectivity data from autism neuroimaging, predict how a neurodiverse brain would respond to arbitrary stimuli?</strong></P>
          <P>AQAL is our answer. Rather than requiring individual brain scans, AQAL uses a statistical transform trained on the ABIDE dataset to convert neurotypical brain predictions into neurodiverse variants, making neuroscience-informed predictions accessible through a web API.</P>

          <SubTitle>1.1 Contributions</SubTitle>
          <ol className="space-y-2 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">A CPU-based statistical transform</strong> that converts neurotypical TRIBE v2 predictions to neurodiverse predictions using connectivity effect sizes from 871 ABIDE subjects.</li>
            <li><strong className="text-white font-normal">A connectivity analysis pipeline</strong> identifying 820 significant inter-regional differences between ASD and TD groups across 4,950 tested connections.</li>
            <li><strong className="text-white font-normal">A sensory profiling system</strong> that maps brain-level divergence onto seven functional networks (visual, auditory, motor, language, social, default mode, salience).</li>
            <li><strong className="text-white font-normal">A publicly accessible platform</strong> (API + web interface) enabling real-time neurodiverse brain prediction from text, audio, or video input.</li>
          </ol>
        </Section>

        {/* 2. Related Work */}
        <Section id="related-work">
          <SectionTitle number="2">Related Work</SectionTitle>

          <SubTitle>2.1 Brain Encoding Models</SubTitle>
          <P>Brain encoding models learn a mapping from stimulus features to neural activity. Early approaches used linear ridge regression on hand-crafted features (Huth et al., 2016; de Heer et al., 2017). More recent work leverages deep neural network representations, with models like BrainLM (Ortega Caro et al., 2023), BrainBERT (Thomas et al., 2023), and TRIBE v2 (d&apos;Ascoli et al., 2026) achieving increasingly accurate predictions.</P>
          <P>TRIBE v2 is notable for its multimodal architecture: it accepts vision (V-JEPA2), audio (Wav2Vec-BERT), and language (LLaMA 3.2) inputs simultaneously and predicts activity across 20,484 cortical surface vertices using an 8-layer transformer encoder.</P>

          <SubTitle>2.2 Autism Neuroimaging</SubTitle>
          <P>The Autism Brain Imaging Data Exchange (ABIDE; Di Martino et al., 2014) provides resting-state fMRI data from over 1,100 individuals across 20+ sites, making it the largest open autism neuroimaging dataset. Studies using ABIDE have consistently identified differences in functional connectivity between ASD and TD groups, particularly in the default mode network, salience network, and limbic regions (Hull et al., 2017; Holiga et al., 2019).</P>

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
│   Feature Extraction  │  LLaMA 3.2 + V-JEPA2 + Wav2Vec-BERT
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   TRIBE v2 Encoder    │  8-layer transformer, 177M params
│   (NT Prediction)     │  → 20,484 vertices × T timesteps
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   ND Transform        │  Trained on 871 ABIDE subjects
│   (ASD Prediction)    │  Per-vertex scale + shift
└──────────┬────────────┘
           │
           ▼
┌───────────────────────┐
│   Analysis &          │  Divergence metrics, sensory profile,
│   Visualization       │  connectivity mapping, interpretation
└───────────────────────┘`}</pre>
          </div>

          <SubTitle>3.2 TRIBE v2 Brain Encoder</SubTitle>
          <P>We use Meta&apos;s TRIBE v2 (Transformer for Relating and Interpreting Brain Encoding, version 2) as the base neurotypical brain encoder. The model architecture consists of:</P>
          <ul className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-disc list-inside">
            <li><strong className="text-white font-normal">Feature extractors:</strong> LLaMA 3.2-3B (text, 6 layers), V-JEPA2-ViT-G (video, 2 layers), Wav2Vec-BERT 2.0 (audio, 2 layers)</li>
            <li><strong className="text-white font-normal">Feature projectors:</strong> Per-modality MLPs mapping to a common hidden dimension of 1,152</li>
            <li><strong className="text-white font-normal">Temporal smoothing:</strong> Gaussian kernel (size 9) for hemodynamic response alignment</li>
            <li><strong className="text-white font-normal">Transformer encoder:</strong> 8 layers, 18 heads, head dimension 64, FF dimension 3,072</li>
            <li><strong className="text-white font-normal">Subject layers:</strong> Low-rank output adaptation (bottleneck 2,048) with 0.1 dropout</li>
            <li><strong className="text-white font-normal">Output space:</strong> 20,484 vertices on the fsaverage5 cortical surface mesh</li>
          </ul>
          <P>The model operates at 2 Hz temporal resolution. Modality dropout of 0.3 enables predictions from any subset of input modalities.</P>

          <SubTitle>3.3 ABIDE Dataset Processing</SubTitle>
          <P>We use the Autism Brain Imaging Data Exchange I (ABIDE I) dataset, comprising 871 resting-state fMRI scans:</P>
          <Table headers={["Group", "N", "Sites"]} rows={[["ASD", "403", "20"], ["TD", "468", "20"]]} />
          <P>All scans were preprocessed using the Configurable Pipeline for the Analysis of Connectomes (C-PAC) with band-pass filtering (0.01–0.1 Hz) and no global signal regression. We extracted mean timeseries from 100 cortical parcels using the Schaefer 2018 atlas, computed Pearson correlation matrices, and applied Fisher&apos;s z-transform for variance stabilization, producing 4,950 unique connectivity features per subject.</P>

          <SubTitle>3.4 Statistical Group Comparison</SubTitle>
          <P>For each of the 4,950 unique connectivity pairs, we performed an independent-samples t-test comparing ASD and TD groups. 820 of 4,950 connections (16.6%) were significant at p &lt; 0.05.</P>
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
          <P>We derive a per-vertex transform that converts neurotypical TRIBE v2 predictions to neurodiverse predictions. For each of 20,484 cortical vertices <I>v</I>:</P>
          <ol className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li>Identify the Schaefer ROI <I>r(v)</I> to which vertex <I>v</I> belongs.</li>
            <li>Compute the normalized effect size <I>e<sub>r</sub></I> for that ROI from connectivity t-tests.</li>
            <li>Compute scale and shift factors.</li>
            <li>Apply: <I>&ycirc;<sub>v</sub><sup>ND</sup> = &ycirc;<sub>v</sub><sup>NT</sup> &times; scale<sub>v</sub> + shift<sub>v</sub></I></li>
          </ol>
          <div className="paper-card p-5 my-6 font-mono text-[12px] text-[var(--muted)] leading-[1.7]">
            <pre>{`scale_v = 1.0 + (e_r × 0.3 − 0.15)       // range [0.85, 1.15]
shift_v = tanh(t̄_r × 0.1) × e_r × 0.15   // range [−0.05, 0.01]

where t̄_r = mean t-statistic for connections involving ROI r`}</pre>
          </div>
          <P>Of 20,484 vertices, 18,067 (88.3%) are affected by the transform. The transform is published on HuggingFace (Ibrahim9989/neurobrain-nd-transform).</P>

          <SubTitle>3.6 Sensory Profiling</SubTitle>
          <P>We map vertex-level divergence between NT and ND predictions onto seven canonical functional brain networks:</P>
          <Table
            headers={["Network", "Function", "Key Regions"]}
            rows={[
              ["Visual", "Processing sight", "V1–V8, FFC, VVC"],
              ["Auditory", "Processing sound", "A1, A4, A5, MBelt, LBelt"],
              ["Language", "Speech and words", "Broca's, Wernicke's, STV"],
              ["Motor", "Movement and body", "M1, S1, S2, 6a, 6d"],
              ["Social", "Understanding others", "STS, TE1, TG"],
              ["Default Mode", "Self-reflection", "PCC, POS, RSC"],
              ["Salience", "Filtering what matters", "Insula, dACC"],
            ]}
          />
          <P>Scores are normalized to [0, 1] by dividing by the maximum network divergence, providing an interpretable summary of which processing domains are most differently activated.</P>

          <SubTitle>3.7 Infrastructure</SubTitle>
          <Table
            headers={["Component", "Technology"]}
            rows={[
              ["Brain model", "TRIBE v2 (Meta, PyTorch)"],
              ["API server", "FastAPI on Azure VM (8 cores, 32 GB RAM)"],
              ["Frontend", "Next.js on Vercel"],
              ["Interpretation", "Azure OpenAI (GPT)"],
              ["Model hosting", "HuggingFace Hub"],
            ]}
          />
          <P>All inference runs on CPU. No GPU is required.</P>
        </Section>

        {/* 4. Results */}
        <Section id="results">
          <SectionTitle number="4">Results</SectionTitle>

          <SubTitle>4.1 Connectivity Analysis</SubTitle>
          <P>Analysis of 871 ABIDE I subjects revealed 820 significant connections out of 4,950 tested (16.6%, p &lt; 0.05). The limbic system showed the largest effect sizes, consistent with known emotional regulation differences. Default mode network showed bilateral temporal alterations. Visual cortex alterations align with documented sensory processing variations.</P>

          <SubTitle>4.2 Network-Level Differences</SubTitle>
          <Table
            headers={["Network", "Difference", "Direction"]}
            rows={[
              ["Limbic", "Highest", "Hyperconnectivity"],
              ["Default Mode", "High", "Altered connectivity"],
              ["Visual", "Moderate–High", "Modified processing"],
              ["Salience", "Moderate", "Altered filtering"],
              ["Dorsal Attention", "Moderate", "Shifted focus"],
              ["Control", "Low–Moderate", "Mild executive differences"],
              ["Somatomotor", "Low–Moderate", "Subtle motor differences"],
            ]}
          />

          <SubTitle>4.3 Transform Coverage</SubTitle>
          <P>The neurodiverse transform affects 18,067 of 20,484 cortical vertices (88.3%), with scale factors ranging from 0.85 to 1.15 and shift factors from −0.05 to 0.01. The transform is denser in temporal and limbic regions and sparser in primary motor cortex, matching the known neuroanatomy of autism.</P>

          <SubTitle>4.4 Real-Time Performance</SubTitle>
          <Table
            headers={["Operation", "Latency"]}
            rows={[
              ["Text → events (TTS + WhisperX)", "~3–5s"],
              ["TRIBE v2 inference (10 timesteps)", "~8–15s"],
              ["ND transform application", "< 100ms"],
              ["Surface rendering (4 views × 10 steps)", "~5–8s"],
              ["Total end-to-end", "~20–30s"],
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

        {/* 6. Limitations */}
        <Section id="limitations">
          <SectionTitle number="6">Limitations</SectionTitle>
          <ol className="space-y-3 text-[14px] text-[var(--text)] font-light leading-[1.8] list-decimal list-inside">
            <li><strong className="text-white font-normal">No GPU fine-tuning.</strong> The neurodiverse transform is a statistical approximation, not a directly fine-tuned neural network. GPU fine-tuning of TRIBE v2 on neurodiverse fMRI data would likely improve accuracy but was not feasible due to compute constraints.</li>
            <li><strong className="text-white font-normal">Indirect mapping.</strong> The transform maps connectivity-level group differences onto vertex-level predictions. This assumes resting-state connectivity differences generalize to task-evoked activity — a reasonable but imperfect assumption.</li>
            <li><strong className="text-white font-normal">Group-level, not individual.</strong> AQAL produces an average neurodiverse prediction. Autism is a spectrum, and individual variation is substantial.</li>
            <li><strong className="text-white font-normal">Uncorrected p-values.</strong> The 820 significant connections are reported at p &lt; 0.05 without multiple comparison correction. With FDR correction, the number decreases.</li>
            <li><strong className="text-white font-normal">ABIDE I limitations.</strong> The dataset is heterogeneous (20 sites, varying protocols) and skewed toward males. Results may not generalize equally to all populations.</li>
          </ol>
        </Section>

        {/* 7. Future Work */}
        <Section id="future-work">
          <SectionTitle number="7">Future Work</SectionTitle>
          <ul className="space-y-1.5 text-[14px] text-[var(--text)] font-light leading-[1.8] list-disc list-inside">
            <li>GPU fine-tuning of TRIBE v2 on neurodiverse fMRI data (pending NDA and SPARK dataset access)</li>
            <li>Individual calibration via a 5-minute sensory assessment to personalize predictions</li>
            <li>Expanded datasets including ABIDE II, NDA collections, and SPARK to reach 10,000+ subjects</li>
            <li>Additional neurodivergent conditions (ADHD, sensory processing disorder, anxiety)</li>
            <li>EEG integration for real-time, portable brain monitoring</li>
            <li>Clinical validation studies comparing AQAL predictions against observed behavioral responses</li>
          </ul>
        </Section>

        {/* 8. Conclusion */}
        <Section id="conclusion">
          <SectionTitle number="8">Conclusion</SectionTitle>
          <P>AQAL demonstrates that combining a state-of-the-art multimodal brain encoding model with population-level autism neuroimaging data can produce meaningful neurodiverse brain predictions from arbitrary sensory stimuli. While the current statistical transform is an approximation, it makes neuroscience-informed predictions accessible without requiring individual brain scans or GPU infrastructure. The identification of 820 significant connectivity differences across 871 ABIDE subjects provides a robust empirical foundation, and the system&apos;s real-time performance enables practical applications in accessibility, education, and clinical communication.</P>
          <P>By open-sourcing the platform, we aim to make computational neurodiversity research accessible to researchers, educators, clinicians, and families who lack access to neuroimaging facilities.</P>
        </Section>

        {/* References */}
        <Section id="references">
          <SectionTitle>References</SectionTitle>
          <div className="space-y-3 text-[13px] text-[var(--muted)] font-light leading-[1.7]">
            <Ref>CDC. (2023). Autism Spectrum Disorder: Data &amp; Statistics. Centers for Disease Control and Prevention.</Ref>
            <Ref>d&apos;Ascoli, S., et al. (2026). TRIBE v2: A Foundation Model of Vision, Audition, and Language for In-Silico Neuroscience. <Em>Meta AI Research</Em>.</Ref>
            <Ref>de Heer, W. A., Huth, A. G., Griffiths, T. L., Gallant, J. L., &amp; Theunissen, F. E. (2017). The hierarchical cortical organization of human speech processing. <Em>Journal of Neuroscience</Em>, 37(27), 6539–6557.</Ref>
            <Ref>Di Martino, A., et al. (2014). The autism brain imaging data exchange: towards a large-scale evaluation of the intrinsic brain architecture in autism. <Em>Molecular Psychiatry</Em>, 19(6), 659–667.</Ref>
            <Ref>Holiga, S., et al. (2019). Patients with autism spectrum disorders display reproducible functional connectivity alterations. <Em>Science Translational Medicine</Em>, 11(481).</Ref>
            <Ref>Hull, J. V., et al. (2017). Resting-state functional connectivity in autism spectrum disorders: A review. <Em>Frontiers in Psychiatry</Em>, 7, 205.</Ref>
            <Ref>Huth, A. G., de Heer, W. A., Griffiths, T. L., Theunissen, F. E., &amp; Gallant, J. L. (2016). Natural speech reveals the semantic maps that tile human cerebral cortex. <Em>Nature</Em>, 532(7600), 453–458.</Ref>
            <Ref>Ortega Caro, J., et al. (2023). BrainLM: A Foundation Model for Brain Activity Recordings. <Em>arXiv preprint arXiv:2311.00656</Em>.</Ref>
            <Ref>Schaefer, A., et al. (2018). Local-global parcellation of the human cerebral cortex from intrinsic functional connectivity MRI. <Em>Cerebral Cortex</Em>, 28(9), 3095–3114.</Ref>
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
          <SectionTitle>Appendix B: ABIDE I Demographics</SectionTitle>
          <Table
            headers={["Metric", "ASD", "TD"]}
            rows={[
              ["N", "403", "468"],
              ["Mean age", "16.9 ± 7.8", "16.6 ± 7.0"],
              ["Male (%)", "86.6", "84.2"],
              ["Sites", "20", "20"],
            ]}
          />

          <div className="mt-10" />
          <SectionTitle>Appendix C: System Availability</SectionTitle>
          <Table
            headers={["Resource", "URL"]}
            rows={[
              ["Web interface", "neurobrain.vercel.app"],
              ["API endpoint", "neurobrain-api.eastus.cloudapp.azure.com"],
              ["ND transform", "huggingface.co/Ibrahim9989/neurobrain-nd-transform"],
              ["Source (frontend)", "github.com/Ibrhimovic9989/neurobrain"],
              ["Source (model)", "github.com/Ibrhimovic9989/tribeneuro"],
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
