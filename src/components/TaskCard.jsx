import React from 'react'
import {Card, CardContent, Checkbox, Grid, Typography} from '@mui/material'

const TaskCard = ({text, isChecked}) => {
  return (
    <Card sx={{width: '100%', my: 2}}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Checkbox checked={isChecked} />
          </Grid>
          <Grid  item xs={10}>
            <Typography variant="body1" color="initial">
              {text}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default TaskCard