export function verificarAprovacaoAluno(media, frequencia) {
    if (media >= 7 && frequencia >= 75) {
        return 'Aprovado'
    } 
    if (media >= 4 && frequencia >= 75) {
        return 'Recuperação'
    } 
    if (media < 4 || frequencia < 75) {
        return 'Reprovado'
    } 
}