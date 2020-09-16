const checkgrade = (socre) =>{
    let grade = null
    if(socre >= 81 && socre <=100){
        grade="A"
    }else if(socre >= 71 && socre <=80){
        grade="B"
    }else if(socre >= 61 && socre <=70){
        grade="C"
    }else if(socre >= 51 && socre <=60){
        grade="D"
    }else if(socre >= 0 && socre <=50){
        grade="F"
    }else {
        grade="socre was invalid"
    }
    return grade
}
console.log(checkgrade(1))
