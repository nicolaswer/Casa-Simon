# Casa-Simon
⭐ Cómo abrir tu página web con Python (resumen)

Python trae un servidor web incluido, así que puedes ver tu web sin Live Server y con compatibilidad móvil.

✅ 1. Abre una terminal en la carpeta del proyecto

En Windows:

Abre CMD o PowerShell

Navega a tu carpeta del proyecto:

cd C:\Users\TU_USUARIO\Ruta\del\Proyecto


Ejemplo tuyo:

cd C:\Users\schwa\OneDrive\Escritorio\casasimon\Casa-Simon

✅ 2. Ejecuta el servidor de Python

Escribe:

python -m http.server 5500


Esto encenderá un servidor web en el puerto 5500.

Verás algo como:

Serving HTTP on :: port 5500 ...


👉 Esto significa que el servidor está funcionando correctamente.

✅ 3. Abrir la web en tu PC

En tu navegador escribe:

http://127.0.0.1:5500


o

http://localhost:5500


Esto mostrará tu web funcionando de forma local.

✅ 4. Abrir la web en tu MÓVIL

Para ver la web en tu móvil necesitas tu IP local.

En CMD escribe:

ipconfig


Busca:

Dirección IPv4: 192.168.1.XX


👉 Con esa IP, abre en el móvil:

http://192.168.1.XX:5500


Ejemplo:

Si tu IP es 192.168.1.45:

http://192.168.1.45:5500


⚠ Tu PC y tu móvil deben estar en la MISMA WiFi.

✅ 5. Para apagar el servidor

Simplemente cierra la terminal o pulsa:

Ctrl + C