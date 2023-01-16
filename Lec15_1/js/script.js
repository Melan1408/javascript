const input = document.querySelector("input");
const ghostDiv = document.createElement("div");

setInterval(() => {
        if(document.activeElement === input) {
            ghostDiv.style.width = "300px";
            ghostDiv.style.height = "100px";
            ghostDiv.style.backgroundColor = "black";
            document.body.append(ghostDiv);
        }
        else if(ghostDiv) {
            ghostDiv.remove();
        }
    }
    , 100);
