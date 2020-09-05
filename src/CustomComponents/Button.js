import React from "react";
import Button from "@material-ui/core/Button";

export default class BetterButton extends React.Component{
    constructor(props){

        super(props)
        this.state = {
            clicked: false,

            Text: props.children == null ? "I Am A Button" : props.children,
            alternateText: props.alternateText,
            currentText: null,

            variant: props.variant == null ? "contained" : props.variant,

            color: props.color == null ? "primary" : props.color,
            alternateColor: props.alternateColor,
            currentColor: null,

            onClick: props.onClick,
            onRevert: props.onRevert,
            revertable: props.revertable == null ? false : props.revertable
        }

        this.state.currentText = this.state.Text;
        this.state.currentColor = this.state.color;

        if (this.state.alternateText == null) this.state.alternateText = this.state.Text;
        if (this.state.alternateColor == null) this.state.alternateColor = this.state.color;
    }


    handleClick = () => {
        if (!this.state.clicked) {
            if (this.state.onclick) this.state.onClick();
            this.setState({currentText: this.state.alternateText, currentColor: this.state.alternateColor, clicked: true});
        }
        else if (this.state.revertable){
            if (this.state.onRevert) this.state.onRevert();
            this.setState({currentText: this.state.Text, currentColor: this.state.color, clicked: false});
        }


    }

    render(){
        return (
            <Button style={{margin:"5px"}} variant={this.state.variant} color={this.state.currentColor} onClick={this.handleClick}>{this.state.currentText}</Button>
        )
    }
}
