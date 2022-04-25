import ResumoPessoa from './resumoPessoa';
import CadastraPessoa from './cadastraPessoa';
import SelecionaObjetivos from './selecionaObjetivos';
import CadastraRespostasFinanceiras from './cadastraRespostasFinanceiras';
import PreDiagnostico from './preDiagnostico';

const Steps = [
    {
      id: 'name',
      message: 'Vamos lá, qual o seu nome?',
      trigger: 'resposta_nome',
    },
    {
      id: 'resposta_nome',
      user: true,
      validator: (value) => {
        if (/^[A-Za-z][A-Za-z]+([A-Za-z][A-Za-z]+)*/.test(value)){
          return true
        } else {
          return 'Por favor, informe apenas caracteres.'
        }
       },
      //trigger: ({value}) => value.toLowerCase() === '1' ? '2' : '2'
      trigger: 'idade',
    },
    {
      id: 'idade',
      message: 'Olá, {previousValue}, qual sua idade?', 
      trigger: 'resposta_idade'
    },
    {
      id: 'resposta_idade',
      user: true,
      validator: (value) => {
        if (isNaN(value)) {
          return 'Informe a idade em números';
        }else if (value < 0 && value > 100) {
          return 'A idade deve estar entre 0 e 100'
        }
        return true;
      },
      trigger: 'email'
    }, 
    {
      id:'email', 
      message:'Qual seu melhor e-mail?', 
      trigger:'resposta_email',
    },
    {
      id: 'resposta_email', 
      user: true, 
      validator: (value) => {
        if (/.+@.+\.[A-Za-z]+$/.test(value)){
          return true;
        } else {
          return'Por favor, informe um email.';
        }
      },
      trigger: 'telefone',
    },
    {
      id: 'telefone',
      message: 'Informe seu telefone no formato: (99) 99999-9999', 
      trigger: 'resposta_telefone'
    },
    {
      id: 'resposta_telefone',
      user: true,
      validator: (value) => {
        if (/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/.test(value)){
          return true
        } else {
          return 'Por favor, informe seu número de telefone no formato correto.'
        }
       },
      trigger: 'cadastraPessoa'
    }, 
    {
      id: 'cadastraPessoa',
      component: <CadastraPessoa/>,
      asMessage: true,
      //waitAction: true,
      //trigger: '1',
    },
    {
      id: '1',
      message: 'Além de você, quantas pessoas dependem exclusivamente do seu dinheiro?',
      trigger: 'r1',
    },
    {
      id:'r1',
      options: [
        { value: 1, label: '4 a mais pessoas', trigger: '2' },
        { value: 2, label: '3 pessoas', trigger: '2' },
        { value: 3, label: '2 pessoas', trigger: '2' },
        { value: 4, label: '1 pessoa', trigger: '2' },
        { value: 5, label: 'Ninguém', trigger: '2' },
      ],
    },
    {
      id: '2',
      message: 'Qual a sua faixa de renda mensal?',
      trigger: 'r2',
    },
    {
      id:'r2',
      options: [
        { value: 1, label: 'até 2 mil', trigger: '3' },
        { value: 2, label: 'de 2 a 6 mil', trigger: '3' },
        { value: 3, label: 'de 6 a 12 mil', trigger: '3' },
        { value: 4, label: 'de 12 a 20 mil', trigger: '3' },
        { value: 5, label: 'acima de 20 mil', trigger: '3' },
      ],
    }, 
    {
      id: '3',
      message: 'Como está o seu orçamento mensal com relação as receitas e despesas?',
      trigger: 'r3',
    },
    {
      id:'r3',
      options: [
        { value: 1, label: 'não possuo fonte de renda regular', trigger: '4' },
        { value: 2, label: 'gasto o que recebo e ainda mais de 25% desse valor', trigger: '4' },
        { value: 3, label: 'gasto o que recebo e ainda até 25% desse valor', trigger: '4' },
        { value: 4, label: 'gasto o que recebo, não sobra nada', trigger: '4' },
        { value: 5, label: 'economizo até 25% do que recebo', trigger: '4' },
        { value: 6, label: 'economizo mais de 25% do que recebo', trigger: '4' },
      ],
    },
    {
      id: '4',
      message: 'Como classificaria o nível de estabilidade da sua fonte de renda principal?',
      trigger: 'r4',
    },
    {
      id:'r4',
      options: [
        { value: 1, label: 'nenhuma', trigger: '5' },
        { value: 2, label: 'baixa', trigger: '5' },
        { value: 3, label: 'média', trigger: '5' },
        { value: 4, label: 'alta', trigger: '5' },
      ],
    }, 
    {
      id: '5',
      message: 'Possui fontes de rendas extras?',
      trigger: 'preDiagnostico',
    },
    {
      id:'renda_extra',
      options: [
        { value: 1, label: 'não possuo fontes de rendas extras', trigger: '6' },
        { value: 2, label: 'possuo fontes de rendas extras mas só esporadicamente', trigger: '6' },
        { value: 3, label: 'possuo fontes de rendas extras regularmente', trigger: '6' },
      ],
    },
    {
      id: '6',
      message: 'Qual sua satisfação com a relação Tempo X Trabalho X Remuneração?',
      trigger: 'satisfacao_tempo_trabalho_remuneracao',
    },
    {
      id:'satisfacao_tempo_trabalho_remuneracao',
      options: [
        { value: 1, label: 'estou insatisfeito(a)', trigger: '7' },
        { value: 2, label: 'estou normal', trigger: '7' },
        { value: 3, label: 'estou satisfeito(a)', trigger: '7' },
      ],
    },
    {
      id: '7',
      message: 'Você conhece suas receitas?',
      trigger: 'conhece_receitas',
    },
    {
      id:'conhece_receitas',
      options: [
        { value: 1, label: 'não sei exatamente quanto ganho', trigger: '8' },
        { value: 2, label: 'sei quanto é a minha receita bruta (antes dos descontos)', trigger: '8' },
        { value: 3, label: 'sei quanto é a minha receita líquida (após todos os descontos)', trigger: '8' },
      ],
    },
    {
      id: '8',
      message: 'Você conhece suas despesas?',
      trigger: 'conhece_despesas',
    },
    {
      id:'conhece_despesas',
      options: [
        { value: 1, label: 'não conheço minhas despesas', trigger: '9' },
        { value: 2, label: 'conheço somente as minhas despesas básicas', trigger: '9' },
        { value: 3, label: 'conheço todas as minhas despesas', trigger: '9' },
      ],
    },
    {
      id: '9',
      message: 'Qual o nível de envolvimento da sua família com as questões financeiras?',
      trigger: 'nivel_envolvimento_familia_questoes_financeiras',
    },
    {
      id:'nivel_envolvimento_familia_questoes_financeiras',
      options: [
        { value: 1, label: 'nenhum', trigger: '10' },
        { value: 2, label: 'pouco', trigger: '10' },
        { value: 3, label: 'suficiente', trigger: '10' },
        { value: 4, label: 'total', trigger: '10' },
      ],
    },
    {
      id: '10',
      message: 'Como classifica o seu padrão de consumo predominante?',
      trigger: 'padrao_consumo_predominante',
    },
    {
      id:'padrao_consumo_predominante',
      options: [
        { value: 1, label: 'compro sem pensar muito, não gosto de esperar', trigger: '11' },
        { value: 2, label: 'faço algumas avaliações antes de comprar, consigo esperar um pouco', trigger: '11' },
        { value: 3, label: 'planejo e pesquiso pelas melhores condições antes de comprar, ainda que demore um tempo', trigger: '11' },
      ],
    },
    {
      id: '11',
      message: 'Como costuma pagar pelas suas compras?',
      trigger: 'como_paga_contas',
    },
    {
      id:'como_paga_contas',
      options: [
        { value: 1, label: 'pago a maioria das contas parceladas', trigger: '12' },
        { value: 2, label: 'pago as contas de forma equilibrada, uma parte parcelada e outra parte à vista', trigger: '12' },
        { value: 3, label: 'pago a maioria das contas à vista', trigger: '12' },
      ],
    },
    {
      id: '12',
      message: 'Como estão as suas dívidas?',
      trigger: 'como_estao_duas_dividas',
    },
    {
      id:'como_estao_duas_dividas',
      options: [
        { value: 1, label: 'não consigo mais pagar as minhas dívidas', trigger: '13' },
        { value: 2, label: 'consigo pagá-las com dificuldades e as vezes fora dos prazos', trigger: '13' },
        { value: 3, label: 'consigo pagá-las com dificuldade e sem atrasos', trigger: '13' },
        { value: 4, label: 'consigo pagá-las sem atrasos', trigger: '13' },
        { value: 5, label: 'não possuo dívidas', trigger: '13' },
      ],
    },
    {
      id: '13',
      message: 'Se perdesse as fontes de rendas, por quanto tempo conseguiria viver somente com as suas reservas?',
      trigger: 'tempo_vivendo_apenas_de_renda',
    },
    {
      id:'tempo_vivendo_apenas_de_renda',
      options: [
        { value: 1, label: 'menos de 1 mês', trigger: '14' },
        { value: 2, label: 'de 1 a 3 meses', trigger: '14' },
        { value: 3, label: 'de 3 a 6 meses', trigger: '14' },
        { value: 4, label: 'de 6 a 12 meses', trigger: '14' },
        { value: 5, label: 'mais de 12 meses', trigger: '14' },
      ],
    },
    {
      id: '14',
      message: 'Você sabe quanto de dinheiro precisa acumular para a aposentadoria?',
      trigger: 'quanto_precisa_actumular_para_aposentar',
    },
    {
      id:'quanto_precisa_actumular_para_aposentar',
      options: [
        { value: 1, label: 'não sei do quanto vou precisar', trigger: '15' },
        { value: 2, label: 'tenho uma ideia do quanto vou precisar', trigger: '15' },
        { value: 3, label: 'sei muito bem do quanto vou precisar', trigger: '15' },
      ],
    },
    {
      id: '15',
      message: 'Faz investimentos para a aposentadoria?',
      trigger: 'investimentos_para_aposentadoria',
    },
    {
      id:'investimentos_para_aposentadoria',
      options: [
        { value: 1, label: 'não invisto para a aposentadoria', trigger: '16' },
        { value: 2, label: 'invisto menos do que precisaria para a aposentadoria', trigger: '16' },
        { value: 3, label: 'invisto o suficiente para a aposentadoria', trigger: '16' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: '16' },
      ],
    },
    {
      id: '16',
      message: 'Possui objetivos de vida definidos?',
      trigger: 'objetivos_de_vida_definidos',
    },
    {
      id:'objetivos_de_vida_definidos',
      options: [
        { value: 1, label: 'não possuo objetivos definidos', trigger: '17' },
        { value: 2, label: 'tenho alguns principais objetivos definidos', trigger: '17' },
        { value: 3, label: 'tenho objetivos definidos mas estão só na cabeça', trigger: '17' },
        { value: 4, label: 'tenho objetivos definidos e anotados', trigger: '17' },
      ],
    },
    {
      id: '17',
      message: 'Você tem alguma estimativa do quanto vão custar os seus objetivos de vida?',
      trigger: 'estimativa_custo_objetivos_de_vida',
    },
    {
      id:'estimativa_custo_objetivos_de_vida',
      options: [
        { value: 1, label: 'não sei o quanto vão custar', trigger: '18' },
        { value: 2, label: 'sei somente para poucos dos objetivos', trigger: '18' },
        { value: 3, label: 'sei para boa parte dos objetivos', trigger: '18' },
        { value: 4, label: 'sei para a maioria ou totalidade dos objetivos', trigger: '18' },
      ],
    },
    {
      id: '18',
      message: 'Está investindo dinheiro para alcançar os seus objetivos de vida?',
      trigger: 'investe_para_alcancar_objetivos_de_vida',
    },
    {
      id:'investe_para_alcancar_objetivos_de_vida',
      options: [
        { value: 1, label: 'não invisto para alcançar os meus objetivos de vida', trigger: '19' },
        { value: 2, label: 'invisto menos do que precisaria para alcançar os meus objetivos de vida', trigger: '19' },
        { value: 3, label: 'invisto o suficiente para a alcançar os meus objetivos de vida', trigger: '19' },
        { value: 4, label: 'invisto mais do que o suficiente', trigger: '19' },
      ],
    },
    {
      id: '19',
      message: 'Com qual frequência realiza investimentos?',
      trigger: 'frequencia_realiza_investimentos',
    },
    {
      id:'frequencia_realiza_investimentos',
      options: [
        { value: 1, label: 'não realizo', trigger: '20' },
        { value: 2, label: 'eventualmente quando sobra', trigger: '20' },
        { value: 3, label: 'frequentemente', trigger: '20' },
        { value: 4, label: 'todos os meses', trigger: '20' },
      ],
    },
    {
      id: '20',
      message: 'Qual o seu nível de conhecimento sobre investimentos?',
      trigger: 'nivel_conhecimento_investimentos',
    },
    {
      id:'nivel_conhecimento_investimentos',
      options: [
        { value: 1, label: 'nenhum', trigger: '21' },
        { value: 2, label: 'pouco', trigger: '21' },
        { value: 3, label: 'médio', trigger: '21' },
        { value: 4, label: 'muito', trigger: '21' },
      ],
    },
    {
      id: '21',
      message: 'Possui seguros e proteções contra acidentes e imprevistos (plano de saúde, seguro de vida e invalidez, seguro de incêndio, seguro veicular)?',
      trigger: 'seguros_protecoes_contra_acidentes_imprevistos',
    },
    {
      id:'seguros_protecoes_contra_acidentes_imprevistos',
      options: [
        { value: 1, label: 'nenhum', trigger: '22' },
        { value: 2, label: 'pouco', trigger: '22' },
        { value: 3, label: 'para a maioria das situações', trigger: '22' },
        { value: 4, label: 'para todas as situações', trigger: '22' },
      ],
    },
    {
      id: '22',
      message: 'Como é a sua educação financeira?',
      trigger: 'nivel_situacao_financeira',
    },
    {
      id:'nivel_situacao_financeira',
      options: [
        { value: 1, label: 'nenhuma', trigger: '23' },
        { value: 2, label: 'baixa, conheço somente o básico sobre finanças', trigger: '23' },
        { value: 3, label: 'média, sinto que tomo boas decisões no dia a dia', trigger: '23' },
        { value: 4, label: 'alta, tomo boas decisões financeiras', trigger: '23' },
      ],
    },
    {
      id: '23',
      message: 'Como são os seus pensamentos e emoções ligadas ao dinheiro e à riqueza?',
      trigger: 'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
    },
    {
      id:'pensamentos_emocoes_ligados_ao_dinheiro_e_riqueza',
      options: [
        { value: 1, label: 'muito negativos', trigger: '24' },
        { value: 2, label: 'pouco negativos', trigger: '24' },
        { value: 3, label: 'neutros', trigger: '24' },
        { value: 4, label: 'pouco positivos', trigger: '24' },
        { value: 5, label: 'muito positivos', trigger: '24' },
      ],
    },
    {
      id: '24',
      message: 'Como avalia o seu perfil financeiro?',
      trigger: 'avaliacao_perfil_financeiro',
    },
    {
      id:'avaliacao_perfil_financeiro',
      options: [
        { value: 1, label: 'gastador(a) - gasto sem me preocupar', trigger: '25' },
        { value: 2, label: 'desligado(a) - não me preocupo com o dinheiro', trigger: '25' },
        { value: 3, label: 'poupador(a) - procuro otimizar os gastos e poupar dinheiro', trigger: '25' },
        { value: 4, label: 'investidor(a) - invisto o dinheiro poupado', trigger: '25' },
      ],
    },
    {
      id: '25',
      message: 'Você concorda ou discorda da frase, “Me sinto satisfeito com a minha vida financeira”?',
      trigger: 'se_sente_satisfeito_com_a_vida_financeira',
    },
    {
      id:'se_sente_satisfeito_com_a_vida_financeira',
      options: [
        { value: 1, label: 'discordo totalmente', trigger: '26' },
        { value: 2, label: 'discordo', trigger: '26' },
        { value: 3, label: 'neutro', trigger: '26' },
        { value: 4, label: 'concordo', trigger: '26' },
        { value: 5, label: 'concordo totalmente', trigger: '26' },
      ],
    },
    {
      id: '26',
      message: 'Qual a sua vontade e disposição para mudar a sua vida financeira?',
      trigger: 'vontade_disposicao_mudar_vida_financeira',
    },
    {
      id:'vontade_disposicao_mudar_vida_financeira',
      options: [
        { value: 1, label: 'nenhuma', trigger: 'cadastraFinanceiro' },
        { value: 2, label: 'pouca', trigger: 'cadastraFinanceiro' },
        { value: 3, label: 'média', trigger: 'cadastraFinanceiro' },
        { value: 4, label: 'muita', trigger: 'cadastraFinanceiro' },
      ],
    }, 
    {
      id: 'cadastraFinanceiro',
      component: <CadastraRespostasFinanceiras />,
      asMessage: true,
      waitAction: true,
      //trigger: '16',
    }, 
    {
      id: '27',
      message: 'Selecione agora seus objetivos financeiros imediatos.',
      trigger: 'selecionaObjetivos'
    }, 
    {
      id: 'selecionaObjetivos',
      component: <SelecionaObjetivos />,
      waitAction: true,
      asMessage: true,
    }, 
    {
      id: '28',
      message: 'Como conheceu o Meu Consultor Financeiro?',
      trigger: 'r28',
    },
    {
      id:'r28',
      options: [
        { value: 1, label: 'Instagram', trigger: '29' },
        { value: 2, label: 'Site', trigger: '29' },
        { value: 3, label: 'Facebook', trigger: '29' },
        { value: 4, label: 'LinkedIn', trigger: '29' },
        { value: 5, label: 'Google', trigger: '29' },
        { value: 6, label: 'Conhecidos', trigger: '29' },
        { value: 7, label: 'Convênios com associações', trigger: '29' },
        { value: 8, label: 'Palestras e eventos', trigger: '29' },
        { value: 9, label: 'Outro', trigger: '29' },
      ],
    },
    {
      id: '29',
      message: 'Conte-nos quaisquer informações complementares sobre sua atual realidade financeira, algum objetivo ou detalhamento que julgue importante sobre seu dinheiro.',
      trigger: 'r29',
    },
    {
      id: 'r29',
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
      id: '30',
      message: 'Você gostaria de receber o contato de um profissional para agendar uma reunião gratuita com uma análise da sua situação financeira?',
      trigger: 'r30',
    },
    {
      id: 'r30',
      options: [
        { value: 'sim', label: 'Sim', trigger: 'agendamento' },
        { value: 'nao', label: 'Não', trigger: 'preDiagnostico' },
      ],
    },
    {
      id: 'agendamento',
      message: 'Agendamento realizado com sucesso, um especialista entrará em contato.',
      trigger: 'preDiagnostico',
    },
    {
      id: 'preDiagnostico',
      component: <PreDiagnostico />,
      waitAction: true,
      asMessage: true
    },
    {
      id: 'finaliza',
      message: 'Muito Obrigado! Uma análise prévia e totalmente gratuita foi encaminhada no seu e-amail.',
      end: true
    }
]
export default Steps