function sendMail()
{
   
    var params={
       Adınız:document.getElementById("isim").value,
       Soyadınız:document.getElementById("soyisim").value,
       MailAdresiniz:document.getElementById("mail").value,
       TelefonNumaranız:document.getElementById("telefon").value,
    }
    if(document.getElementById("isim").value== ""&&document.getElementById("soyisim").value== ""&& 
    document.getElementById("mail").value== ""&& document.getElementById("telefon").value== ""){
        alert("Boş alanlar var!");
        return false;
    }
    if (document.getElementById("isim").value==null || document.getElementById("isim").value== "") {
        alert("İsminizi girmediniz!");
        return false;
    }
    if (document.getElementById("soyisim").value==null || document.getElementById("soyisim").value== "") {
        alert("Soyisminizi girmediniz!");
        return false;
    }
    if (document.getElementById("mail").value==null || document.getElementById("mail").value== "") {
        alert("Mailinizi girmediniz!");
        return false;
    }
    if (document.getElementById("telefon").value==null || document.getElementById("telefon").value== "") {
        alert("Telefon numaranızı girmediniz!");
        return false;
    }
    
    const serviceID="service_sayfa";
    const templateID="template_nus05xu";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res=>{
            document.getElementById("isim").value="";
            document.getElementById("soyisim").value="";
            document.getElementById("mail").value="";
            document.getElementById("telefon").value="";
            console.log(res);
            alert("FORM İLETİLDİ");
        }
    )
    .catch(err=>console.log(err));
    }
    
    