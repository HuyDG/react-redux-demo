import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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

interface Props {
  title: string;
  message?: string;
}

const CounterFunc: React.FC<Props> = ({ title, message }) => {
  const [amount, setAmount] = useState<number>(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmout = () => {
    dispatch(incrementByAmount(amount));
  };

  const handleDecrementByAmout = () => {
    dispatch(decrementByAmount(amount));
  };

  const handleChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount((prevState: number) => Number(event.target.value));
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">Count: {count}</Typography>
        <input type="range" defaultValue={0} onChange={handleChangeAmount} />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleIncrement}>
          Increment
        </Button>
        <Button variant="contained" onClick={handleDecrement}>
          Decrement
        </Button>
        <Button variant="contained" onClick={handleIncrementByAmout}>
          Increment by {amount}
        </Button>
        <Button variant="contained" onClick={handleDecrementByAmout}>
          Decrement by {amount}
        </Button>
      </CardActions>
    </Card>
  );
};

export default CounterFunc;
