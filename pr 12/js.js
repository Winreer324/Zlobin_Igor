function get_name_browser(){ 
    let agent = navigator.userAgent;  
    if (agent.search(/OPR/) > 1) return "Opera";    
    if (agent.search(/Firefox/) > 1) return "Firefox"; 
    if (agent.search(/Trident/) > 1) return "Internet Explorer";
    if (agent.search(/Edge/) > 100) return "Microsoft Edge";
    if (agent.search(/Chrome/) > 80) return "Google Chrome"; 
    if (agent.search(/Safari/) > 1) return "Safari";
    return 'Не определен';
}

let span = document.querySelector('span'); 
 
span.style.color = "red"; 
span.style.fontSize = "50px";  
span.style.position = "absolute"; 
span.innerText = get_name_browser();
span.style.top = "-500px"; 
span.style.left = "30%"; 