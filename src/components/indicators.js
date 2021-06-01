import React from "react";

import { Row } from '@sberdevices/plasma-ui/components/Grid';
import { Toast } from '@sberdevices/plasma-ui';
import { setConstantValue } from "typescript";

import './centerIndicators.css'

class Indicators extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <Row className = 'centerInd'>
                <Toast text={`Количество жизней: ${this.props.lives}💖`} />
                <Toast text={`Мана: ${this.props.mana}🧙`} />
                <Toast text={`Слава: ${this.props.glory}🎺`} />
            </Row>
        );
    }
  }

export default Indicators;