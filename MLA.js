var entries = ["author", "source", "container", "contributors", "version", "number", "publisher", "publication date", "location"];
var output = "";
function button() {
    output = "";
    for (var i = 0; i < entries.length; i++){
        let ent = entries[i];
        if (document.getElementById(ent).value === "") {
            output += "";
        }else if (ent === "author") {
            output += `${document.getElementById(ent).value}. `;
        } else if (ent === "source") {
            if (document.getElementById(ent).value.startsWith('"') && document.getElementById(ent).value.endsWith('"')) {
                output += `${document.getElementById(ent).value}. `
            } else {
                output += `<i>${document.getElementById(ent).value}</i>. `
            }
        } else if (ent === "container") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "contributors") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "version") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "number") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "publisher") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "publication date") {
            output += `${document.getElementById(ent).value}, `;
        } else if (ent === "location") {
            output += `${document.getElementById(ent).value}. `;
        } else {
            return false;
        }
    }
    output = `${output.slice(0,-2)}.`;
    
    document.getElementById("output").innerHTML = output;
    console.log(output);
}
console.log(output);