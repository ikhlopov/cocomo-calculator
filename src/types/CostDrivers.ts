// Рейтинги и коэффициенты для факторов стоимости
export const costDriverRatings = {
  requiredReliability: [
    { label: 'Очень низкий', value: 0.75 },
    { label: 'Низкий', value: 0.88 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.15 },
    { label: 'Очень высокий', value: 1.40 },
  ],
  databaseSize: [
    { label: 'Низкий', value: 0.94 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.08 },
    { label: 'Очень высокий', value: 1.16 },
  ],
  productComplexity: [
    { label: 'Очень низкий', value: 0.70 },
    { label: 'Низкий', value: 0.85 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.15 },
    { label: 'Очень высокий', value: 1.30 },
    { label: 'Критический', value: 1.65 },
  ],
  executionTimeConstraint: [
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.11 },
    { label: 'Очень высокий', value: 1.30 },
    { label: 'Критический', value: 1.66 },
  ],
  memoryConstraint: [
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.06 },
    { label: 'Очень высокий', value: 1.21 },
    { label: 'Критический', value: 1.56 },
  ],
  virtualMachineVolatility: [
    { label: 'Низкий', value: 0.87 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.15 },
    { label: 'Очень высокий', value: 1.30 },
  ],
  computerTurnaroundTime: [
    { label: 'Низкий', value: 0.87 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.07 },
    { label: 'Очень высокий', value: 1.15 },
  ],
  analystCapability: [
    { label: 'Очень низкий', value: 1.46 },
    { label: 'Низкий', value: 1.19 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.86 },
    { label: 'Очень высокий', value: 0.71 },
  ],
  applicationsExperience: [
    { label: 'Очень низкий', value: 1.29 },
    { label: 'Низкий', value: 1.13 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.91 },
    { label: 'Очень высокий', value: 0.82 },
  ],
  programmerCapability: [
    { label: 'Очень низкий', value: 1.42 },
    { label: 'Низкий', value: 1.17 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.86 },
    { label: 'Очень высокий', value: 0.70 },
  ],
  virtualMachineExperience: [
    { label: 'Очень низкий', value: 1.21 },
    { label: 'Низкий', value: 1.10 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.90 },
  ],
  programmingLanguageExperience: [
    { label: 'Очень низкий', value: 1.14 },
    { label: 'Низкий', value: 1.07 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.95 },
  ],
  modernProgrammingPractices: [
    { label: 'Очень низкий', value: 1.24 },
    { label: 'Низкий', value: 1.10 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.91 },
    { label: 'Очень высокий', value: 0.82 },
  ],
  softwareTools: [
    { label: 'Очень низкий', value: 1.24 },
    { label: 'Низкий', value: 1.10 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 0.91 },
    { label: 'Очень высокий', value: 0.83 },
  ],
  requiredDevelopmentSchedule: [
    { label: 'Очень низкий', value: 1.23 },
    { label: 'Низкий', value: 1.08 },
    { label: 'Средний', value: 1.00 },
    { label: 'Высокий', value: 1.04 },
    { label: 'Очень высокий', value: 1.10 },
  ],
};

export const costDriverCategories = [
  {
    title: 'Характеристики продукта',
    description: 'Факторы, связанные с требованиями к ПО и его сложностью.',
    keys: [
      'requiredReliability',
      'databaseSize',
      'productComplexity',
    ],
  },
  {
    title: 'Характеристики аппаратного обеспечения',
    description: 'Ограничения и требования к аппаратной части и окружению.',
    keys: [
      'executionTimeConstraint',
      'memoryConstraint',
      'virtualMachineVolatility',
      'computerTurnaroundTime',
    ],
  },
  {
    title: 'Характеристики персонала',
    description: 'Навыки, опыт и способности команды разработки.',
    keys: [
      'analystCapability',
      'applicationsExperience',
      'programmerCapability',
      'virtualMachineExperience',
      'programmingLanguageExperience',
    ],
  },
  {
    title: 'Характеристики проекта',
    description: 'Методы, инструменты и требования к процессу разработки.',
    keys: [
      'modernProgrammingPractices',
      'softwareTools',
      'requiredDevelopmentSchedule',
    ],
  },
];

export const costDriverLabels: Record<string, string> = {
  requiredReliability: 'Требуемая надёжность ПО',
  databaseSize: 'Размер БД приложения',
  productComplexity: 'Сложность продукта',
  executionTimeConstraint: 'Ограничения быстродействия',
  memoryConstraint: 'Ограничения памяти',
  virtualMachineVolatility: 'Неустойчивость окружения виртуальной машины',
  computerTurnaroundTime: 'Требуемое время восстановления',
  analystCapability: 'Аналитические способности',
  applicationsExperience: 'Опыт разработки',
  programmerCapability: 'Способности к разработке ПО',
  virtualMachineExperience: 'Опыт использования виртуальных машин',
  programmingLanguageExperience: 'Опыт разработки на языках программирования',
  modernProgrammingPractices: 'Применение методов разработки ПО',
  softwareTools: 'Использование инструментария разработки ПО',
  requiredDevelopmentSchedule: 'Требования к графику разработки',
};

export {}; 