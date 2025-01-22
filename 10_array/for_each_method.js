//forEach Method
//It is used to executes a given function once for each element in the array
//It does not change in original array
//It does not return new array

const maang = ["Meta", "Amazon", "Apple", "Netflix", "Google"]

maang.forEach(ele => {
    console.log(ele + " Company")
});

//output
// Meta Company
// Amazon Company
// Apple Company
// Netflix Company
// Google Company


//Original array
console.log(maang)
//[ 'Meta', 'Amazon', 'Apple', 'Netflix', 'Google' ]