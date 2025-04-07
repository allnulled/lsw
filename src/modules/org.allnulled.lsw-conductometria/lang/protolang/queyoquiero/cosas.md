Esto sería un lenguaje para poder:

 - Crear esquemas rápidamente
 - Inyectar datos rápidamente

Por ejemplo:

modelar concepto {
    tiene_nombre: @texto
    tiene_definicion: @texto:largo
    tiene_comentarios: @texto:largo
}

modelar articulo {
    tiene_concepto_central: @objeto:[concepto]
    tiene_conceptos_secundarios: @lista:[concepto]
}