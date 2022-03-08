import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
  return (

    <div>
      <ToastContainer position='bottom-right' />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
          </Grid.Column>
          <Grid.Column width={12}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>

  )
}
