# 1. kodutöö – Lauakell
Autor: Andre Martov
Kuvatõmmis aadressil: https://imgur.com/a/S4S46
Funktsionaalsus:
*Tegemist on digitaalkellaga, kus on võimalik muuta kella suurust suuremaks ja väiksemaks.
*Saab muuta kuupäeva värvi(kuvatakse kuupäev suvalise värviga changeColor funktsioonist)
*Kell tiksub reaalajas, pole vaja lehte uuendada
*Taustal mängib youtube-ist muusika(iframe)

Kell põhi osa, funktsiooni hexClock loomiseks kasutasin abimaterjaliks youtube`ist leitud videot: https://www.youtube.com/watch?v=mnAqcmVHONY&t=794s 
Edasiste funktsioonide loomisel(fontsizebigger, fontsizesmaller, read 57-75) Kalmer Roopa abi ja tema töö(https://github.com/KalmerR/1.ea-kodutoo)
ChangeColor funktsioon(read 77-84) Sten Piirsalu abiga ja tema töö(https://github.com/piirsalusten/1.ea-kodutoo) 

## Tähtpäev 18.02.2018 23:59

Kujunda kellanäide vastavalt maitsele või kindlale teemale, mahutades kella täisekraanile, et saaks kasutada lauakella või ekraanisäästja asemel. Selleks, et see sobiks paljudele ekraanidele, kasuta kujunduse loomisel protsendilisi väärtusi (nt width: 100%; ) või nt võimalda kella suurust kasutajal muuta.

## Nõuded

1. Veebirakendus töötab. Näitab kella, kuupäeva ja nädalapäeva.
1. Vastavalt kasutaja tegevusele on võimalik muuta **kolme** lauakella atribuuti muuta (nt suurus, värv, asukoht vms)
1. Kell on originaalne ning kasutajaliides on maitsekalt kujundatud
1. Autori ees- ja perenimi on lehel välja toodud
1. Lehel on viide rakenduse repositooriumile
1. Kood on vormistatud vastavalt stiilijuhendile
1. `README.md` failis on välja toodud autori nimi, ekraanipilt rakendusest ja kirjeldatud funktsionaalsus

## Mõned ideed võimalikeks täiendusteks (lihtsalt, et mõte hakkaks jooksma)

* Vahetuda võivad taustapildid, taustal võib mängida muusika
* Taustale klikkides muudetakse kella taustaväri
* Kellale klõpsides muudetakse numbrite värvi või numbrite suurust;
* Iga numbri suurust saab eraldi muuta
* Nooleklahvidega saab kella ekraanil liigutada
* Küsi enne kella näitamise alustamist kasutajalt tema lemmikvärv ja tee sellest lähtudes midagi
* Muuda kella ja tausta värvi vastavalt ajale (päev/öö)
* Kella suurus ja asukoht sõltuvad hiire asukohast ekraanil
* Äkki võiks tegu olla hoopis analoogkellaga
* Kirjatüüpi saab ka muuta, [google.com/fonts](https://www.google.com/fonts)
* Kasutaja saab lisada või kasutajaöe näidatakse mitu kellaaega erinevatest maailma kohtadest

## Abimaterjal

* Sündmuste loetelu [HTML DOM Events](http://www.w3schools.com/jsref/dom_obj_event.asp)
* Ajal põhinevad sündmused [JavaScript Timing Events](http://www.w3schools.com/js/js_timing.asp)
* CSSi muutmine [HTML DOM Style Object](http://www.w3schools.com/jsref/dom_obj_style.asp)


