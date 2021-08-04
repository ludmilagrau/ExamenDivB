function mostrar()
{
	let origen;
	let cantidad;
	let costo;
	let origenMasVacunas;
	let acumVEuropa;
	let acumVUsa;
	let acumVAsia = 0;
	let contVAsia = 0;
	let acumVacunasTotales;
	let promVAsia;
	let acumCosto = 0;
	let descuento;
	let importeFinal;
	let flag = 1;

	for(let i = 0; i < 10; i++)
	{
		origen = prompt("Ingrese el origen (asia/europa/usa): ").toLowerCase();
		while(origen != "asia" && origen != "europa" && origen != "usa")
		{
			origen = prompt("Error. Reingrese origen (asia/europa/usa): ").toLowerCase();
		}

		cantidad = parseInt(prompt("Ingrese cantidad: "));
		while(isNaN(cantidad) || cantidad < 0)
		{
			cantidad = parseInt(prompt("Error. Reingrese cantidad: "));
		}

		costo = parseInt(prompt("Ingrese costo: "));
		while(isNaN(costo) || costo < 1000000 && costo > 5000000)
		{
			costo = parseInt(prompt("Error. Reingrese costo: "));
		}

		if(origen == "asia")
		{
			acumVAsia += cantidad;
			contVAsia++; 
			promVAsia = acumVAsia / contVAsia;
			
		}
		else if(origen == "europa")
		{
			acumVEuropa += cantidad;
		}

		else
		{
			acumVUsa += cantidad;
		}

		if(acumVAsia > acumVEuropa && acumVAsia > acumVUsa)
		{
			origenMasVacunas = "Asia";
		}

		else if(acumVEuropa >= acumVAsia && acumVEuropa > acumVUsa)
		{
			origenMasVacunas = "Europa";
		}

		else
		{
			origenMasVacunas = "USA";
		}


	}

	document.write("a) El origen que envió mayor cantidad de vacunas es " + origenMasVacunas + "<br>");
	document.write("b) El promedio de vacunas llegadas de Asia es " + promVAsia + "<br>");
	
}
