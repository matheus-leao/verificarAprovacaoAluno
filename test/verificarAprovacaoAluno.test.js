import assert from 'node:assert'
import {verificarAprovacaoAluno} from '../source/verificarAprovacaoAluno.js'

describe('Título da Suite de teste', function (){
    it('Caso de Teste', function(){
        // Arrange
        const resultadoEsperado = 'Aprovado'

        // Act
        let resultadoEncontrado = verificarAprovacaoAluno(9, 90)
        
        // Assert
        assert.equal(resultadoEncontrado, resultadoEsperado)
    })
})