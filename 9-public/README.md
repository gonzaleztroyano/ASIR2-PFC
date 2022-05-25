# Paso a producción

Para la publicación de este sitio web es neceario llevar a cabo una serie de acciones:

Clonar el repositorio 

```
git clone https://github.com/gonzaleztroyano/ASIR2-PFC.git
cd ASIR2-PFC
```

Nos situamos sobre la carpeta a publicar, copiamos _image-viewer_:
```
cd 9-public
mkdir image-viewer
cp ../6-pfc-image-viewer/* image-viewer
```

# Enlaces

Puede ser necesario renombrar la carpeta `9-public` a `public` para que Firebase la publique. O, en su defecto, cambiar en propiedades del proyecto la carpeta base para Firebase Hosting. 

A su vez, es neceario definir los siguientes enlaces:
 - https://pfc.gonzaleztroyano.es/slides --> Destino PDF exportado de diapositivas
 - https://pfc.gonzaleztroyano.es/pfc    --> https://pfc.gonzaleztroyano.es/PFC-ASIR-PabloGonzalezTroyano.pdf
 - https://pfc.gonzaleztroyano.es/pdf    --> https://pfc.gonzaleztroyano.es/PFC-ASIR-PabloGonzalezTroyano.pdf