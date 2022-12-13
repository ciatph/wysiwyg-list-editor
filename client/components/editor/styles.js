const styles = {
  topMargin: {
    marginTop: '16px'
  },
  htmlTags: {
    border: theme => `1px solid ${theme.palette.primary.dark}`,
    borderRadius: '8px',
    padding: '8px',
    fontFamily: 'courier',
    position: 'relative',
    minHeight: '53px',
    '& button': {
      position: 'absolute',
      right: 6,
      top: 6,
      bottom: 6,
      width: '80px',
      height: '40px'
    }
  }
}

export default styles
