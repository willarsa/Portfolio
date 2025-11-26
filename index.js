var cmd = document.createElement("span");
cmd.id = "cmd";
cmd.textContent = "_";
cmd.classList.add("cmd");

var user = "???";
var currline = "";
var nextline = document.createElement("p");
nextline.id = "line";
const commands = ["help", "about", "signin", "time"];

var variables = [];

var interactive_arr = [];

var console_running = 0;

var about;


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
    about = document.getElementById("about2");
    let enter = document.createElement("p");
    enter.textContent = user + ": Type help and hit enter for a list of commands";
    about.appendChild(enter);

    nextline.textContent = user + ": ";
    nextline.appendChild(cmd);
    about.appendChild(nextline);

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

function returnWord(str, index) {
  const words = str.trim().split(/\s+/);
  if(index < words.length){
    return words[index];
  }
  else{
    return null;
  }
}

function newCmd() {
    const previous = nextline;
    nextline = document.createElement("p");
    about.appendChild(nextline);
}

async function replaceKeyword(str) {
    const words = str.trim().split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "user") {
            words[i] = user;
        } else {
            for (let j = 0; j < variables.length; j++) {
                if (words[i] === variables[j][0]) {
                    words[i] = variables[j][1];
                }
            }
        }
    }
    return words.join(" ");
}

document.addEventListener("keydown", async function(e) {
    if (e.key === " ") { // prevents the page from scrolling on space click
        e.preventDefault();
    }

    if(/[ -~]/.test(e.key) && e.key.length == 1){ //checks all characters of length 1
        currline += e.key;
    }
    else if(e.key == "Backspace"){
        currline = currline.slice(0, -1);
    }
    else if(e.key == "Enter"){
        var first = returnWord(currline, 0);
        if(first == "help"){
            var line = document.createElement("p");
            line.innerHTML = "help: lists all available commands<br>" + 
                        "about: gives a brief description of me and my passions!<br>" + 
                        "signin [username]: allows you to enter your username for the terminal.<br>" + 
                        "time: displays the current time.<br>" + 
                        "clear: clears the terminal.<br>" +
                        "echo [sentence]: outputs sentence to the terminal.<br>" + 
                        "let [name] [value]: creates a variable that can be used in other commands.";
            about.appendChild(line);
        }
        else if(first == "about"){
            var line = document.createElement("p");
            line.innerHTML = "Hello" + (user == "???" ? "" : " " + user) + ", I'm Sam Willard, a 3rd year computer science and mathematics honors student at Oregon State University.<br><br>" +
            "My focus for CS is in computer systems, where I'm learning a lot about low-level hardware and it's software implementations.<br><br>" +
            "I have strong passion for embedded software, game, and web development, and I enjoy taking on projects that challenge me to learn something new!";
            about.appendChild(line);
        }
        else if(first == "signin"){
            user = returnWord(currline, 1);
        }
        else if(first == "time"){
            const date = new Date();
            var line = document.createElement("p");
            line.textContent = date;
            about.appendChild(line);
        }
        else if(first == "clear"){
            for(let i = about.children.length - 1; i >= 0; i--){
                about.children[i].remove();
            }
        }
        else if(first == "echo"){
            currline = await replaceKeyword(currline);
            var sentence = "";
            let word = "";
            let i = 1;
            while((word = returnWord(currline, i)) != null){
                sentence += word + " ";
                i = i+1;
            }
            var line = document.createElement("p");
            line.textContent = sentence;
            about.appendChild(line);
        }
        else if(first == "let"){
            var name = returnWord(currline, 1);
            for(let i = 0; i < variables.length; i++){
                if(variables[i][0] == name){
                    if(i != 0) variables.splice(i, i-1);
                    else variables.shift();
                }
            }
            var value = "";
            let i = 2;
            while(returnWord(currline, i) != null){
                value += returnWord(currline, i);
                i++;
            }
            if(name != null && value != null){
                var variable = [name, value];
                variables.unshift(variable);
                console.log(variables);
            }
        }
        else if(first == ""){

        }
        else{
            var line = document.createElement("p");
            line.innerHTML = "Invalid Command";
            about.appendChild(line);
        }

        currline = "";
        newCmd();
        const container = document.querySelector('.about');
        container.scrollTop = container.scrollHeight;
    }
    
    nextline.textContent = user + ": " + currline;
    nextline.appendChild(cmd);
});

async function copyTextToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy text: ', err);
  }
}
