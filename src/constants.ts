import { UnitOption } from "./types/efficiency";

export enum Units {
  MILES_PER_KILOWATT_HOUR = "mikwh",
  KILOMETERS_PER_KILOWATT_HOUR = "kmkwh",
  WATT_HOURS_PER_MILE = "whmi",
  WATT_HOURS_PER_KILOMETER = "whkm",
  KILOWATT_HOURS_PER_100_MILES = "kwh100mi",
  KILOWATT_HOURS_PER_100_KILOMETERS = "kwh100km",
  MPG_EQUIVALENT = "mpge",
}

export const unitOptions: UnitOption[] = [
  {
    label: "mi/kWh",
    value: Units.MILES_PER_KILOWATT_HOUR,
  },
  {
    label: "km/kWh",
    value: Units.KILOMETERS_PER_KILOWATT_HOUR,
  },
  {
    label: "Wh/mi",
    value: Units.WATT_HOURS_PER_MILE,
  },
  {
    label: "Wh/km",
    value: Units.WATT_HOURS_PER_KILOMETER,
  },
  {
    label: "kWh/100mi",
    value: Units.KILOWATT_HOURS_PER_100_MILES,
  },
  {
    label: "kWh/100km",
    value: Units.KILOWATT_HOURS_PER_100_KILOMETERS,
  },
  {
    label: "MPGe",
    value: Units.MPG_EQUIVALENT,
  },
];

export const ConversionFactors = {
  milesToKilometers: 1.6093445,
  kilometersToMiles: 0.62137119,
  kWhPerGallon: 33.410107,
};

export const ConversionFunctions = {
  [Units.MILES_PER_KILOWATT_HOUR]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (1.0 / (value * ConversionFactors.milesToKilometers)) * 1000.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (1.0 / (value * ConversionFactors.milesToKilometers)) * 100.0;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.kWhPerGallon;
    },
  },
  [Units.KILOMETERS_PER_KILOWATT_HOUR]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.kilometersToMiles;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 1000.0;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 100.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        1.0 *
        value *
        ConversionFactors.kilometersToMiles *
        ConversionFactors.kWhPerGallon
      );
    },
  },
  [Units.WATT_HOURS_PER_MILE]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.milesToKilometers * 1000.0;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value / 10.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (value * ConversionFactors.milesToKilometers) / 10.0;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return (1.0 / value) * 1000.0 * ConversionFactors.kWhPerGallon;
    },
  },
  [Units.WATT_HOURS_PER_KILOMETER]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 1000.0;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return value;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (value * ConversionFactors.kilometersToMiles) / 10.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value / 10.0;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        (1.0 / value) *
        1000.0 *
        ConversionFactors.kWhPerGallon *
        ConversionFactors.kilometersToMiles
      );
    },
  },
  [Units.KILOWATT_HOURS_PER_100_MILES]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.milesToKilometers * 100.0;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * 10.0;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return 10.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value * ConversionFactors.milesToKilometers;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return (1.0 / value) * 100.0 * ConversionFactors.kWhPerGallon;
    },
  },
  [Units.KILOWATT_HOURS_PER_100_KILOMETERS]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (
        (1.0 / (value * ConversionFactors.kilometersToMiles * 10.0)) * 1000.0
      );
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles * 10.0;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return value * 10.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value;
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        (1.0 / (value * ConversionFactors.kilometersToMiles)) *
        1000.0 *
        ConversionFactors.kWhPerGallon
      );
    },
  },
  [Units.MPG_EQUIVALENT]: {
    [`get${Units.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value / ConversionFactors.kWhPerGallon;
    },
    [`get${Units.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (
        (value / ConversionFactors.kWhPerGallon) *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Units.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / (value / ConversionFactors.kWhPerGallon)) * 1000.0;
    },
    [`get${Units.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (
        (1.0 / (value / ConversionFactors.kWhPerGallon)) *
        1000.0 *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Units.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / (value / ConversionFactors.kWhPerGallon)) * 100.0;
    },
    [`get${Units.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (
        (1.0 / (value / ConversionFactors.kWhPerGallon)) *
        100.0 *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Units.MPG_EQUIVALENT}`]: (value: number): number => {
      return value;
    },
  },
};
