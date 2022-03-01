import ResumoPessoa from './resumoPessoa';
import SelecionaObjetivos from './selecionaObjetivos';

const Steps = [
    {
      id: 'q1',
      message: 'Vamos lá, qual o seu nome?',
      trigger: 'r1',
    },
    {
      id: 'r1',
      user: true,
      validator: (value) => {
        if (/^[A-Za-z]+$/.test(value)) {
          return true
        } else {
          return 'Por favor, informe apenas caracteres.'
        }
       },
      //trigger: ({value}) => value.toLowerCase() === '1' ? '2' : '2'
      trigger: 'q29',
    },
    {
      id: 'q2',
      message: 'Olá, {previousValue}, qual sua idade?', 
      trigger: 'r2'
    },
    {
      id: 'r2',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'Informe a idade em números';
        }else if (value < 0 && value > 100) {
          return 'A idade deve estar entre 0 e 100'
        }
        return true;
      },
      trigger: 'q3'
    },
    {
      id: 'q3',
      message: 'Além de você, quantas pessoas dependem exclusivamente do seu dinheiro?',
      trigger: 'r3',
    },
    {
      id:'r3',
      options: [
        { value: 1, label: '4 a mais pessoas', trigger: 'q4' },
        { value: 2, label: '3 pessoas', trigger: 'q4' },
        { value: 3, label: '2 pessoas', trigger: 'q4' },
        { value: 4, label: '1 pessoa', trigger: 'q4' },
        { value: 5, label: 'Ninguém', trigger: 'q4' },
      ],
    },
    {
      id: 'q4',
      message: 'Qual a sua faixa de renda mensal?',
      trigger: 'r4',
    },
    {
      id:'r4',
      options: [
        { value: 1, label: 'até 2 mil', trigger: 'q5' },
        { value: 2, label: 'de 2 a 6 mil', trigger: 'q5' },
        { value: 3, label: 'de 6 a 12 mil', trigger: 'q5' },
        { value: 4, label: 'de 12 a 20 mil', trigger: 'q5' },
        { value: 5, label: 'acima de 20 mil', trigger: 'q5' },
      ],
    }, 
    {
      id: 'q5',
      message: 'Como está o seu orçamento mensal com relação as receitas e despesas?',
      trigger: 'r5',
    },
    {
      id:'r5',
      options: [
        { value: 1, label: 'não possuo fonte de renda regular', trigger: 'q6' },
        { value: 2, label: 'gasto o que recebo e ainda mais de 25% desse valor', trigger: 'q6' },
        { value: 3, label: 'gasto o que recebo e ainda até 25% desse valor', trigger: 'q6' },
        { value: 4, label: 'gasto o que recebo, não sobra nada', trigger: 'q6' },
        { value: 5, label: 'economizo até 25% do que recebo', trigger: 'q6' },
        { value: 6, label: 'economizo mais de 25% do que recebo', trigger: 'q6' },
      ],
    },
    {
      id: 'q6',
      message: 'Como classificaria o nível de estabilidade da sua fonte de renda principal?',
      trigger: 'r6',
    },
    {
      id:'r6',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'q29' },
        { value: 2, label: 'baixa', trigger: 'q29' },
        { value: 3, label: 'média', trigger: 'q29' },
        { value: 4, label: 'alta', trigger: 'q29' },
      ],
    },/*
    {
      id: 'q7',
      message: 'Possui fontes de rendas extras?',
      trigger: 'renda_extra',
    },
    {
      id:'renda_extra',
      options: [
        { value: 1, label: 'não possuo fontes de rendas extras', trigger: 'q8' },
        { value: 2, label: 'possuo fontes de rendas extras mas só esporadicamente', trigger: 'q8' },
        { value: 3, label: 'possuo fontes de rendas extras regularmente', trigger: 'q8' },
      ],
    },
    {
      id: 'q8',
      message: 'Qual sua satisfação com a relação Tempo X Trabalho X Remuneração?',
      trigger: 'satisfacao_tempo_trabalho_remuneracao',
    },
    {
      id:'satisfacao_tempo_trabalho_remuneracao',
      options: [
        { value: 1, label: 'estou insatisfeito(a)', trigger: 'q9' },
        { value: 2, label: 'estou normal', trigger: 'q9' },
        { value: 3, label: 'estou satisfeito(a)', trigger: 'q9' },
      ],
    },
    {
      id: 'q9',
      message: 'Você conhece suas receitas?',
      trigger: 'conhece_receitas',
    },
    {
      id:'conhece_receitas',
      options: [
        { value: 1, label: 'não sei exatamente quanto ganho', trigger: 'q10' },
        { value: 2, label: 'sei quanto é a minha receita bruta (antes dos descontos)', trigger: 'q10' },
        { value: 3, label: 'sei quanto é a minha receita líquida (após todos os descontos)', trigger: 'q10' },
      ],
    },
    {
      id: 'q10',
      message: 'Você conhece suas despesas?',
      trigger: 'conhece_despesas',
    },
    {
      id:'conhece_despesas',
      options: [
        { value: 1, label: 'não conheço minhas despesas', trigger: 'q11' },
        { value: 2, label: 'conheço somente as minhas despesas básicas', trigger: 'q11' },
        { value: 3, label: 'conheço todas as minhas despesas', trigger: 'q11' },
      ],
    },
    {
      id: 'q11',
      message: 'Qual o nível de envolvimento da sua família com as questões financeiras?',
      trigger: 'nivel_envolvimento_familia_questoes_financeiras',
    },
    {
      id:'nivel_envolvimento_familia_questoes_financeiras',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q12' },
        { value: 2, label: 'pouco', trigger: 'q12' },
        { value: 3, label: 'suficiente', trigger: 'q12' },
        { value: 4, label: 'total', trigger: 'q12' },
      ],
    },
    {
      id: 'q12',
      message: 'Como classifica o seu padrão de consumo predominante?',
      trigger: 'padrao_consumo_predominante',
    },
    {
      id:'padrao_consumo_predominante',
      options: [
        { value: 1, label: 'compro sem pensar muito, não gosto de esperar', trigger: 'q13' },
        { value: 2, label: 'faço algumas avaliações antes de comprar, consigo esperar um pouco', trigger: 'q13' },
        { value: 3, label: 'planejo e pesquiso pelas melhores condições antes de comprar, ainda que demore um tempo', trigger: 'q13' },
      ],
    },
    {
      id: 'q13',
      message: 'Como costuma pagar pelas suas compras?',
      trigger: 'como_paga_contas',
    },
    {
      id:'como_paga_contas',
      options: [
        { value: 1, label: 'pago a maioria das contas parceladas', trigger: 'q14' },
        { value: 2, label: 'pago as contas de forma equilibrada, uma parte parcelada e outra parte à vista', trigger: 'q14' },
        { value: 3, label: 'pago a maioria das contas à vista', trigger: 'q14' },
      ],
    },
    {
      id: 'q14',
      message: 'Como estão as suas dívidas?',
      trigger: 'como_estao_duas_dividas',
    },
    {
      id:'como_estao_duas_dividas',
      options: [
        { value: 1, label: 'não consigo mais pagar as minhas dívidas', trigger: 'q15' },
        { value: 2, label: 'consigo pagá-las com dificuldades e as vezes fora dos prazos', trigger: 'q15' },
        { value: 3, label: 'consigo pagá-las com dificuldade e sem atrasos', trigger: 'q15' },
        { value: 4, label: 'consigo pagá-las sem atrasos', trigger: 'q15' },
        { value: 5, label: 'não possuo dívidas', trigger: 'q15' },
      ],
    },
    {
      id: 'q15',
      message: 'Se perdesse as fontes de rendas, por quanto tempo conseguiria viver somente com as suas reservas?',
      trigger: 'tempo_vivendo_apenas_de_renda',
    },
    {
      id:'tempo_vivendo_apenas_de_renda',
      options: [
        { value: 1, label: 'menos de 1 mês', trigger: 'q16' },
        { value: 2, label: 'de 1 a 3 meses', trigger: 'q16' },
        { value: 3, label: 'de 3 a 6 meses', trigger: 'q16' },
        { value: 4, label: 'de 6 a 12 meses', trigger: 'q16' },
        { value: 5, label: 'mais de 12 meses', trigger: 'q16' },
      ],
    },
    {
      id: 'q16',
      message: 'Você sabe quanto de dinheiro precisa acumular para a aposentadoria?',
      trigger: 'quanto_precisa_actumular_para_aposentar',
    },
    {
      id:'quanto_precisa_actumular_para_aposentar',
      options: [
        { value: 1, label: 'não sei do quanto vou precisar', trigger: 'q17' },
        { value: 2, label: 'tenho uma ideia do quanto vou precisar', trigger: 'q17' },
        { value: 3, label: 'sei muito bem do quanto vou precisar', trigger: 'q17' },
      ],
    },
    {
      id: 'q17',
      message: 'Faz investimentos para a aposentadoria?',
      trigger: 'investimentos_para_aposentadoria',
    },
    {
      id:'investimentos_para_aposentadoria',
      options: [
        { value: 1, label: 'não invisto para a aposentadoria', trigger: 'q18' },
        { value: 2, label: 'invisto menos do que precisaria para a aposentadoria', trigger: 'q18' },
        { value: 3, label: 'invisto o suficiente para a aposentadoria', trigger: 'q18' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: 'q18' },
      ],
    },
    {
      id: 'q18',
      message: 'Possui objetivos de vida definidos?',
      trigger: 'objetivos_de_vida_definidos',
    },
    {
      id:'objetivos_de_vida_definidos',
      options: [
        { value: 1, label: 'não possuo objetivos definidos', trigger: 'q19' },
        { value: 2, label: 'tenho alguns principais objetivos definidos', trigger: 'q19' },
        { value: 3, label: 'tenho objetivos definidos mas estão só na cabeça', trigger: 'q19' },
        { value: 4, label: 'tenho objetivos definidos e anotados', trigger: 'q19' },
      ],
    },
    {
      id: 'q19',
      message: 'Você tem alguma estimativa do quanto vão custar os seus objetivos de vida?',
      trigger: 'estimativa_custo_objetivos_de_vida',
    },
    {
      id:'estimativa_custo_objetivos_de_vida',
      options: [
        { value: 1, label: 'não sei o quanto vão custar', trigger: 'q20' },
        { value: 2, label: 'sei somente para poucos dos objetivos', trigger: 'q20' },
        { value: 3, label: 'sei para boa parte dos objetivos', trigger: 'q20' },
        { value: 4, label: 'sei para a maioria ou totalidade dos objetivos', trigger: 'q20' },
      ],
    },
    {
      id: 'q20',
      message: 'Está investindo dinheiro para alcançar os seus objetivos de vida?',
      trigger: 'investe_para_alcancar_objetivos_de_vida',
    },
    {
      id:'investe_para_alcancar_objetivos_de_vida',
      options: [
        { value: 1, label: 'não invisto para alcançar os meus objetivos de vida', trigger: 'q21' },
        { value: 2, label: 'invisto menos do que precisaria para alcançar os meus objetivos de vida', trigger: 'q21' },
        { value: 3, label: 'invisto o suficiente para a alcançar os meus objetivos de vida', trigger: 'q21' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: 'q21' },
      ],
    },
    {
      id: 'q21',
      message: 'Com qual frequência realiza investimentos?',
      trigger: 'frequencia_realiza_investimentos',
    },
    {
      id:'frequencia_realiza_investimentos',
      options: [
        { value: 1, label: 'não realizo', trigger: 'q22' },
        { value: 2, label: 'eventualmente quando sobra', trigger: 'q22' },
        { value: 3, label: 'frequentemente', trigger: 'q22' },
        { value: 4, label: 'todos os meses', trigger: 'q22' },
      ],
    },
    {
      id: 'q22',
      message: 'Qual o seu nível de conhecimento sobre investimentos?',
      trigger: 'nivel_conhecimento_investimentos',
    },
    {
      id:'nivel_conhecimento_investimentos',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q23' },
        { value: 2, label: 'pouco', trigger: 'q23' },
        { value: 3, label: 'médio', trigger: 'q23' },
        { value: 4, label: 'muito', trigger: 'q23' },
      ],
    },
    {
      id: 'q23',
      message: 'Possui seguros e proteções contra acidentes e imprevistos (plano de saúde, seguro de vida e invalidez, seguro de incêndio, seguro veicular)?',
      trigger: 'seguros_protecoes_contra_acidentes_imprevistos',
    },
    {
      id:'seguros_protecoes_contra_acidentes_imprevistos',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q24' },
        { value: 2, label: 'pouco', trigger: 'q24' },
        { value: 3, label: 'para a maioria das situações', trigger: 'q24' },
        { value: 4, label: 'para todas as situações', trigger: 'q24' },
      ],
    },
    {
      id: 'q24',
      message: 'Como é a sua educação financeira?',
      trigger: 'nivel_situacao_financeira',
    },
    {
      id:'nivel_situacao_financeira',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'q25' },
        { value: 2, label: 'baixa, conheço somente o básico sobre finanças', trigger: 'q25' },
        { value: 3, label: 'média, sinto que tomo boas decisões no dia a dia', trigger: 'q25' },
        { value: 4, label: 'alta, tomo boas decisões financeiras', trigger: 'q25' },
      ],
    },
    {
      id: 'q25',
      message: 'Como são os seus pensamentos e emoções ligadas ao dinheiro e à riqueza?',
      trigger: 'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
    },
    {
      id:'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
      options: [
        { value: 1, label: 'muito negativos', trigger: 'q26' },
        { value: 2, label: 'pouco negativos', trigger: 'q26' },
        { value: 3, label: 'neutros', trigger: 'q26' },
        { value: 4, label: 'pouco positivos', trigger: 'q26' },
        { value: 5, label: 'muito positivos', trigger: 'q26' },
      ],
    },
    {
      id: 'q26',
      message: 'Como avalia o seu perfil financeiro?',
      trigger: 'avaliacao_perfil_financeiro',
    },
    {
      id:'avaliacao_perfil_financeiro',
      options: [
        { value: 1, label: 'gastador(a) - gasto sem me preocupar', trigger: 'q27' },
        { value: 2, label: 'desligado(a) - não me preocupo com o dinheiro', trigger: 'q27' },
        { value: 3, label: 'poupador(a) - procuro otimizar os gastos e poupar dinheiro', trigger: 'q27' },
        { value: 4, label: 'investidor(a) - invisto o dinheiro poupado', trigger: 'q27' },
      ],
    },
    {
      id: 'q27',
      message: 'Você concorda ou discorda da frase, “Me sinto satisfeito com a minha vida financeira”?',
      trigger: 'se_sente_satisfeito_com_a_vida_financeira',
    },
    {
      id:'se_sente_satisfeito_com_a_vida_financeira',
      options: [
        { value: 1, label: 'discordo totalmente', trigger: 'q28' },
        { value: 2, label: 'discordo', trigger: 'q28' },
        { value: 3, label: 'neutro', trigger: 'q28' },
        { value: 4, label: 'concordo', trigger: 'q28' },
        { value: 5, label: 'concordo totalmente', trigger: 'q28' },
      ],
    },
    {
      id: 'q28',
      message: 'Qual a sua vontade e disposição para mudar a sua vida financeira?',
      trigger: 'vontade_disposicao_mudar_vida_financeira',
    },
    {
      id:'vontade_disposicao_mudar_vida_financeira',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'q29' },
        { value: 2, label: 'pouca', trigger: 'q29' },
        { value: 3, label: 'média', trigger: 'q29' },
        { value: 4, label: 'muita', trigger: 'q29' },
      ],
    }, */
    {
      id: 'q29',
      message: 'Selecione agora seus objetivos financeiros imediatos.',
      trigger: 'r29'
    }, 
    {
      id: 'r29',
      component: <SelecionaObjetivos />,
      waitAction: true,
      asMessage: true,
    }, 
    {
      id: 'q30',
      message: 'Como conheceu o Meu Consultor Financeiro?',
      trigger: 'r30',
    },
    {
      id:'r30',
      options: [
        { value: 1, label: 'Instagram', trigger: 'q31' },
        { value: 2, label: 'Site', trigger: 'q31' },
        { value: 3, label: 'Facebook', trigger: 'q31' },
        { value: 4, label: 'LinkedIn', trigger: 'q31' },
        { value: 5, label: 'Google', trigger: 'q31' },
        { value: 6, label: 'Conhecidos', trigger: 'q31' },
        { value: 7, label: 'Convênios com associações', trigger: 'q31' },
        { value: 8, label: 'Palestras e eventos', trigger: 'q31' },
        { value: 9, label: 'Outro', trigger: 'q31' },
      ],
    },
    {
      id: 'q31',
      message: 'Conte-nos quaisquer informações complementares sobre sua atual realidade financeira, algum objetivo ou detalhamento que julgue importante sobre seu dinheiro.',
      trigger: 'r31',
    },
    {
      id: 'r31',
      user: true,
      trigger: 'resumo',
    },
    {
      id: 'resumo',
      component: <ResumoPessoa />,
      waitAction: true,
      asMessage: true,
    },
    {
      id: 'q32',
      message: 'Você gostaria de receber o contato de um profissional para agendar uma reunião gratuita com uma análise da sua situação financeira?',
      trigger: 'r32',
    },
    {
      id: 'r32',
      options: [
        { value: 'sim', label: 'Sim', trigger: 'agendamento' },
        { value: 'nao', label: 'Não', trigger: 'finaliza' },
      ],
    },
    {
      id: 'agendamento',
      message: 'Agendamento realizado com sucesso, um especialista entrará em contato.',
      trigger: 'finaliza',
    },
    
    {
      id: 'finaliza',
      message: 'Muito Obrigado! Aguarde que enviaremos em breve o resultado do seu Diagnóstico Financeiro.',
      end: true
    }
    /*,
 
    {
      id: 'update',
      message: 'Gostaria de atualizar algo?',
      trigger: 'update-question',
    },
    {
      id: 'update-question',
      options: [
        { value: 'yes', label: 'Sim', trigger: 'update-yes' },
        { value: 'no', label: 'Não', trigger: 'end-message' },
      ],
    },
    {
      id: 'update-yes',
      message: 'Qual campo gostaria de atualizar?',
      trigger: 'update-fields',
    },
    {
      id: 'update-fields',
      options: [
        { value: 'nome', label: 'Nome', trigger: 'update-nome' },
        { value: 'idade', label: 'Idade', trigger: 'update-idade' },
        { value: 'objetivosFinanceirosImediatos', label: 'Objetivos Financeiros', trigger: 'update-objetivos-financeiros' },
      ],
    },
    {
      id: 'update-nome',
      update: 'nome',
      trigger: 'resumo',

    },
    {
      id: 'update-idade',
      update: 'idade',
      trigger: 'resumo',
    },
    {
      id: 'update-objetivos-financeiros',
      update: 'objetivosFinanceirosImediatos',
      trigger: 'resumo',
    },
    {
      id: 'end-message',
      message: 'Muito obrigado! Aguarde que enviaremos em breve o resultado do seu Diagnóstico Financeiro.',
      end: true,
    }, */
]
export default Steps