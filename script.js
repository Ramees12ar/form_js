
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
    table = document.getElementById("table");
    function addItem()
    {
        if(!checkEmptyInput()){
            var newRow = table.insertRow(1),
            c1 = newRow.insertCell(0),
            c2 = newRow.insertCell(1),
            c3 = newRow.insertCell(2),
            c4 = newRow.insertCell(3),
            c5 = newRow.insertCell(4),
            c6 = newRow.insertCell(5),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            eid = document.getElementById("eid").value;
            email = document.getElementById("email").value;
            mob = document.getElementById("mob").value;
            c1.innerHTML = fname;
            c2.innerHTML = lname;
            c3.innerHTML = eid;
            c4.innerHTML = email;
            c5.innerHTML = mob;
            var bt= document.createElement("button");
            bt.innerHTML = "Delete";
            bt.className += 'btn btn-danger';
            bt.onclick=function() {
                deleteItem(this);
                };
            c6.append(bt)
            }
        }
        
    //For delete each row    
        function deleteItem(btn){
            var row = btn.parentNode.parentNode;
            row.parentNode.removeChild(row);
        }