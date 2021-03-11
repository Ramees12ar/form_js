
//check input is empty or not
function checkEmptyInput()
    {
        var isEmpty = false,
        fname = document.getElementById("fname").value,
        lname = document.getElementById("lname").value,
        eid = document.getElementById("eid").value;
        email = document.getElementById("email").value;
        mob = document.getElementById("mob").value;
            
        if(fname === ""){
            alert("First Name Cannot Be Empty");
            isEmpty = true;
        }
        else if(lname === ""){
            alert("Last Name Cannot Be Empty");
            isEmpty = true;
        }
        else if(eid === ""){
            alert("employee id Cannot Be Empty");
            isEmpty = true;
        }
        else if(email===""){
            alert("email Cannot Be Empty");
            isEmpty = true;
        }
        else if(mob===""){
            alert("mobile cannot be empty");
            isEmpty = true;
        }
        return isEmpty;
    }


    //Add each row
    
    var arr = new Array();
    function addItem()
    {   
        if(!checkEmptyInput()){
            //localStorage.Data = JSON.stringify(arr);
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            eid = document.getElementById("eid").value;
            email = document.getElementById("email").value;
            mob = document.getElementById("mob").value;
            if(mob.length != 10)
            {
                alert("Mobile number must be 10 digits");
            }
            var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            if(reg.test(email) == false)
            {
                alert("Email not valid. please enter valid email id")
            }
            if(mob.length ===10 && reg.test(email) == true)
            {
                arr.push({
                    fname: document.getElementById("fname").value,
                    lname: document.getElementById("lname").value,
                    eid: document.getElementById("eid").value,
                    email: document.getElementById("email").value,
                    mob: document.getElementById("mob").value,
                });
                let newArr = arr.sort(function(a,b){ 
                    return a.fname.localeCompare(b.fname)
                });
                localStorage.setItem("localData", JSON.stringify(newArr) );
                showData();
            }
        }
    }

    function showData(){
        getData();
        table = document.getElementById("table");
        var x = table.rows.length;
        while(--x){
            table.deleteRow(x);
        }
        for(i=0;i<arr.length;i++){
            var newRow = table.insertRow(i+1);
            newRow.id = i;
            c1 = newRow.insertCell(0),
            c2 = newRow.insertCell(1),
            c3 = newRow.insertCell(2),
            c4 = newRow.insertCell(3),
            c5 = newRow.insertCell(4),
            c6 = newRow.insertCell(5),
            c1.innerHTML = arr[i].fname;
            c2.innerHTML = arr[i].lname;
            c3.innerHTML = arr[i].eid;
            c4.innerHTML = arr[i].email;
            c5.innerHTML = arr[i].mob;
            //button added for edit
            var bt2= document.createElement("button");
            bt2.innerHTML = "Edit";
            bt2.className += 'btn btn-primary';
            bt2.onclick = function (){
                $("#editModal").modal('toggle');
                var rowId = event.target.parentNode.parentNode.id;
                var Data = JSON.parse(localStorage.getItem("localData"));
                let newData = Data.filter(function (id,index) {
                        return index == rowId;
                });
                //console.log(newData);
                document.getElementById('getts').value=rowId;
                //console.log(document.getElementById('getts').value)
                var len = newData.length;
                for(var i = 0; i<len; i++)
                {
                    for(var key in newData[i])
                    {
                        if(key === "fname")
                        {
                            var le = (newData[i][key]);
                            document.getElementById('fname2').value=le;
                        }
                        else if(key === "lname")
                        {
                            var le = (newData[i][key]);
                            document.getElementById('lname2').value=le;
                        }
                        else if(key === "eid")
                        {
                            var le = (newData[i][key]);
                            document.getElementById('eid2').value=le;
                        }
                        else if(key === "email")
                        {
                            var le = (newData[i][key]);
                            document.getElementById('email2').value=le;
                        }
                        else if(key === "mob")
                        {
                            var le = (newData[i][key]);
                            document.getElementById('mob2').value=le;
                        }
                    }
                }
            }
            c6.append(bt2);
            //button added for delete
            var bt= document.createElement("button");
            bt.innerHTML = "Delete";
            bt.className += 'btn btn-danger';
            bt.style.marginLeft = "3px";
            bt.onclick=function() {
                deleteItem();
            };
            c6.append(bt);
            document.getElementById("fname").value=""
            document.getElementById("lname").value=""
            document.getElementById("eid").value=""
            document.getElementById("email").value=""
            document.getElementById("mob").value=""
            $('#myModal').modal('hide');
        }
    }

    function getData(){
        var str = localStorage.getItem("localData");
        if(str != null)
            arr = JSON.parse(str);
            //console.log(arr);
    }
        
    //For delete each row    
        function deleteItem(){
            var rowId = event.target.parentNode.parentNode.id;
            //table = document.getElementById("table");
            //table.deleteRow(rowId);
            var Data = JSON.parse(localStorage.getItem("localData"));
            let newData = Data.filter(function (id,index) {
                return index != rowId;
              });
            localStorage.setItem("localData", JSON.stringify(newData) );
            window.location.reload();
        }

    //for edit the profile data
    function editItem(){
        var rowId=document.getElementById("getts").value;
        //alert(x);
        getData();
        for (i=0;i<arr.length;i++)
        {
            if(i==rowId){
                arr[i].fname = document.getElementById("fname2").value;
                arr[i].lname = document.getElementById("lname2").value;
                arr[i].email = document.getElementById("email2").value;
                arr[i].eid = document.getElementById("eid2").value;
                arr[i].mob = document.getElementById("mob2").value;
            }
        }
        localStorage.setItem("localData",JSON.stringify(arr));
        window.location.reload();
        
    }