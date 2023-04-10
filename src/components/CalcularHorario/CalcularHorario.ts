export function CalcularHorario(horarioFinal: string, horarioInicial: string){

    let maior: string = horarioFinal
    let menor: string = horarioInicial
    let arrayMaior: Array<string> = []
    let arrayMenor: Array<string> = []
    let resultMinutos: number = 0
    let resultHoras: number = 0

    arrayMaior = maior.split('h')
    arrayMenor = menor.split('h')

    console.log('arrayMaior: ', arrayMaior)
    console.log('arrayMenor: ', arrayMenor)

    
    resultMinutos = Number(arrayMaior[1]) + Number(arrayMenor[1])
    

    if(resultMinutos > 60){
        resultMinutos = resultMinutos - 60
        resultHoras = Number(arrayMaior[0]) - Number(arrayMenor[0]) + 1
        return `${resultHoras}h${resultMinutos}`
    }

    if(resultMinutos < 60){
        resultHoras = Number(arrayMaior[0]) - Number(arrayMenor[0])
        return `${resultHoras}h${resultMinutos}`

    }

    if(resultMinutos === 60){
        resultHoras = Number(arrayMaior[0]) - Number(arrayMenor[0]) + 1
        resultMinutos = 0
        return `${resultHoras}h${resultMinutos}`
    }
}