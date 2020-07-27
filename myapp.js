function getHistory(){
    return document.getElementById('history_value').innerText;
}
function printHistory(h_num){
    document.getElementById('history_value').innerText = h_num;
}
function getOutput(){
    return document.getElementById('output_value').innerText;
}
function printOutput(o_num){
    if(o_num == ""){
        document.getElementById('output_value').innerText = o_num;
    }
    else{
        document.getElementById('output_value').innerText = getFormattedNum(o_num);
    }
}
function getFormattedNum(num){
    if(num=="-"){
		return "";
	}
    let num_format = new Intl.NumberFormat('en-IN').format(num);
    return num_format;
}
function removeNumFormat(rev_ft){
    return Number(rev_ft.replace(/,/g,''));
}
let operator = document.getElementsByClassName('operator');
for ( var i=0; i<operator.length; i++){
    console.log(operator[i]);
    operator[i].addEventListener('click', function(){
        if (this.id == 'clear'){
            printHistory("");
            printOutput("");
        }
        else if(this.id == 'backspace'){
            var output_backspace = removeNumFormat(getOutput()).toString();
            if(output_backspace){//if output has a value
                output_backspace = output_backspace.substr(0,output_backspace.length-1);
                console.log(output_backspace.length-1);
                printOutput(output_backspace);
            }
        }
        else{
            var output = getOutput();
            var history = getHistory();
            if(output == "" && history != ""){
				if(isNaN (history[history.length-1])){
					history = history.substr(0,history.length-1);
				}
			}
            if(output != "" || history != ""){
				output = output == "" ? output:removeNumFormat(output);
                history = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history = history + this.id;
					printHistory(history);
					printOutput("");
                }
            }
        }
    });
}
let numeric = document.getElementsByClassName('number');
for ( var i=0; i<numeric.length; i++){
    numeric[i].addEventListener('click', function(){
        var output_num = removeNumFormat(getOutput());
        if (output_num != NaN){ //if output is a number
            output_num = output_num + this.id;
            printOutput(output_num);
        }
    });
}