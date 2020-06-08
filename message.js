/*
    Template credit: nomoreracistcops.github.io
    Additional demands from:
    https://secure.everyaction.com/eR7GA7oz70GL8doBq19LrA2
    https://docs.google.com/document/d/1V2l7bdg6QeqtqVWDr5HFzVzieiT0vg6jZASN6syBNyY/edit
*/

// Randomly generates the subject header of the email
function gen_subject(){
    let s = ["Human Rights Inquiry", "Thoughts of a Concerned Citizen", "In Light of Recent Human Rights Abuses", "The Need for Police Oversight", "The Need for Police Accountability", "The Failures of Modern Law Enforcement", "Law Enforcement Must Change", "The Voice of a Troubled Citizen", "The Need for Law Enforcement Reform", "Reforms to Law Enforcement Needed", "Your Duty as a Public Servant", "Your Responsibility as a Public Servant"];
    return s[Math.floor(Math.random()*s.length)];
}

// Randomly generates the body of the email, follows structure of template and swaps out select words/phrases
function gen_body(src_name, dst_name){
    return `${gen_greeting(dst_name)}\t${gen_intro()}\n\t${gen_curiosity()}\n\t${gen_conclusion(src_name)}`;
}

// Generates the greeting to the recipient of the email
function gen_greeting(person) {
    let s = ["Dear", "Hello", "Greetings", "Hi"];
    return `${s[Math.floor(Math.random()*s.length)]} ${person},\n\n`;
}

// Prepends greeting statement to a user-generated message
function attach_greeting(person, body){
    let s = ["Dear", "Hello", "Greetings", "Hi"];
    return `${s[Math.floor(Math.random()*s.length)]} ${person},\n\n${body}`;
}

//Generates the first sentence of the email.
function gen_intro(){
    let mess = ["in shambles", "in ruins", "a disaster", "a mess"];
    let nominer = ["As a concerned US resident,", "I am a resident of the United States and", "As a concerned American,"];
    let contact = ["getting in touch", "reaching out to you", "contacting you", "sending you this message"];
    let adverb = ["deeply", "very", "greatly", "extremely", "especially", "immensely"];
    let concern = ["troubled", "concerned", "disturbed", "distressed", "distraught", "worried", "devastated"];
    let reason = ["unfair treatment of African-Americans", "blatant racism against African-Americans", "unjust treatment of African-Americans", "violence against African-Americans", "atrocities against the African-American community"];
    let scale = ["across the nation", "throughout the country", "nationwide", "across the country", "throughout the nation"];

    let r = Math.floor(Math.random()*100);

    if (r < 33) {
        return `The current law enforcement system is ${mess[Math.floor(Math.random()*mess.length)]}. I am ${contact[Math.floor(Math.random()*contact.length)]} because I am ${adverb[Math.floor(Math.random()*adverb.length)]} ${concern[Math.floor(Math.random()*concern.length)]} by the ${reason[Math.floor(Math.random()*reason.length)]} by police ${scale[Math.floor(Math.random()*scale.length)]}.\n`;
    } else if (r < 66) {
        return `I am ${contact[Math.floor(Math.random()*contact.length)]} because of the ${adverb[Math.floor(Math.random()*adverb.length)]} disturbing cases of ${reason[Math.floor(Math.random()*reason.length)]} by law enforcement officers ${scale[Math.floor(Math.random()*scale.length)]}.\n`;
    } else {
        return `${nominer[Math.floor(Math.random()*nominer.length)]} I am ${contact[Math.floor(Math.random()*contact.length)]} because I am ${adverb[Math.floor(Math.random()*adverb.length)]} ${concern[Math.floor(Math.random()*concern.length)]} by what I have seen recently regarding the ${reason[Math.floor(Math.random()*reason.length)]} by police ${scale[Math.floor(Math.random()*scale.length)]}.\n`;
    }
}
    
// Randomly generates a message rooted on human curiosity to expose the inadequacies of the current system
function gen_curiosity(){
    let verb = ["know", "inquire", "ask"]
    let noun = ["safeguards", "policies", "provisions"]
    let work = ["commitments", "efforts", "actions"]
    let crime = ["incidents of racism", "violations of human rights", "occurrences of racism", "exploitations of human rights"]

    let r = Math.floor(Math.random()*100);

    if (r % 2){
        return `As a public servant, what ${work[Math.floor(Math.random()*work.length)]} will you make to protect black lives? In addition, what ${noun[Math.floor(Math.random()*noun.length)]} are in place to prevent ${crime[Math.floor(Math.random()*crime.length)]} by officers? ${gen_rhetorical_questions()}\n`;
    } else {
        return `I would like to ${verb[Math.floor(Math.random()*verb.length)]} what ${noun[Math.floor(Math.random()*noun.length)]} our police departments have in place to prevent ${crime[Math.floor(Math.random()*crime.length)]} by officers, and what ${work[Math.floor(Math.random()*work.length)]} you will make to protect black lives. ${gen_rhetorical_questions()}\n`;
    }
}
    
