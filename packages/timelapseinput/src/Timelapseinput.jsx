import React from "react"
import { useTimer } from "./timer"


class TimelapseControls extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
            frequency: this.props.frequency,
            step: this.props.step,
            startTime: this.props.startTime,
            endTime: this.props.endTime,
            time: this.props.startTime
        }

        this.onStopCallback = this.onStopCallback.bind(this)
        this.onPlayCallback = this.onPlayCallback.bind(this)

    }


    onPlayCallback(event) {
        let interval
        this.state.isPlaying = true

        /** set interval to run frequncy times every second */
        this.timer = setInterval(() => {
            /** increment the time by the step value */
                    console.log(this.state.time + this.state.step)

            this.setState({
                time: this.state.time.valueOf() + this.state.step
            })
            //this.state.time = (this.state.time + this.state.step)
        }, 1000 / this.state.frequency)

        //this.state.time = this.state.time + this.state.step
        console.log(this.state.isPlaying)

    }

    onStopCallback(event) {
        console.log(this.state.isPlaying)

        this.setState({
            isPlaying: false
        })
        clearInterval(this.timer)
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.onPlayCallback}>Play</button>
                <button onClick={this.onStopCallback}>Stop</button>
                <h1>{new Date(this.state.time).toLocaleString()}</h1>
            </div>
        )
    }
}

export default TimelapseControls
