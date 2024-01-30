const memoize = (func) => {
    const cache = {};
  
    return (...args) => {
      const key = args.join(',');
  
      if (key in cache) {
        console.log('Result fetched from cache for:', args);
        return cache[key];
      }
  
      const result = func(...args);
      console.log('Result calculated for:', args);
  
      cache[key] = result;
      return result;
    };
  };
  
  // Example expensive function to be memoized
  const expensiveFunction = (a, b) => {
    // Simulating an expensive computation
    console.log('Executing expensive function for:', a, b);
    return a + b;
  };
  
  // Create a memoized version of the expensive function
  const memoizedExpensiveFunction = memoize(expensiveFunction);
  
  // Test the memoized function
  console.log(memoizedExpensiveFunction(2, 3)); // Expensive function is executed
  console.log(memoizedExpensiveFunction(2, 3)); // Result fetched from cache
  console.log(memoizedExpensiveFunction(4, 5)); // Expensive function is executed
  console.log(memoizedExpensiveFunction(4, 5)); // Result fetched from cache
  