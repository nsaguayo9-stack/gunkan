# Gunkan Sushi Nikkei

Web de catálogo conectada al CSV público de Gunkan. No requiere dependencias.

## Uso

`npm run dev` abre el servidor en http://localhost:4173.

`npm run build` verifica la sintaxis y genera `dist/` para publicación.

## GitHub y Vercel

Subir el contenido de esta carpeta a un repositorio GitHub. Importarlo en Vercel con preset Other, comando `npm run build` y directorio `dist`. El archivo vercel.json ya contiene esa configuración.

## Carta

El enlace CSV se configura en app.js. Se consulta al abrir, cada minuto, al regresar a la pestaña y antes de enviar el pedido. Google Sheets puede demorar en reflejar cambios en su CSV publicado. Ante un error de actualización se bloquea el envío hasta poder validar el catálogo.

Columnas: id, categoría, nombre, descripción, opciones, precio, stock, foto. Mantener id estable y único. Los precios aceptan números o formatos como $5,600 y $5.600. stock=sí permite agregar, stock=no bloquea el producto. fotos deben usar URLs públicas https; si fallan se elimina el área de imagen.

Las filas de categoría Extras aportan precios a los selectores y no aparecen como productos independientes. No cambiar sus nombres sin adaptar los selectores. Las opciones de Tsukuru y HandRoll siguen los campos del catálogo entregado; mantener las etiquetas Proteína, Relleno, Envoltura y Vegetales cuando se actualicen sus opciones. Las tablas recogen la combinación solicitada en indicaciones, sin asumir el número de piezas de cada roll ni cobrar recargo de envoltura.

WhatsApp: +56 9 5513 3332. Tabla 100: 45000. Sin descuento de 30%. Gohan agotado mientras stock=no.

Las imágenes de ambientación son creaciones digitales ilustrativas, no fotografías de productos reales. El logo es el proporcionado por el negocio.
