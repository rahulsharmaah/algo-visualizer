import { Button } from "@mui/material";
import React, { useState } from "react";

const BubbleSortAlgorithm = ({
  data,
  speed,
  onDataChange,
  onIterationChange,
  onSwapChange,
}) => {
  const [isSorting, setIsSorting] = useState(false);

  const bubbleSort = async () => {
    setIsSorting(true);
    const arr = [...data];
    const sortingSteps = [];

    let totalIterations = 0;
    let totalSwaps = 0;

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        sortingSteps.push([...arr]);
        totalIterations++;

        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          totalSwaps++;
        }
      }
    }

    sortingSteps.push([...arr]);

    for (let step = 0; step < sortingSteps.length; step++) {
      onDataChange(sortingSteps[step]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }

    setIsSorting(false);
    onIterationChange(totalIterations);
    onSwapChange(totalSwaps);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={bubbleSort}
        disabled={isSorting}
        style={{ marginTop: "20px" }}
      >
        Sort using Bubble Sort
      </Button>
    </div>
  );
};

export default BubbleSortAlgorithm;
