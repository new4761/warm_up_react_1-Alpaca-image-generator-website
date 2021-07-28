import React from "react"
import { GeneratorPanel } from "./components/GeneratorPanel"
import { ALPACA_ATTRIBUTES } from "../../constants/imageAttributes"
import { Canvas } from "./canvas"
import { randomAlpaca } from "../../utils/randomAlpaca"

export class Alpaca extends React.Component {


    state = {
        alpaca: ALPACA_ATTRIBUTES
    }
    handlePartChange = (part, value) => {
        this.setState(prevState => ({
            alpaca: {
                ...prevState.alpaca,
                [part]: value
            }
        }));

    }
    saveImage = () => {
        console.log(this.childRef.current)
        return this.childRef.current
    }
    handleRandom = () => {
        this.setState(
            {
                alpaca: randomAlpaca()
            }
        )
    }
    render() {
        return (
            <div>

                <Canvas handleRandom={this.handleRandom} alpaca={this.state.alpaca} />
                <GeneratorPanel alpaca={this.state.alpaca}
                    changePart={this.handlePartChange} />
            </div>
        );
    }

}
