export function cargarBilleteras(promociones) {
    const lista = document.getElementById('lista-billetera');
    const billeteras = [...new Set(promociones.map((p) => p.billetera))];

    billeteras.forEach((billetera) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.name = 'billetera';
        input.value = billetera;
        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${billetera}`));
        li.appendChild(label);
        lista.appendChild(li);
    });
}
export function cargarDias(promociones) {
    const lista = document.getElementById('lista-dia');
    const dias = [...new Set(promociones.flatMap((p) => p.dia))];

    dias.forEach((dia) => {
        const li = document.createElement('li');
        const label = document.createElement('label');
        const input = document.createElement('input');

        input.type = 'checkbox';
        input.name = 'dia';
        input.value = dia;

        label.appendChild(input);
        label.appendChild(document.createTextNode(` ${dia}`));
        li.appendChild(label);
        lista.appendChild(li);
    });
}

export function aplicarFiltros(promociones) {
    const diasSeleccionados = Array.from(
        document.querySelectorAll('input[name="dia"]:checked'),
    ).map((input) => input.value);

    const billeterasSeleccionadas = Array.from(
        document.querySelectorAll('input[name="billetera"]:checked'),
    ).map((input) => input.value);

    return promociones.filter((promo) => {
        const coincideDia =
            diasSeleccionados.length === 0 ||
            diasSeleccionados.some((dia) => promo.dia.includes(dia));
        const coincideBilletera =
            billeterasSeleccionadas.length === 0 ||
            billeterasSeleccionadas.includes(promo.billetera);

        return coincideDia && coincideBilletera;
    });
}
