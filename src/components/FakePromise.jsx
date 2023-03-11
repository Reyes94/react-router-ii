export const FakePromise = (time = 2100) =>
    new Promise((resolve) => setTimeout(resolve, time));


//{loading} se muestra en caso de que no se pueda acceder a la API, pero se genera este componente para que archivo "loading.gif" siempre se muestre antes de cargar un carta