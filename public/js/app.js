//
// CONTACT.HTML
//



let counter = 0;

/*let i = 1;
let titluri = ["Orasul Ploiesti", "Proiect TehniciWeb"];
setInterval(
    function () {
        document.title = titluri[i];
        i = 1 - i;
    }, 3000);*/

let OrasulPloiesti  = "Orasul Ploiesti";
let Titlu           = "O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀i";
let OrasulPloiesti_arr  = ["O", "r", "a", "s", "u", "l", "⠀", "P", "l", "o", "i", "e", "s", "t", "i"];
let Titlu_arr           = ["O", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "i"];
let titlu_index = 0;
let titlu_lungime = OrasulPloiesti.length;

var salut_user = false;

setInterval(
    function () {
        if(!salut_user)
        {
            if (titlu_index == Math.floor(titlu_lungime / 2) + 1)
            {
                Titlu_arr = ["O", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀", "⠀","⠀", "⠀", "⠀", "⠀", "i"];
                titlu_index = 0;
                Titlu = "O⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀i";
            }
            else
            {
                
                Titlu_arr[titlu_index] = OrasulPloiesti_arr[titlu_index];
                Titlu_arr[titlu_lungime - titlu_index - 1] = OrasulPloiesti_arr[titlu_lungime - titlu_index - 1];
                titlu_index += 1;
                Titlu = "";
                for(let ix = 0; ix < Titlu_arr.length; ix++)
                {
                    Titlu += Titlu_arr[ix];
                }
            }
            document.title = Titlu;
        }
    }, 400);

function validare() {
    let mynume = document.getElementById("formular-nume").value;
    let myemail = document.getElementById("formular-email").value;
    let mycomentariu = document.getElementById("formular-comentariu").value;
    let mytelefon = "" + document.getElementById("formular-telefon").value;

    var flagnume = 0;
    var flagemail = 0;
    var flagtelefon = 0;
    var flagcomentariu = 0;
    if (mynume == "") // string nume nul
    {
        document.getElementById("avnume").setAttribute("class", "formular-avertisment-on formular-avertisment");
        flagnume = 0;
    } else // nume completat
    {
        document.getElementById("avnume").setAttribute("class", "formular-avertisment");
        flagnume = 1;
    }

    if (mycomentariu == "") // string comentariu nul
    {
        document.getElementById("avcomentariu").setAttribute("class", "formular-avertisment-on formular-avertisment");
        flagcomentariu = 0;
    } else // comentariu completat
    {
        document.getElementById("avcomentariu").setAttribute("class", "formular-avertisment");
        flagcomentariu = 1;
    }

    if (myemail == "") //string email nul
    {
        document.getElementById("avemail1").setAttribute("class", "formular-avertisment-on formular-avertisment");
        document.getElementById("avemail2").setAttribute("class", "formular-avertisment");
        console.log("Email nul");
        flagemail = 0;
    } else if ( //string email ok : nume@domain.com
        (myemail.indexOf("@") < myemail.lastIndexOf(".")) &&
        (myemail.indexOf("@") == myemail.lastIndexOf("@")) &&
        (myemail.lastIndexOf(".") < myemail.length - 2) &&
        (myemail.indexOf("@") != -1) &&
        (myemail.indexOf("@") >= 1)
    ) {
        document.getElementById("avemail1").setAttribute("class", "formular-avertisment");
        document.getElementById("avemail2").setAttribute("class", "formular-avertisment");
        console.log("Email ok.\n")
        flagemail = 1;
    } else //string email nepotrivit
    {
        document.getElementById("avemail1").setAttribute("class", "formular-avertisment");
        document.getElementById("avemail2").setAttribute("class", "formular-avertisment-on formular-avertisment");
        console.log("Email nepotrivit\n");
        flagemail = 0;
    }

    if (mytelefon == "") // string telefon nul
    {
        document.getElementById("avtelefon1").setAttribute("class", "formular-avertisment");
        document.getElementById("avtelefon2").setAttribute("class", "formular-avertisment-on formular-avertisment");
        console.log("Numar telefon necompletat.\n")
        flagtelefon = 0;
    } else if (/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/.test(mytelefon))
    {
        document.getElementById("avtelefon1").setAttribute("class", "formular-avertisment");
        document.getElementById("avtelefon2").setAttribute("class", "formular-avertisment");
        console.log("Numar telefon ok.\n")
        flagtelefon = 1;
    } else //nr telefon necorespunzator Romania
    {
        document.getElementById("avtelefon1").setAttribute("class", "formular-avertisment");
        document.getElementById("avtelefon2").setAttribute("class", "formular-avertisment-on formular-avertisment");
        console.log("Numar telefon nepotrivit RO.\n")
        flagtelefon = 0;
    }



    if (flagcomentariu == 1 && flagemail == 1 && flagnume == 1 && flagtelefon == 1) {
        var t_rand = document.createElement("TR");
        var t_nume = document.createElement("TD");
        t_nume.innerText = mynume;
        var t_email = document.createElement("TD");
        t_email.innerText = myemail;
        var t_telefon = document.createElement("TD");
        t_telefon.innerText = mytelefon;
        t_rand.appendChild(t_nume);
        t_rand.appendChild(t_email);
        t_rand.appendChild(t_telefon);
        document.getElementById("tabel-contact").appendChild(t_rand);
        counter++;
        document.getElementById("p-counter").innerHTML = "Respondenti: " + counter;
    }


}



//
// MAIN.HTML
//

function formatareOra(val) {
    if (val.toString().length == 1)
        return "0" + val.toString();
    else
        return val;
}


let infoVreme = {};

function Vremea() {
    let url = "http://api.openweathermap.org/data/2.5/weather?q=Ploiesti&appid=4b92412962ec021229897de7c8ef58c9&units=metric&lang=ro";
    fetch(url).then(
        function (response) {
            response.json().then(
                function (data) {
                    infoVreme = data;
                    document.getElementById("vremea").innerText = Math.round(infoVreme["main"]["temp"]) + "°C";
                    document.getElementById("vremea-icon").setAttribute("src",
                        "http://openweathermap.org/img/wn/" + infoVreme["weather"][0]["icon"] + "@2x.png");
                    //console.log("vr:");
                    //console.log(infoVreme);
                }
            );
        }
    );

}

function Ora() {
    var temp = new Date();
    var gmt = temp.getTime() + (temp.getTimezoneOffset() * 60000);
    var oraPloiesti = new Date(gmt + (3600000 * 3));

    var oraAfisare = "" +
        formatareOra(oraPloiesti.getHours()) + ":" +
        formatareOra(oraPloiesti.getMinutes()) + ":" +
        formatareOra(oraPloiesti.getSeconds());
    document.getElementById("ora").innerText = oraAfisare;
}






//
//INTRARE.HTML
//

let welcomeMesaj = document.getElementById("welcome-mesaj");
let mesaj = ["Bine ", " ai", " venit!", " Acesta", " este", " proiectul", " meu", " la", " Tehnici", " Web.\n"]
let mesaj2 = ["", "", "", "", " Introdu", " numele", " si", " data", " nasterii", " pentru", " a", " intra."];
let indexCuv = 0;
let indexCuv2 = 0;
let okay = 0;

let scrieMesaj = setInterval(() => {
    if (document.getElementById("welcome-mesaj") != null) {
        if (indexCuv < mesaj.length)
            scrie();
            if (indexCuv == mesaj.length) {
                setInterval(() => {
                    if (document.getElementById("welcome-mesaj2") != null) {
                        if (indexCuv2 < mesaj2.length)
                            scrie2();
                        if (indexCuv2 == mesaj2.length) {
                            document.getElementById("welcome-input").setAttribute("class", "welcome-input2");
                            document.getElementById("datanasterii").style.display = "block";
                            clearInterval(scrieMesaj);
                        }
                    }
                }, 333);
            }
    }
}, 333);



function scrie() {
    document.getElementById("welcome-mesaj").innerText += mesaj[indexCuv];
    indexCuv += 1;
}

function scrie2() {
    document.getElementById("welcome-mesaj2").innerText += mesaj2[indexCuv2];
    indexCuv2 += 1;
}




function alphanumeric(inputtxt) {
    var letterNumber = /^[a-z A-Z]+$/;
    if (inputtxt.match(letterNumber)) return true;
    return false;
}

//Citire input
if (document.getElementById("welcome-input") !== null)
{
    document.getElementById("welcome-input").addEventListener("keyup", function(event)
    {
       if(event.keyCode === 13) login();
    })
}
if (document.getElementById("datanasterii") !== null)
{
    document.getElementById("datanasterii").addEventListener("keyup", function(event)
    {
       if(event.keyCode === 13) login();
    })
}


//Login user
function login()
{
    
    let ok_nume = false;
    let ok_data = false;

    nume = document.getElementById("welcome-input").value;
    let data_nasterii = document.getElementById("datanasterii").value;
    salut_user = true;
    document.title = "Salut, " + nume;
    if (nume.length > 0 && alphanumeric(nume))
    {
        ok_nume = true; 
    }
    else
    {
        document.getElementById("welcome-warning").style.display = 'block'; //user invalid
    }
    if (/\d\d#\d\d#\d\d\d\d/.test(data_nasterii))
    {
        ok_data = true;
    }
    else
    {
        document.getElementById("datanasterii-warning").style.display = 'block'; //data invalida
    }
    if(ok_nume && ok_data)
    {
        document.getElementById("welcome-warning").style.display = 'none';
        document.getElementById("datanasterii-warning").style.display = 'none';
        localStorage.setItem('user', nume);
        localStorage.setItem('datanasterii', String(data_nasterii));
        localStorage.setItem('ziuanasterii', String(data_nasterii).substr(0,2));
        localStorage.setItem('lunanasterii', String(data_nasterii).substr(3,2));
        localStorage.setItem('anulnasterii', String(data_nasterii).substr(6,4));
        document.title = "Salut, " + nume;
        setTimeout(
            function() {
                window.location.href = "http://localhost:3000/acasa";
                salut_user = false;
            }
        , 2000)
        
    }
    
}
//Logout user
function logout()
{
    localStorage.removeItem('user');
    //document.getElementById("account-log").innerText = "Logat ca";
    window.location.href = "http://localhost:3000/";
}


setInterval(
    function(){
        var varsta_display = Varsta(new Date( "" +
        localStorage.getItem("lunanasterii") + '/' +
        localStorage.getItem("ziuanasterii") + '/' +
        localStorage.getItem("anulnasterii")));
        document.getElementById("varsta").innerText = "Varsta dvs: " + varsta_display;
    }
, 1000)

function Varsta(birth_date)
{
    var current_date = new Date();
    var YearDiff =  (current_date.getYear() - birth_date.getYear());
    var monthDiff = (current_date.getMonth() - birth_date.getMonth());
    if (monthDiff < 0)
    {
        YearDiff --;
        monthDiff = 12 + monthDiff;
    }
    var daysDiff = (current_date.getDate() - birth_date.getDate());
    if(daysDiff < 0)
    {
        daysDiff = 31 + daysDiff;
        monthDiff --;
        if (monthDiff < 0)
        {
            monthDiff = 11;
            YearDiff --;
        }
    }
    var hoursDiff = (current_date.getHours() - birth_date.getHours());
    var minDiff = (current_date.getMinutes() - birth_date.getMinutes());
    var secDiff = (current_date.getSeconds() - birth_date.getSeconds());


    return YearDiff+' ani '+monthDiff+' luni '+daysDiff+' zile '+hoursDiff+
    ' ore '+minDiff+' minute '+secDiff+' secunde';
}



if (/acasa/.test(window.location.href))
{
    document.getElementById("meniu-acasa").style.color = "blue";
}
else if (/istorie/.test(window.location.href))
{
    document.getElementById("meniu-istorie").style.color = "blue";
}
else if (/atractii/.test(window.location.href))
{
    document.getElementById("meniu-atractii").style.color = "blue";
}
else if (/harti/.test(window.location.href))
{
    document.getElementById("meniu-harta").style.color = "blue";
}
else if (/contact/.test(window.location.href))
{
    document.getElementById("meniu-contact").style.color = "blue";
}




//Blocare ecran 

let taste_apasate = [];
let timp_incepere = Date.now();

document.addEventListener('keydown', event => {
    let tasta = event.key.toLowerCase();
    let currentTime = Date.now();
    if(tasta === 'b') 
    {
        timp_incepere = currentTime;
        taste_apasate = [];
    }
    if (currentTime - timp_incepere > 3000) {
        taste_apasate = [];
    }

    taste_apasate.push(tasta);
    //console.log(taste_apasate);
    if(taste_apasate[0] === 'b' 
        && taste_apasate[1] === 'l' 
        && taste_apasate[2] === 'o' 
        && taste_apasate[3] === 'c'
        && taste_apasate[4] === 'k')
    {
        document.getElementById("blocare").style.display = 'none';
        document.getElementsByTagName("body")[0].style.backgroundColor = 'black';
    }
});

document.addEventListener("mousemove", getMouseDirection, false);
 
var X_vechi = 0;
var Y_vechi = 0;

miscari = [' ', ' ', ' '];
ultima = Date.now();
function getMouseDirection(event) {
    if(Date.now() - ultima > 200)
    {
        if(Math.abs(X_vechi - event.pageX) < Math.abs(Y_vechi - event.pageY))
        {
            if (Y_vechi < event.pageY)
            {
                if(miscari[2] != 'jos')
                {
                    miscari.shift();
                    miscari.push('jos');
                }
            }
            else if (X_vechi > event.pageY)
            {
                if(miscari[2] != 'sus')
                {
                    miscari.shift();
                    miscari.push('sus');
                }
            }
        }
        else
        {
            if (X_vechi < event.pageX)
            {
                if(miscari[2] != 'dreapta')
                {
                    miscari.shift();
                    miscari.push('dreapta');
                }  
            }  
            else if (X_vechi > event.pageX)
            { 
                if(miscari[2] != 'stanga')
                {
                    miscari.shift();
                    miscari.push('stanga');
                }
            }
        }
        X_vechi = event.pageX;
        Y_vechi = event.pageY;
        console.log(miscari);
        ultima = Date.now();

        if (miscari[0] == 'sus' && miscari[1] == 'dreapta' && miscari[2] == 'jos') 
        {
            document.getElementById("blocare").style.display = 'block';
            document.getElementsByTagName("body")[0].style.backgroundColor = 'white';
        }
    }
}
