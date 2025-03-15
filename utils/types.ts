export type CV = {
  name: string;
  addresses: string[];
  personalData: PersonalData[];
  abilities: string[];
  skills: string[];
  education: Education[];
  experience: Experience[];
};

export type PersonalData = {
  name: string;
  value: string;
};

export type Education = {
  name: string;
  date: string;
  description: string;
};

export type Experience = {
  date: string;
  company: string;
  description: string;
  details: string[];
};
