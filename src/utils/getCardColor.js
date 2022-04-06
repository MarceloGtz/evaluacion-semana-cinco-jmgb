
const getCardColor = type => {
    switch (type) {
        case 'poison':
            return 'linear-gradient(to top, #8e2de2, #4a00e0)'
        case 'grass':
            return 'linear-gradient(to top, #fdfc47, #24fe41)'
        case 'fire':
            return 'linear-gradient(to bottom, #f12711, #f5af19)'
        case 'fighting':
            return 'linear-gradient(to top, #c94b4b, #4b134f)'
        case 'flying':
            return 'linear-gradient(to bottom, #2980b9, #6dd5fa, #ffffff)'
        case 'fairy':
            return 'linear - gradient(to top, #eecda3, #ef629f)'
        case 'normal':
            return 'linear-gradient(to bottom, #c9d6ff, #e2e2e2)'
        case 'ground':
            return 'linear-gradient(to top, #3e5151, #decba4)'
        case 'rock':
            return 'linear-gradient(to bottom, #6d6027, #d3cbb8)'
        case 'bug':
            return 'linear-gradient(to bottom, #3ca55c, #b5ac49)'
        case 'ghost':
            return 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)'
        case 'steel':
            return 'linear-gradient(to top, #bdc3c7, #2c3e50)'
        case 'electric':
            return 'linear-gradient(to bottom, #ffb347, #ffcc33)'
        case 'psychic':
            return 'linear-gradient(to top, #bc4e9c, #f80759)'  
        case 'ice':
            return 'linear-gradient(to top, #c0c0aa, #1cefff)'  
        case 'dragon':
            return 'linear-gradient(to top, #780206, #061161)'  
        case 'dark':
            return 'linear-gradient(to bottom, #000000, #434343)'
        case 'water':
            return 'linear-gradient(to bottom, #00d2ff, #3a7bd5)'   
        default:
            return 'linear-gradient(to bottom, #1f1c2c, #928dab)'
    }
}

export default getCardColor;