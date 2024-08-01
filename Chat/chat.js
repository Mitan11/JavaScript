function telecom() {
    let continueLoop = true;

    do {
        let languageChoice = parseInt(prompt("Press 1 for English\nPress 2 for Hindi\nPress 3 for Gujarati\nPress 4 to Exit"));
        
        switch (languageChoice) {
            case 1: // English
                // Display recharge options in English
                let englishChoice = parseInt(prompt("Press 1 for Internet Recharge\nPress 2 for Top-up Recharge\nPress 3 for Special Recharge\nPress 4 to Exit"));

                // Nested switch to handle recharge options
                switch (englishChoice) {
                    case 1:
                        alert("You have successfully done an Internet Recharge.");
                        continueLoop = false;
                        break;
                    case 2:
                        alert("You have successfully done a Top-up Recharge.");
                        continueLoop = false;
                        break;
                    case 3:
                        alert("You have successfully done a Special Recharge.");
                        continueLoop = false;
                        break;
                    case 4:
                        continueLoop = false;
                        break;
                    default:
                        alert("Invalid Choice");
                        break;
                }
                break;
            case 2: // Hindi
                // Display recharge options in Hindi
                let hindiChoice = parseInt(prompt("इंटरनेट रिचार्ज के लिए 1 दबाएं\nटॉप-अप रिचार्ज के लिए 2 दबाएं\nविशेष रिचार्ज के लिए 3 दबाएं\nPress 4 to Exit"));

                // Nested switch to handle recharge options
                switch (hindiChoice) {
                    case 1:
                        alert("आपने सफलतापूर्वक इंटरनेट रिचार्ज कर लिया है।");
                        continueLoop = false;
                        break;
                    case 2:
                        alert("आपने सफलतापूर्वक टॉप-अप रिचार्ज कर लिया है।");
                        continueLoop = false;
                        break;
                    case 3:
                        alert("आपने सफलतापूर्वक विशेष रिचार्ज कर लिया है।");
                        continueLoop = false;
                        break;
                    case 4:
                        continueLoop = false;
                        break;
                    default:
                        alert("अमान्य विकल्प");
                        break;
                }
                break;
            case 3: // Gujarati
                // Display recharge options in Gujarati
                let gujaratiChoice = parseInt(prompt("ઇન્ટરનેટ રિચાર્જ માટે 1 દબાવો\nટોપ-અપ રિચાર્જ માટે 2 દબાવો\nસ્પેશિયલ રિચાર્જ માટે 3 દબાવો\nPress 4 to Exit"));

                // Nested switch to handle recharge options
                switch (gujaratiChoice) {
                    case 1:
                        alert("તમે સફળતાપૂર્વક ઇન્ટરનેટ રિચાર્જ કર્યું છે.");
                        continueLoop = false;
                        break;
                    case 2:
                        alert("તમે સફળતાપૂર્વક ટોપ-અપ રિચાર્જ કર્યું છે.");
                        continueLoop = false;
                        break;
                    case 3:
                        alert("તમે સફળતાપૂર્વક વિશેષ રિચાર્જ કર્યું છે.");
                        continueLoop = false;
                        break;
                    case 4:
                        continueLoop = false;
                        break;
                    default:
                        alert("અમાન્ય પસંદગી");
                        break;
                }
                break;
            case 4: // Exit
                continueLoop = false;
                break;
            default:
                alert("Invalid Choice");
                break;
        }
    } while (continueLoop);
}
