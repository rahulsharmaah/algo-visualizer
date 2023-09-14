"use client";
import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Slider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import MergeSortExplanation from "../../components/MergeSortAlgorithm/AlgorithmInfo";
import ComplexityInfo from "../../components/MergeSortAlgorithm/Complexity";
import Gutter from "../../components/Gutter";

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

const MergeSort = ({ showDetails }) => {
  const [data, setData] = useState([]);
  const [isSorting, setIsSorting] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [speed, setSpeed] = useState(1000);
  const [inputValue, setInputValue] = useState("");

  const generateRandomData = () => {
    const randomData = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 100)
    );
    const randomDataString = randomData.join(", ");
    setData(randomData);
    setIterationCount(0);
    setSwapCount(0);
    setInputValue(randomDataString); // Set the input field value
  };

  useEffect(() => {
    generateRandomData();
  }, []);
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const inputArray = value
      .split(",")
      .map((item) => parseInt(item.trim(), 10));
    setData(inputArray);
    setIterationCount(0);
    setSwapCount(0);
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const mergeSort = async () => {
    setIsSorting(true);
    const arr = [...data];
    const sortingSteps = [];

    const merge = (arr, left, middle, right) => {
      const n1 = middle - left + 1;
      const n2 = right - middle;

      const leftArr = new Array(n1);
      const rightArr = new Array(n2);

      for (let i = 0; i < n1; i++) leftArr[i] = arr[left + i];
      for (let i = 0; i < n2; i++) rightArr[i] = arr[middle + 1 + i];

      let i = 0;
      let j = 0;
      let k = left;

      while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
          arr[k] = leftArr[i];
          i++;
        } else {
          arr[k] = rightArr[j];
          j++;
        }
        sortingSteps.push([...arr]);
        k++;
      }

      while (i < n1) {
        arr[k] = leftArr[i];
        sortingSteps.push([...arr]);
        i++;
        k++;
      }

      while (j < n2) {
        arr[k] = rightArr[j];
        sortingSteps.push([...arr]);
        j++;
        k++;
      }
    };

    const mergeSortHelper = (arr, left, right) => {
      if (left < right) {
        const middle = Math.floor((left + right) / 2);
        mergeSortHelper(arr, left, middle);
        mergeSortHelper(arr, middle + 1, right);
        merge(arr, left, middle, right);
      }
    };

    mergeSortHelper(arr, 0, arr.length - 1);

    for (let step = 0; step < sortingSteps.length; step++) {
      setData(sortingSteps[step]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    setIsSorting(false);
  };

  const graphData = data;

  return (
    <>
      <Grid container>
        <Grid item md={12} lg={12}>
          <Container maxWidth="md">
            <Typography variant="h3" gutterBottom textAlign="center">
              Merge Sort{" "}
            </Typography>
            <TextField
              variant="outlined"
              label="Enter numbers (comma-separated)"
              fullWidth
              onChange={handleInputChange}
              placeholder="e.g., 5, 3, 8, 1, 9"
              disabled={isSorting}
              margin="normal"
              value={inputValue}
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
                <ValueItem key={index} highlight={true} swapped={false}>
                  {item}
                </ValueItem>
              ))}
            </ValuesContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={mergeSort}
              disabled={isSorting}
              style={{ marginTop: "20px" }}
            >
              Sort using Merge Sort
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
                    x={index * (400 / graphData.length) + 2} // Add spacing between bars (e.g., 2 units)
                    y={200 - item * 2}
                    width={400 / graphData.length - 4} // Reduce bar width to add spacing
                    height={item * 2}
                    fill={index < iterationCount ? "green" : "blue"} // Change color for sorted bars
                  />
                ))}
              </svg>
            </GraphContainer>
          </Container>
        </Grid>
      </Grid>
      {showDetails ? (
        <Grid container mt={2} mb={3}>
          <Grid item md={12} lg={12}>
            <MergeSortExplanation />
          </Grid>
          <Grid item md={12} lg={12} xs={10}>
            <ComplexityInfo />
          </Grid>
        </Grid>
      ) : (
        null
      )}
    </>
  );
};

export default MergeSort;
