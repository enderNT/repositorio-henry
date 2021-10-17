let obj = {
  precio: 500,
  porcentajeDeDescuento: 50,
  calcularPrecioDeDescuento: function calculoDescuento() {
    this.precio - (this.precio * (this.porcentajeDeDescuento / 100));
    return obj.calcularPrecioDeDescuento;
  },
};

console.log(obj.calcularPrecioDeDescuento);
