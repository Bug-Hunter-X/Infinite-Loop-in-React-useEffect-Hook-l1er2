# React useEffect Infinite Loop Bug

This repository demonstrates a common error in React applications: an infinite loop caused by an incorrectly used `useEffect` hook. The `useEffect` hook, without proper dependency array, leads to the component continuously re-rendering itself, causing performance issues and unexpected behavior.

## Bug Description
The `bug.js` file contains a React component that attempts to increment a counter within the `useEffect` hook.  Because the dependency array is empty (`[]`), the effect runs after every render, leading to the counter constantly incrementing and the component re-rendering infinitely. 

## Solution
The `bugSolution.js` file shows the corrected code. The dependency array is now empty (`[]`), ensuring the effect only runs after the initial render, fixing the infinite loop.