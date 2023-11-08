type ExperienceArrayType = {
  id: number;
  company: string;
  date: string;
  role: string;
  listDuties: string[];
};

export const experienceArray: ExperienceArrayType[] = [
  {
    id: 1,
    company: "LEOCODE",
    date: "2021-10 - now",
    role: "Junior React Developer",
    listDuties: [
      "Web application development",
      "Mobile application development",
      "Organization of work with prioritization of tasks",
      "Deployment of new people to the project",
      "Organization of project meetings",
      "Working with hardware (e.g. Raspberry Pi)",
      "Assist various departments in solving problems",
      "Suggest new ideas for process improvements",
      "Creating SSO for internal application",
      "Creating databases",
      "Creating automation",
      "Creating designs",
      "Database handling",
      "Writing tests",
    ],
  },
  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
];
