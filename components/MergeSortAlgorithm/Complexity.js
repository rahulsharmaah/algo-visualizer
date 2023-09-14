import React from 'react';
import styled from 'styled-components';

const ComplexityInfo = () => {
  return (
    <div>
      <Heading>Time and Space Complexity</Heading>
      <p>
        Merge Sort has the following time and space complexity characteristics:
      </p>
      <ul>
        <li>
          Time Complexity: <strong>O(n log n)</strong> - Merge Sort consistently
          has a time complexity of O(n log n) for all cases (worst, average,
          and best), making it highly efficient.
        </li>
        <li>
          Space Complexity: <strong>O(n)</strong> - Merge Sort requires
          additional memory to store temporary arrays during the merge process.
          The space complexity is O(n).
        </li>
      </ul>
      <p>
        Merge Sort's stable nature, consistent time complexity, and efficient
        use of memory make it a popular choice for sorting large datasets.
      </p>
    </div>
  );
};

const Heading = styled.h2`
  text-align: center; 
`;

export default ComplexityInfo;
