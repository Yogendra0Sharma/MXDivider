import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { Divider } from "@chakra-ui/core";

class MXDivider extends Component {
    render() {
        return <Divider orientation={this.props.dividertype.value} 
        style={this.props.style} className={this.props.class}/>;
    }
}

export default hot(MXDivider);
