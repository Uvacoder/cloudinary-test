import React from "react"
import ReactPlayer from "react-player"
import "./responsive-player.css"

const ResponsivePlayer = ({ url }) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
        loop={true}
        volume="0"
        playing={true}
      />
    </div>
  )
}

export default ResponsivePlayer
