/**
 * Crée un menu personnalisé dans l'interface Google Sheets.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('📊 Aide Sparkline')
    .addItem('Ouvrir l\'assistant', 'showSparklineSidebar')
    .addToUi();
}

/**
 * Affiche le fichier HTML dans une barre latérale (sidebar).
 */
function showSparklineSidebar() {
  const html = HtmlService.createHtmlOutputFromFile('sidebar')
    .setTitle('Assistant Sparkline');
  
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * Récupère la notation A1 de la plage actuellement sélectionnée.
 */
function getSelectedRange() {
  try {
    const sheet = SpreadsheetApp.getActiveSheet();
    const range = sheet.getActiveRange();
    return range ? range.getA1Notation() : '';
  } catch (e) {
    return '';
  }
}

/**
 * Récupère les valeurs réelles de la sélection pour l'aperçu.
 */
function getSelectedData() {
  try {
    const range = SpreadsheetApp.getActiveRange();
    if (!range) return [];
    const values = range.getValues();
    const flat = values.reduce((acc, row) => acc.concat(row), [])
                       .filter(cell => typeof cell === 'number');
    return flat;
  } catch (e) {
    return [];
  }
}

/**
 * Insère la formule générée dans une cellule cible spécifique.
 */
function insertFormula(formula, targetCell) {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = targetCell ? sheet.getRange(targetCell) : sheet.getActiveCell();
  range.setFormula(formula);
  SpreadsheetApp.getActive().toast(`Formule insérée en ${range.getA1Notation()}`, 'Succès');
}