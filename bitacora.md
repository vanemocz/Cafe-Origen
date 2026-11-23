# Bitácora de Análisis - Café Origen v0.1

## 1. Diccionario de datos (Minirreto 1)

| Propiedad | Tipo de dato | Significado |
| :--- | :--- | :--- |
| `id` | number | identificador unico |
| `fecha` | string | fecha en la que se realizo la venta |
| `cliente` | string | codigo que identifica al cliente |
| `producto` | string | nombre y presentacion del producto |
| `ciudad` | string | ciudad donde se realizo la venta |
| `cantidad` | number | cantidad de productos vendidos |
| `precio` | number | precio del producto vendido |

---

## 2. Casos borde detectados en los datos (Minirreto 1)

### Hallazgo 1:
- **Descripción**: 
  En la cantidad de productos hay datos como 0, es un caso borde que hay que tener en cuenta porque puede afectar los calculos.
- **¿Cómo se debe tratar en el análisis?**:
  Con una funcion validar que el arreglo no este vacio.

### Hallazgo 2:
- **Descripción**:
  En la ciudad hay varios datos escritos de forma variada aunque se tratan del mismo dato.
- **¿Cómo se debe tratar en el análisis?**:
  Normalizando los datos de la ciudad.
---

## 3. Patrones con ciclos manuales (Minirreto 2)

- **`totalVendido(ventas)`**:
  - *Patrón usado (contador, acumulador, filtro, extremo)*:
- **`totalUnidades(ventas)`**:
  - *Patrón usado*:
- **`ventaMayorValor(ventas)`**:
  - *Patrón usado*:
- **`ventasDeCiudad(ventas, ciudad)`**:
  - *Patrón usado*:
- **`promedioPorVenta(ventas)`**:
  - *Patrón usado*:

---

## 4. Del ciclo al método: Preguntas de transformación y agrupación (Minirreto 3)

- **¿Qué filtro? (`.filter`)**:
- **¿Qué transformo? (`.map`)**:
- **¿Qué reduzco / acumulo? (`.reduce`)**:
- **¿Cómo agrupo en un diccionario?**:
- **¿Cómo ordeno sin modificar el arreglo original? (`.sort`)**:

---

## 5. Verificación del reporte y pureza de funciones (Minirreto 4)

- **¿Cómo comprobaste que el arreglo `ventas` original no fue modificado?**:
- **Comando para ejecutar el reporte**:
