function showSection(sectionNumber) {
        document.querySelectorAll('.section').forEach(section => section.classList.add('d-none'));
        document.getElementById('section' + sectionNumber).classList.remove('d-none');
    }

    function nextSection(sectionNumber) {
        if ( validatString(nom) && validatString(prenom) && validatString(adresse) && validatString(Scolaire) && validatString(competence)
        && validatString(date) && validatString(phone) && validatString(mail) ) {
            showSection(sectionNumber)
        }
        if(validateForm()){
            showSection(sectionNumber)
        }
    }

    function prevSection(sectionNumber) {
        showSection(sectionNumber);
    }


const nom = document.getElementById('nom');
const prenom= document.getElementById('prenom');
const date= document.getElementById('date');
const adresse= document.getElementById('adresse');
const phone= document.getElementById('phone');
const mail= document.getElementById('mail');
const Scolaire= document.getElementById('Scolaire');
const competence=document.getElementById('competence');
const post=document.getElementById('post');
const depart=document.getElementById('depart');
const Embauche=document.getElementById('Embauche');
const identifiant=document.getElementById('identifiant');
const Contrat=document.getElementById('Contrat');
const feedback=document.getElementById('feedback')
const submit=document.getElementById('btn1');
const display = document.getElementById('saved-data');
function save(){
      display.innerHTML += `
        <div class="card-body">
            <p> nom :${nom.value}</p>
            <p> prenom :${prenom.value}</p>
            <p> date de naissance :${date.value}</p>
            <p> Adresse :${adresse.value}</p>
            <p> Numero de telephone :${phone.value}</p>
            <p> e-mail Adresse :${mail.value}</p>
            <p> Niveau scolaire :${Scolaire.value}</p>
            <p> Post de travail :${post.value}</p>
            <p> Département :${depart.value}</p>
            <p> Date d'Embauche :${Embauche.value}</p>
            <p> Numéro d'Identifiant de l'Employé :${identifiant.value}</p>
            <p> Type de Contrat :${Contrat.value}</p>
            <p> Feedback: :${feedback.value}</p>

        </div>
    ` 
}



function validatString(str)
{
    if (str.value.trim() === "") {
        alert("Please enter a " +str.name);    
        str.focus();
        return false;
    }else if(str.value.length < 4){
        alert("Please enter the correct information");
    }
    
    return true;       
}









