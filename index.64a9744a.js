document.querySelectorAll(".accordion-header").forEach(function(e){e.addEventListener("click",function(){var c=e.closest(".accordion-item"),t=c.querySelector(".accordion-content");c.classList.toggle("active"),t.classList.contains("open")?(t.style.height="0",t.classList.remove("open")):(t.classList.add("open"),t.style.height=t.scrollHeight+"px")})});
//# sourceMappingURL=index.64a9744a.js.map
