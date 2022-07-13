cps = "";
text = "";


const SumarClick = () => {
    cps++;
    
    text  = document.getElementById("cps").textContent = cps;

    
    


}

const Reset = () => {
    cps = 0;
    text  = document.getElementById("cps").textContent = 0;
}