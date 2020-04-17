import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import { Fragment } from 'react'

import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'

const Instrument = (id) =>{
    return (

      <DisplayCard>
      <Fragment>
        <ListItem>
          {/* <ListItemText primary={'John Smith'} /> */}

          
        
        <ListItemText>
            Instrument
            </ListItemText>

            </ListItem >

            <CardActions>
          <Button color='primary' size='small' variant='outlined'
          >
            Edit
          </Button>
        </CardActions>

        <CardActions>
          <Button color='secondary' size='small' variant='outlined'
          >
            Delete
          </Button>
        </CardActions>
            </Fragment>
            </DisplayCard>
    )
}

export default Instrument