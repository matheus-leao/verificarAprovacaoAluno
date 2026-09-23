import assert from 'node:assert'
import {verificarAprovacaoAluno} from '../source/verificarAprovacaoAluno.js'

describe('Título da Suite de teste', function (){
    it('CT01: Verificar se um aluno com media 9 e frequencia 90 é aprovado', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Aprovado'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(9, 90)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT02: Verificar se um aluno com media 3.99 e frequencia 75 é reprovado', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Reprovado'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(3.99, 75)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT03: Verificar se um aluno com media 4 e frequencia 75 é recuperação', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Recuperação'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(4, 75)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT04: media 7 e freq 75 deve ser aprovado ', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Aprovado'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(7, 75)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT05: media 7 e freq 74 deve ser reprovado ', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Reprovado'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(7, 74)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
    it('CT06: media 6 e freq 74 deve ser reprovado ', function(){
        // AAA
        // Arrange -> Organizar / Preparar
        const resultadoEsperado = 'Reprovado'

        // Act -> Agir
        let resultadoEncontrado = verificarAprovacaoAluno(6, 74)
        
        // Assert -> Verificar / Validar / Checar
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
})