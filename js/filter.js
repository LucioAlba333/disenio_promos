export function cargarBilleteras(promociones) {
    const select = document.getElementById('filtro-billetera');

    const billeteras = [...new Set(promociones.map((p) => p.billetera))];

    billeteras.forEach((billetera) => {
        const option = document.createElement('option');
        option.value = billetera;
        option.textContent = billetera;
        select.appendChild(option);
    });
}
export function cargarDias(promociones) {
    const select = document.getElementById('filtro-dia');

    const dias = [...new Set(promociones.map((p) => p.dia))];

    dias.forEach((dia) => {
        const option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        select.appendChild(option);
    });
}

export function aplicarFiltros(promociones) {
    const dia = filtroDia.value;
    const billetera = filtroBilletera.value;
    return promociones.filter((promo) => {
        const coincideDia = dia === '' || promo.dia === dia;
        const coincideBilletera = billetera === '' || promo.billetera === billetera;
        return coincideDia && coincideBilletera;
    });
}
