export const menu = {
    
    tablero: 'xpath=//*[@id="sidebar"]/ul/li[1]/a',
    abrirNomina: 'xpath=//*[@id="sidebar"]/ul/li[2]/a',
    principal:'xpath=//*[@id="sidebar"]/ul/li[6]/a/span',
    

    
};

//Para llamarlos hay que usar esta sentencia 
//await page.locator(color nombre de variable ejemplo: menu.main).click();