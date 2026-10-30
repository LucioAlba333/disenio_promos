export function cargarBilleteras(promociones) {
    const select = document.getElementById('billetera');

    const billeteras = [...new Set(promociones.map((p) => p.billetera))];

    billeteras.forEach((billetera) => {
        const option = document.createElement('option');
        option.value = billetera;
        option.textContent = billetera;
        select.appendChild(option);
    });
}
export function cargarDias(promociones) {
    const select = document.getElementById('dia');

    const dias = [...new Set(promociones.map((p) => p.dia))];

    dias.forEach((dia) => {
        const option = document.createElement('option');
        option.value = dia;
        option.textContent = dia;
        select.appendChild(option);
    });
}

export function aplicarFiltros(promociones) {
    const filtroDia = document.getElementById('dia').value;
    const filtroBilletera = document.getElementById('billetera').value;

    console.log('dia seleccionado:', filtroDia);
    console.log('billetera seleccionada:', filtroBilletera);
    console.log('primer promo:', promociones[0]);
    return promociones.filter((promo) => {
        console.log(promo.dia, filtroDia, promo.billetera, filtroBilletera);
        const coincideDia = filtroDia === '' || promo.dia === filtroDia;
        const coincideBilletera = filtroBilletera === '' || promo.billetera === filtroBilletera;
        return coincideDia && coincideBilletera;
    });
}
