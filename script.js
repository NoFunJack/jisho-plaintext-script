$( '.concept_light-representation' ).click(function() {
    console.log(this)
    let dom = $(this)
    let furi = spanToStrArray(dom.find('.furigana > span'))
    console.log("furi:" + JSON.stringify(furi))
    let word = dom.find('.text').text().trim()
    console.log("word:" + word)
    let text = formatWord(word,furi) 
    console.log(text)
    navigator.clipboard.writeText(text).then(function() {
      dom.fadeOut()
      dom.fadeIn()
      console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
    });
  });
  
  function spanToStrArray(elem){
    let re = []
    elem.each(function() {
      re.push($(this).text())
    })
    return re
  }
  
  function formatWord(word, furi){
   let re = ''
   for (var i = 0; i < word.length; i++) {
     let c = word[i]
     re += c
     if(furi[i]){
       re += `[${furi[i]}]`
     }
   }
    return re
  }