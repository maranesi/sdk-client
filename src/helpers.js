export function formatReal(value) {
  return parseFloat(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
}
