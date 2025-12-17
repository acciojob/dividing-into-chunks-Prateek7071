const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here

	let N= n;
	let cost = []
	let res = []
	for(let k of arr){
		if(N>=k){
			N-=k
			cost.push(k)
      continue;
		}
		res.push(cost)
		cost = []
		N=n
		N-=k
		cost.push(k)
	}
	res.push(cost)
	return res;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
