import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select';
import { useQuery } from '@apollo/react-hooks'
import { GET_ARTISTS } from '../../queries/index'

const AddInstrument = () =>{

  const [year, setYear] = useState('')
  const [brand, setBrand] = useState('')
  const [type, setType] = useState('')
  const [price, setPrice] = useState('')

  const { loading, error, data } = useQuery(GET_ARTISTS)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  

    return(
        <form>
            <TextField
                label='Year'
                defaultValue={year}
                margin='normal'
                onChange={e => setYear(e.target.value)}
                variant='outlined'
                fullWidth
                style={{ margin: '10px' }}
            />
            <TextField
                label='Brand'
                defaultValue={brand}
                margin='normal'
                fullWidth
                onChange={e => setBrand(e.target.value)}
                variant='outlined'
                style={{ margin: '10px' }}
            />
            <TextField
                label='Type'
                defaultValue={type}
                fullWidth
                margin='normal'
                onChange={e => setType(e.target.value)}
                variant='outlined'
                style={{ margin: '10px' }}
            />
            <TextField
                label='Price'
                defaultValue={price}
                margin='normal'
                fullWidth
                onChange={e => setPrice(e.target.value)}
                variant='outlined'
                style={{ margin: '10px' }}
            />
            
            <Select 
            native
            variant="outlined"
            label="Artist"
            fullWidth
            style={{ margin: '10px' }}
            >
                
            {data.artists.map(({ id, firstName, lastName }) => (
        
        <option key={id} id={id}>
            {firstName} {lastName}
            </option>
           
            ))}
            </Select>

            <Button
                type='submit'
                variant='contained'
                color='primary'
                style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
            >
                Add Instrument
            </Button>
            <Button
                type='submit'
                variant='contained'
                color='secondary'
                style={{ marginTop: '20px', alignItems: 'center', marginLeft: '10px' }}
            >
                Cancel
            </Button>

        </form>
    )

}

export default AddInstrument