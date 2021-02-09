const sportsTeam = 'Buccaneers'
const hobbyType = 'fishing'
const jobTitle = 'lawyer'
let insultURL = ''
let randNumb = 0

//select a template at random from 0 - 5 (6 templates)

const selectTemplate = () => {
  randNumb = Math.floor(Math.random() * Math.floor(5))
  console.log(`Template #${randNumb} selected!`)
  switch (randNumb) {
    //Sports Team insults
    case 0:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=The+${sportsTeam}+are+as+%3Cadjective%3E+as+%3Carticle+target%3Dadj1%3E+%3Cadjective+min%3D1+max%3D3+id%3Dadj1%3E+%3Camount%3E+of+%3Cadjective+min%3D1+max%3D3%3E+%3Canimal%3E+%3Canimal_part%3E`
      break
    case 1:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=Only+${sportsTeam}+fans+are+%3Cadjective%3E+%3Canimal%3E+%3Canimal_part%3E`
      break
    //Occupation insults
    case 2:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=People+who+are+${jobTitle}s+secretly+eat+%3Canimal%3E+%3Canimal_part%3E`
      break
    case 3:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=So+you%27re+a+${jobTitle}%3F+I+didn%27t+know+you+were+%3Carticle+target%3Dadj1%3E+%3Cadjective+id%3Dadj1%3E+%3Camount%3E+of+%3Canimal%3E+%3Canimal_part%3E`
      break

    //hobby insults
    case 4:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=People+who+like+${hobbyType}+really+like+%3Canimal%3E+%3Canimal_part%3E+because+they%27re+%3Cadjective%3E`
      break
    default:
      insultURL = `https://insult.mattbas.org/api/insult.json?template=You+are+%3Cadjective%3E+if+you+like+${hobbyType}%2C+you+%3Cadjective%3E+%3Canimal%3E`
  }
}

selectTemplate()

module.exports = insultURL