//{NOTE} I want to change the ones that just say "incidents of racism" to stronger statements

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
}

// Randomly generates a relentless stream of hard-hitting rhetorical questions
function gen_rhetorical_questions(){
    let q1 = [
        "Are all officers required to wear body cameras to record their responses to calls on video?",
        "Do departments perform any form of anti-racism training for officers?",
        "How do internal affairs investigate and respond to reports of discrimination, racism, and unjust brutality?",
        "How can the general public be ensured that incidences of racist violence by police are not simply swept under the rug? In particular, how can I be sure that police officers are held accountable for their actions?",
    ];
    let q2 = [
        "Will you develop a plan for defunding law enforcement, and reallocate these funds to critical social services?",
        "Will you protect and expand current investment in community-led health and safety strategies, instead of investing in police?",
        "What have you done to compel local law enforcement agencies to immediately cease enacting violence on community members?",
        "How are you working on eliminating qualified immunity for police officers that has allowed too many incidents of police misconduct to disappear without consequence?",
    ];
    shuffle(q1);
    shuffle(q2);
    return `${q1.join(' ')} ${q2.join(' ')}`
}

function gen_conclusion(name){
    let noun = ["safeguards", "policies", "provisions"]
    let adverb = ['certainly', 'definitely', 'absolutely', 'undoubtedly']
    let verb = ["support", "want", "approve of"]
    let place = ["law enforcement agencies", "police departments", "government institutions", "public institutions"]

    let r = Math.floor(Math.random()*100);

    if (r % 2) {
        return `If these ${noun[Math.floor(Math.random()*noun.length)]} are not in place, then they ${adverb[Math.floor(Math.random()*adverb.length)]} should be. ${gen_action()} I do not ${verb[Math.floor(Math.random()*verb.length)]} my local taxes being used to fund ${place[Math.floor(Math.random()*place.length)]} that perpetuate racism and violence. ${gen_interests()}\n\n\t${gen_gratitude()}\n${gen_closing(name)}`;
    } else {
        return `These ${noun[Math.floor(Math.random()*noun.length)]} must be put into place to protect American rights and lives. As a taxpayer, I do not ${verb[Math.floor(Math.random()*verb.length)]} my taxes being used to fund ${place[Math.floor(Math.random()*place.length)]} that perpetuate institutional racism and violence. ${gen_interests()}\n\n\t${gen_gratitude()}\n${gen_closing(name)}`;
    }
}

function gen_action(){
    let bank = [
        "The status quo is failing us. Reforms to law enforcement agencies, along with the redirection of funds, must be enacted.",
        "The current system isn't working and changes must be made to how law is enforced and funded in this country.",
        "This issue is nothing new. The frequency of these incidents suggest that law enforcement is a force of violence, not public safety, in our country.",
    ];
    return bank[Math.floor(Math.random()*bank.length)]
}

function gen_interests(){
    let noun = [ 'Services', 'Programs']
    let preamble = [
            `${noun[Math.floor(Math.random()*noun.length)]} that I would rather see funded include: `,
            `I would like to redirect funding to`,
    ];
    return `${preamble[Math.floor(Math.random()*preamble.length)]} ${gen_services()} to name only a few.`;
}

function gen_services(){
    let i = [
        "mental health professionals,",
        "crisis de-escalators,",
        "support for victims of domestic abuse and addiction,",
        "public education,",
        "scientific research,",
        "increased social services for formerly incarcerated residents",
        "increased funding for nutrition and food access programs"
    ];
    shuffle(i);
    return i.join(' ');
}

function gen_gratitude(){
    let clauses = [
        "Thank you for your attention to my concerns.",
        "Thanks for taking the time to read my message.",
        "Your attention to my concerns is very appreciated.",
    ];
    let finale = [
            "I hope to hear back from you soon.",
            "I'm hoping to hear back from you soon.",
            "I look forward to hearing back from you.",
    ];
    return `${clauses[Math.floor(Math.random()*clauses.length)]} ${finale[Math.floor(Math.random()*finale.length)]}`;
}

function gen_closing(name) {
    let c = [
        "Signed",
        "Sincerely",
        "From",
        "Regards",
        "Best",
    ];
    return `\n${c[Math.floor(Math.random()*c.length)]},\n${name}`;
}
console.log(gen_body("a","a",'a'))

module.exports = { gen_body, gen_subject }