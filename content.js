/* ------------------------------------------------------------------
   EDIT THIS FILE to update the site. Nothing else needs to change.
   Empty lists (education, employment, publications) show a "add your
   entries" prompt until you fill them in.
------------------------------------------------------------------- */
window.PROFILE = {
  name: "Dinusha M. Senarathna, PhD",
  role: "Experimental physicist",
  tagline: "Ultrafast nonlinear optical spectroscopy and light-matter interactions",
  bio:
    "Experimental physicist specializing in ultrafast nonlinear optical spectroscopy and light-matter interactions, " +
    "with expertise in designing tunable femtosecond laser systems and three-color Coherent Anti-Stokes Raman " +
    "Scattering (CARS) experiments to study vibrational and phonon dynamics in condensed matter, combining advanced " +
    "optical instrumentation, dispersion management, beam synchronization, and computational modeling to investigate " +
    "photonics, nonlinear optics, optical imaging, quantum optics, and condensed matter physics.",

  // Photo from the existing site. Replace with a local file, e.g. "photo.jpg", to make it permanent.
  photo:
  "images/dinusha_profile.png",
  keywords: [
    "Ultrafast spectroscopy",
    "Nonlinear optics",
    "Femtosecond lasers",
    "CARS",
    "Phonon dynamics",
    "Photonics",
    "Optical imaging",
    "Quantum optics",
    "Condensed matter"
  ],

  research: [
    {
      title: "Ultrafast Nonlinear Optical Spectroscopy & Laser Development",
      text: "Developed a three-color femtosecond CARS platform with tunable optical parametric oscillators, high-resolution imaging, and ultrafast pulse diagnostics to investigate vibrational and phonon dynamics, integrating modeling, simulations, and automated optical instrumentation.",
      details: [
    "Designed and optimized a three-color time-domain Coherent Anti-Stokes Raman Scattering (CARS) spectroscopy system with ~120 fs temporal resolution for measuring Raman-active vibrational modes across 150-3100 cm⁻¹ using synchronously pumped femtosecond optical parametric oscillators driven by a mode-locked Ti:Sapphire laser.",
    "Engineered broadly tunable femtosecond optical parametric oscillators using quasi-phase-matched nonlinear crystals (PPSLT and MgO:PPLN), including cavity design, dispersion management, and broadband gain and tuning-curve calculations.",
    "Implemented wavelength tuning and stabilization using intracavity Lyot filters, prism-pair dispersion control, and PZT-mounted cavity mirrors for active cavity-length stabilization, achieving stable output tuning between 976-1320 nm.",
    "Performed ultrafast pulse diagnostics using cross- and auto-correlation techniques (120-200 fs) with angle-tuned BBO crystals and designed external prism-based dispersion compensation for pulse compression.",
    "Developed the imaging arm of the CARS platform achieving ~200 × 500 nm spatial resolution with high-NA objectives, integrating monochromator-CCD detection systems for gated spectral acquisition.",
    "Conducted time-resolved investigations of phonon and vibrational dynamics in technologically relevant materials including BaSnO₃, SrTiO₃, LiNbO₃, KTP, PETN, and RDX.",
    "Developed theoretical models of time-domain CARS signals and implemented numerical simulations and data analysis pipelines in MATLAB and Python.",
    "Operated and automated advanced optical instrumentation including spectrometers, motion controllers, detectors, oscilloscopes, waveform generators, and DAQ systems, while preparing peer-reviewed publications and international conference presentations."
  ]
    },
    {
      title: "Quantum Optics and Solid-State Qubit Experiments (NV Centers)",
      text: "Designed and executed quantum optics experiments with NV centers in diamond, combining optical excitation, microwave control, and spin-resolved detection to probe spin dynamics, perform Rabi oscillations, spatially image NV centers, and enhance ODMR signals.",
      details: [
    "Designed quantum optics experiments based on nitrogen-vacancy (NV) centers in diamond as a solid-state qubit platform integrating optical excitation, microwave control, and spin-resolved detection.",
    "Characterized the ground-state fine and hyperfine structure of NV centers including the 2.87 GHz zero-field splitting and Zeeman transitions under applied magnetic fields.",
    "Performed microwave pulse spectroscopy to coherently manipulate spin states, demonstrating Rabi oscillations and measuring spin population lifetimes using time-resolved experiments.",
    "Implemented raster-scanning excitation microscopy for spatial imaging and localization of individual NV centers.",
    "Integrated microwave modulation schemes with synchronized optical excitation and implemented lock-in detection techniques to enhance signal-to-noise ratios in optically detected magnetic resonance (ODMR) measurements.",
    "Developed automated instrument control and data acquisition systems using LabVIEW for synchronized control of lasers, microwave sources, detectors, and scanning stages."
  ]
    },
    {
      title: "Non-contact Photoacoustic Imaging via Laser Doppler Vibrometry",
      text: "Engineered a non-contact photoacoustic imaging system using pulsed laser excitation and laser Doppler vibrometry, with synchronized detection and time-resolved subsurface imaging for sensitive, depth-resolved characterization of embedded structures.",
      details: [
    "Designed and implemented a non-contact photoacoustic imaging platform combining pulsed laser excitation with laser Doppler vibrometry detection for remote acoustic sensing.",
    "Built a synchronized excitation-detection architecture enabling precise temporal alignment between optical absorption events and surface vibration measurements.",
    "Engineered electronic timing and trigger control systems to synchronize laser pulses, LDV acquisition, and data recording hardware.",
    "Developed a time-resolved subsurface imaging methodology based on acoustic waveform propagation and arrival-time analysis to enable depth-resolved characterization of embedded structures.",
    "Optimized signal acquisition and processing workflows to enhance sensitivity and spatial resolution in non-contact photoacoustic measurements."
  ]
    }
  ],

  /* Entry shape: { period: "2018 - 2023", title: "PhD, Physics", org: "University", detail: "Optional note" } */
  education: [
    {period: "Jan 2021 - Aug 2026", title: "PhD in Physics (Photonics & Ultrafast Spectroscopy)", org: "University of Rhode Island, United States", detail: "Dissertation Title: \"Ultrafast Vibrational Dynamics in Important Wide-Bandgap Semiconductors, Dielectrics and Energetic Materials.\""},
    {period: "Apr 2017 - Apr 2024", title: "PhD in Physics (Superhydrophobic Surface Replication)", org: "University of Sri Jayewardenepura, Sri Lanka", detail: "Dissertation Title: \"Soft Lithography of Natural Superhydrophobic Surfaces with an Investigation of Drop Shape Analysis Techniques.\""},
    {period: "Sep 2011 - Nov 2015", title: "BS in Physics", org: "University of Sri Jayewardenepura, Sri Lanka", detail: "Graduated with a BS Physics (Special) degree, second class upper division, with studies in Physics, Chemistry, and Polymer Science.\nFinal Year Project: Developed a low-cost CCD spectrometer using embedded systems control."}
  ],
    employment: [
    {
      period: "Jan 2021 - Aug 2026",
      title: "Graduate Teaching Assistant",
      org: "University of Rhode Island - Department of Physics",
      detail:
        "Instructed undergraduate physics laboratory courses including General Physics I Lab (PHY 185) covering basic mechanics such as projectile motion, forces, and conservation laws; Elementary Physics I Labs (PHY 273) emphasizing the practical application of classical mechanics and kinematic principles; and Elementary Physics III Labs (PHY 275) focusing on thermodynamics, kinetic theory, wave motion, acoustics, and optics."
    },
    {
      period: "Jul 2019 - Dec 2020",
      title: "Temporary Demonstrator",
      org: "University of Sri Jayewardenepura - Department of Engineering Technology",
      detail:
        "Coordinated practical laboratory sessions for the Applied Electronics courses (ETE/ETM/ETT 2042), focusing on measurements and instrumentation projects. Guided undergraduate students in the design and construction of a regulated power supply integrated with a clock generator. Developed and implemented laboratory experiments covering transistor circuits, operational amplifiers, and digital logic circuits while training students in circuit analysis, instrumentation, and experimental verification of electronic theory."
    },
    {
      period: "Oct 2016 - Apr 2019",
      title: "Research Assistant",
      org: "University of Sri Jayewardenepura - Department of Physics",
      detail:
        "Developed a soft-lithography method to replicate superhydrophobic surfaces of lotus and taro leaves using polydimethylsiloxane (PDMS), verified through SEM imaging. Designed computational models of leaf microstructures and built a modular automated Drop Shape Analyzer to measure static and dynamic contact angles, improving reliability in hydrophobic surface characterization while contributing to scientific writing and peer-reviewed publications."
    },
    {
      period: "Jan 2016 - Oct 2016",
      title: "Temporary Demonstrator",
      org: "University of Sri Jayewardenepura - Department of Physics",
      detail:
        "Facilitated and supervised undergraduate laboratory courses including Elementary Physics Lab (PHY 106), Optics Lab (PHY 203), and Electronics Lab (PHY 204). Guided students in experimental design, data acquisition, and quantitative analysis while emphasizing scientific methodology and uncertainty analysis. Provided hands-on instruction in optical alignment, electronic circuit construction, and measurement techniques using modern laboratory instrumentation, and assisted students in developing technical reporting skills."
    }
  ],

  /* Entry shape: { year: 2024, title: "Paper title", authors: "A. Author, D. M. Senarathna", venue: "Journal", link: "https://doi.org/..." } */
    publications: [
    // ---- Journal articles ----
    { year: 2024, title: "Time-resolved nonlinear optical spectroscopy of perovskites.",
      authors: "Chandra P. Neupane, Jeremy Sylvester, Helani A. S. Singhapurage, R. M. D. M. Senarathna, Feruz Ganikhanov",
      venue: "Optics Express, 32(4), 5621-5631",
      link: "https://doi.org/10.1364/OE.509234" },

    { year: 2023, title: "Decay of Raman active vibrations within oxide groups of potassium titanyl phosphate.",
      authors: "Helani A. S. Singhapurage, D. M. Senarathna, Feruz Ganikhanov",
      venue: "Optical Materials, 137, 113526",
      link: "https://doi.org/10.1016/j.optmat.2023.113526" },

    { year: 2023, title: "Coherent Raman Spectroscopy of Equilibrium Phonons with Subwavenumber Resolution.",
      authors: "Dinusha Senarathna, Jeremy Sylvester, Chandra P. Neupane, Helani A. S. Singhapurage, Feruz Ganikhanov",
      venue: "Journal of Physical Chemistry C, 127(18), 8720-8727",
      link: "https://doi.org/10.1021/acs.jpcc.2c09045" },

    { year: 2022, title: "Femtosecond coherent Raman system with >75 dB dynamic range for probing vibration modes across 250-2400 cm⁻¹.",
      authors: "Jeremy Sylvester, Chandra P. Neupane, Helani A. S. Singhapurage, R. M. D. M. Senarathna, G. P. Sharma, Feruz Ganikhanov",
      venue: "Optics Express, 30(13), 23930-23942",
      link: "https://doi.org/10.1364/OE.460061" },

    { year: 2022, title: "Ultrafast Phonon Decay in Complex Oxides.",
      authors: "Chandra P. Neupane, Jeremy Sylvester, Dinusha M. S. R. Mudiyanselage, Helani A. S. Singhapurage, Feruz Ganikhanov",
      venue: "Optics, 3(4), 438-446",
      link: "https://doi.org/10.3390/opt3040037" },

    { year: 2020, title: "Improving superhydrophobicity of polydimethylsiloxanes using embedding fluorinated polyhedral oligomeric silsesquioxanes cages.",
      authors: "Buddhika Gayani, Dinusha Senarathna, Manjula M. Weerasekera, Nilwala Kottegoda, Dilru R. Ratnaweera",
      venue: "SN Applied Sciences, 2, 1944",
      link: "https://doi.org/10.1007/s42452-020-03721-y" },

    { year: 2020, title: "Replication of the Surface Wettability of Plant Leaves with Different Surface Morphologies Using Soft Lithography.",
      authors: "R. M. D. M. Senarathna, W. K. I. L. Wanniarachchi, S. Jayawardhana",
      venue: "International Journal of Nanoscience, 19(03), 1950018",
      link: "https://doi.org/10.1142/S0219581X19500182" },

    // ---- Conference proceedings ----
    { year: 2025, title: "Two-wavelength Optical Parametric Oscillator for Time Resolved Coherent Anti-Stokes Raman Spectroscopy.",
      authors: "Dinusha Senarathna, Helani Achintha Singhapurage, Feruz Ganikhanov",
      venue: "Advanced Photonics Congress" },

    { year: 2025, title: "Sub-picosecond Optical Phonon Energy Loss in Trigonal Lithium Niobate Crystal.",
      authors: "Dinusha M. Senarathna, Helani A. S. Singhapurage, Feruz Ganikhanov",
      venue: "CLEO" },

    { year: 2025, title: "High-Frequency Optical Phonon Mode Decay in Non-Stoichiometric Lithium Niobate.",
      authors: "Helani A. S. Singhapurage, Dinusha M. Senarathna, Feruz Ganikhanov",
      venue: "Optica Nonlinear Optics (NLO)" },

    { year: 2024, title: "Ultrafast Coherent Raman Study of Lattice Vibration Dynamics in Wide-bandgap Semiconductors.",
      authors: "Helani A. S. Singhapurage, Dinusha M. Senarathna, Jeremy Sylvester, Chandra P. Neupane, Feruz Ganikhanov",
      venue: "CLEO" },

    { year: 2023, title: "Ultrafast Coherent Raman Spectroscopy on Phonon Dynamics at Equilibrium.",
      authors: "Helani A. S. Singhapurage, Dinusha M. Senarathna, Jeremy Sylvester, Chandra P. Neupane, Feruz Ganikhanov",
      venue: "Frontiers in Optics + Laser Science" },

    { year: 2023, title: "Nonlinear Optical Spectroscopy of Perovskites.",
      authors: "Chandra P. Neupane, Jeremy Sylvester, Helani A. S. Singhapurage, Dinusha M. S. R. Mudiyanselage, Feruz Ganikhanov",
      venue: "Optica Nonlinear Optics Topical Meeting" },

    { year: 2023, title: "Coherent Phonon Decay of Raman Active Vibrations Within Oxide Groups of KTiOPO₄.",
      authors: "Helani A. S. Singhapurage, Dinusha M. Senarathna, Jeremy Sylvester, Chandra P. Neupane, Feruz Ganikhanov",
      venue: "IEEE RAPID Conference" },

    { year: 2023, title: "Ultrafast Decay of Polar Optical Vibrations in Cubic Perovskites.",
      authors: "Dinusha M. Senarathna, Chandra P. Neupane, Jeremy Sylvester, Helani A. S. Singhapurage, Feruz Ganikhanov",
      venue: "CLEO" },

    { year: 2022, title: "Widely tunable Solid State laser light source for precise time domain Coherent Raman measurements.",
      authors: "Jeremy Sylvester, Chandra P. Neupane, Helani A. S. Singhapurage, Dinusha M. S. R. Mudiyanselage, Feruz Ganikhanov",
      venue: "Optica Advanced Photonics Congress" },

    { year: 2022, title: "Coherent Phonon Decay in Semiconducting BaSnO₃.",
      authors: "Chandra P. Neupane, Jeremy Sylvester, Helani A. S. Singhapurage, R. M. D. M. Senarathna, Feruz Ganikhanov",
      venue: "Ultrafast Phenomena" },

    { year: 2019, title: "Investigation of Different Drop Shape Analysis Techniques for Measuring Contact Angles in Sessile Drops.",
      authors: "R. M. D. M. Senarathna, W. K. I. L. Wanniarachchi, S. Jayawardhana",
      venue: "International Conference on Multidisciplinary Approaches" },

    { year: 2018, title: "Development of a Low-cost Automated Micro Dispense Digital Goniometric Device with Drop Shape Analysis.",
      authors: "R. M. D. M. Senarathna, W. K. I. L. Wanniarachchi, S. Jayawardhana, D. R. Rathnaweera",
      venue: "Moratuwa Engineering Research Conference (MERCon), 571-576" }
  ],

  contact: {
    email: "dinusha@uri.edu",          // e.g. "name@university.edu"
    location: "Kingston, RI, USA",       // e.g. "City, Country"
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=XffCqxMAAAAJ&hl=en" },
      { label: "ORCID",          url: "https://orcid.org/0000-0002-7615-2719" },
      { label: "ResearchGate",   url: "https://www.researchgate.net/profile/Dinusha_Senarathna" },
      { label: "LinkedIn",       url: "https://www.linkedin.com/in/dinusha-senarathna/" }
    ]
  }
};