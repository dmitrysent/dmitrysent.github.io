"use strict";

function func(){
    let reviewOfDeliveryOld = Number(document.getElementById("reviewOfDelivery").value),
        reviewOfDeliveryNew = reviewOfDeliveryOld * 0.6,
        emailOld = Number(document.getElementById("email").value),
        emailNew = emailOld * 0.85,
        chat = Number(document.getElementById("chat").value),
        reviewNotPublicOld = Number(document.getElementById("reviewNotPublic").value),
        reviewNotPublicNew = reviewNotPublicOld * 0.8,
        jiraOld = Number(document.getElementById("jira").value),
        jiraNew = jiraOld * 0.8,
        questionsOld = Number(document.getElementById("questions").value),
        questionsNew = questionsOld * 0.75,
        reviewPublicOld = Number(document.getElementById("reviewPublic").value),
        reviewPublicNew = reviewPublicOld * 1.2,
        npsOld = Number(document.getElementById("nps").value),
        npsNew = npsOld * 0.75,
        callHelpOld = Number(document.getElementById("callHelp").value),
        callHelpNew = callHelpOld * 0.85,
        serviceContactOld = Number(document.getElementById("serviceContact").value),
        serviceContactNew = serviceContactOld * 0.6,
        resultOld = "Колличество контактов = " + (reviewOfDeliveryOld + chat + emailOld + reviewNotPublicOld + jiraOld + reviewPublicOld + questionsOld + npsOld + callHelpOld + serviceContactOld),
        resultNew = "Колличество контактов с учётом коэффициента = " + (reviewOfDeliveryNew + chat + emailNew + reviewNotPublicNew + jiraNew + questionsNew + reviewPublicNew + npsNew + callHelpNew + serviceContactNew);

    document.getElementById("resultOld").innerHTML = resultOld;
    document.getElementById("resultNew").innerHTML = resultNew;
};    
    
