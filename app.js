let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let extens = [".com", ".net", ".us", ".io", ".etc"];

for (var z = 0; z < extens.length; z++) {
  for (var i = 0; i < adj.length; i++) {
    for (var y = 0; y < pronoun.length; y++) {
      for (var x = 0; x < noun.length; x++) {
        console.log(pronoun[y] + adj[i] + noun[x] + extens[z]);
      }
    }
  }
}
