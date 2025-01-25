define({
  "_widgetLabel": "Smart Editor",
  "_featureAction_SmartEditor": "Smart Editor",
  "noEditPrivileges": "L'account non dispone dell'autorizzazione per creare o modificare dati.",
  "loginPopupTitle": "Accedi",
  "loginPopupMessage": "${widgetName} richiede permessi e crediti per cercare e archiviare informazioni di indirizzo. Accedere e utilizzare questa funzionalità?",
  "noCreditsOrPrivilegeWarningMessage": "L'account non dispone dei permessi e dei crediti per cercare e archiviare le informazioni di indirizzo con ${widgetName}. Contattare l'amministratore dell'organizzazione per richiedere permessi e crediti. Clicca OK per continuare la modifica.",
  "unableToUseLocator": "Il locator non è accessibile. Le azioni dell'attributo indirizzo non saranno eseguite. Clicca OK per continuare la modifica.",
  "locatorDisabledWaning": "Il locator non è abilitato. Contattare l'amministratore dell'organizzazione per richiedere tale funzionalità. Clicca OK per continuare la modifica.",
  "noFeatureInAIWarning": "Nessuna feature selezionata. Selezionare una feature per eseguire modifiche o fare clic su Annulla per tornare alla schermata principale.",
  "noEditableLayerWarning": "L'account non dispone dell'autorizzazione per creare o modificare dati oppure la mappa Web non contiene layer modificabili.",
  "noVisibleCreateLayerWarning": "I layer non sono visibili a questo livello di zoom. Zoom avanti o indietro per creare/modificare le feature.",
  "noVisibleUpdateLayerWarning": "I layer non sono visibili a questo livello di zoom. Zoom avanti o indietro per modificare le feature.",
  "checkLayerVisibilityInWebMapWarning": "Assicurarsi che i layer siano visibili nella mappa per creare o modificare le feature.",
  "showSelectionInAITitle": "Feature selezionate",
  "showSelectionInAIMsg": "Caricare la selezione corrente in ${widgetName}?",
  "widgetActive": "Attivo",
  "widgetNotActive": "Non attiva",
  "pressStr": "Premere ",
  "ctrlStr": " CTRL ",
  "snapStr": " per abilitare lo snap",
  "noAvailableTempaltes": "Nessun modello disponibile",
  "editorCache": " - Cache editor",
  "presetFieldAlias": "Campo",
  "presetValue": "Valore preimpostato",
  "usePresetValues": " Utilizza valori preimpostati (solo nuove feature)",
  "editGeometry": " Modifica geometria",
  "savePromptTitle": "Salva feature",
  "savePrompt": "Salvare la feature corrente?",
  "deletePromptTitle": "Elimina feature",
  "deleteAttachment": "Elimina allegato",
  "deletePrompt": "Eliminare la feature selezionata?",
  "attachmentLoadingError": "Errore durante il caricamento degli allegati",
  "attachmentSaveDeleteWarning": "Avviso: le modifiche agli allegati non vengono salvate automaticamente",
  "autoSaveEdits": "Salva automaticamente nuove feature",
  "addNewFeature": "Crea nuova feature",
  "featureCreationFailedMsg": "Impossibile creare nuovo record/feature",
  "relatedItemTitle": "Tabella/layer correlato",
  "relatedFeatureCount": "${layerTitle} con ${featureCount} feature",
  "createNewFeatureLabel": "Creare una nuova feature per ${layerTitle}",
  "invalidRelationShipMsg": "Verificare che il campo della chiave primaria: '${parentKeyField}' contenga un valore valido",
  "pendingFeatureSaveMsg": "Salvare le modifiche apportate alla feature prima di creare una feature correlata.",
  "attachmentsRequiredMsg": "(*) Allegati richiesti.",
  "coordinatePopupTitle": "Sposta feature in posizione XY",
  "coordinatesSelectTitle": "Sistema di coordinate:",
  "mapSpecialReferenceDropdownOption": "Riferimento spaziale della mappa",
  "latLongDropdownOption": "Latitudine/Longitudine",
  "mgrsDropdownOption": "Military Grid Reference System (MGRS)",
  "mgrsTextBoxLabel": "Coordinate:",
  "xAttributeTextBoxLabel": "Coordinate X:",
  "yAttributeTextBoxLabel": "Coordinate Y:",
  "latitudeTextBoxLabel": "Latitudine:",
  "longitudeTextBoxLabel": "Longitudine:",
  "presetGroupFieldsLabel": "'${groupName}' verrà applicato ai seguenti campi del layer:",
  "presetGroupNoFieldsLabel": "'${groupName}' non ha nessun campo associato",
  "groupInfoLabel": "Informazioni di gruppo per '${groupName}'",
  "editGroupInfoIcon": "Modificare il valore di gruppo per ${groupName}",
  "filterEditor": {
    "all": "Tutto",
    "noAvailableTempaltes": "Nessun modello disponibile",
    "searchTemplates": "Cerca modelli",
    "filterLayerLabel": "Filtrare i layer"
  },
  "invalidConfiguration": "Il widget non è configurato o i layer nella configurazione non sono più presenti nella mappa. Aprire l'app nella modalità generatore e riconfigurare il widget.",
  "geometryServiceURLNotFoundMSG": "Impossibile ottenere l'URL del servizio geometria",
  "clearSelection": "Chiudi",
  "refreshAttributes": "Aggiorna attributi feature dinamici",
  "automaticAttributeUpdatesOn": "Aggiorna automaticamente attributi delle feature: ON",
  "automaticAttributeUpdatesOff": "Aggiorna automaticamente attributi delle feature: OFF",
  "moveSelectedFeatureToGPS": "Sposta feature selezionata nella posizione GPS attuale",
  "moveSelectedFeatureToXY": "Sposta feature selezionata in posizione XY",
  "mapNavigationLocked": "Navigazione mappa: bloccata",
  "mapNavigationUnLocked": "Navigazione mappa: sbloccata",
  "copyFeatures": {
    "title": "Seleziona feature da copiare",
    "createFeatures": "Crea feature",
    "createSingleFeature": "Crea 1 feature multi-parte",
    "createOneSingleFeature": "Crea feature",
    "noFeaturesSelectedMessage": "Nessuna feature selezionata",
    "selectFeatureToCopyMessage": "Selezionare le feature da copiare",
    "multipleFeatureSaveWarning": "La creazione di più funzioni utilizzando questa funzionalità salverà immediatamente tutte le nuove funzioni. La corrispondenza dei campi non è supportata quando si crea una nuova funzione in più parti.",
    "copyFeatureUpdateGeometryError": "Impossibile aggiornare la geometria delle feature selezionate",
    "canNotSaveMultipleFeatureWarning": "È possibile copiare solo una feature quando il layer punto di destinazione ha campi valore univoci.",
    "createOnlyOneMultipartFeatureWarning": "È possibile copiare solo una feature o creare una feature multiparte quando il layer di destinazione ha campi valore univoci.",
    "layerLabel": "${layerName} (${selectedFeatures}/${totalFeatures})",
    "layerAriaLabel": "${layerName} ${selectedFeatures} of ${totalFeatures} feature selezionate",
    "geometryLabel": "Geometria",
    "directionsRouteLabel": "Itinerario indicazioni",
    "directionsWaypointsLabel": "Waypoint itinerario indicazioni",
    "diretionsStopLabel": "Fermate indicazioni"
  },
  "addingFeatureError": "Errore durante l'aggiunta di feature selezionate nel layer. Riprovare.",
  "addingFeatureErrorCount": "Impossibile copiare le feature '${copyFeatureErrorCount}' Riprovare per le feature mancanti?",
  "selectingFeatureError": "Errore durante la selezione di feature nel layer. Riprovare.",
  "customSelectOptionLabel": "Seleziona feature da copiare",
  "copyFeaturesWithPolygon": "Copia per poligono",
  "copyFeaturesWithRect": "Copia per rettangolo",
  "copyFeaturesWithLasso": "Copia per lasso",
  "noFeatureSelectedMessage": "Nessuna feature selezionata",
  "multipleFeatureSaveMessage": "Verranno salvate immediatamente tutte le feature. Continuare?",
  "relativeDates": {
    "dateTypeLabel": "Tipo di data",
    "valueLabel": "Valore",
    "fixed": "Fisso",
    "current": "Corrente",
    "past": "Passato",
    "future": "Futuro",
    "popupTitle": "Seleziona valore",
    "hintForFixedDateType": "Suggerimento: la data e l'ora specificata verranno utilizzate come valore predefinito preimpostato.",
    "hintForCurrentDateType": "Suggerimento: la data e l'ora attuali verranno utilizzate come valore predefinito preimpostato.",
    "hintForPastDateType": "Suggerimento: il valore specificato verrà sottratto dalla data e l'ora correnti per il valore predefinito della preimpostazione.",
    "hintForFutureDateType": "Suggerimento: il valore specificato verrà aggiunto alla data e l'ora correnti per il valore predefinito della preimpostazione.",
    "noDateDefinedTooltip": "Non è stata definita nessuna data",
    "relativeDateWarning": "È necessario specificare un valore per la data o per l'ora per poter salvare il valore preimpostato predefinito.",
    "customLabel": "Personalizzata",
    "layerLabel": "Layer",
    "domainFieldHintLabel": "Il valore selezionato è un dominio valore codificato. Il valore: '${domainValue}' sarà usato",
    "valueProviderHint": "Nota: i valori dai quali selezionare potrebbero non essere disponibili se l'utente non possiede i privilegi necessari."
  },
  "valuePicker": {
    "popupTitle": "Seleziona valore",
    "popupHint": "La feature attuale interseca varie feature, scegliere un valore per il rispettivo campo",
    "buttonTooltip": "Seleziona valore da più feature intersecanti"
  },
  "uniqueValueErrorMessage": "Esiste già il valore in \"${fieldName}\". Fornire un nuovo valore.",
  "requiredFields": {
    "displayMsg": "I campi richiesti non possono essere vuoti. Fornire i valori per i campi comuni di seguito.",
    "popupTittle": "Campi obbligatori",
    "foundNullRecordCount": "${fieldName} (trovato in ${count} record)"
  },
  "fieldsMapping": {
    "popupTittle": "Applica campo corrispondente",
    "fieldsMatchingCheckboxLabel": "I valori dalle feature copiate sovrascrivono i valori predefiniti nei campi di destinazione",
    "resetLabel": "Reimposta",
    "clearLabel": "Azzera",
    "fieldsInTargetLayerLabel": "Destinazione",
    "fieldsInSourceLayerLabel": "Origine",
    "targetFieldsMatchedLabel": "${layerName} (${matchedFields}/${totalFields} campi corrispondenti)",
    "selectSourceFieldLabel": "- Seleziona -",
    "selectFieldAriaLabel": "Seleziona campo origine per campo target ${targetField}",
    "informativeText": "Rivedere i campi che corrispondono dalla fonte alla destinazione e personalizzare se necessario.",
    "dynamicValueText": "Un valore dinamico è impostato",
    "noFieldsToMatchLabel": "Nessun campo da associare"
  },
  "cantLocateUserLocation": "Impossibile determinare la propria posizione",
  "tryAgainButtonLabel": "Riprova",
  "copyFeatureFailedPopupTitle": "Errore"
});