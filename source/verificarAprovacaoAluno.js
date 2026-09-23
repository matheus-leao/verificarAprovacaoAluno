export function verificarAprovacaoAluno(media, frequencia) {
    let status;

    if (frequencia < 75) {
        status = 'Reprovado'
    } else {
        if (media >= 7) {
            status = 'Aprovado'
        } else if (media >= 4) {
            status = 'Recuperação'
        } else {
            status = 'Reprovado'
        }
    }
    return status
}