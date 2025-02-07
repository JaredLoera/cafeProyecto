import { Component,OnInit } from '@angular/core';
import { NavComponent } from "../components/nav/nav.component";
import { FooterComponent } from "../components/footer/footer.component";
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-types',
  imports: [NavComponent, FooterComponent,],
  templateUrl: './types.component.html',
  styleUrl: './types.component.css'
})
export class TypesComponent implements OnInit {
  tiposDeCafeUrl: any;
  constructor(private route: ActivatedRoute) {}
  
  tiposDeCafe = [
    {
      url: 'arabico',
      titulo: 'Café Arábico',
      descripcion: `
        El café arábico es conocido por su sabor suave, ligeramente dulce y sus notas aromáticas únicas.
        Cultivado principalmente en altitudes elevadas, este tipo de café es popular por su bajo contenido de cafeína y su complejidad de sabores.
        Es ideal para quienes buscan una experiencia de café refinada y equilibrada.
      `,
      origen: 'Etiopía',
      consumo: 'Ampliamente consumido en Europa, Estados Unidos y Japón.',
      caracteristicas: [
        'Bajo contenido de cafeína.',
        'Sabor más dulce y aromático.',
        'Se cultiva a altitudes superiores a 1,000 metros.'
      ],
      curiosidades: 'El café arábico representa el 60-70% de la producción mundial de café.',
      imagen: 'https://th.bing.com/th/id/OIP.UHYZeI4yQDWyNGzu-jO4dwHaED?rs=1&pid=ImgDetMain'
    },
    {
      url: 'liberica',
      titulo: 'Café Ibérico',
      descripcion: `
        El café ibérico tiene un perfil robusto, una acidez equilibrada y un sabor intenso que lo hace único.
        Originario de Filipinas y otras regiones de Asia, este café destaca por su rareza y su aroma afrutado, con un toque amaderado.
        Perfecto para quienes buscan algo diferente y exótico en su taza.
      `,
      origen: 'Filipinas',
      consumo: 'Mayormente consumido en Malasia, Singapur y Filipinas.',
      caracteristicas: [
        'Granos grandes y de forma irregular.',
        'Aroma afrutado y amaderado.',
        'Muy resistente a plagas.'
      ],
      curiosidades: 'Representa menos del 2% de la producción mundial de café.',
      imagen: 'https://vitat.com.br/wp-content/uploads/2021/04/coffee-beans-g7u2b9c-min-scaled.jpg'
    },
    {
      url: 'robusta',
      titulo: 'Café Robusta',
      descripcion: `
        Con su alto contenido de cafeína y notas fuertes, el café robusta es perfecto para quienes buscan un impulso extra.
        Cultivado a bajas altitudes, este café es conocido por su cuerpo pesado y su sabor terroso con un toque de nuez.
        Ideal para mezclas de espresso y bebidas con leche por su crema natural.
      `,
      origen: 'África subsahariana',
      consumo: 'Popular en Vietnam, Brasil y partes de África.',
      caracteristicas: [
        'Alto contenido de cafeína.',
        'Notas amargas y terrosas.',
        'Cultivado a bajas altitudes.'
      ],
      curiosidades: 'Vietnam es el mayor exportador de café robusta.',
      imagen: 'https://enjoyjava.com/wp-content/uploads/2018/02/Robusta-coffee-beans-roatsted-close-up.jpg'
    },
    {
      url: 'excelsa',
      titulo: 'Café Excelsa',
      descripcion: `
        El café excelsa tiene un perfil exótico y frutal, con un aroma que destaca entre otras variedades.
        Comúnmente cultivado en el sudeste asiático, este café combina sabores ácidos y dulces con un cuerpo ligero.
        Perfecto para quienes disfrutan de un perfil de sabor complejo y único.
      `,
      origen: 'Sudeste asiático',
      consumo: 'Consumido principalmente en Asia y partes de África.',
      caracteristicas: [
        'Perfil de sabor exótico y afrutado.',
        'Combinación de notas ácidas y dulces.',
        'Se cultiva en climas cálidos y húmedos.'
      ],
      curiosidades: 'Es una subvariedad de la especie Liberica.',
      imagen: 'https://cafemalist.com/wp-content/uploads/2020/05/taza-de-cafe-con-granos-de-cafe-768x394.jpg'
    }
  ];
 
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.tiposDeCafeUrl = params['tipo'];
    });
  }
}
