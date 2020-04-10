var temp = [];
function perm(input, start, end) {
    if(start===end) {
        temp.push([...input]);
        return;
    }
    for(var i = start;i<=end;i++){
        swap(input,start,i);
        perm(input,start+1,end);
        swap(input,start,i);
    }

}
function swap(input, in1, in2) {
    var x = input[in1];
    input[in1] = input[in2];
    input[in2]= x;
}

perm([1,2,3],0,2);