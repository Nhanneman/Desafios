function includeText(word1, word2){ 
    if (typeof word1 === "string"  &&  typeof word2 === "string") {
        if (word2.toUpperCase().indexOf(word1.toUpperCase()) >= 0   ){
            return true;
        } else {
           return false;
        }
    }
    }
     
    par1 = prompt("ingrese el primer parametro");
    par2 = prompt("ingrese el segundo parametro");
    var find = includeText(par1,par2);
    console.log(find);