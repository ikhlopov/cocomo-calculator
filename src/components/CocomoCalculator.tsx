import React, { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Container,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Paper,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material';
import { ProjectMode, CocomoVersion } from '../types/cocomo';
import { calculateCocomo } from '../utils/cocomo';
import { costDriverCategories, costDriverLabels, costDriverRatings } from '../types/CostDrivers';

const CocomoCalculator: React.FC = () => {
  const [kloc, setKloc] = useState<string>('');
  const [mode, setMode] = useState<ProjectMode>('organic');
  const [version, setVersion] = useState<CocomoVersion>('basic');
  const [costDrivers, setCostDrivers] = useState({
    productComplexity: 1.0,
    requiredReliability: 1.0,
    databaseSize: 1.0,
    executionTimeConstraint: 1.0,
    memoryConstraint: 1.0,
    virtualMachineVolatility: 1.0,
    computerTurnaroundTime: 1.0,
    analystCapability: 1.0,
    applicationsExperience: 1.0,
    programmerCapability: 1.0,
    virtualMachineExperience: 1.0,
    programmingLanguageExperience: 1.0,
    modernProgrammingPractices: 1.0,
    softwareTools: 1.0,
    requiredDevelopmentSchedule: 1.0,
  });

  const [result, setResult] = useState<{
    effort: number;
    duration: number;
    staff: number;
  } | null>(null);

  const handleCalculate = useCallback(() => {
    if (kloc) {
      const calculatedResult = calculateCocomo(
        Number(kloc),
        mode,
        version,
        version === 'intermediate' ? costDrivers : undefined
      );
      setResult(calculatedResult);
    }
  }, [kloc, mode, version, costDrivers]);

  useEffect(() => {
    handleCalculate();
  }, [handleCalculate]);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Калькулятор COCOMO
        </Typography>
        
        <Paper sx={{ p: 3, mb: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Box sx={{ mb: 3 }}>
                <ToggleButtonGroup
                  value={version}
                  exclusive
                  onChange={(_, newVersion) => {
                    if (newVersion) {
                      setVersion(newVersion);
                      handleCalculate();
                    }
                  }}
                  fullWidth
                >
                  <ToggleButton value="basic">Базовая модель (COCOMO I)</ToggleButton>
                  <ToggleButton value="intermediate">Промежуточная модель (COCOMO II)</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, mb: 3 }}>
                <TextField
                  fullWidth
                  label="Размер проекта (KLOC)"
                  type="number"
                  value={kloc}
                  onChange={(e) => setKloc(e.target.value)}
                  onBlur={handleCalculate}
                />
                <FormControl fullWidth>
                  <InputLabel>Тип проекта</InputLabel>
                  <Select
                    value={mode}
                    label="Тип проекта"
                    onChange={(e) => {
                      setMode(e.target.value as ProjectMode);
                      handleCalculate();
                    }}
                  >
                    <MenuItem value="organic">Органический</MenuItem>
                    <MenuItem value="semi-detached">Полуразделенный</MenuItem>
                    <MenuItem value="embedded">Встроенный</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {version === 'intermediate' && (
                <Box sx={{ mt: 4 }}>
                  {costDriverCategories.map((cat) => (
                    <Box key={cat.title} sx={{ mb: 3 }}>
                      <Typography variant="h6" gutterBottom>{cat.title}</Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>{cat.description}</Typography>
                      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
                        {cat.keys.map((key) => (
                          <Box key={key}>
                            <FormControl fullWidth>
                              <InputLabel>{costDriverLabels[key]}</InputLabel>
                              <Select
                                value={costDrivers[key as keyof typeof costDrivers]}
                                label={costDriverLabels[key]}
                                onChange={(e) => {
                                  setCostDrivers({
                                    ...costDrivers,
                                    [key]: Number(e.target.value),
                                  });
                                  handleCalculate();
                                }}
                              >
                                {(costDriverRatings[key as keyof typeof costDriverRatings] || [
                                  { label: 'Средний', value: 1.0 },
                                ]).map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label} ({option.value})
                                  </MenuItem>
                                ))}
                              </Select>
                            </FormControl>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>

            <Box
              sx={{
                display: { xs: 'block', md: 'block' },
                position: { xs: 'static', md: 'fixed' },
                right: { md: 32 },
                top: { md: 32 },
                width: 360,
                zIndex: 1200,
                maxWidth: '90vw',
              }}
            >
              { (
                <Paper
                  sx={{
                    p: 3,
                    position: 'sticky',
                    top: { xs: 0, md: 24 },
                    zIndex: 100,
                    background: '#fff',
                    boxShadow: 3,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Результаты расчета:
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr' } }}>
                    <Box>
                      <Typography variant="subtitle1">
                        Трудозатраты (человеко-месяцев):
                      </Typography>
                      <Typography variant="h6">{result?.effort.toFixed(2) ?? <>&mdash;</>}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Длительность (месяцев):
                      </Typography>
                      <Typography variant="h6">{result?.duration.toFixed(2) ?? <>&mdash;</>}</Typography>
                    </Box>
                    <Box>
                      <Typography variant="subtitle1">
                        Необходимый персонал (человек):
                      </Typography>
                      <Typography variant="h6">{result?.staff.toFixed(2) ?? <>&mdash;</>}</Typography>
                    </Box>
                  </Box>
                </Paper>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default CocomoCalculator; 