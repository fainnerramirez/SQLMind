# 🧠 SQLMind

SQLMind es una aplicación web que convierte lenguaje natural en consultas **SQL**, ayudando a usuarios a generar código fácilmente sin necesidad de conocer sintaxis complejas.

## 🚀 Características principales

- 🗣️ **Conversión de lenguaje natural a SQL**  
  Traduce automáticamente frases como “dame todos los usuarios registrados en abril” a consultas SQL válidas.

- 💾 **Exportación a archivo `.sql`**  
  Descarga tus consultas generadas para usarlas en tu base de datos.

- 📚 **Historial del usuario**  
  Guarda cada consulta generada para que puedas revisarla o reutilizarla después.

- 🧩 **Editor con CodeMirror**  
  Visualiza y edita el código SQL con resaltado de sintaxis gracias al potente editor [CodeMirror](https://codemirror.net/).

- 🔐 **Autenticación con Google**  
  Accede de forma segura y guarda tu historial personalizado.

---


## 🧪 Ejemplos de uso

Aquí tienes algunos ejemplos de consultas que puedes hacer con SQLMind:

| Lenguaje Natural | Output SQL |
|------------------|------------|
| **"Dame todos los usuarios registrados en abril"** | `SELECT * FROM users WHERE MONTH(created_at) = 4;` |
| **"Mostrar el total de ventas por producto"** | `SELECT product_name, SUM(sales) AS total_sales FROM orders GROUP BY product_name;` |
| **"¿Cuántos usuarios se registraron el último mes?"** | `SELECT COUNT(*) FROM users WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 1 MONTH);` |
| **"Obtener el nombre y correo de los usuarios activos"** | `SELECT name, email FROM users WHERE status = 'active';` |
| **"Productos que no se han vendido"** | `SELECT * FROM products WHERE id NOT IN (SELECT product_id FROM orders);` |

Puedes ajustar estas queries en el editor de CodeMirror si deseas personalizarlas antes de exportar.

---

## 🛠️ Tecnologías usadas

- ⚛️ **React + Vite** — Interfaz moderna y rápida
- 🔥 **Firebase** — Autenticación
- 🧠 **OpenAI / LLMs** — Generación del código SQL desde lenguaje natural
- 🧪 **Zustand** — Gestión de estado simple y eficaz
- 🧩 **CodeMirror** — Editor de código con autocompletado y syntax highlighting
- 🎨 **Chakra UI** — Componentes accesibles y estilizados

---
