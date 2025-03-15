export type CV = {
  name: string;
  addresses: string[];
  personalData: PersonalData[];
  abilities: string[];
  skills: string[];
  education: Education[];
  experience: Experience[];
  achievements?: Achievement[];
};

export type PersonalData = {
  name: string;
  value: string;
};

export type Education = {
  schoolName: string;
  date: string;
  description: string;
};

export type Experience = {
  date: string;
  company: string;
  description: string;
  details: string[];
};

export type Achievement = {
  name: string;
  rank: string;
  date: string;
  description: string;
};