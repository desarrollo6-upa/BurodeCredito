import { expect } from '@playwright/test';

//Ingreso de credenciales
export async function login(page, usuario, clave) {
    await page.goto('http://upapreprodqa2.cooperativaupa.net/Seguridad/ingreso'); // Ingreso a URL
    await page.fill('#usuario', usuario);    // Cambia selectores y datos
    await page.fill('#password', clave);
    await page.getByRole('button', { name: 'Iniciar Sesion' }).click();
    // ------

    //Validacion de campos
    const errorLoginCount = await page.locator('#cuerpo_alerta', { hasText: 'Disculpa pero el usuario o password estan incorrectos' }).count();
    await expect(errorLoginCount).toBe(0); // Falla si el mensaje aparece (count == 1)
    await page.waitForTimeout(500);
    const emptyUserCount = await page.locator('#cuerpo_alerta', { hasText: 'El campo usuario no puede estar vacío' }).count();
    await expect(emptyUserCount).toBe(0);
    // -----

    // Pantalla de igreso
    await page.waitForTimeout(1000);
    await page.locator('.btn.btn-warning', { hasText: 'Ir a inicio' }).click();
    await expect(page.locator('.titulo-formulario.col.s12.m6.offset-m3.teal.lighten-2')).toBeVisible(); //Pantalla de inicio

}

