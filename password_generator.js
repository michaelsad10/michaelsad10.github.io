function generatePassword() {
   var min_word_length = document.querySelector('[name="min"]').value;
   var max_word_length = document.querySelector('[name="max"]').value; 
   var max_length = document.querySelector('[name=max_length]').value;
   var diversePassword = document.getElementById("diversePassword").checked; 
   var num_sub = document.getElementById("numsub").checked; 
   var words = ["the","of","and","a","to","in","is","you","that","it","he","was","for","on","are","as","with","his","they","I","at","be","this","have","from","or","one","had","by","word","but","not","what","all","were","we","when","your","can","said","there","use","an","each","which","she","do","how","their","if","will","up","other","about","out","many","then","them","these","so","some","her","would","make","like","him","into","time","has","look","two","more","write","go","see","number","no","way","could","people","my","than","first","water","been","call","who","oil","its","now","find","long","down","day","did","get","come","made","may","part"];
   var adjectives = ["able", "acidic", 'admired', 'adored', 'happy', 'handy', 'fond', 'formal', 'devoted', 'difficult', 'digital', 'dirty', 'free', 'front', 'likely', 'lost', 'lovable', 'loyal', 'petty', 'phony', 'physical', 'pitiful', 'playful','scared', 'scrawny', 'secret', 'selfish', 'slim', 'stiff', 'straight'];
   var verbs = ['burn', 'catch', 'choose', 'cut', 'do', 'hurt', 'know', 'lay', 'lead', 'hurt', 'leave', 'pay', 'sit', 'speak', 'spend', 'sent', 'teach', 'take', 'swim', 'took','sung', 'shut', 'shown', 'write', 'wear', 'wake', 'worn', 'thrown', 'thought', 'told', 'calculate', 'cost', 'count', 'create', 'cut', 'accept', 'pull', 'postpone', 'prevent']; 
   var passwords = []; 
   if(diversePassword) {
       passwords = createDiversePassword(verbs, adjectives, num_sub, min_word_length, max_word_length, max_length); 
   }
   else {
       passwords = createPasswords(words, num_sub, min_word_length, max_word_length, max_length); 
   }
   var title = document.createElement("h1");
   title.innerHTML = "Passwords"; 
   document.body.appendChild(title);
   for(var y=0; y<passwords.length; y++) {
       var answer = document.createElement("div");
       answer.innerHTML = passwords[y]; 
       document.body.appendChild(answer); 
   } 
}

function letterToNumber(word) {
    console.log(word); 
    var res = word.replace(/e/g, 3); 
    var res = res.replace(/i/g, 1); 
    var res = res.replace(/o/g, 0); 
    return res; 
}

function createPasswords(words, num_sub, min_word_length, max_word_length, max_length) {
    var count = 0; 
    var passwords = []; 
    while(count<4) {
     var password = '';
     for(var x=0; x<4; x++) {
         var index = Math.floor(Math.random()* 100); 
         if(words[index].length >= min_word_length && words[index].length <= max_word_length) {
             password += words[index]; 
         }
     }
     if(password.length == max_length) {
         if(num_sub == true) {
             password = letterToNumber(password); 
         }
         passwords.push(password); 
         count++; 
     } 
    }
    return passwords; 
}

function createDiversePassword(verbs, adj, num_sub, min_word_length, max_word_length, max_length) {
    var count = 0; 
    var passwords = []; 
    while(count<4) {
        var password = ''; 
        for(var x=0; x<2; x++) {
            var verbIndex = Math.floor(Math.random()*verbs.length); 
            var adjIndex = Math.floor(Math.random()*adj.length); 
            if(verbs[verbIndex].length >= min_word_length && verbs[verbIndex].length <= max_word_length && adj[adjIndex].length >= min_word_length && adj[adjIndex].length <= max_word_length) {
                password += verbs[verbIndex]; 
                password += adj[adjIndex]; 
            }
        }
        if(password.length == max_length) {
            if(num_sub == true) {
                password = letterToNumber(password); 
            }
            passwords.push(password); 
            count++; 
        }

    }
    return passwords; 
}
