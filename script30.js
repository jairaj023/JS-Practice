//let courses = ["HTML", "CSS", "Javascript", "React"];
//console.log(courses)
//alert(courses)
//document.write(courses)

//const courses = ["HTML", "CSS", "Javascript"];
//console.log(courses[0])
//console.log(courses[1])
//console.log(courses[2])

//const courses = ["HTML", "CSS", "Javascript"];
//for (let i = 0; i < courses.length; i++) {
//console.log(courses[i])
//}

//var emp=["Sonoo","Vimal","Ratan"];  
//for (i=0;i<emp.length;i++){  
//document.write(emp[i] + "<br/>");  
//}

//let arr = [4, 5, 3, 1, 2]                             // #Sum#
//for (let i = 0; i < arr.length; i++)
//{
    //sum += arr[i];   
//}
//console.log("Sum is " + sum)

//let array = [];
//for (let i = 0; i < 5; i++) {
    //array[i] = parseInt(prompt("Enter a value for array[" + i + "]"));
//}
//document.write(array);

//var arr=[5,22,19,25,34];                              //#find#
//var result=arr.find(x=>x>20);  
//document.writeln(result)

//var arr=["C","C++","Python","C++","Java"];            //#IndexOf#
//var result= arr.indexOf("C++");  
//document.writeln(result);

//var arr=["C","C++","Python","C++","Java"];  //element present na ho to result -1 dega
//var result= arr.indexOf("JavaScript");  
//document.writeln(result);  

//let fruits = ["Apple", "Grapes", "Banana"];          //#isArray#
//console.log(Array.isArray(fruits));
//let text = "Apple";
//console.log(Array.isArray(text));

//var arr=new Array(1,2,34,4,5);  
//document.write(Array.isArray(arr));          //It will return true/false  

//var arr=[2.1,3.5,4.7];                             //#map#
//var result=arr.map(Math.round);  
//document.writeln(result);

//var arr=[2,4,6];  
//var result=arr.map(x=>x*3);  
//document.writeln(result);  

//const a = [1, 4, 9, 16, 25,625];     //to find square root
//const ab = a.map(x => Math.sqrt(x));
//document.write(ab);

//var arr=["AngularJS","Node.js","JQuery","Bootstrap"]             //#Sort#
//var result=arr.sort();             //Arrange in asscending order
//document.writeln(result);

//var arr=[2,4,1,8,5];  
//var result=arr.sort();  
//document.writeln(result);  

//var arr=[2,4,1,8,5]          //find index of an number
//var result=arr.sort(); //1,2,4,5,8   
//document.writeln(arr[2]);

//var a =[1,2,3,4,5]                                             //#Pop#
//var x=a.pop()               //Remove last element
//document.write("Removed element: ", x)
//document.write("<br>")
//document.write(a)

//var arr=["AngularJS","Node.js","JQuery"];  
//document.writeln("Orginal array: "+arr+"<br>");  
//document.writeln("Extracted element: "+arr.pop()+"<br>");  
//document.writeln("Remaining elements: "+ arr);

//var a =[1,2,3,4,5]                                              //#Push#
//var x=a.push(9)
//document.write(a)

//var arr=["AngularJS","Node.js"];             //Add the element at the last position 
//arr.push("JQuery");  
//document.writeln(arr);

//var arr=["AngularJS","Node.js"];           //Length/index before invoking push
//document.writeln("Length before invoking push(): "+arr.length+"<br>");  
//arr.push("JQuery","Bootstrap");  
//document.writeln("Length after invoking push(): "+arr.length+"<br>");  //Length/index after invoking push
//document.writeln("Update array: "+arr);

//var arr=["AngularJS","Node.js","JQuery","Bootstrap"]           //#Slice#
//var result=arr.slice(0,3);
//document.writeln(result);

//var arr=[1,2,21,4,5,6,9,10]                //Print the element or number
//var result=arr.slice(1,4);  
//document.writeln(result);

//var arr=["Monday","Tuesday","Thursday","Friday"];              //#Splice#
//var result=arr.splice(2,0,"Wednesday")       //Do not Remove the element
//document.writeln(arr);

//var arr=["Monday","Tuesday","Saturday","Sunday","Thursday","Friday"];  //Add the element/numberat specific place
//var result=arr.splice(2,2,"Wednesday")         //Remove the elements
//document.writeln("Updated array: "+arr+"<br>");  
//document.writeln("Removed element: "+result);

