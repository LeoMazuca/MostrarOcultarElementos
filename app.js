const toggle = document.getElementById("toggle");
const header = document.getElementById("header");
const container = document.getElementById("container");

const toggleSideBar = ()=> document.body.classList.toggle("show-nav");

toggle.addEventListener("click", toggleSideBar);
/* 
let estado=0;
toggle.addEventListener("click", ()=>{
	if (estado == 0) {
		toggleSideBar();
		toggle.innerHTML = `<i class="fas fa-times fa-2x" id="cerrar-barra"></i>`
		header.className = "header-reducido";
		container.className = "container-reducido";
		estado = 1;
	}else{
		toggleSideBar();
		toggle.innerHTML = `<i class="fas fa-bars fa-2x" id="cerrar-barra"></i>`
		header.className = "header-normal";
		container.className = "container";
		estado = 0;
	}	
}) */
	
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

const openModal = () => modal.classList.add("show-modal");
const closeModal = () => modal.classList.remove("show-modal");

open.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
