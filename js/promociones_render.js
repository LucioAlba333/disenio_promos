export function promociones_render(promociones) {
    const container = document.getElementById('promociones');

    container.innerHTML = '';

    promociones.forEach((promo) => {
        const article = document.createElement('article');

        const precioFinal = promo.precio_original - (promo.precio_original * promo.descuento) / 100;

        article.innerHTML = `
            <p>
                <strong>${promo.producto}</strong>
            </p>

            <img class="producto-img" src="${promo.imagen}" alt="${promo.producto}">

            <p>
                <small>${promo.billetera}</small>
            </p>

            <p>${promo.descuento}% OFF</p>

            <p>
                <del>$${promo.precio_original}</del>
                <strong>$${precioFinal}</strong>
            </p>
            <p>${promo.dia}</p>
        `;
        container.appendChild(article);
    });
}
