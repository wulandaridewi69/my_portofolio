import React, { Component } from 'react'

// Docs: https://docs.lottiefiles.com/lottie-player/components/lottie-react/installation
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const Loading = (props) => {
  const { control, style } = props;
    return (
      <div>
        <Player
                autoplay
                speed={1.5}
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_8wpitnly.json"
                style={style || { height: "300px", width: "300px" }}
            >
                <Controls
                    visible={control || false}
                    buttons={[
                        "play",
                        "repeat",
                        "frame",
                        "debug",
                        "snapshot",
                        "background"
                    ]}
                />
            </Player>
      </div> 
    )
}

export default Loading ;
