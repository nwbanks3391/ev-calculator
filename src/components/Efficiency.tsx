import React, { useState } from 'react'
import Grid from "@mui/material/Grid"
import EfficiencyForm from './EfficiencyForm'
import EfficiencyResults from './EfficiencyResults'
import { EfficiencyResult } from '../types/efficiency'
import { Unit, ConversionFunctions, unitOptions } from '../constants'

type Props = {}

const Efficiency = (props: Props) => {
    const [efficiency, setEfficiency] = useState<EfficiencyResult | null>(null)
    const calcEfficiency = (unit: Unit, value: number) => {
        if(!unit || !value){
            setEfficiency(null)
            return
        }
        const conversions = ConversionFunctions[unit]
        const values = {
            mikwh: conversions.getmikwh(value),
            kmkwh: conversions.getkmkwh(value),
            whmi: conversions.getwhmi(value),
            whkm: conversions.getwhkm(value),
            kwh100mi: conversions.getkwh100mi(value),
            kwh100km: conversions.getkwh100km(value),
            mpge: conversions.getmpge(value),
        }
        setEfficiency(values)

    }
  return (
    <Grid container>
        <Grid item xs={12} md={6}>
            <EfficiencyForm onClick={calcEfficiency} />  
        </Grid>
        <Grid item xs={12} md={6}>
            <EfficiencyResults efficiency={efficiency}/>
        </Grid>
    </Grid>
  )
}

export default Efficiency;