import { expect } from '@playwright/test';

//Consulta de buro
export async function consultarBuro(page, dpi) {
    //Validacion de que estamos en el menu principal con el cuadro de texto Bienbenida
    //Nos dirigimos directamente al modulo de buro de credito
    //Busqueda del DPI
    await page.locator('#dpi').fill(String(dpi).trim());
    // Clic en botón de consulta
    await page.locator('#consulta-buro').click();
    // Esperar 5 segundos
    await page.waitForTimeout(4000);
    // Verificar si apareció "Usuario sin obligaciones"
    const sinRegistros = page.getByText('Sin registros disponibles').first();
    const oblig = page.getByText('Usuario sin obligaciones').first();

    if (await sinRegistros.count() > 0) {
        console.log(`DPI ${dpi}: es incorrecto`);
    } else if (await oblig.count() > 0) {
        console.log(`DPI ${dpi}: No tiene obligaciones`);
    } else {
        console.log(`DPI ${dpi}: BURO DPI consultado`);
    }
}

//Termina la consulta


//Termina la consulta
//Termina la consulta
