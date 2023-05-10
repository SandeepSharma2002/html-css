var element =["abc", 30,20,40,40];

function sum(name,...element)
{
  console.log(name);
  let sum = 0; 
  for (let i in element) {
    sum+=element[i];
  }
  console.log(sum);
}
console.log(sum(...element));