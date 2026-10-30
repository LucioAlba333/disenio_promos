import { getAll } from './service.js';
import { promociones_render } from './promociones_render.js';
document.addEventListener('DOMContentLoaded', async () => {
    const promociones = await getAll();
    promociones_render(promociones);
});
