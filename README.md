
# Web Component: CardTennis

El componente web `CardTennis` es una tarjeta personalizable diseñada para mostrar información sobre productos o artículos. Puedes utilizar este componente en tus proyectos web para mostrar tarjetas de productos con información detallada.

## Características

- Personalizable: Puedes configurar los atributos para mostrar diferentes contenidos en la tarjeta.
- Diseño atractivo: Ofrece un diseño atractivo y receptivo para mostrar la información del producto.
- Fácil integración: Puedes integrar este componente en tus proyectos web simplemente añadiendo la etiqueta HTML correspondiente.

## Uso

Para usar el componente `CardTennis`, sigue estos pasos:

1. Incluye el script de tu componente en tu página HTML:

```html
<script src="ruta/al/componente/card-tennis.js"></script>
```
Luego, puedes usar la etiqueta HTML personalizada card-tennis en tu HTML para crear una tarjeta personalizada. A continuación, se muestra un ejemplo de cómo utilizarlo:
```html
<card-tennis
  id="1"
  brand="Nike"
  title="Zapatos de Tenis"
  subtitle="Modelo A123"
  imageUrl="ruta/a/imagen.jpg"
  paragraph="Estos zapatos de tenis son perfectos para tu próximo partido."
  price="99.99"
></card-tennis>
```

## Atributos
El componente CardTennis acepta los siguientes atributos:

id (ID del producto)
brand (Nombre de la marca)
title (Título del producto)
subtitle (Subtítulo del producto)
imageUrl (URL de la imagen del producto)
paragraph (Descripción del producto)
price (Precio del producto)
Puedes personalizar y ajustar estos atributos para adaptar la tarjeta a tu contexto específico.

## Estilos
El componente utiliza estilos CSS internos para dar formato a la tarjeta. Estos estilos definen colores, tamaños y diseño. Puedes modificar estos estilos personalizando las variables CSS proporcionadas o ajustando directamente las propiedades CSS en la sección de estilos del componente.

Variables CSS Disponibles
--primary
--secondary
--gray-ligth
--gray-dark
--letter
--font

## Contribución
Siéntete libre de contribuir, realizar sugerencias o mejoras a este componente. ¡Tu colaboración es bienvenida!
