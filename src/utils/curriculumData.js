const curriculumData = {
    'Matemática Discreta' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#b0e0e6'
    },
    'Cálculo I' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#b0e0e6'
    },
    'Geometria Analítica' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#b0e0e6'
    },
    'Algoritmos e Estrutura de Dados I' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#fff2a7'
    },
    'Lab de Algoritmos e Estrutura de Dados I' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#fff2a7'
    },
    'Introdução a Ciência da Computação' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#fff2a7'
    },
    'Português Instrumental' : {
        completed : false,
        semester: 1,
        dependencies : [],
        color: '#ffb394'
    },
    'Fundamentos da Mecânica Clássica' : {
        completed : false,
        semester: 2,
        dependencies : ['Cálculo I'],
        color: '#d7bfd7'
    },
    'Cálculo II' : {
        completed : false,
        semester: 2,
        dependencies : ['Cálculo I', 'Geometria Analítica'],
        color: '#b0e0e6'
    },
    'Estatística e Probabilidade Aplicadas a Computação' : {
        completed : false,
        semester: 2,
        dependencies : ['Cálculo I'],
        color: '#b0e0e6'
    },
    'Algoritmos e Estrutura de Dados II' : {
        completed : false,
        semester: 2,
        dependencies : ['Algoritmos e Estrutura de Dados I'],
        color: '#fff2a7'
    },
    'Introdução a Sistemas Lógicos Digitais' : {
        completed : false,
        semester: 2,
        dependencies : ['Introdução a Ciência da Computação'],
        color: '#fff2a7'
    },
    'Lab de Introdução a Sistemas Lógicos Digitais' : {
        completed : false,
        semester: 2,
        dependencies : ['Introdução a Ciência da Computação'],
        color: '#fff2a7'
    },
    'Fundamentos de Eletricidade e Magnetismo' : {
        completed : false,
        semester: 3,
        dependencies : ['Fundamentos da Mecânica Clássica'],
        color: '#d7bfd7'
    },
    'Equações Diferenciais' : {
        completed : false,
        semester: 3,
        dependencies : ['Cálculo II'],
        color: '#b0e0e6'
    },
    'Algebra Linear' : {
        completed : false,
        semester: 3,
        dependencies : [],
        color: '#b0e0e6'
    },
    'Algoritmos e Estrutura de Dados III' : {
        completed : false,
        semester: 3,
        dependencies : ['Algoritmos e Estrutura de Dados II'],
        color: '#fff2a7'
    },
    'Arquitetura e Organização de Computadores I' : {
        completed : false,
        semester: 3,
        dependencies : ['Introdução a Sistemas Lógicos Digitais'],
        color: '#fff2a7'
    },
    'Lógica Aplicada a Computação' : {
        completed : false,
        semester: 4,
        dependencies : ['Matemática Discreta'],
        color: '#b0e0e6'
    },
    'Cálculo Numérico Computacional' : {
        completed : false,
        semester: 4,
        dependencies : ['Algebra Linear', 'Cálculo I', 'Algoritmos e Estrutura de Dados II'],
        color: '#ccff99'
    },
    'Grafos' : {
        completed : false,
        semester: 4,
        dependencies : ['Algoritmos e Estrutura de Dados III'],
        color: '#fff2a7'
    },
    'Programação Orientada a Objetos' : {
        completed : false,
        semester: 4,
        dependencies : ['Algoritmos e Estrutura de Dados II'],
        color: '#fff2a7'
    },
    'Arquitetura e Organização de Computadores II' : {
        completed : false,
        semester: 4,
        dependencies : ['Arquitetura e Organização de Computadores I'],
        color: '#fff2a7'
    },
    'Teoria de Linguagens' : {
        completed : false,
        semester: 5,
        dependencies : ['Matemática Discreta', 'Algoritmos e Estrutura de Dados II'],
        color: '#fff2a7'
    },
    'Inteligência Artificial' : {
        completed : false,
        semester: 5,
        dependencies : ['Lógica Aplicada a Computação', 'Algoritmos e Estrutura de Dados III'],
        color: '#ccff99'
    },
    'Pesquisa Operacional para Computação' : {
        completed : false,
        semester: 5,
        dependencies : ['Algebra Linear', 'Algoritmos e Estrutura de Dados II'],
        color: '#ccff99'
    },
    'Introdução à Engenharia de Software' : {
        completed : false,
        semester: 5,
        dependencies : ['Programação Orientada a Objetos'],
        color: '#ccff99'
    },
    'Sistemas Operacionais' : {
        completed : false,
        semester: 5,
        dependencies : ['Arquitetura e Organização de Computadores II', 'Algoritmos e Estrutura de Dados II'],
        color: '#fff2a7'
    },
    'Compiladores' : {
        completed : false,
        semester: 6,
        dependencies : ['Teoria de Linguagens'],
        color: '#ccff99'
    },
    'Banco de Dados' : {
        completed : false,
        semester: 6,
        dependencies : ['Algoritmos e Estrutura de Dados III'],
        color: '#ccff99'
    },
    'Interação Humano-Computador' : {
        completed : false,
        semester: 6,
        dependencies : ['Introdução à Engenharia de Software'],
        color: '#ccff99'
    },
    'Redes de Computadores I' : {
        completed : false,
        semester: 6,
        dependencies : ['Sistemas Operacionais'],
        color: '#ccff99'
    },
    'Lab Redes de Computadores I' : {
        completed : false,
        semester: 6,
        dependencies : ['Sistemas Operacionais'],
        color: '#ccff99'
    },
    'Projeto Orientado em Computadores I' : {
        completed : false,
        semester: 7,
        dependencies : [],
        color: '#fca4da'
    },
    'Computação Gráfica' : {
        completed : false,
        semester: 7,
        dependencies : ['Geometria Analítica', 'Algebra Linear', 'Algoritmos e Estrutura de Dados II'],
        color: '#ccff99'
    },
    'Conceitos de Linguagem de Programação' : {
        completed : false,
        semester: 7,
        dependencies : ['Programação Orientada a Objetos'],
        color: '#fff2a7'
    },
    'Projeto Orientado em Computadores II' : {
        completed : false,
        semester: 8,
        dependencies : ['Projeto Orientado em Computadores I'],
        color: '#fca4da'
    },
    'Computadores e Sociedade' : {
        completed : false,
        semester: 8,
        dependencies : [],
        color: '#fca4da'
    },

}

export default curriculumData;