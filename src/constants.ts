import { UnitOption } from "./types/efficiency";

export enum Unit {
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
    value: Unit.MILES_PER_KILOWATT_HOUR,
  },
  {
    label: "km/kWh",
    value: Unit.KILOMETERS_PER_KILOWATT_HOUR,
  },
  {
    label: "Wh/mi",
    value: Unit.WATT_HOURS_PER_MILE,
  },
  {
    label: "Wh/km",
    value: Unit.WATT_HOURS_PER_KILOMETER,
  },
  {
    label: "kWh/100mi",
    value: Unit.KILOWATT_HOURS_PER_100_MILES,
  },
  {
    label: "kWh/100km",
    value: Unit.KILOWATT_HOURS_PER_100_KILOMETERS,
  },
  {
    label: "MPGe",
    value: Unit.MPG_EQUIVALENT,
  },
];

export const ConversionFactors = {
  milesToKilometers: 1.6093445,
  kilometersToMiles: 0.62137119,
  kWhPerGallon: 33.410107,
};

export const ConversionFunctions = {
  [Unit.MILES_PER_KILOWATT_HOUR]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (1.0 / (value * ConversionFactors.milesToKilometers)) * 1000.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (1.0 / (value * ConversionFactors.milesToKilometers)) * 100.0;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.kWhPerGallon;
    },
  },
  [Unit.KILOMETERS_PER_KILOWATT_HOUR]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.kilometersToMiles;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 1000.0;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 100.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        1.0 *
        value *
        ConversionFactors.kilometersToMiles *
        ConversionFactors.kWhPerGallon
      );
    },
  },
  [Unit.WATT_HOURS_PER_MILE]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.milesToKilometers * 1000.0;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return 1.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value / 10.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (value * ConversionFactors.milesToKilometers) / 10.0;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return (1.0 / value) * 1000.0 * ConversionFactors.kWhPerGallon;
    },
  },
  [Unit.WATT_HOURS_PER_KILOMETER]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.kilometersToMiles * 1000.0;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 1000.0;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return value;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (value * ConversionFactors.kilometersToMiles) / 10.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value / 10.0;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        (1.0 / value) *
        1000.0 *
        ConversionFactors.kWhPerGallon *
        ConversionFactors.kilometersToMiles
      );
    },
  },
  [Unit.KILOWATT_HOURS_PER_100_MILES]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * ConversionFactors.milesToKilometers * 100.0;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * 10.0;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return 10.0 * value * ConversionFactors.milesToKilometers;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value * ConversionFactors.milesToKilometers;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return (1.0 / value) * 100.0 * ConversionFactors.kWhPerGallon;
    },
  },
  [Unit.KILOWATT_HOURS_PER_100_KILOMETERS]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (
        (1.0 / (value * ConversionFactors.kilometersToMiles * 10.0)) * 1000.0
      );
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (1.0 / value) * 100.0;
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles * 10.0;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return value * 10.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return value * ConversionFactors.kilometersToMiles;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return value;
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return (
        (1.0 / (value * ConversionFactors.kilometersToMiles)) *
        1000.0 *
        ConversionFactors.kWhPerGallon
      );
    },
  },
  [Unit.MPG_EQUIVALENT]: {
    [`get${Unit.MILES_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return value / ConversionFactors.kWhPerGallon;
    },
    [`get${Unit.KILOMETERS_PER_KILOWATT_HOUR}`]: (value: number): number => {
      return (
        (value / ConversionFactors.kWhPerGallon) *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Unit.WATT_HOURS_PER_MILE}`]: (value: number): number => {
      return (1.0 / (value / ConversionFactors.kWhPerGallon)) * 1000.0;
    },
    [`get${Unit.WATT_HOURS_PER_KILOMETER}`]: (value: number): number => {
      return (
        (1.0 / (value / ConversionFactors.kWhPerGallon)) *
        1000.0 *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_MILES}`]: (value: number): number => {
      return (1.0 / (value / ConversionFactors.kWhPerGallon)) * 100.0;
    },
    [`get${Unit.KILOWATT_HOURS_PER_100_KILOMETERS}`]: (
      value: number
    ): number => {
      return (
        (1.0 / (value / ConversionFactors.kWhPerGallon)) *
        100.0 *
        ConversionFactors.milesToKilometers
      );
    },
    [`get${Unit.MPG_EQUIVALENT}`]: (value: number): number => {
      return value;
    },
  },
};
