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

const searchBtn = document.getElementById("searchBtn");
const searchBar = document.getElementById("searchBar");
const anchor = document.getElementById("anchor");
let term;


searchBtn.onclick
{
    term = searchBar.value;
    location.reload;
}
anchor.setAttribute('href', "https://www.google.com/search?q=" + term);

$(".search").reload(projects.html);

