import { Component, createElement } from "react";
import { Divider } from "@chakra-ui/core";

export class preview extends Component {
    render() {
        return <Divider orientation={this.props.dividertype.value} style={this.props.style} className={this.props.class}/>;
    }
}