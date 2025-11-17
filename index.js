var cmd = document.createElement("span");
cmd.id = "cmd";
cmd.textContent = "_";
cmd.classList.add("cmd");

var interactive_arr = [];

var console_running = 0;

var about;

var lines = ["Hello, I'm Sam Willard, a 3rd year computer science and mathematics honors student at Oregon State University",
             "My focus for CS is in computer systems, where I'm learning a lot about low-level hardware and it's software implementations",
             "I have strong passion for embedded software, game, and web development, and I enjoy taking on projects that challenge me to learn something new"];
const lines_dup  = ["Hello, I'm Sam Willard, a 3rd year computer science and mathematics honors student at Oregon State University",
             "My focus for CS is in computer systems, where I'm learning a lot about low-level hardware and it's software implementations",
             "I have strong passion for embedded software, game, and web development, and I enjoy taking on projects that challenge me to learn something new"];

function toggle(project){
    var toggle = document.getElementById(project + "_toggle");
    var desc = document.getElementById(project + "_desc");
    var vid = document.getElementById(project + "_vid");
    if(toggle.textContent == "Show video..."){
        desc.classList.add("hidden");
        vid.classList.remove("hidden");
        toggle.textContent = "Show description...";
    }
    else{
        desc.classList.remove("hidden");
        vid.classList.add("hidden");
        toggle.textContent = "Show video...";
    }
}

document.addEventListener("DOMContentLoaded", function(){
    about = document.getElementById("about");
    let enter = document.createElement("p");
    enter.textContent = "Press enter";
    enter.appendChild(cmd); 
    about.appendChild(enter);

    about.ontouchstart = function(){
        if(lines.length > 0){
            cmd.parentElement.removeChild(cmd);
            var text = lines.shift();
            addConsoleLine(text, 1);
        }
    };
});

function pause (milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

document.addEventListener("keydown", async function(e) {
    if(console_running == 0){
        if(lines.length > 0){
            if(e.key == "Enter"){
                cmd.parentElement.removeChild(cmd);
                var text = lines.shift();
                addConsoleLine(text, 1);
            } 
        }
    }
    
});

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}

function checkInteractiveArray(){
    if(!interactive_arr.includes(-1)){
        if(interactive_arr.length == 4){
            interactive_arr.push(-1);
            addConsoleLine('Thanks for checking out the whole website!');
        }
    }
    
}

async function addConsoleLine(text, check){
    if(console_running == 0){
        console_running = 1;
        if(check != 1) cmd.parentElement.removeChild(cmd);
        if(check == 2) copyTextToClipboard("samuelpwillard@gmail.com");
        if (!interactive_arr.includes(check)) {
            interactive_arr.push(check);
        }
        var display = document.createElement("p");
        display.textContent = "";
        document.getElementById("about").appendChild(display);
        for(let i = 0; i < text.length; i++){
            display.textContent += text.charAt(i);
            await pause(15);
        }
        display.appendChild(cmd);
        console_running = 0;
    }
    checkInteractiveArray();
}

function clearConsole(){
    console.log("Clearing!");
    if(console_running == 0){
        for(let i = about.children.length - 1; i >= 0; i--){
        if(i != 0){
            about.children[i].remove();
        }
        }
        about.appendChild(cmd);
        
        lines = lines_dup.slice();
    }
}

function scrollToSection(element){
    var elem = document.getElementById(element);
    if(!elem) return;
    window.scrollTo({
        top: elem.offsetTop,
        behavior: 'smooth'
    });
}
