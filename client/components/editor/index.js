import { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Snackbar from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import CKEditor from '@/components/ui/ckeditor'
import styles from './styles'

import ContentPasteIcon from '@mui/icons-material/ContentPaste'

function EditorComponent ({ data, handleSetData }) {
  const [editorLoaded, setEditorLoaded] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      setEditorLoaded(true)
    }
  }, [])

  return (
    <Container maxWidth='xl' sx={styles.topMargin}>
      <Typography variant='h4'>
        Bullet/Numbered Lists to HTML
      </Typography>

      <Grid container sx={styles.topMargin} spacing={2}>
        {/** Editor UI */}
        <Grid item xs={12} md={6}>
          <CKEditor
            name="description"
            editorLoaded={editorLoaded}
            onChange={(newData) => {
              handleSetData(newData)
            }}
          />
        </Grid>

        {/** HTML Tags */}
        <Grid item xs={12} md={6}>
          <Box sx={styles.htmlTags}>
            <Button
              variant='contained'
              disableElevation
              startIcon={<ContentPasteIcon />}
              disabled={data.length === 0}
              onClick={() => {
                navigator.clipboard.writeText(data)
                setIsOpen(prev => !prev)
              }}
            >
              Copy
            </Button>

            {data.length > 0
              ? data
              : <div>Please type something on the editor</div>
            }
          </Box>
        </Grid>
      </Grid>

      {/** Snackbar info */}
      <Snackbar
        open={isOpen}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setIsOpen(prev => !prev)}
      >
        <Alert
          severity="success"
          sx={{ width: '100%' }}
        >
          Copied to clipboard!
        </Alert>
      </Snackbar>
    </Container>
  )
}

EditorComponent.propTypes = {
  data: PropTypes.string,
  handleSetData: PropTypes.func
}

export default EditorComponent
