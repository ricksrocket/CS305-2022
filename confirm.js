const Confirm = require('prompt-confirm');
const prompt = new Confirm('Do you like chocolate?');
prompt.ask(function(answer) {
    console.log(answer);
  });