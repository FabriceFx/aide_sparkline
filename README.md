# 📊 Aide Sparkline

[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=flat&logo=github)](https://github.com/FabriceFx/aide_sparkline)

Aide Sparkline est un script (Add-on) pour Google Sheets qui fournit une interface graphique intégrée (barre latérale) permettant de générer facilement et visuellement des formules `SPARKLINE`.

L'outil simplifie la création de graphiques miniatures dans les cellules (lignes de tendance, barres de progression, colonnes de comparaison, etc.) sans avoir à mémoriser la syntaxe complexe de la fonction `=SPARKLINE()`.

## ✨ Fonctionnalités

- **Interface visuelle intuitive :** Barre latérale intégrée directement dans Google Sheets.
- **Sélection facile des plages :** Boutons pour récupérer automatiquement la plage de données sélectionnée et la cellule cible.
- **Types de graphiques multiples :** 
  - Ligne (Tendance)
  - Barre (Progression)
  - Colonne (Comparaison)
  - Gagné/Perdu (Booléen)
- **Personnalisation avancée :**
  - Couleurs (ligne, barres, axes, valeurs max/min/négatives, etc.)
  - Épaisseur des traits.
  - Gestion des cellules vides ou non-numériques.
  - Définition des axes (X et Y) et de leurs échelles.
  - Direction d'affichage (de droite à gauche).
- **Aperçu en temps réel :** Visualisez le rendu du graphique (avec des données réelles ou fictives) et la formule générée avant même de l'insérer.
- **Insertion en un clic :** Insère la formule prête à l'emploi directement dans la cellule cible choisie.

## 🚀 Installation

1. Ouvrez votre document Google Sheets.
2. Allez dans **Extensions > Apps Script**.
3. Supprimez le code par défaut et remplacez-le par le contenu du fichier `Code.gs`.
4. Ajoutez un nouveau fichier HTML (`Fichier > Nouveau > HTML`), nommez-le `sidebar.html` (très important de respecter ce nom) et collez-y le contenu du fichier `sidebar.html`.
5. Enregistrez le projet (Ctrl+S / Cmd+S).
6. Retournez sur votre Google Sheets et actualisez la page.
7. Un nouveau menu **"📊 Aide Sparkline"** apparaîtra dans la barre de menu de Google Sheets.

## 🛠️ Technologies utilisées

- **Google Apps Script (GAS) :** Pour l'interaction avec le tableur Google Sheets (`Code.gs`).
- **HTML / JavaScript :** Pour l'interface utilisateur de la barre latérale (`sidebar.html`).
- **Tailwind CSS :** Pour le style moderne et compact de l'interface (inclus via CDN).

## 💡 Utilisation

1. Cliquez sur le menu **📊 Aide Sparkline > Ouvrir l'assistant** pour afficher la barre latérale.
2. Sélectionnez les données que vous souhaitez représenter dans votre feuille, puis cliquez sur le bouton **Obtenir** à côté de "Plage de données".
3. Sélectionnez la cellule où vous voulez insérer le graphique et cliquez sur le bouton **Obtenir** à côté de "Cellule cible".
4. Choisissez le type de graphique et personnalisez les options (couleurs, épaisseur, gestion des vides, etc.). Les sections sont repliables.
5. Vérifiez l'aperçu visuel et la formule générée en bas de la barre latérale.
6. Cliquez sur **Insérer** pour appliquer la formule dans votre feuille.

## 📜 Structure des fichiers

- `Code.gs` : Contient le code côté serveur (Apps Script) pour créer le menu, afficher la barre latérale, lire la sélection et insérer la formule.
- `sidebar.html` : Contient l'interface utilisateur (HTML/CSS) et la logique côté client (JavaScript) pour générer l'aperçu et construire la formule `SPARKLINE`.
