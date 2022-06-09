import { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  Slider,
  Typography
} from "@mui/material";

import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} from "../../features/counter/counterSlice";

type Props = {
  title: string;
  message?: string;
};

type State = {
  amount: number;
};

class CounterClass extends Component<Props, State> {
  state = {
    amount: 0
  };

  handleIncrement = () => {
    this.props.increment();
  };

  handleDecrement = () => {
    this.props.decrement();
  };

  handleIncrementByAmout = () => {
    this.props.incrementByAmount(this.state.amount);
  };

  handleDecrementByAmout = () => {
    this.props.decrementByAmount(this.state.amount);
  };

  handleChangeAmount = (event) => {
    this.setState((prevState: number) => ({
      amount: Number(event.target.value)
    }));
  };

  render() {
    return (
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h5">{this.props.title}</Typography>
          <Typography variant="h6">Count: {this.props.count}</Typography>
          <Slider
            defaultValue={0}
            onChange={this.handleChangeAmount}
            valueLabelDisplay="auto"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" onClick={this.handleIncrement}>
            Increment
          </Button>
          <Button variant="contained" onClick={this.handleDecrement}>
            Decrement
          </Button>
          <Button variant="contained" onClick={this.handleIncrementByAmout}>
            Increment by {this.state.amount}
          </Button>
          <Button variant="contained" onClick={this.handleDecrementByAmout}>
            Decrement by {this.state.amount}
          </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.counter.value
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementByAmount: (amount: number) => dispatch(incrementByAmount(amount)),
    decrementByAmount: (amount: number) => dispatch(decrementByAmount(amount))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
