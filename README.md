# Sauces de Sol — sitio web

Landing page de las cabañas **Sauces de Sol** (Arroyo de los Patos, Traslasierra, Córdoba).
Sitio estático: `index.html` + `styles.css` + `script.js`. Sin dependencias.

## Ver en local
```
node server.js
```
Abrir http://localhost:5599

## Estructura
- `index.html` — contenido y secciones
- `styles.css` — diseño (paleta cálida: arena / terracota / verde olivo / madera)
- `script.js` — nav, menú móvil, animaciones al hacer scroll, lightbox de galería
- `assets/img/` — fotos optimizadas (drone + cámara)
- `assets/video/drone.mp4` — video de fondo de la franja "El entorno"

## ⚠️ Pendiente de completar (datos reales)
1. **WhatsApp**: en `index.html`, el link dice `https://wa.me/5493544000000...`
   Reemplazar `5493544000000` por el número real (formato: 549 + característica + número, sin 0 ni 15).
2. **Mapa**: el embed apunta al paraje genérico. Para la ubicación exacta, reemplazar el `src`
   del `<iframe>` por el "Insertar mapa" de Google Maps con la dirección precisa.
3. **Reseñas**: están parafraseadas de las 2 reseñas 5★ de Alquiler Argentina. Si querés citas
   textuales con nombres reales, actualizar los `<blockquote>`.

## Publicar
Subir la carpeta completa a cualquier hosting estático (Netlify, Vercel, GitHub Pages,
Hostinger, etc.). No requiere Node en producción (`server.js` es solo para previsualizar).
