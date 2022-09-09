function extract(content) {

    let textElement = document.getElementById('content');
    let pattern = /([\w ]+)/g;
    let textContent = textElement.textContent
    //console.log(typeof textContent)

    let matches = textContent.match(pattern);
    return matches.join('; ')
}
