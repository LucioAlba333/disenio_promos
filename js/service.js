export async function getAll() {
    const promos = await fetch('data/promos.json');
    if (!promos.ok) {
        throw new Error('no se pudieron cargar las promos');
    }
    return await promos.json();
}
