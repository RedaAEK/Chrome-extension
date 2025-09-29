let myLeads = []
const input = document.getElementsByTagName("input")[0]
const btn = document.getElementsByTagName("button")[0]
const ul = document.getElementsByTagName("ul")[0]
const savebtn=document.getElementsByTagName("button")[1]
const rmvbtn = document.getElementsByTagName("button")[2]
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


savebtn.addEventListener("click" , function(){
chrome.tabs.query({active:true , currentWindow: true}, 
    function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)

})  
})
function render(leads){      
    let listItems = ""
    for (i = 0; i < leads.length; i++) {
        listItems += `
        <li>
             <a target='_blank' href='${leads[i]}'>
                 ${leads[i]}
             </a>
        </li>
        `

    }
    ul.innerHTML = listItems
}


rmvbtn.addEventListener("dblclick", function () {
    localStorage.clear();
    myLeads = []
    render(myLeads)
})

btn.addEventListener("click", function () {
    myLeads.push(input.value)
    input.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})



