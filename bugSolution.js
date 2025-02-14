```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation - The effect runs only once after mount
    // Add any cleanup logic here if needed
    return () => {};
  }, []);

  return <div>Count: {count}</div>;
}
```