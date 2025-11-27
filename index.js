var MJSL = {
  "scale": function(number, min=-1, max=1){
    return (number * (max - min)) + min;
  },
  "biggest": function(numbers){
    return numbers.toSorted()[numbers.length - 1];
  },
  "smallest": function(numbers){
    return numbers.toSorted()[0];
  }
};
