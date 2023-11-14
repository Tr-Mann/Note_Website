    const btn = document.getElementById("myBtn");
    const box = document.getElementById("textBox");
    
    let out = "";
    
    btn.onclick = function clicked()
    {
        let num = + box.value;
        if(typeof(num) != 'number') 
        {
            alert("Invalid input try again.");
        }
        for(i=0; i < num; i++)
        {
            if(i>0)
            {
                if (i % 5 == 0 && i % 3 == 0)
                { 
                out += "FIZZBUZZ, ";
                }
                else if(i % 3 == 0)
                {
                    out += "FIZZ, ";
                }
                else if(i % 5 == 0)
                {
                    out += "BUZZ, ";
                }
                else
                {
                    out += i + ", ";
                }
            }
        }

    alert(out);
}
    
  

