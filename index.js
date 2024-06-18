function calcularFactorial() {
    let input = document.getElementById("numero").value;
    let numero = parseInt(input);

    // Validar si  es un número válido
    if (isNaN(numero) || numero < 0) {
        Swal.fire({
            title: "Por favor, ingresa un número válido (mayor o igual a 0).",
            showConfirmButton: false,
            background: 'mediumslateblue',
            icon: 'warning',
            timer: '4000',
            position: 'center',
            backdrop: true,
            color: 'navy',
            allowOutsideClick: true,
            toost: true,
            showConfirmButton: false,
            customClass:{
            title: 'titulo-password'
            }
    });
    return;
    }

    // Calcular el factorial
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerText = `Resultado: 
    El factorial de ${numero} es ${factorial}`;
}
