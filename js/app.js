import { getAll } from './service.js';
import { promociones_render } from './promociones_render.js';
import { aplicarFiltros, cargarBilleteras, cargarDias } from './filter.js';
document.addEventListener('DOMContentLoaded', async () => {
    const promociones = await getAll();
    promociones_render(promociones);
    cargarDias(promociones);
    cargarBilleteras(promociones);
    const filtroDia = document.getElementById('dia');
    const filtroBilletera = document.getElementById('billetera');
    const actualizarVista = () => {
        const filtradas = aplicarFiltros(promociones);
        promociones_render(filtradas);
    };
    filtroDia.addEventListener('change', actualizarVista);
    filtroBilletera.addEventListener('change', actualizarVista);
});
