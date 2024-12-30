import { getHealthStatus } from '../healthIndicator';

describe('getHealthStatus', () => {
  test('should return "healthy" for health > 50', () => {
    expect(getHealthStatus({ name: 'Маг', health: 90 })).toBe('healthy');
  });

  test('should return "wounded" for health <= 50 and > 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 30 })).toBe('wounded');
  });

  test('should return "critical" for health <= 15', () => {
    expect(getHealthStatus({ name: 'Маг', health: 10 })).toBe('critical');
  });
});
