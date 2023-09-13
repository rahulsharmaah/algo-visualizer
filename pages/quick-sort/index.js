"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Slider,
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

const GraphContainer = styled("div")`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuickSort = () => {
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

  const quickSort = async () => {
    setIsSorting(true);
    const arr = [...data];
    const sortingSteps = [];

    let totalIterations = 0;
    let totalSwaps = 0;

    async function partition(low, high) {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        sortingSteps.push([...arr]);
        totalIterations++;

        if (arr[j] < pivot) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
          totalSwaps++;
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      totalSwaps++;

      return i + 1;
    }

    async function quickSortHelper(low, high) {
      if (low < high) {
        const partitionIndex = await partition(low, high);

        await quickSortHelper(low, partitionIndex - 1);
        await quickSortHelper(partitionIndex + 1, high);
      }
    }

    await quickSortHelper(0, arr.length - 1);

    sortingSteps.push([...arr]);

    for (let step = 0; step < sortingSteps.length; step++) {
      setData(sortingSteps[step]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    setIsSorting(false);
    setIterationCount(totalIterations);
    setSwapCount(totalSwaps);
  };

  // Usage:
  // Make sure to replace your bubbleSort function with mergeSort.

  // const graphData = data;

  // const graphAnimation = useSpring({
  //   config: {
  //     duration: speed,
  //   },
  //   opacity: 1,
  // });

  // useEffect(() => {
  //   // Trigger animation when data changes
  //   graphAnimation.start();
  // }, [data, graphAnimation]);
  const graphData = data;

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Quick Sort Visualizer
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
        onClick={quickSort}
        disabled={isSorting}
        style={{ marginTop: "20px" }}
      >
        Sort using Quick Sort
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
      <GraphContainer>
        <Typography variant="h4">Graph</Typography>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="200"
          style={{
            overflow: "visible",
          }}
        >
          {graphData.map((item, index) => (
            <rect
              key={index}
              x={index * (400 / graphData.length)}
              y={200 - item * 2}
              width={400 / graphData.length}
              height={item * 2}
              fill="blue"
              gradientTransform="red"
            />
          ))}
        </svg>
      </GraphContainer>
      );
    </Container>
  );
};

export default QuickSort;