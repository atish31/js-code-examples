//https://learnersbucket.com/examples/interview/execute-async-functions-in-parallel-javascript/

function createAsyncTask() {
    const value = Math.floor(Math.random() * 10);
    return function(callback) {
      setTimeout(() => {
        callback(value);
      }, value * 1000);
    };
  }



  const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask()
];

asyncParallel(taskList, result => {
  console.log('results', result);
});

Output:
"results" // [object Array] (6)
[1,6,7,7,9,9]