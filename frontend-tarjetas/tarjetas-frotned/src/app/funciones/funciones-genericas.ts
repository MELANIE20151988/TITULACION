export function enmascararFormularioscelular(celular: string,tipoenmascarar:string)
{
  let emascararNombres;
  console.log(celular,"Ingreso a la funcion enmascarar celular");
  console.log(typeof(celular));
  const tamanio = celular.length-2;
  const arraynombre1 = celular.split('').slice(2, tamanio);
  const inicio = celular[0] + celular[1];
  emascararNombres = arraynombre1.map((item) => tipoenmascarar).join('');
  emascararNombres =inicio + emascararNombres + celular[tamanio] + celular[tamanio+1];
   return emascararNombres;
}

export function enmascararFormulariosemail(email: string,tipoenmascarar:string)
{
  let emascararNombres;
  console.log(email,"Ingreso a la funcion enmascarar email");
  console.log(typeof(email));
  const tamanio = email.length-2;
  const arraynombre1 = email.split('').slice(2, tamanio);
  const inicio = email[0] + email[1];
  emascararNombres = arraynombre1.map((item) => tipoenmascarar).join('');
  emascararNombres =inicio + emascararNombres + email[tamanio] + email[tamanio+1];
   return emascararNombres;
}

