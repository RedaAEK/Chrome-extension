let myLeads = []
const input = document.getElementsByTagName("input")[0]
const btn = document.getElementsByTagName("button")[0]
const ul = document.getElementsByTagName("ul")[0]
btn.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    renderLead()
})
function renderLead() {
    let listItems = ""
    for (i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='"+ myLeads[i]+"'target='_blank'>" + myLeads[i] + "</a></li>"
        listItems += `
        <li>
        <a href=https://${myLeads[i]} target="_blank">
        ${myLeads[i]}
        </a>
        </li>
        `

        ul.innerHTML = listItems
    }

}


