const workers = [
  {name:"Вася", salary:1300},
  {name:"Паша", salary:1500},
  {name:"Маша", salary:500},
];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker =>{
    if (currentWorker.salary >1000) {
      worthyWorkers.push(currentWorker.name)
    };
  });

  return worthyWorkers;

//  for (let i = 0; i < workersArr.length; i++) {
//    const currentWorker = workersArr[i];
//    if (currentWorker.salary > 1000) {
//      worthyWorkers.push(currentWorker.name);
//    }
//  }
}

console.log(getWorthyWorkers(workers));