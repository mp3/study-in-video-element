import React from 'react'
import ReactDOM from 'react-dom'

const Container = () => {
  return (
    <video
      src="https://study-in-video-element.s3-ap-northeast-1.amazonaws.com/IMG_2415_1080.mov"
      controls={true}
      width="100%"
    >
        not supported
      </video>
  )
}

ReactDOM.render(<Container />, document.getElementById('container'))
