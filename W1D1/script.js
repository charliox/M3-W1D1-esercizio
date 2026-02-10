/*ESERCIZI EXTRA*/
/*EXTRA 1: RIMUOVERE TWITTER AUTOMATICAMENTE*/
window.addEventListener("DOMContentLoaded",) function() {
    const twitterLink = document.querySelector(".blog-sidebar a[href*='twitter']");
    if (twitterLink) {
        twitterLink.parentElement.remove();
    }
}


/*EXTRA 2: RIMUOVERE POST CLICCANDO SU "CONTINUA A LEGGERE"*/
document.querySelectorAll(".stretched-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        this.closest(".blog-post").remove();
    });
})

/*EXTRA 3: ALERT AUTORE ON HOVER*/
document.querySelectorAll(".blog-post-meta a").forEach(author => {
    author.addEventListener("mouseenter", function() {
        alert(this.textContent);
    });
});