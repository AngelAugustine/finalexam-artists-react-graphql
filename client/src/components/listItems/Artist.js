import React, { Fragment } from 'react'

import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import Instrument from "../cards/Instrument"

import RemoveArtist from '../buttons/RemoveArtist'
import DisplayCard from '../cards/DisplayCard'

import { useQuery } from '@apollo/react-hooks'
import { GET_ARTISTS } from '../../queries/index'
import SingleArtists from '../cards/SingleArtists'

const useStyles = makeStyles({
  label: {
    textDecoration: 'none'
  }
})

const Artist = () => {
 
  const classes = useStyles()
  const { loading, error, data } = useQuery(GET_ARTISTS)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`

  return (
    <>
    {data.artists.map(({ id, firstName, lastName }) => (
    <DisplayCard>
      <Fragment>
        <ListItem>
          {/* <ListItemText primary={'John Smith'} /> */}

          
        
        <ListItemText>
            {firstName} {lastName}
            </ListItemText>
           
           
          <Button variant='contained' 
          
          style={{ margin: '5px' }}>
            Edit
          </Button>
          <RemoveArtist />
        </ListItem>

        <Instrument id={id}/>
        
        <CardActions>
          <Button color='primary' size='small' variant='outlined'
          component={SingleArtists} to="/artits/:id">
            Learn More
          </Button>
        </CardActions>
      </Fragment>
    </DisplayCard>
     ))}
     </>
  )
}

export default Artist
