import { Card,CardContent, Typography } from '@mui/material'
import React from 'react'

function InfoBox({title,cases,total}) {
  return (
    <Card className="infoBox">
        <CardContent>
            {/* Title Coronavirus case */}
            <Typography  color="textSecondary">
                {title}
            </Typography>

            {/* No Of Coronavirus case */}
                <h2 className="infoBox_cases">{cases}</h2>

            {/* Total Coronavirus case */}
                <Typography className="infoBox_total" color="textSecondary">
                    {total} 
                    </Typography>           
        </CardContent>
        </Card>
  )
}

export default InfoBox