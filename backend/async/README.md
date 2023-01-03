# Procesamiento asincrono o procesos None Bloking

- es el delegar trabajos a varios procesos 
- Un ejemplo es cuando se bloquea un video de YouTube por perdida de conexión
- Sirven para dar una buen experiencia

# Node.JS evento loop

- Cola de eventos: 
    Son las tareas, la cola de tareas
- EventLoop:
    hilo principal
- Subprocesos de fondo:
    Hace el procesamiento de las tareas de forma asincrona, regularmente bloquea a los EventLoop

# Callback Hell
- usada para lineas de produccion muy en especificos

# Promesas
- las promesas no siempre son correctas
- no tienen un alcanze tan amplio
- se basan es datos pasados
