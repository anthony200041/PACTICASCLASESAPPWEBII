const io = require('socket.io-client');
const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to server');

  // Enviar un mensaje con la entidad DispositivoDeComunicacion
  socket.emit('examen6B', {
    id: 10,
    codigo: 'DC2421123',
    detalle: 'Dispositivo de comunicación x',
    clasificacion: 'Tipo X',
    caracteristicas: { color: 'negro', peso: '200g' },
    costo: 150.0,
    empresa: 'Empresa XYZ',
    activo: true,
  });
});

socket.on('examen6B', (data) => {
  console.log('Received message:', data);
});