
const API="http://localhost:3000"
async function getTodos() {
    try {
            const res=await fetch(API+"/gettodos")
        if(res.status==200){
            const data=await res.json()
            str=``
            data.map((dt)=>{
                str+=`
               <tr>
                    <td id="td">${dt.name}</td>
                    <td id="td">${dt.lastName}</td>
                    <td id="td">${dt.phone}</td>
                    <td class="icons">
                        <div class="td">
                            <img src="./assets/trash.png" alt="" class="td-img" id="td" onclick="dele('${dt._id}')">                                    
                            <img src="./assets/edit.png" alt="" class="td-img2" ></td>                       
                        </div>
                    </td>
                </tr>
                `
            })
            document.getElementById("list").innerHTML=str
        }
        else{
            alert("data not get")
        }
    } catch (error) {
     console.log(error);
     
    }
}
getTodos()
async function isCompleted(_id,isCompleted) {
    console.log(isCompleted);
    const res=await fetch(API+`/isCompleted/${_id}`,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({isCompleted})
        }
    )
    console.log(res);
    if(res.status==201){
        getTodos()
    }
    
}
async function del(_id) {
    const res=await fetch(API+`/deletetodo/${_id}`,
        {
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        }
    )
    console.log(res);
    if(res.status==200){
    document.getElementById("del").style.display="none"
        getTodos()
    }
    
}






function dele(_id){
    document.getElementById("del").style.display="block"
    document.getElementById("td").style.display="none"
    str+=`<div class="conform">
            <div class="btns">
                do you want to delet the phone number
            </div>
            <div class="btns">
                <button class="btn1" onclick="cancel()">cancel</button>
                <button class="btn2" onclick="del('${_id}')">confom</button>
            </div>
        </div>`
    document.getElementById("del").innerHTML=str
}
function cancel(){
    document.getElementById("del").style.display="none"
    document.getElementById("td").style.display="block" 
}

