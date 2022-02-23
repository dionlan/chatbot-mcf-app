import ResumoPessoa from './resumoPessoa';
import SelecionaObjetivos from './selecionaObjetivos';

const Steps = [
    {
      id: 'q1',
      message: 'Vamos lá, qual o seu nome?',
      trigger: 'nome',
    },
    {
      id: 'nome',
      user: true,
      validator: (value) => {
        if (/^[A-Za-z]+$/.test(value)) {
          return true
        } else {
          return 'Por favor, informe apenas caracteres.'
        }
       },
      //trigger: ({value}) => value.toLowerCase() === '1' ? '2' : '2'
      trigger: 'q2',
    },
    {
      id: 'q2',
      message: 'Olá, {previousValue}, qual sua idade?', 
      validator: (value) => {
        if (isNaN(value)) {
          return 'Informe a idade em números';
        }else if (value < 0 && value > 100) {
          return 'A idade deve estar entre 0 e 100'
        }
        return true;
      },
      trigger: 'idade'
    },
    {
      id: 'idade',
      user: true,
      trigger: 'objetivosFinanceirosImediatos'
    },
    {
      id: 'q3',
      message: 'Além de você, quantas pessoas dependem exclusivamente do seu dinheiro?',
      trigger: 'qtd_dependentes',
    },
    {
      id:'qtd_dependentes',
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
      message: 'Além de você, quantas pessoas dependem exclusivamente do seu dinheiro?',
      trigger: 'qtd_dependentes',
    },
    {
      id:'qtd_dependentes',
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
      message: 'Qual a sua faixa de renda mensal?',
      trigger: 'renda_mensal',
    },
    {
      id:'renda_mensal',
      options: [
        { value: 1, label: 'até 2 mil', trigger: 'q6' },
        { value: 2, label: 'de 2 a 6 mil', trigger: 'q6' },
        { value: 3, label: 'de 6 a 12 mil', trigger: 'q6' },
        { value: 4, label: 'de 12 a 20 mil', trigger: 'q6' },
        { value: 5, label: 'acima de 20 mil', trigger: 'q6' },
      ],
    },
    {
      id: 'q6',
      message: 'Como está o seu orçamento mensal com relação as receitas e despesas?',
      trigger: 'orcamento_mensal_receitas_despesas',
    },
    {
      id:'orcamento_mensal_receitas_despesas',
      options: [
        { value: 1, label: 'até 2 mil', trigger: 'q7' },
        { value: 2, label: 'de 2 a 6 mil', trigger: 'q7' },
        { value: 3, label: 'de 6 a 12 mil', trigger: 'q7' },
        { value: 4, label: 'de 12 a 20 mil', trigger: 'q7' },
        { value: 5, label: 'acima de 20 mil', trigger: 'q7' },
      ],
    },
    {
      id: 'q7',
      message: 'Como classificaria o nível de estabilidade da sua fonte de renda principal?',
      trigger: 'estabilidade_renda_principal',
    },
    {
      id:'estabilidade_renda_principal',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'q8' },
        { value: 2, label: 'baixa', trigger: 'q8' },
        { value: 3, label: 'média', trigger: 'q8' },
        { value: 4, label: 'alta', trigger: 'q8' },
      ],
    },
    {
      id: 'q8',
      message: 'Possui fontes de rendas extras?',
      trigger: 'renda_extra',
    },
    {
      id:'renda_extra',
      options: [
        { value: 1, label: 'não possuo fontes de rendas extras', trigger: 'q9' },
        { value: 2, label: 'possuo fontes de rendas extras mas só esporadicamente', trigger: 'q9' },
        { value: 3, label: 'possuo fontes de rendas extras regularmente', trigger: 'q9' },
      ],
    },
    {
      id: 'q9',
      message: 'Qual sua satisfação com a relação Tempo X Trabalho X Remuneração?',
      trigger: 'satisfacao_tempo_trabalho_remuneracao',
    },
    {
      id:'satisfacao_tempo_trabalho_remuneracao',
      options: [
        { value: 1, label: 'estou insatisfeito(a)', trigger: 'q10' },
        { value: 2, label: 'estou normal', trigger: 'q10' },
        { value: 3, label: 'estou satisfeito(a)', trigger: 'q10' },
      ],
    },
    {
      id: 'q10',
      message: 'Você conhece suas receitas?',
      trigger: 'conhece_receitas',
    },
    {
      id:'conhece_receitas',
      options: [
        { value: 1, label: 'não sei exatamente quanto ganho', trigger: 'q11' },
        { value: 2, label: 'sei quanto é a minha receita bruta (antes dos descontos)', trigger: 'q11' },
        { value: 3, label: 'sei quanto é a minha receita líquida (após todos os descontos)', trigger: 'q11' },
      ],
    },
    {
      id: 'q11',
      message: 'Você conhece suas despesas?',
      trigger: 'conhece_despesas',
    },
    {
      id:'conhece_depesas',
      options: [
        { value: 1, label: 'não conheço minhas despesas', trigger: 'q12' },
        { value: 2, label: 'conheço somente as minhas despesas básicas', trigger: 'q12' },
        { value: 3, label: 'conheço todas as minhas despesas', trigger: 'q12' },
      ],
    },
    {
      id: 'q12',
      message: 'Qual o nível de envolvimento da sua família com as questões financeiras?',
      trigger: 'nivel_envolvimento_familia_questoes_financeiras',
    },
    {
      id:'nivel_envolvimento_familia_questoes_financeiras',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q13' },
        { value: 2, label: 'pouco', trigger: 'q13' },
        { value: 3, label: 'suficiente', trigger: 'q13' },
        { value: 4, label: 'total', trigger: 'q13' },
      ],
    },
    {
      id: 'q13',
      message: 'Como classifica o seu padrão de consumo predominante?',
      trigger: 'padrao_consumo_predominante',
    },
    {
      id:'padrao_consumo_predominante',
      options: [
        { value: 1, label: 'compro sem pensar muito, não gosto de esperar', trigger: 'q14' },
        { value: 2, label: 'faço algumas avaliações antes de comprar, consigo esperar um pouco', trigger: 'q14' },
        { value: 3, label: 'planejo e pesquiso pelas melhores condições antes de comprar, ainda que demore um tempo', trigger: 'q14' },
      ],
    },
    {
      id: 'q14',
      message: 'Como costuma pagar pelas suas compras?',
      trigger: 'como_paga_contas',
    },
    {
      id:'como_paga_contas',
      options: [
        { value: 1, label: 'pago a maioria das contas parceladas', trigger: 'q15' },
        { value: 2, label: 'pago as contas de forma equilibrada, uma parte parcelada e outra parte à vista', trigger: 'q15' },
        { value: 3, label: 'pago a maioria das contas à vista', trigger: 'q15' },
      ],
    },
    {
      id: 'q15',
      message: 'Como estão as suas dívidas?',
      trigger: 'como_estao_duas_dividas',
    },
    {
      id:'como_estao_duas_dividas',
      options: [
        { value: 1, label: 'não consigo mais pagar as minhas dívidas', trigger: 'q16' },
        { value: 2, label: 'consigo pagá-las com dificuldades e as vezes fora dos prazos', trigger: 'q16' },
        { value: 3, label: 'consigo pagá-las com dificuldade e sem atrasos', trigger: 'q16' },
        { value: 4, label: 'consigo pagá-las sem atrasos', trigger: 'q16' },
        { value: 5, label: 'não possuo dívidas', trigger: 'q16' },
      ],
    },
    {
      id: 'q16',
      message: 'Se perdesse as fontes de rendas, por quanto tempo conseguiria viver somente com as suas reservas?',
      trigger: 'tempo_vivendo_apenas_de_renda',
    },
    {
      id:'tempo_vivendo_apenas_de_renda',
      options: [
        { value: 1, label: 'menos de 1 mês', trigger: 'q17' },
        { value: 2, label: 'de 1 a 3 meses', trigger: 'q17' },
        { value: 3, label: 'de 3 a 6 meses', trigger: 'q17' },
        { value: 4, label: 'de 6 a 12 meses', trigger: 'q17' },
        { value: 5, label: 'mais de 12 meses', trigger: 'q17' },
      ],
    },
    {
      id: 'q17',
      message: 'Você sabe quanto de dinheiro precisa acumular para a aposentadoria?',
      trigger: 'quanto_precisa_actumular_para_aposentar',
    },
    {
      id:'quanto_precisa_actumular_para_aposentar',
      options: [
        { value: 1, label: 'não sei do quanto vou precisar', trigger: 'q18' },
        { value: 2, label: 'tenho uma ideia do quanto vou precisar', trigger: 'q18' },
        { value: 3, label: 'sei muito bem do quanto vou precisar', trigger: 'q18' },
      ],
    },
    {
      id: 'q18',
      message: 'Faz investimentos para a aposentadoria?',
      trigger: 'investimentos_para_aposentadoria',
    },
    {
      id:'investimentos_para_aposentadoria',
      options: [
        { value: 1, label: 'não invisto para a aposentadoria', trigger: 'q19' },
        { value: 2, label: 'invisto menos do que precisaria para a aposentadoria', trigger: 'q19' },
        { value: 3, label: 'invisto o suficiente para a aposentadoria', trigger: 'q19' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: 'q19' },
      ],
    },
    {
      id: 'q19',
      message: 'Possui objetivos de vida definidos?',
      trigger: 'objetivos_de_vida_definidos',
    },
    {
      id:'objetivos_de_vida_definidos',
      options: [
        { value: 1, label: 'não possuo objetivos definidos', trigger: 'q20' },
        { value: 2, label: 'tenho alguns principais objetivos definidos', trigger: 'q20' },
        { value: 3, label: 'tenho objetivos definidos mas estão só na cabeça', trigger: 'q20' },
        { value: 4, label: 'tenho objetivos definidos e anotados', trigger: 'q20' },
      ],
    },
    {
      id: 'q20',
      message: 'Você tem alguma estimativa do quanto vão custar os seus objetivos de vida?',
      trigger: 'estimativa_custo_objetivos_de_vida',
    },
    {
      id:'estimativa_custo_objetivos_de_vida',
      options: [
        { value: 1, label: 'não sei o quanto vão custar', trigger: 'q21' },
        { value: 2, label: 'sei somente para poucos dos objetivos', trigger: 'q21' },
        { value: 3, label: 'sei para boa parte dos objetivos', trigger: 'q21' },
        { value: 4, label: 'sei para a maioria ou totalidade dos objetivos', trigger: 'q21' },
      ],
    },
    {
      id: 'q21',
      message: 'Está investindo dinheiro para alcançar os seus objetivos de vida?',
      trigger: 'investe_para_alcancar_objetivos_de_vida',
    },
    {
      id:'investe_para_alcancar_objetivos_de_vida',
      options: [
        { value: 1, label: 'não invisto para alcançar os meus objetivos de vida', trigger: 'q22' },
        { value: 2, label: 'invisto menos do que precisaria para alcançar os meus objetivos de vida', trigger: 'q22' },
        { value: 3, label: 'invisto o suficiente para a alcançar os meus objetivos de vida', trigger: 'q22' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: 'q22' },
      ],
    },
    {
      id: 'q22',
      message: 'Com qual frequência realiza investimentos?',
      trigger: 'frequencia_realiza_investimentos',
    },
    {
      id:'frequencia_realiza_investimentos',
      options: [
        { value: 1, label: 'não realizo', trigger: 'q23' },
        { value: 2, label: 'eventualmente quando sobra', trigger: 'q23' },
        { value: 3, label: 'frequentemente', trigger: 'q23' },
        { value: 4, label: 'todos os meses', trigger: 'q23' },
      ],
    },
    {
      id: 'q23',
      message: 'Qual o seu nível de conhecimento sobre investimentos?',
      trigger: 'nivel_conhecimento_investimentos',
    },
    {
      id:'nivel_conhecimento_investimentos',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q24' },
        { value: 2, label: 'pouco', trigger: 'q24' },
        { value: 3, label: 'médio', trigger: 'q24' },
        { value: 4, label: 'muito', trigger: 'q24' },
      ],
    },
    {
      id: 'q24',
      message: 'Possui seguros e proteções contra acidentes e imprevistos (plano de saúde, seguro de vida e invalidez, seguro de incêndio, seguro veicular)?',
      trigger: 'nivel_conhecimento_investimentos',
    },
    {
      id:'nivel_conhecimento_investimentos',
      options: [
        { value: 1, label: 'nenhum', trigger: 'q25' },
        { value: 2, label: 'pouco', trigger: 'q25' },
        { value: 3, label: 'para a maioria das situações', trigger: 'q25' },
        { value: 4, label: 'para todas as situações', trigger: 'q25' },
      ],
    },
    {
      id: 'q25',
      message: 'Como é a sua educação financeira?',
      trigger: 'nivel_situacao_financeira',
    },
    {
      id:'nivel_situacao_financeira',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'q26' },
        { value: 2, label: 'baixa, conheço somente o básico sobre finanças', trigger: 'q26' },
        { value: 3, label: 'média, sinto que tomo boas decisões no dia a dia', trigger: 'q26' },
        { value: 4, label: 'alta, tomo boas decisões financeiras', trigger: 'q26' },
      ],
    },
    {
      id: 'q26',
      message: 'Como são os seus pensamentos e emoções ligadas ao dinheiro e à riqueza?',
      trigger: 'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
    },
    {
      id:'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
      options: [
        { value: 1, label: 'muito negativos', trigger: 'q27' },
        { value: 2, label: 'pouco negativos', trigger: 'q27' },
        { value: 3, label: 'neutros', trigger: 'q27' },
        { value: 4, label: 'pouco positivos', trigger: 'q27' },
        { value: 5, label: 'muito positivos', trigger: 'q27' },
      ],
    },
    {
      id: 'q27',
      message: 'Como avalia o seu perfil financeiro?',
      trigger: 'avaliacao_perfil_financeiro',
    },
    {
      id:'avaliacao_perfil_financeiro',
      options: [
        { value: 1, label: 'gastador(a) - gasto sem me preocupar', trigger: 'q28' },
        { value: 2, label: 'desligado(a) - não me preocupo com o dinheiro', trigger: 'q28' },
        { value: 3, label: 'poupador(a) - procuro otimizar os gastos e poupar dinheiro', trigger: 'q28' },
        { value: 4, label: 'investidor(a) - invisto o dinheiro poupado', trigger: 'q28' },
      ],
    },
    {
      id: 'q28',
      message: 'Você concorda ou discorda da frase, “Me sinto satisfeito com a minha vida financeira”?',
      trigger: 'avaliacao_perfil_financeiro',
    },
    {
      id:'avaliacao_perfil_financeiro',
      options: [
        { value: 1, label: 'discordo totalmente', trigger: 'q29' },
        { value: 2, label: 'discordo', trigger: 'q29' },
        { value: 3, label: 'neutro', trigger: 'q29' },
        { value: 4, label: 'concordo', trigger: 'q29' },
        { value: 5, label: 'concordo totalmente', trigger: 'q29' },
      ],
    },
    {
      id: 'q29',
      message: 'Qual a sua vontade e disposição para mudar a sua vida financeira?',
      trigger: 'vontade_disposicao_mudar_vida_financeira',
    },
    {
      id:'vontade_disposicao_mudar_vida_financeira',
      options: [
        { value: 1, label: 'discordo totalmente', trigger: 'q30' },
        { value: 2, label: 'discordo', trigger: 'q30' },
        { value: 3, label: 'neutro', trigger: 'q30' },
        { value: 4, label: 'concordo', trigger: 'q30' },
        { value: 5, label: 'concordo totalmente', trigger: 'q30' },
      ],
    },
    {
      id: 'q30',
      component: <SelecionaObjetivos />,
      asMessage: true,
      waitAction: true,
    }, 
    {
      id: 'q31',
      message: 'Como conheceu o Meu Consultor Financeiro?',
      trigger: 'como_conheceu_o_meu_consultor_financeiro',
    },
    {
      id:'como_conheceu_o_meu_consultor_financeiro',
      options: [
        { value: 1, label: 'Instagram', trigger: 'q32' },
        { value: 2, label: 'Site', trigger: 'q32' },
        { value: 3, label: 'Facebook', trigger: 'q32' },
        { value: 4, label: 'LinkedIn', trigger: 'q32' },
        { value: 5, label: 'Google', trigger: 'q32' },
        { value: 5, label: 'Conhecidos', trigger: 'q32' },
        { value: 5, label: 'Convênios com associações', trigger: 'q32' },
        { value: 5, label: 'Palestras e eventos', trigger: 'q32' },
        { value: 5, label: 'Outro', trigger: 'q32' },
      ],
    },
    {
      id: 'q32',
      message: 'Conte-nos quaisquer informações complementares sobre sua atual realidade financeira, algum objetivo ou detalhamento que julgue importante sobre seu dinheiro.',
      trigger: 'observacoes_cliente',
    },
    {
      id: 'observacoes_cliente',
      user: true,
      trigger: 'q33',
    },
    {
      id: 'q33',
      message: 'Você gostaria de receber o contato de um profissional para agendar uma reunião gratuita com uma análise da sua situação financeira?',
      trigger: 'gostaria_receber_contato_agendar_reuniao_gratuita',
    },
    {
      id: 'gostaria_receber_contato_agendar_reuniao_gratuita',
      options: [
        { value: 'sim', label: 'Sim', trigger: 'resumo' },
        { value: 'nao', label: 'Não', trigger: 'resumo' },
      ],
    },
    {
      id: 'resumo',
      message: 'Muito Obrigado! Aguarde que enviaremos em breve o resultado do seu Diagnóstico Financeiro.',
      trigger: 'pessoa',
    },
    {
      id: 'pessoa',
      component: <ResumoPessoa />,
      asMessage: true,
      trigger: 'update',
    },
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
      message: 'Obrigado! Sucesso!',
      end: true,
    },
]
export default Steps