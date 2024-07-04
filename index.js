function grandfather() {
  console.log("Inside grandfather function");

  function father() {
    console.log("Inside father function");

    function child() {
      console.log("Inside child function");
      let a = "hello"
      return a;
    }

    return child;
  }

  return father;
}

// Step 1: Call grandfather to get access to father
const fatherFunction = grandfather(); // This will log "Inside grandfather function"

let child =  fatherFunction()
let b = child()
console.log(b)