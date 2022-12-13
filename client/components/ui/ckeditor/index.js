import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

function CKEditor({
  onChange,
  editorLoaded,
  name,
  value
}) {
  const editorRef = useRef()
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
  }, [])

  return (
    <>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'bold', 'italic', 'link', '|',
              'numberedList', 'bulletedList', '|',
              'outdent', 'indent', '|',
              'undo', 'redo'
            ]
          }}
          name={name}
          data={value}
          onReady={(editor) => {
            // Log available toolbar items
            // console.log(Array.from( editor.ui.componentFactory.names()))

            // Disable buttons
            const bulletListItems = [3 ,4, 5, 6]
            for (let i = 0; i < editor.ui.view.toolbar.items.length; i += 1) {
              if (!bulletListItems.includes(i)) {
                editor.ui.view.toolbar.items.get(i).isEnabled = false
              }
            }

            // Set editor height
            editor.editing.view.change((writer) => {
              writer.setStyle(
                'min-height',
                '600px',
                editor.editing.view.document.getRoot()
              )
            })
          }}
          onChange={(e, editor) => {
            const data = editor.getData()
            onChange(data)
          }}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  )
}

CKEditor.propTypes = {
  onChange: PropTypes.func,
  editorLoaded: PropTypes.bool,
  name: PropTypes.string,
  value: PropTypes.string
}

export default CKEditor
