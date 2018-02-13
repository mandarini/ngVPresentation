for (let i=1; i<6; i++) {
    let content = document.querySelector('link[rel="import"]#link_0'+i).import;
    document.getElementById("section_0"+i).appendChild(content.querySelector("div#slide_0"+i));
}