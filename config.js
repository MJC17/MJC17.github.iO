window.SITE_CONFIG = {
  pageTitle: "Marcus Cameron | Smart Cities Digital Twin Project",
  hero: {
    courseTag: "SMRTTECH 4SC3",
    tagline: "Course Project: Smart Cities and Communities",
    studentName: "Marcus Cameron",
    program: "Automation Systems Engineering Technology",
    university: "McMaster University, Canada",
    email: "marcus17cameron@outlook.com",
    profileImage: "assets/img/image1.jpg"
  },
  disclaimer: {
    short: "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long: "This website presents a student academic project created for coursework. All analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency."
  },
  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "Roadway and Traffic Modelling at Warden Avenue and Lawrence Avenue East, Toronto: SUMO Analysis of Automated Vehicles and a Signal-Timing Intervention",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "assets/img/video-poster.jpg",
    heroVideoAlt: "SUMO simulation video of junction J1 showing the Base Scenario with 100% human-driven vehicles, followed by Scenario 1 with 100% automated vehicles",
    videoCaption: "SUMO simulation preview (about 20 seconds): Base Scenario (100% HDV) → Scenario 1 (100% AV/CAV)"
  },
  caseStudy: {
    title: "Introduction",
    backgroundTitle: "Background",
    backgroundBullets: [
      "Digital models let transportation changes be tested before anything is built.",
      "The study covers Warden Avenue and Lawrence Avenue East in Scarborough, Toronto, at junction J1.",
      "Approach E206 is a 30.07-metre, three-lane incoming edge that feeds J1.",
      "All scenarios use the same roadway network and measurement approach."
    ],
    problemTitle: "Problem Statement",
    problemBullets: [
      "Approach E206 averages only 9.11 km/h at 73.73 vehicles/km in the baseline model.",
      "The effect of a fully automated fleet cannot be assumed without a controlled test.",
      "Signal timing changes need evidence before they are considered.",
      "Short signalized approaches are sensitive to queuing and discharge."
    ],
    objectivesTitle: "Project Objectives",
    objectivesBullets: [
      "Build a connected SUMO network and a human-driven traffic baseline.",
      "Compare the baseline with a 100% connected automated vehicle fleet.",
      "Test a five-second green time transfer at junction J1.",
      "Evaluate each condition with speed–density results on approach E206."
    ]
  },
  overview: {
    title: "Methodology",
    subtitle: "",
    steps: [
      { title: "Step 1: Base Scenario (100% HDV)", text: "Stage A1 network and Stage A2 demand, with J1 green phases of 27 s and 27 s.", image: "assets/img/image2-step.jpg" },
      { title: "Step 2: Scenario 1 (100% CAV)", text: "Same network, routes, and demand, with CACC vehicle behaviour.", image: "assets/img/image3-step.jpg" },
      { title: "Step 3: Scenario 2 (100% HDV)", text: "Same HDV routes and demand, with J1 green phases of 22 s and 32 s.", image: "assets/img/image4-step.jpg" },
      { title: "Step 4: Results and Communication", text: "Compare speed–density results for each scenario on approach E206.", image: "assets/img/image5-step.jpg" }
    ]
  },
  implementation: {
    title: "Methodology Steps",
    subtitle: "",
    modules: [
      {
        title: "Module 1: Base Scenario (100% HDV)",
        image: "assets/img/image2.jpg",
        bullets: [
          { text: "Developed the road network around junction J1, including lanes, connections, and signals." },
          { text: "Assigned 12 fixed-path traffic flows totalling 2,550 vehicles per hour." },
          { text: "Ran J1 on a 60-second cycle of 27/3/27/3 seconds with a 0.1-second simulation step." }
        ]
      },
      {
        title: "Module 2: Scenario 1 (100% CAV)",
        image: "assets/img/image3.jpg",
        bullets: [
          { text: "Changed all 12 traffic flows from human-driven to connected automated vehicles." },
          { text: "Applied CACC car following with a 0.6-second time gap and 1.5-metre minimum gap." },
          { text: "Kept the network, routes, demand, and signal timing the same as the baseline." }
        ]
      },
      {
        title: "Module 3: Scenario 2 (100% HDV + J1 Timing Change)",
        image: "assets/img/image4.jpg",
        bullets: [
          { text: "Moved five seconds of green time to the phase serving approach E206." },
          { text: "Changed the J1 phases from 27/3/27/3 to 22/3/32/3 seconds." },
          { text: "Kept the 60-second cycle, HDV routes, and traffic demand unchanged." }
        ]
      },
      {
        title: "Module 4: Results and Communication",
        image: "assets/img/image5.jpg",
        bullets: [
          { text: "Compared the 100% HDV baseline and 100% CAV fleet on identical axes." },
          { text: "Plotted 36 observations per scenario with a descriptive linear best-fit line." },
          { text: "Identified the further testing needed before any real-world recommendation." }
        ]
      }
    ]
  },
  results: {
    title: "Results and Potential Improvements",
    subtitle: "Speed–density results on approach E206 for the baseline and the revised J1 signal timing, from 36 complete 100-second observations each. Results are for educational purposes only.",
    charts: {
      left: {
        title: "Base: 100% HDV",
        src: "assets/img/image6.jpg",
        alt: "Speed-density plot for the 100 percent human-driven baseline on approach E206"
      },
      right: {
        title: "100% HDV + J1 Timing Change",
        src: "assets/img/image7.jpg",
        alt: "Speed-density plot for 100 percent human-driven traffic with the revised J1 signal timing on approach E206"
      }
    },
    discussionTitle: "Discussion",
    discussionBullets: [
      "The baseline averaged 9.11 km/h and 73.73 vehicles/km on E206.",
      "The 100% automated fleet raised mean speed to 10.10 km/h and lowered mean density to 65.63 vehicles/km, but the speed gain was not consistent at similar densities.",
      "Changing J1 from 27/3/27/3 to 22/3/32/3 seconds raised mean speed to 12.62 km/h and lowered mean density to 50.93 vehicles/km.",
      "The timing change also reduced summed E206 waiting time from 5,114.3 to 3,029.7 seconds.",
      "The revised timing is a candidate for further study only. Other approaches lose green time, and the model has not been calibrated with field data."
    ]
  },
  team: {
    title: "Team and Acknowledgments",
    subtitle: "Project team, course context, and tools used.",
    members: [
      { name: "Marcus Cameron", role: "Group 8 member" },
      { name: "Rithik Kottaram", role: "Group 8 member" },
      { name: "Alex Carpen", role: "Group 8 member" },
      { name: "Shehab Ahmed", role: "Group 8 member" }
    ],
    acknowledgments: [
      "Course: SMRTTECH 4SC3, Smart Cities and Communities",
      "Institution: W Booth School of Engineering Practice and Technology, McMaster University",
      "Course Instructor: Dr. Marjan Alavi",
      "Lab Instructor: Dr. Ahmad Mohammadi",
      "Tools: SUMO, NETEDIT"
    ]
  }
};
