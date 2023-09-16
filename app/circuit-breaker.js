// https://learnersbucket.com/examples/interview/circuit-breaker-in-javascript/
const executeApi = (threshold, fn) => {
    const maxNumberOfTries = 3;
    let failureCount = 0;
    let timeAtFailure;
    let timeSinceLastFailure;
    let processFunction = true;
  
    return (...args) => {
        if(timeAtFailure) {
          timeSinceLastFailure = Date.now() - timeAtFailure;
          if(timeSinceLastFailure <= threshold) {
            return;
          }
        }
        try {
          fn();
        } catch(e) {
          failureCount++;
          if(failureCount >= maxNumberOfTries) {
            console.log('function hit too many times, please try again later');
            timeAtFailure = Date.now();
            failureCount = 0;
          }
        }
      }
    }
  
  const testFn = () => {
    let count = 4;
    return () => {
      if (count > 2) {
        console.log('test function executed');
        count = 0;
      } else {
          console.log('error');
          count++;
          throw('error');
      }
    }
  }
  
  const threshold = 5000;
  const execute = executeApi(threshold, testFn());
  
  execute();
  execute();
  execute();
  execute();
  execute();
  execute();
  execute();
  
  
  setTimeout(() => {
    execute();
  }, 6000)
  