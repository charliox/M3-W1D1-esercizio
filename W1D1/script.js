/*ESERCIZI EXTRA*/
/*EXTRA 1: RIMUOVERE TWITTER*/
let asidelinks = document.querySelectorAll("aside a")
asidelinks.forEach(link => {
    if (link.textContent === "Twitter")
        link.parentElement.remove()
})
})

//OPPURE window.onload = function(), quasi uguale ma leggermente meno formale


/*EXTRA 2: RIMUOVERE POST CLICCANDO SU "CONTINUA A LEGGERE"*/
let continueRead = document.querySelectorAll(".stretched-link")
for (let link of continueRead) {
    console.log("ok")
    link.onClick = function(event) {
    event.preventDefault()
    event.closest(".col-md-6").remove();
}
})

/*EXTRA 3: ALERT AUTORE ON HOVER*/
let author = document.querySelectorAll(".blog-post-meta a")
for (let authorLink of author) {
    authorLink.addEventListener("mouseover", function(event){alert(event.target.innerText)        
    })
}
})
