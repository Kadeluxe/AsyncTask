# AsyncTask

Resolve Promises outside them

## Example

```TypeScript
import {AsyncTask} from "@kadeluxe/async-task";

function getAsyncTask() {
  const task = new AsyncTask<number>();
  
  process.nextTick(() => task.resolve(1337));
  
  return task;
}

getAsyncTask().then(console.log); // -> 1337
```

`AsyncTask` is typed and implements `Promise` interface, so you can treat it as a
normal Promise. 
