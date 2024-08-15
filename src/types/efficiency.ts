import { Unit } from "../constants"

export interface UnitOption {
    label: string
    value: Unit
}

export interface EfficiencyResult {
    [Unit.MILES_PER_KILOWATT_HOUR]: number
    [Unit.KILOMETERS_PER_KILOWATT_HOUR]: number
    [Unit.WATT_HOURS_PER_MILE]: number
    [Unit.WATT_HOURS_PER_KILOMETER]: number
    [Unit.KILOWATT_HOURS_PER_100_MILES]: number
    [Unit.KILOWATT_HOURS_PER_100_KILOMETERS]: number
    [Unit.MPG_EQUIVALENT]: number
}