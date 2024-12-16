const API="http://localhost:3000"
async function addTodo(){
    try {
        const name=document.getElementById("inp").value
        const lastName=document.getElementById("inp2").value
        const phone=document.getElementById("inp3").value

        console.log(name);      
        const res=await fetch("http://localhost:3000/addtodo",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,lastName,phone})
        })
        if(res.status==201){
            const {msg}=await res.json()
            alert(msg)
            document.getElementById("inp").value=""
            document.getElementById("inp2").value=""
            document.getElementById("inp3").value=""
            window.location.href = '../index.html';
            getTodos()
        }
        else{
            alert("not added")
        }
    } catch (error) {
        console.log(error);
        
    }

}