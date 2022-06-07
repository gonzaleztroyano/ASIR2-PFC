window.addEventListener("load",function(){
    let pagina = this.document.getElementById("pagina")
    let img_pag = this.document.getElementById("img_pag")
    let button_ver = this.document.getElementById("button_ver")
    let img_result = this.document.getElementById("img_result")
    let base_path_images = "https://storage.googleapis.com/pablo-glez-asir.appspot.com/media/"
    
    button_ver.addEventListener("click", function(){ 
        img_result.src = base_path_images + pagina.value + "/" + img_pag.value + ".png"     
        img_result.alt = "Imagen número " + pagina.value + " de la página " + img_pag.value
        gtag('event', 'pfc_image_view', {
            'page_number': pagina.value,
             'image_number': img_pag.value
   });
    })
})