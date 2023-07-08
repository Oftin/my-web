type ExperienceArrayType = {
  company: string;
  date: string;
  role: string;
  listDuties: string[];
};

export const experienceArray: ExperienceArrayType[] = [
  {
    company: "UPC Polska",
    date: "2017-10 - 2019-08",
    role: "Technical Support Engineer",
    listDuties: [
      "Change of IPV4 / IPV6 protocols",
      "Wifi network channel analysis (CDM Program)",
      "Signal jump analysis in ServAssure Advanced",
      "Verification of the correctness of configuration files",
      "Creating technical documentation",
      "Contact with the customer",
    ],
  },
  {
    company: "RW Swiss Automation",
    date: "2019-09 - 2020-05",
    role: "Robotic Engineer",
    listDuties: [
      "Knowledge of Process Simulate (creating WEST zones)",
      "Knowledge of Robcad",
      "Creating technical documentation",
      "Creating robot removal concept",
      "Knowledge Opel standard (project Opel OV512 Rüsselsheim)",
    ],
  },
  {
    company: "SR Robotics",
    date: "2021-05 - 2021-06",
    role: "Technical support",
    listDuties: [
      "Getting to know the industry of surface and underwater drones",
      "Support of systems for scanning the bottom of water reservoirs",
      "Work on specialized equipment",
      "Designing solutions used at great depths",
    ],
  },
  {
    company: "LEOCODE",
    date: "2021-10 - 2023-06",
    role: "Junior React Developer",
    listDuties: [
      "Web application development",
      "Organization of work with prioritization of tasks",
      "Organization of project meetings",
    ],
  },
];