function titleCase(sentance) {

    let titledSentance = "";
    sentance.split(' ').forEach(word => {
        titledSentance += word[0].toUpperCase() + word.substr(1) + " ";
    });
    
    return titledSentance.trim();
}

module.exports = titleCase;
