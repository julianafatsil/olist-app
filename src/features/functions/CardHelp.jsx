import { Passo0, Passo1, Passo2, Passo3, Passo4, Passo5, Passo6, Passo7, Passo8, Engatinhando } from '../../image/Index';

const PassoHelp = [
    {
      Titulo: 'Cadastro rápido de produtos',
      Paragrafo:
        'São mais de 500 mil anúncios que já estão prontos! Você apenas informa o código de barras, preço, estoque e começa a vender em menos de um minuto.',
    },
    {
      Titulo: 'Análise de competitividade',
      Paragrafo:
        'Encontre os menores preços praticados nos marketplaces para seus produtos. Conte com nossa pesquisa de mercado para ganhar da concorrência.',
    },
    {
      Titulo: 'Categorização automática de produtos',
      Paragrafo:
        'Não sabe qual a categoria do seu produto? Nosso sistema de inteligência artificial faz a categorização automática para você.',
    },
    {
      Titulo: 'Perguntas do Mercado Livre',
      Paragrafo:
        'Tire todas as dúvidas de seus compradores sem sair da plataforma. Facilidade para converter pedidos de forma mais rápida.',
    },
    {
      Titulo: 'Geração de etiquetas de postagem',
      Paragrafo:
        'Emita e imprima a etiqueta de envio dos pedidos direto na plataforma, com todos os dados do consumidor.',
    },
    {
      Titulo: 'Geração de etiquetas de postagem',
      Paragrafo:
        'Emita e imprima a etiqueta de envio dos pedidos direto na plataforma, com todos os dados do consumidor.',
    },
    {
      Titulo: 'Exceções Logísticas',
      Paragrafo:
        'De maneira simples, trate rapidamente e da melhor forma a operação de todos os pedidos que possam ter exceções logísticas em sua entrega.',
    },
    {
      Titulo: 'Dashboard operacional',
      Paragrafo:
        'Em uma apenas uma tela tenha a disposição todos os dados e estatísticas sobre produtos, pedidos, estoque e performance.',
    },
    {
      Titulo: 'Integração para Nota Fiscal*',
      Paragrafo:
        'Gere a Nota Fiscal em seu sistema usual e fature de maneira automática seu pedido preparando o envio de maneira rápida. *Confira os sistemas parceiros.',
    },
  ];

const getImage = (codigoInage) => {
    let newImage = Passo0;
    switch(codigoInage) {
    case 0:
      newImage = Passo0;
      break;
      case 1:
        newImage = Passo1;
        break;
      case 2:
        newImage = Passo2;
        break;
      case 3:
        newImage = Passo3;
        break;
      case 4:
        newImage = Passo4;
        break;
      case 5:
        newImage = Passo5;
        break;
      case 6:
        newImage = Passo6;
        break;
      case 7:
        newImage = Passo7;
        break;
      case 8:
        newImage = Passo8;
        break;
      default:
        newImage = Engatinhando;
        break;
    }
    return newImage
  }

  export { getImage, PassoHelp};