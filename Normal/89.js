let str1 = "listen";
let str2 = "silent";
let ana=true

if(str1.length!==str2.length){
    console.log("Not Anagram");
}else{
        for(let j=0;j<str1.length;j++){
            let count1=0
            let count2=0
            for(let i=0;i<str1.length;i++){
                if(str1[j]==str1[i]){
                    count1++
                }
            }
            for(let i=0;i<str2.length;i++){
                if(str1[j]==str2[i]){
                    count2++
                }
            }

            if(count1!==count2){
                ana=false;
                break
            }

        }
        if(ana==true){
            console.log("Anagram");
        }else{
            console.log("Not anagram")
        }
}
