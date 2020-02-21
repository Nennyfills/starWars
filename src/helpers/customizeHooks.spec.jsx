import { act } from 'react-dom/test-utils';
import testHook from './testHook';
import useCustomizeHooks from './customizeHook';

describe('useCustomizeHooks', () => {
  let field;
  beforeEach(() => {
    testHook(() => {
      field = useCustomizeHooks();
    });
  });

  it('should have an handleFilm function', () => {
    expect(field.handleFilm).toBeInstanceOf(Function);
  });
  it('should have an handleSpecie function', () => {
    expect(field.handleSpecie).toBeInstanceOf(Function);
  });
  it('should have an handleVehicle function', () => {
    expect(field.handleVehicle).toBeInstanceOf(Function);
  });
  it('should have an handleStarShips function', () => {
    expect(field.handleStarShips).toBeInstanceOf(Function);
  });
  it('should have an open function', () => {
    expect(field.open).toBeInstanceOf(Function);
  });

  it('should have an close function', () => {
    expect(field.close).toBeInstanceOf(Function);
  });
  it('should have an next function', () => {
    expect(field.next).toBeInstanceOf(Function);
  });
  it('should have an previous function', () => {
    expect(field.previous).toBeInstanceOf(Function);
  });
  it('should have a boolean value', () => {
    expect(field.eachStarShips).toBe(false);
  });
  it('should have a boolean value', () => {
    expect(field.eachVehicles).toBe(false);
  });
  it('should have a boolean value', () => {
    expect(field.eachSpecies).toBe(false);
  });
  it('should have a boolean value', () => {
    expect(field.eachFilm).toBe(false);
  });
  it('should be an empty string', () => {
    expect(field.eachPerson).toBe('');
  });
  it('should update the value when handleFilm is called', async () => {
    await act(async () => {
      await field.handleFilm();
    });
    expect(field.handleFilm).toBeInstanceOf(Function);
    expect(field.eachFilm).toBe(true);
  });
  it('should update the value when eachStarShips is called', async () => {
    await act(async () => {
      await field.handleStarShips();
    });
    expect(field.handleStarShips).toBeInstanceOf(Function);
    expect(field.eachStarShips).toBe(true);
  });
  it('should update the value when handleVehicles is called', async () => {
    await act(async () => {
      await field.handleVehicle();
    });
    expect(field.handleVehicle).toBeInstanceOf(Function);
    expect(field.eachVehicles).toBe(true);
  });
  it('should update the value when eachSpecies is called', async () => {
    await act(async () => {
      await field.handleSpecie();
    });
    expect(field.handleSpecie).toBeInstanceOf(Function);
    expect(field.eachSpecies).toBe(true);
  });
  it('should call side effect', () => {
  });
});
