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
    const flat = values.flat().filter(cell => typeof cell === 'number');
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
  range.setValue(formula);
  SpreadsheetApp.getActive().toast(`Formule insérée en ${range.getA1Notation()}`, 'Succès');
}

/**
 * Insère des données d'exemple dans une nouvelle feuille pour tester l'outil.
 */
function insertSampleData() {
  const ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName('Exemple Sparkline');
  
  if (!sheet) {
    sheet = ss.insertSheet('Exemple Sparkline');
  } else {
    sheet.clear();
  }
  
  const data = [
    ['Mois', 'Revenus', 'Dépenses', 'Profit', 'Tendance (Ligne)', 'Progression (Barre)'],
    ['Jan', 1200, 800, 400, '', ''],
    ['Fév', 1500, 900, 600, '', ''],
    ['Mar', 1100, 1000, 100, '', ''],
    ['Avr', 1800, 850, 950, '', ''],
    ['Mai', 2100, 950, 1150, '', ''],
    ['Juin', 1900, 1100, 800, '', '']
  ];
  
  const range = sheet.getRange(1, 1, data.length, data[0].length);
  range.setValues(data);
  
  // Format the header
  sheet.getRange('A1:F1').setFontWeight('bold').setBackground('#f3f4f6');
  sheet.autoResizeColumns(1, 6);
  
  ss.setActiveSheet(sheet);
  
  return 'Exemple généré avec succès dans la feuille "Exemple Sparkline".';
}