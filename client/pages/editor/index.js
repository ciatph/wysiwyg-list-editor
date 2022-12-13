import { useState } from 'react'
import EditorComponent from '@/components/editor'

function Editor () {
  const [data, setData] = useState('')

  return (
    <EditorComponent
      data={data}
      handleSetData={setData}
    />
  )
}

export default Editor
