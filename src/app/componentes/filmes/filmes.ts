import { Component } from '@angular/core';

@Component({
  selector: 'app-filmes',
  imports: [],
  templateUrl: './filmes.html',
  styleUrl: './filmes.css'
})
export class Filmes {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }

  filme1 = {
    nome: "Titanic",
    imagem: "/titanic.jpg",
    sinopse: "Filme emocionante de um navio que afunda.",
    favorito: false
  }
  // filme2 = {
  //   nome: "Origem",
  //   imagem: "/origem.jpg",
  //   sinopse: "Filme emocionante de um navio que afunda."
  // }
  // filme3 = {
  //   nome: "Premonicao",
  //   imagem: "/premonicao.jpg",
  //   sinopse: "Filme emocionante de um navio que afunda."
  // }


}