//let str = 'hello world';                                       //#charAt#
//let value = str.charAt(0);      //Get the element through the index number
//let value1 = str.charAt(4);
//console.log(value);
//console.log(value1);

//const fruits = ["Banana", "Orange", "Apple", "Mango"];          //#Shift#
//console.log("Original array:", fruits);
//const ab = fruits.shift();
//document.write("Removed element:", ab);
//document.write("<br>")
//document.write("Modified array:", fruits)

//let fruits = ['banana', 'apple'];                                //#Unshift#
//console.log("Original array:", fruits);    
//let newLength = fruits.unshift('orange', 'grape');   //Adds one or more elements to the beginning of an array.
//console.log("Modified array:", fruits);  
//console.log("New length:", newLength);

//const fruits = ["Banana", "Orange", "Apple", "Mango"];          //#Reverse#
//fruits.reverse();    //Reverses the order of the elements in an array in place.
//document.write(fruits);

//arr.fill(value, start, end)                                       //#Fill#
//const fruits = ['Apple', 'Banana', 'Grape', 'Orange'];
//fruits.fill('Cherry');    //Fills all the elements of an array from a start index to an end index with a static value.
//console.log(fruits);
 
//const fruits = ['apple', 'banana', 'orange'];                      //#Include#
//console.log(fruits.includes('banana')); // true
//console.log(fruits.includes('grape')); //Determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//const fruits = ["hello", "okay", "world"];                        //#Join#
//const a = fruits.join();
//alert(a);

//const a = ["Hello", "world", "!"];     //Joins all elements of an array into a string.
//const b = a.join(" ");
//document.write(b);

//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];                 //#Filter#
//const evenNumbers = numbers.filter(function(number)
//{
//  return number % 2 == 0;   //Creates a new array with all elements that pass the test implemented by the provided function.
//});
//alert(evenNumbers);

//const numbers = [1, 3, 5, 7, 9,12];                //#Some#
//const hasEvenNumber = numbers.some(function(number)
//{
//  return number % 2 === 0; //Tests whether at least one element in the array passes the test implemented by the provided function.
//});
//console.log(hasEvenNumber);

//const numbers = [2, 4, 6, 8, 10,47];                //#Every#
//const allEven = numbers.every(number => number % 2 === 0); //Tests whether all elements in the array pass the test implemented by the provided function.
//console.log(allEven);

//const numbers = [5, 12, 8, 130, 44];                //#FindIndex#
//const index = numbers.findIndex(number => number > 10); //Returns the index of the first element in the array that satisfies the provided testing function.
//alert(index);

//const numbers = [5, 12, 8, 130, 44];
//const index = numbers.findIndex(number => number > 200);
//alert(index);

//let numArr = [10, 20, 30, 40, 50];                //#ForEach#
//numArr.forEach(i =>  document.write(i+"<br>"));
//for(let i=0; i<numArr.length; i++)
//    document.write(numArr[i]+"<br>");

//let cities = ["Mumbai", "New York", "Paris", "Sydney"];                //#Update#
//document.write(cities ,"<br>")
//cities[0] = "Delhi";   // Replace the element.
//cities[1] = "Los angeles";
//document.write(cities);

//let cities = ["Mumbai", "New York", "Paris", "Sydney"];
//cities[4] = "Delhi"; //add new element at last
//document.write(cities);

//let arr1 = [10, 20, 30, 40, 50];                //#Temp#
//let temp = arr1[0];
//arr1[0] = arr1[arr1.length - 1];   //It will interchange the first and last element.
//arr1[arr1.length - 1] = temp;
//document.write("Array after interchange:", arr1);

//var arr1=["C","C++","Python"];                  //#Concat#
//var arr2=["Java","JavaScript","Android"];  
//var result=arr1.concat(arr2);  
//document.writeln(result);

//var a=["C","C++","Python"];  //The JavaScript array concat() method combines two or more arrays and returns a new string. This method doesn't make any change in the original array.
//var b=["Java","JavaScript","Android"];
//var c=[1,2,3,4,5];
//var d =[1,2,3.4,'j'];
//var result=a.concat(b,c,d);  
//document.writeln(result);

//var arr1=["C","C++","Python"];  
//var arr2=["Java","JavaScript","Android"];  
//var arr3=["Ruby","Kotlin"];  
//var result=arr1.concat(arr2,arr3);  
//document.writeln(result);
 
//var arr=["C","C++","Python","C++","Java"];                    //#LastIndexOf#
//var result= arr.lastIndexOf("C++");  
//document.writeln(result);