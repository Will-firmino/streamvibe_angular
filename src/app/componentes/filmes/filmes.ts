import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {
  filme1 = {
    nome: "Titanic",
    imagem: "/titanic.jpg",
    sinopse: "Filme emocionante de um navio que afunda."
  }
  filme2 = {
    nome: "Origem",
    imagem: "/origem.jpg",
    sinopse: "Filme emocionante de um navio que afunda."
  }
  filme3 = {
    nome: "Premonicao",
    imagem: "/premonicao.jpg",
    sinopse: "Filme emocionante de um navio que afunda."
  }


}
