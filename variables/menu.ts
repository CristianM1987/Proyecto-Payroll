//Para llamarlos hay que usar esta sentencia 
//await page.locator(color nombre de variable ejemplo: menu.main).click();

export const menuPrincipal = {
    
    dashboardMenu: 'xpath=//*[@id="sidebar"]/ul/li[1]/a',
    openPayrollMenu: 'xpath=//*[@id="sidebar"]/ul/li[2]/a',
    earningMenu:'xpath=//*[@id="sidebar"]/ul/li[3]/a',
    mainMenu:'xpath=//*[@id="sidebar"]/ul/li[6]/a',
    payStatementsMenu: 'xpath=//*[@id="sidebar"]/ul/li[4]/a',
    journalMenu: 'xpath=//*[@id="sidebar"]/ul/li[5]/a',
    syndicateMenu: 'xpath=//*[@id="sidebar"]/ul/li[7]/a',
    settingsMenu: 'xpath=//*[@id="sidebar"]/ul/li[8]/a',
    
};

export const principalChild = {
    cyclesMenu: 'xpath=//*[@id="mainDropdown"]/li[1]/a',
    workersMenu: 'xpath=//*[@id="mainDropdown"]/li[2]/a',
    periodsMenu: 'xpath=//*[@id="mainDropdown"]/li[3]/a',
    earningCodeMenu: 'xpath=//*[@id="mainDropdown"]/li[4]/a',
    benefitCodeMenu: 'xpath=//*[@id="mainDropdown"]/li[5]/a',
    salariesMenu:'xpath=//*[@id="mainDropdown"]/li[6]/a',
    socialSecurityMenu: 'xpath=//*[@id="mainDropdown"]/li[7]/a',
    ISRMenu: 'xpath=//*[@id="mainDropdown"]/li[8]/a',
    exchangeRateMenu: 'xpath=//*[@id="mainDropdown"]/li[9]/a',
    ISRDescountRateMenu:'xpath=//*[@id="mainDropdown"]/li[10]/a',
    syndicateLaborUnionMenu: 'xpath=//*[@id="mainDropdown"]/li[11]/a',
    syndicateShipMenu: 'xpath=//*[@id="mainDropdown"]/li[12]/a',
    ledgerAccountEarning: 'xpath=//*[@id="mainDropdown"]/li[13]/a',
    approvalFlorMenu: 'xpath=//*[@id="mainDropdown"]/li[14]/a',
}

export const earningChild = {
    earningStatmentMenu: 'xpath=//*[@id="e-commerceDropdown"]/li[1]/a',
    entryByDateRangeMenu: 'xpath=//*[@id="e-commerceDropdown"]/li[2]/a',
    overtimeMenu: 'xpath=//*[@id="e-commerceDropdown"]/li[3]/a',
    pascualMenu: 'xpath=//*[@id="e-commerceDropdown"]/li[4]/a',
    earningProgrammingMenu: 'xpath=//*[@id="e-commerceDropdown"]/li[5]/a',
}

export const payStatmentChild = {
    paystatmentMenu: 'xpath=//*[@id="payStatementDropdown"]/li[1]/a',
    deductionsMenu: 'xpath=//*[@id="payStatementDropdown"]/li[2]/a',
    approvalsMenu: 'xpath=//*[@id="payStatementDropdown"]/li[3]/a',
}

export const journalChild = {
    journalMenu: 'xpath=//*[@id="journalDropdown"]/li/a',
    
}

export const syndicateChild = {
    syndicatePeriodsMenu: 'xpath=//*[@id="syndicateDropdown"]/li[1]/a',
    openPayrollSyndicateMenu: 'xpath=//*[@id="syndicateDropdown"]/li[2]/a',
    syndicateEarningStatementMenu: 'xpath=//*[@id="syndicateDropdown"]/li[3]/a',
    syndicatePayStatementMenu: 'xpath=//*[@id="syndicateDropdown"]/li[4]/a',
    syndicateApprovalsMenu: 'xpath=//*[@id="syndicateDropdown"]/li[5]/a',
    syndicatePaymentJournalMenu: 'xpath=//*[@id="syndicateDropdown"]/li[6]/a',
    syndicateOvertimeMenu: 'xpath=//*[@id="syndicateDropdown"]/li[7]/a',
    syndicatePascualRoyaltiesMenu: 'xpath=//*[@id="syndicateDropdown"]/li[8]/a',
    syndicateWorkeMenu: 'xpath=//*[@id="syndicateDropdown"]/li[9]/a',
    syndicateTSSMenu: 'xpath=//*[@id="syndicateDropdown"]/li[10]/a',
}

export const settingsChild = {
    settingsMenu: 'xpath=//*[@id="settingsDropdown"]/li[1]/a',
    usersMenu: 'xpath=//*[@id="settingsDropdown"]/li[2]/a',
    companyMenu: 'xpath=//*[@id="settingsDropdown"]/li[3]/a',
}