const quotes = [
  "Il y a deux façons d'écrire des programmes sans erreurs; seulement la troisième fonctionne.",
  "Pour comprendre ce qu'est la récursivité, il faut d'abord comprendre ce qu'est la récursivité.",
  'Si à première vue tu ne réussis pas, alors débogage, débogage et débogage !',
  "Le meilleur moyen de prédire l'avenir du web, c'est de le coder.",
  "Le meilleur moyen de se débarrasser d'un bug, c'est de le transformer en fonctionnalité.",
  "Je ne déteste pas le CSS, je l'apprécie à sa juste valeur.",
  'Un bon programmeur est celui qui regarde des deux côtés avant de traverser une rue à sens unique.',
  "La théorie, c'est quand on sait tout et que rien ne fonctionne. La pratique, c'est quand tout fonctionne et que personne ne sait pourquoi. Ici, nous avons réuni théorie et pratique : Rien ne fonctionne... et personne ne sait pourquoi !",
  'Le langage de programmation que vous appréciez le plus est généralement celui dans lequel vous étiez le plus compétent.',
];
const btn = document.querySelector('.btn');

const text = document.querySelector('.text');
const faSolid = document.querySelector('.fa-solid');

btn.addEventListener('click', function () {
  let color = ['red', 'blue', 'green', 'yellow'];
  let valeurCouleur = color[getRandomInt(color.length)];
  let valeurCitation = quotes[getRandomInt(quotes.length)];
  btn.style.background = valeurCouleur;
  faSolid.style.color = valeurCouleur;
  document.body.style.background = valeurCouleur;
  text.textContent = valeurCitation;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
