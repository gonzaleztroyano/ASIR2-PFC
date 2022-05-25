# Paso a producción

Para la publicación de este sitio web es neceario llevar a cabo una serie de acciones:

Clonar el repositorio 

```
git clone https://github.com/gonzaleztroyano/ASIR2-PFC.git
cd ASIR2-PFC
```

Nos situamos sobre la carpeta a publicar, copiamos _image-viewer_:
```
cd 8-public
mkdir image-viewer
cp ../6-pfc-image-viewer/* image-viewer
```

# Enlaces

Puede ser necesario renombrar la carpeta `9-public` a `public` para que Firebase la publique. O, en su defecto, cambiar en propiedades del proyecto la carpeta base para Firebase Hosting. 

# TODO: Pendiente de subir a GitHub documentos finales y hacer curl desde aquí para slides y pdf. 

A su vez, es neceario definir los siguientes enlaces:
 - https://pfc.gonzaleztroyano.es/slides --> https://pfc.gonzaleztroyano.es/PFC-ASIR-PabloGonzalezTroyano-slides.pdf
 - https://pfc.gonzaleztroyano.es/pfc    --> https://pfc.gonzaleztroyano.es/PFC-ASIR-PabloGonzalezTroyano.pdf
 - https://pfc.gonzaleztroyano.es/pdf    --> https://pfc.gonzaleztroyano.es/PFC-ASIR-PabloGonzalezTroyano.pdf

# ZIP + Files
Eliminar carpeta ZIP:
```
rm image-viewer/PFC-Image-Viewer-media.zip
```

Disponer los archivos descargables:
```
# Estando en 8-public
cp ../PFC-ASIR-PabloGonzalezTroyano* .
```

# Firebase:

```
firebase deploy --only hosting:pfc-gonzaleztroyano
```