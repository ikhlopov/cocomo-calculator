import {ProjectMode, CocomoVersion } from '../types/cocomo';

interface CostDrivers {
  productComplexity: number;
  requiredReliability: number;
  databaseSize: number;
  executionTimeConstraint: number;
  memoryConstraint: number;
  virtualMachineVolatility: number;
  computerTurnaroundTime: number;
  analystCapability: number;
  applicationsExperience: number;
  programmerCapability: number;
  virtualMachineExperience: number;
  programmingLanguageExperience: number;
  modernProgrammingPractices: number;
  softwareTools: number;
  requiredDevelopmentSchedule: number;
}

const calculateEffortMultiplier = (costDrivers: CostDrivers): number => {
  if (!costDrivers) {
    return 1;
  }
  return Object.values(costDrivers).reduce((acc, val) => acc * val, 1);
};

export const calculateCocomo = (
  kloc: number,
  mode: ProjectMode,
  version: CocomoVersion = 'basic',
  costDrivers?: CostDrivers
) => {
  let a, b, c, d;

  switch (mode) {
    case 'organic':
      a = 2.4;
      b = 1.05;
      c = 2.5;
      d = 0.38;
      break;
    case 'semi-detached':
      a = 3.0;
      b = 1.12;
      c = 2.5;
      d = 0.35;
      break;
    case 'embedded':
      a = 3.6;
      b = 1.20;
      c = 2.5;
      d = 0.32;
      break;
  }

  let ai, bi;

  switch (mode) {
    case 'organic':
      ai = 3.2;
      bi = 1.05;
      break;
    case 'semi-detached':
      ai = 3.0;
      bi = 1.12;
      break;
    case 'embedded':
      ai = 2.8;
      bi = 1.20;
      break;
  }

  let effort;
  switch (version) {
    case 'basic':
      effort = a * Math.pow(kloc, b);
      break;
    case 'intermediate':
      effort = ai * Math.pow(kloc, bi)* (!!costDrivers ? calculateEffortMultiplier(costDrivers) : 1);
  }


  const duration = c * Math.pow(effort, d);
  const staff = effort / duration;

  return {
    effort,
    duration,
    staff,
  };
}; 