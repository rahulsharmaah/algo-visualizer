"use client";

import React, { useState } from "react";
import { XYPlot, VerticalBarSeries, XAxis, YAxis } from "react-vis";
import {
  Container,
  Typography,
  TextField,
  Button,
  Slider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";

const ValuesContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 20px;
`;

const ValueItem = styled("div")`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.highlight ? "red" : props.swapped ? "green" : "blue"};
  color: white;
  font-weight: bold;
  border-radius: 4px;
`;

const StatsContainer = styled("div")`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SortingVisualizer = () => {
  const [data, setData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [speed, setSpeed] = useState(1000);

  const generateRandomData = () => {
    const randomData = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    setData(randomData);
    setIterationCount(0);
    setSwapCount(0);
  };

  const handleInputChange = (event) => {
    // Convert the input string to an array of integers
    const inputArray = event.target.value
      .split(",")
      .map((item) => parseInt(item.trim(), 10));

    setData(inputArray);
    setIterationCount(0);
    setSwapCount(0);
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...data];
    const sortingSteps = [];

    let totalIterations = 0;
    let totalSwaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        sortingSteps.push([...arr]); // Store a copy of the array at each step
        totalIterations++;

        if (arr[j] > arr[j + 1]) {
          // Swap the elements
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          totalSwaps++;
        }
      }
    }

    // Add the final sorted array to the steps
    sortingSteps.push([...arr]);

    // Visualize the sorting process step by step
    for (let step = 0; step < sortingSteps.length; step++) {
      setData(sortingSteps[step]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    setIsSorting(false);
    setIterationCount(totalIterations);
    setSwapCount(totalSwaps);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Sorting Visualizer
      </Typography>
      <TextField
        variant="outlined"
        label="Enter numbers (comma-separated)"
        fullWidth
        onChange={handleInputChange}
        placeholder="e.g., 5, 3, 8, 1, 9"
        disabled={isSorting}
        margin="normal"
      />
      <Button
        variant="contained"
        onClick={generateRandomData}
        disabled={isSorting}
      >
        Generate Random Data
      </Button>
      <ValuesContainer>
        {data.map((item, index) => (
          <ValueItem key={index} highlight={false} swapped={false}>
            {item}
          </ValueItem>
        ))}
      </ValuesContainer>
      <Button
        variant="contained"
        color="primary"
        onClick={bubbleSort}
        disabled={isSorting}
        style={{ marginTop: "20px" }}
      >
        Sort using Bubble Sort
      </Button>
      <StatsContainer>
        <div>
          <Typography variant="h5">Number of Iterations:</Typography>
          <Typography variant="body1">{iterationCount}</Typography>
        </div>
        <div>
          <Typography variant="h5">Number of Swaps:</Typography>
          <Typography variant="body1">{swapCount}</Typography>
        </div>
      </StatsContainer>
      <div style={{ marginTop: "20px" }}>
        <Typography id="speed-slider" gutterBottom>
          Speed:
        </Typography>
        <Slider
          value={speed}
          onChange={handleSpeedChange}
          min={100}
          max={500}
          valueLabelDisplay="auto"
          aria-labelledby="speed-slider"
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h4">Graph</Typography>
        <XYPlot width={400} height={200} stroke="red" color="blue">
          <XAxis />
          <YAxis />
          <VerticalBarSeries
            data={data.map((item, index) => ({ x: index, y: item }))}
          />
        </XYPlot>
      </div>
    </Container>
  );
};

export default SortingVisualizer;