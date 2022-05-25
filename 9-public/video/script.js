window.addEventListener("load",function(){
    let video_title_span = this.document.getElementById("video_title_span")
    let video_iframe = this.document.getElementById("video_iframe")
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let video_id = urlParams.get('video')
    let array_de_videos_loom = {
        11: {
            "title": "PowerDNS > Crear cuenta cliente y acceso",
            "embed_id": "c501263b1c6a44268db7f1f6d2e5e2bd",
        },
        12: {
            "title": "PowerDNS > Adición y query de registros",
            "embed_id": "2e846e0665e24c2c8ab062911870f63f"
        },
        13: {
            "title": "Cloudflare Proxy Inverso (al final del vídeo)",
            "embed_id": "2e846e0665e24c2c8ab062911870f63f"
        },
        21: {
            "title": "Mailcow > Recorrido por la página de administración",
            "embed_id": "c6248c151dfd42be98481847cb690421",
        },
        22: {
            "title": "Mailcow > Adición de usuario y recorrido",
            "embed_id": "fa7ac24f3fb545708d4dc404a7a48de0"
        },
        23: {
            "title": "Mailcow > Pruebas de envío y recepción desde webmail",
            "embed_id": "ea96d632aeaf4b548f0ab9e9b1b13aca"
        },
        31: {
            "title": "WebHosting-Script > Acceso SSH con Cloudflare Zero Trust",
            "embed_id": "718fe2d8e24c46108b0db5505d25b6ce"
        },
        32: {
            "title": "WebHosting-Script > Listado de clientes y ejemplo de página",
            "embed_id": "d431c3746cfc48d8b2014af73aba0e78"
        },
        33: {
            "title": "WebHosting-Script > Conexión mediante SFTP",
            "embed_id": "1293639060904dcd99c74e9082a616b3",
        },
        34: {
            "title": "WebHosting-Script > Cambio de contraseña de usuario. Ver email",
            "embed_id": "ab8dbd2b71c941f1b35404aa4d519d04"
        },
        35: {
            "title": "WebHosting-Script > Añadir usuario y página web estática",
            "embed_id": "57cec6923b4a4053bbe642a1e4f83cee"
        },
        36: {
            "title": "WebHosting-Script > Añadir WordPress a usuario existente",
            "embed_id": "bdf401955583421c9b8a11619f68ea0c"
        },
        37: {
            "title": "WebHosting-Script > Añadir PrestaShop a usuario existente",
            "embed_id": "5483de472e0a4c279fbcdd49de0631d4"
        },
        41: {
            "title": "FreePBX/Asterisk: VoIP > Recorrido por consola FreePBX y creación usuario",
            "embed_id": "14bd28d922d0494987eeb92274a21dda"
        },
        42: {
            "title": "FreePBX/Asterisk: VoIP > Llamada interna entre extensiones",
            "embed_id": "876dd65cd56d42ca920bec8a60f10903"
        },
        43: {
            "title": "FreePBX/Asterisk: VoIP > Explicación y pruebas menú IVR",
            "embed_id": "13c525a196224ec4be7334dc97ae3aa3",
        },
        51: {
            "title": "Plesk > Acceso a panel y visualización de sitios",
            "embed_id": "bf2f1964a46d43cb992cf0d82cd43c5b"
        },
        52: {
            "title": "Plesk > Gestión de clientes y suscripciones",
            "embed_id": "33c9d65e81224957b6bb9f8375701f1e"
        },
        53: {
            "title": "Plesk > Pruebas DNS y webmail",
            "embed_id": "bc6d91eaaf8c4b6e874b8a5d4ed7532b",
        },
        54: {
            "title": "Plesk > Creación de nuevo cliente y sitio estático",
            "embed_id": "a70c77b77f644ced93671a2f707ed6d0"
        },
        61: {
            "title": "osTicket > Creación de ticket mediante email",
            "embed_id": "e7145488fab747c88aa477cc4ec95ee6"
        },
        62: {
            "title": "osTicket > Recorrido panel de cliente y agente",
            "embed_id": "fbe7b2b778b84dd39e15659f613bb8ab"
        },
        72: {
            "title": "Grafana/Monitoring > Revisión métricas y consulta de lgos en Grafana",
            "embed_id": "de4ccb13af3546959c7b66f4b0c13476"
        },
        73: {
            "title": "Grafana/Monitoring > Creación alertas Grafana Synthetic Monitoring",
            "embed_id": "d3e497eae75247abbfc445716d3dc2e2",
        },
        74: {
            "title": "Grafana/Monitoring > RIPE Atlas review",
            "embed_id": "107d4641819b4fa19d548f6f49ffbb33"
        },
        75: {
            "title": "Grafana/Monitoring > Configuración de túnel Cloudflare Zero Trust",
            "embed_id": "430b79296b324df8bcf37ce462c0dd39"
        }
    }
    video_title_span.innerHTML = array_de_videos_loom[video_id].title
    video_iframe.src = "https://www.loom.com/embed/" + array_de_videos_loom[video_id].embed_id
    this.document.title = "Ver vídeo > " + array_de_videos_loom[video_id].title + "| Proyecto Fin de Ciclo ASIR - Pablo González Troyano"
})