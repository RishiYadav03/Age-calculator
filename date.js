import{agecalculator} from './utilities/project.js';

document.querySelector('button').onclick = function (){
    var dob = document.getElementById('startDate').value;
    // console.log(temp);
    
    
    var message = '' ;
    var classContent = '';

    if(dob == ''){
        message = 'Invalid Details';
        classContent = 'alert alert-danger';
    }
    else{
        var age = agecalculator(dob);

        message = ` Age: ${age} Years`;
        classContent = 'alert alert-success'
        
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}