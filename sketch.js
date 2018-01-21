function setup() {
	let a = new Matrix(2,3);
	a.randomize();
	a.print();
	a.map(doubleIt);
	a.print();


}
function doubleIt(x){
	return x * 2;
}

function draw() {

}
