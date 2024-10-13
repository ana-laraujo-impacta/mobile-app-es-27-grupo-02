import imgSusan from '../../image/susan.jpg';
import imgGisele from '../../image/gisele.jpg';
import imgMarcela from '../../image/marcela.png'

export const users = [
    {
        id: 1,
        nome: "Susan",
        bairro: "tucuruvi",
        cidade: "sao paulo",
        avaliacao: 5,
        imagem: imgSusan,
        aceitaGato: true,
        aceitaCao: true
    },
    {
        id: 2,
        nome: "Gisele",
        bairro: "real",
        cidade: "sao paulo",
        avaliacao: 5,
        imagem: imgGisele,
        aceitaGato: false,
        aceitaCao: true
    },
    {
        id: 3,
        nome: "Marcela",
        bairro: "Santana",
        cidade: "São Paulo",
        avaliacao: 4,
        imagem: imgMarcela,
        aceitaGato: true,
        aceitaCao: false
    }
];