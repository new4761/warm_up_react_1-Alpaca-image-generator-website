
import React from 'react';
import { Buttons } from './partButton'
import PropTypes from 'prop-types';
import { ATTRIBUTE_MAP } from "../../../../constants/imageAttributes"
export class GeneratorPanel extends React.Component {

    renderButton() {
        return (
            Object.keys(ATTRIBUTE_MAP).map((part, index) => {
                return <div key={index}> <h2>{part}</h2>
                    {Object.values(ATTRIBUTE_MAP[part]).map((value, index) => {
                        if (value === "")
                            value = "none"
                        return <Buttons value={value} key={index} part={part}
                            changePart={this.props.changePart} />
                    }
                    )}
                </div>
            })
        )

    }
    render() {
        return (
            <div>{this.renderButton()}
            </div>

        );
    }

}
GeneratorPanel.propTypes = {
    alpaca: PropTypes.object
};