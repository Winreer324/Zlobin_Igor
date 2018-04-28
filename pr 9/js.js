function get_name_browser(){ 
    let agent = navigator.userAgent;     
    if (agent.search(/Chrome/) > 1) return 'Google Chrome';
    if (agent.search(/Firefox/) || agent.search(/Gecko/) > 1) return 'Firefox';
    if (agent.search(/Opera/) > 1) return 'Opera';
    if (agent.search(/Safari/) > 1) return 'Safari';
    if (agent.search(/MSIE/) > 1) return 'Internet Explorer';
    return 'Не определен';
}

let span = document.querySelector('span'); 
 
span.style.color = "red"; 
span.style.fontSize = "50px";  
span.style.position = "absolute"; 
span.innerText = get_name_browser();
span.style.top = "50%"; 
span.style.left = "30%"; 