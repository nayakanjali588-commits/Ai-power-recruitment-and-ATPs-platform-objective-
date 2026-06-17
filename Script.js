function screenCandidate(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let skills = document.getElementById("skills").value.toLowerCase();

    if(name === "" || email === "" || skills === ""){
        alert("Please fill all fields");
        return;
    }

    let score = 0;

    let requiredSkills = [
        "python",
        "java",
        "html",
        "css",
        "javascript"
    ];

    requiredSkills.forEach(skill => {
        if(skills.includes(skill)){
            score += 20;
        }
    });

    let status = "";

    if(score >= 60){
        status = "Selected";
    }
    else{
        status = "Rejected";
    }

    document.getElementById("result").style.display = "block";

    document.getElementById("candidateName").innerText = name;
    document.getElementById("candidateEmail").innerText = email;
    document.getElementById("score").innerText = score + "%";

    let statusElement = document.getElementById("status");

    statusElement.innerText = status;

    if(status === "Selected"){
        statusElement.className = "selected";
    }
    else{
        statusElement.className = "rejected";
    }
}
