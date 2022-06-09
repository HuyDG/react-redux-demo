import { FC } from "react";
import { Box, Grid, Typography } from "@mui/material";

// import {
//   useFetchPostsQuery,
//   useFetchCommentsQuery
// } from "./features/fakeApi/fakeApiSlice";
import "./styles.css";
import CounterClass from "./components/Counter/CounterClass";
import CounterFunc from "./components/Counter/CounterFunc";

const App: FC = () => {
  // const {
  //   data: posts = [],
  //   isFetching: isPostsFetching
  // } = useFetchPostsQuery();
  // const {
  //   data: comments = [],
  //   isFetching: isCommentsFetching
  // } = useFetchCommentsQuery();

  return (
    <Box className="App">
      <Typography>Hello CodeSandbox</Typography>
      <Typography>Start editing to see some magic happen!</Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <CounterClass title="Class component" />
        </Grid>
        <Grid item xs>
          <CounterFunc title="Function component" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
