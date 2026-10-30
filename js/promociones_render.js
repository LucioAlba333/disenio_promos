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
            <p>${promo.descuento}% OFF</p>

            <p>
                <del>$${promo.precio_original}</del>
                <strong>$${precioFinal}</strong>
            </p>
            <p class="billetera-info">
                todos los ${promo.dia} usando:
            <img class=logo src="${promo.logotipo}" alt="${promo.billetera}">
                <small>${promo.billetera}</small>
            </p>
        `;
        container.appendChild(article);
    });
}
