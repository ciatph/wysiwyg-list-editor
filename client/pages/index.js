import Link from 'next/link'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    display: 'grid',
    placeContent: 'center',
    '& a': {
      textDecoration: 'none'
    },
    '& a:visited': {
      color: '#fff'
    },
    '& button:hover': {
      color: '#fff'
    }
  }
}

export default function Home() {
  return (
    <Container maxWidth='lg' sx={styles.container}>
      <Link href='/editor' passHref>
        <Button variant='contained' disableElevation>
          List Editor
        </Button>
      </Link>
    </Container>
  )
}
