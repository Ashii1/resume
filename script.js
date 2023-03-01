function edit(){
    var Name=document.getElementById("name");
    var UpdatdeData=document.getElementById("update");
    var EditData=document.getElementById("edit");

    

    Name.style.display="block";
    EditData.style.display="none";
    UpdatdeData.style.display="block";
}

function update(){
    var Name=document.getElementById("name");
    var UpdatdeData=document.getElementById("update");
    var EditData=document.getElementById("edit");
    var TextData= document.getElementById("text-data");

    var InputDataValue=document.getElementById("name").value;

    
    TextData.innerHTML=InputDataValue
    Name.style.display="none";
    EditData.style.display="block";
    UpdatdeData.style.display="none";
}



function edit1(){
    var Number=document.getElementById("number");
    var UpdatdeData1=document.getElementById("update1");
    var EditData1=document.getElementById("edit1");

    

    Number.style.display="block";
    EditData1.style.display="none";
    UpdatdeData1.style.display="block";
}

function update1(){
    var Number=document.getElementById("number");
    var UpdatdeData1=document.getElementById("update1");
    var EditData1=document.getElementById("edit1");
    var NumData= document.getElementById("num-data");

    var InputDataValue=document.getElementById("number").value;


    NumData.innerHTML=InputDataValue
    Number.style.display="none";
    EditData1.style.display="block";
    UpdatdeData1.style.display="none";
}




function edit2(){
    var Address=document.getElementById("address");
    var UpdatdeData2=document.getElementById("update2");
    var EditData2=document.getElementById("edit2");

    

    Address.style.display="block";
    EditData2.style.display="none";
    UpdatdeData2.style.display="block";
}

function update2(){
    var Address=document.getElementById("address");
    var UpdatdeData2=document.getElementById("update2");
    var EditData2=document.getElementById("edit2");
    var AddData= document.getElementById("add-data");

    var InputDataValue=document.getElementById("address").value;


    AddData.innerHTML=InputDataValue;
    Address.style.display="none";
    EditData2.style.display="block";
    UpdatdeData2.style.display="none";
}





function edit3(){
    var Mail=document.getElementById("mail");
    var UpdatdeData3=document.getElementById("update3");
    var EditData3=document.getElementById("edit3");

    

    Mail.style.display="block";
    EditData3.style.display="none";
    UpdatdeData3.style.display="block";
}

function update3(){
    var Mail=document.getElementById("mail");
    var UpdatdeData3=document.getElementById("update3");
    var EditData3=document.getElementById("edit3");
    var MailData= document.getElementById("mail-data");

    var InputDataValue=document.getElementById("mail").value;


    MailData.innerHTML=InputDataValue;
    Mail.style.display="none";
    EditData3.style.display="block";
    UpdatdeData3.style.display="none";
}



function edit4(){
    var Dob=document.getElementById("dob");
    var UpdatdeData4=document.getElementById("update4");
    var EditData4=document.getElementById("edit4");

    

    Dob.style.display="block";
    EditData4.style.display="none";
    UpdatdeData4.style.display="block";
}

function update4(){
    var Dob=document.getElementById("mail");
    var UpdatdeData4=document.getElementById("update3");
    var EditData4=document.getElementById("edit3");
    var DobData= document.getElementById("dob-data");

    var InputDataValue=document.getElementById("dob").value;


    DobData.innerHTML=InputDataValue;
    Dob.style.display="none";
    EditData4.style.display="block";
    UpdatdeData4.style.display="none";
}













