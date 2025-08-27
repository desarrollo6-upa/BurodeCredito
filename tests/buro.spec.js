import { test } from '@playwright/test';
import { login } from './ingreso';
import { consultarBuro } from './consulta';
import dpis from 'C:/Users/ua1483/Documents/AUTOMATIZACIONES/BURO/dpi.json' assert { type: 'json' };

const usuario = 'UA1483';
const clave = 'UPAorg01**';
const url_buro = 'https://upapreprodqa2.cooperativaupa.net/BurodeCreditos/consultaHistorialC';

test.describe.serial('Buro', () => {
  test.setTimeout(600000)
  test('first', async ({ page }) => {
    await login(page, usuario, clave);
    await page.goto(url_buro); // mover al módulo

    for (const { DPI } of dpis) {
      await consultarBuro(page, DPI);
    }
  });
});