function FindGeneration(code,gender)
{
    if((gender == 'm' || gender == 'M') && code<0)
    {
        relation = " father"
    }
    else if((gender == 'f' || gender == 'f') && code<0)
    {
        relation = " mother"
    }
    else if((gender == 'm' || gender == 'M') && code>0)
    {
        relation = " son"
    }
    else if((gender == 'f' || gender == 'f') && code>0)
    {
        relation = " daughter"
    }

    switch(code)
    {
        case -3:
            console.log("great grand"+relation)
            break
        case -2:
            console.log("grand"+relation)
            break
        case -1:
            console.log(relation)
            break
        case 0:
            console.log("me")
            break
        case 1:
            console.log(relation)
            break
        case 2:
            console.log("grand"+relation)
            break
        case 3:
            console.log("great grand"+relation)
            break
    }
}

var code = 0
var gender = 'f'
var relation
FindGeneration(code,gender)