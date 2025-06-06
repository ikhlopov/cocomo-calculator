export type ProjectMode = 'organic' | 'semi-detached' | 'embedded';
export type CocomoVersion = 'basic' | 'intermediate';

export interface CocomoCoefficients {
  a: number;
  b: number;
  c: number;
  d: number;
}

export const COCOMO_COEFFICIENTS: Record<ProjectMode, CocomoCoefficients> = {
  organic: {
    a: 2.4,
    b: 1.05,
    c: 2.5,
    d: 0.38
  },
  'semi-detached': {
    a: 3.0,
    b: 1.12,
    c: 2.5,
    d: 0.35
  },
  embedded: {
    a: 3.6,
    b: 1.20,
    c: 2.5,
    d: 0.32
  }
};

export interface CocomoResult {
  effort: number;
  duration: number;
  staff: number;
} 