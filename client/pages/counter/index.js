import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/store/counter/counterSlice'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Container from '@mui/material/Container'

function Counter () {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)

  return (
    <Container maxWidth='md'>
      <h3>Counter Page</h3>
      <Box sx={{ margin: '8px' }}>{count}</Box>

      <ButtonGroup variant='outlined' disableElevation>
        <Button onClick={() => dispatch(decrement())}>
          -
        </Button>
        <Button onClick={() => dispatch(increment())} variant='contained'>
          +
        </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Counter
