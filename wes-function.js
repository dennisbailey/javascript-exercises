function argTest (arg1, arg2, arg3) {
    if (arguments.length === 0) {console.log("No arguments!")}
    else if (arguments.length > 3) {console.log("AARG! Too many arguments!")}
    else{
        console.log("Reading arguments…");
        var args = Array.prototype.slice.call(arguments);
        console.log(args);
        for (i = 0; i < args.length; i++) {
           if (!args[i]) {continue;}
           else {console.log("Reading argument #" + (i+1) + ": is", args[i]);}
        }
    }
}


console.log("TESTING: ALL UNDEFINED");
argTest();
console.log("\nTESTING: ONLY ARG1");
argTest('first');
console.log("\nTESTING: ONLY ARG1 + ARG2");
argTest('first','second');
console.log("\nTESTING ALL ARGS");
argTest('first','second','third');
console.log("\nTESTING: Undefined arg2");
argTest("first", undefined, "third");
console.log("\nTESTING: Too many arguments");
argTest("first", "second", "third", "fourth");
console.log("\nTESTING: Too many arguments with undefined");
argTest(undefined, "second", undefined, "fourth");



