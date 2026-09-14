# Configuración Google Drive

La integración requiere un OAuth Client ID de tipo Web. Consulta la documentación oficial de Google para crear las credenciales y habilitar Drive API.

En LUMO360 se registra el Client ID en Configuración → Sincronización y nube. La URI de redirección debe coincidir exactamente con `location.origin + location.pathname` de la aplicación publicada.

Permiso solicitado: `https://www.googleapis.com/auth/drive.file`.
