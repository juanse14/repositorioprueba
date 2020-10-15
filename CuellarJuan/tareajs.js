
    b1 = document.querySelector("#b1");
    p1 = document.querySelector("#p1");
    function cc(){
        p1.style.backgroundColor = "white";
    }
    b1.onclick = cc;
        
    b2 = document.querySelector("#b2");
    function op(){
        p1.style.display = "none";
    }
    b2.onclick = op;

    b3 = document.querySelector("#b3");
    function mp(){
        p1.style.display = "block";
    }
    b3.onclick = mp;

    im1 = document.querySelector("#im1");
    function ci(){
        im1.style.padding = "20px";
    }
    im1.onmouseover = ci;
